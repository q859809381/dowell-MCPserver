require('./config.js');
const http = require('node:http');
const crypto = require('node:crypto');
const readline = require('node:readline');
const { ApiClient } = require('./api-client.js');
const { SERVER_IDS, getServer, getApiByToolName, getToolDefinitions } = require('./catalog.js');

const PROTOCOL_VERSION = process.env.MCP_PROTOCOL_VERSION || '2025-06-18';

function rpcResult(id, result) {
  return { jsonrpc: '2.0', id, result };
}

function rpcError(id, code, message, data) {
  return { jsonrpc: '2.0', id, error: { code, message, ...(data === undefined ? {} : { data }) } };
}

function textContent(value) {
  return [{ type: 'text', text: typeof value === 'string' ? value : JSON.stringify(value, null, 2) }];
}

function getServerIdFromPath(pathname) {
  const match = pathname.match(/^\/mcp\/([^/]+)\/?$/);
  return match ? decodeURIComponent(match[1]) : null;
}

async function handleRpcMessage(message, { serverId, apiClient, sessionId = '' }) {
  if (!message || message.jsonrpc !== '2.0') return rpcError(message?.id ?? null, -32600, 'Invalid JSON-RPC request.');
  const id = message.id;
  const method = message.method;
  if (id === undefined && method === 'notifications/initialized') return null;
  if (id === undefined && method?.startsWith('notifications/')) return null;
  if (method === 'ping') return rpcResult(id, {});
  if (method === 'initialize') {
    const requestedVersion = message.params?.protocolVersion;
    return rpcResult(id, {
      protocolVersion: requestedVersion || PROTOCOL_VERSION,
      capabilities: { tools: {} },
      serverInfo: { name: `${getServer(serverId).name} · 笃威尔`, version: '0.1.0' },
      instructions: '每个 MCP Tool 对应一个 API 接口。调用时请将原 API JSON 请求参数放入 arguments.payload。'
    });
  }
  if (method === 'tools/list') {
    return rpcResult(id, { tools: getToolDefinitions(serverId) });
  }
  if (method === 'tools/call') {
    const toolName = message.params?.name;
    const api = getApiByToolName(serverId, toolName);
    if (!api) return rpcError(id, -32602, `Unknown tool '${toolName}' for MCP Server '${serverId}'.`);
    const args = message.params?.arguments || {};
    try {
      const result = await apiClient.call(api, args.payload, { dryRun: args.dryRun });
      return rpcResult(id, { content: textContent(result), isError: false });
    } catch (error) {
      return rpcResult(id, { content: textContent({ error: error.message, tool: toolName, apiId: api.id }), isError: true });
    }
  }
  return rpcError(id, -32601, `Method not found: ${method}`);
}

function jsonHeaders(response, sessionId) {
  response.setHeader('content-type', 'application/json; charset=utf-8');
  response.setHeader('access-control-allow-origin', process.env.MCP_ALLOWED_ORIGIN || '*');
  response.setHeader('access-control-allow-headers', 'Content-Type, Accept, Mcp-Session-Id, Authorization');
  response.setHeader('access-control-allow-methods', 'POST, GET, DELETE, OPTIONS');
  if (sessionId) response.setHeader('Mcp-Session-Id', sessionId);
}

function hasValidAuth(request) {
  const expected = process.env.MCP_AUTH_TOKEN;
  if (!expected) return true;
  const presented = String(request.headers.authorization || '').replace(/^Bearer\s+/i, '');
  const expectedBuffer = Buffer.from(expected);
  const presentedBuffer = Buffer.from(presented);
  return expectedBuffer.length === presentedBuffer.length && crypto.timingSafeEqual(expectedBuffer, presentedBuffer);
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = '';
    request.setEncoding('utf8');
    request.on('data', chunk => { body += chunk; if (body.length > 5 * 1024 * 1024) reject(new Error('Request body too large.')); });
    request.on('end', () => resolve(body));
    request.on('error', reject);
  });
}

function createHttpServer({ apiClient = new ApiClient(), port = Number(process.env.MCP_PORT || 8787) } = {}) {
  const server = http.createServer(async (request, response) => {
    const url = new URL(request.url, `http://${request.headers.host || 'localhost'}`);
    const serverId = getServerIdFromPath(url.pathname);
    const sessionId = request.headers['mcp-session-id'] || crypto.randomUUID();
    if (request.method === 'OPTIONS') {
      jsonHeaders(response, sessionId);
      response.statusCode = 204;
      response.end();
      return;
    }
    if (!serverId || !SERVER_IDS.includes(serverId)) {
      jsonHeaders(response, sessionId);
      response.statusCode = 404;
      response.end(JSON.stringify({ error: 'Use /mcp/<server-id>.', servers: SERVER_IDS }));
      return;
    }
    if (!hasValidAuth(request)) {
      jsonHeaders(response, sessionId);
      response.statusCode = 401;
      response.setHeader('www-authenticate', 'Bearer');
      response.end(JSON.stringify({ error: 'MCP authentication required.' }));
      return;
    }
    if (request.method === 'GET') {
      jsonHeaders(response, sessionId);
      response.statusCode = 405;
      response.setHeader('allow', 'POST, DELETE');
      response.end(JSON.stringify({ error: 'MCP requests must use POST.' }));
      return;
    }
    if (request.method === 'DELETE') {
      jsonHeaders(response, sessionId);
      response.statusCode = 200;
      response.end(JSON.stringify({ closed: true }));
      return;
    }
    if (request.method !== 'POST') {
      jsonHeaders(response, sessionId);
      response.statusCode = 405;
      response.end(JSON.stringify({ error: 'Method not allowed.' }));
      return;
    }
    try {
      const rawBody = await readBody(request);
      const parsed = JSON.parse(rawBody || '{}');
      const messages = Array.isArray(parsed) ? parsed : [parsed];
      const results = (await Promise.all(messages.map(message => handleRpcMessage(message, { serverId, apiClient, sessionId })))).filter(Boolean);
      jsonHeaders(response, sessionId);
      response.statusCode = 200;
      response.end(JSON.stringify(Array.isArray(parsed) ? results : (results[0] || {})));
    } catch (error) {
      jsonHeaders(response, sessionId);
      response.statusCode = 400;
      response.end(JSON.stringify(rpcError(null, -32700, error.message)));
    }
  });
  return { server, port };
}

function startHttp({ apiClient = new ApiClient(), port = Number(process.env.MCP_PORT || 8787) } = {}) {
  const { server } = createHttpServer({ apiClient, port });
  const publicUrl = process.env.MCP_PUBLIC_URL || `http://localhost:${port}`;
  server.listen(port, () => process.stderr.write(`MCP HTTP server listening on ${publicUrl}/mcp/<server-id>\n`));
  return server;
}

async function startStdio(serverId = process.env.MCP_SERVER_ID || SERVER_IDS[0], apiClient = new ApiClient()) {
  getServer(serverId);
  const input = readline.createInterface({ input: process.stdin, crlfDelay: Infinity });
  for await (const line of input) {
    if (!line.trim()) continue;
    try {
      const response = await handleRpcMessage(JSON.parse(line), { serverId, apiClient });
      if (response) process.stdout.write(`${JSON.stringify(response)}\n`);
    } catch (error) {
      process.stdout.write(`${JSON.stringify(rpcError(null, -32603, error.message))}\n`);
    }
  }
}

if (require.main === module) {
  if (process.argv.includes('--stdio')) startStdio(process.env.MCP_SERVER_ID || SERVER_IDS[0]).catch(error => { process.stderr.write(`${error.stack || error}\n`); process.exitCode = 1; });
  else startHttp();
}

module.exports = { handleRpcMessage, createHttpServer, startHttp, startStdio, getServerIdFromPath };
