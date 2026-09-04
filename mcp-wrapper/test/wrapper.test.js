const test = require('node:test');
const assert = require('node:assert/strict');
const catalog = require('../../mcp-catalog.js');
const { getToolDefinitions, getApisForServer } = require('../src/catalog.js');
const { ApiClient } = require('../src/api-client.js');
const { createHeaders, formatTimestamp, stringifySortedValues } = require('../src/signature.js');
const { handleRpcMessage } = require('../src/server.js');

test('the catalog maps all 114 market APIs into four MCP servers', () => {
  assert.equal(catalog.servers.length, 4);
  assert.equal(catalog.apis.length, 114);
  assert.equal(new Set(catalog.apis.map(api => api.id)).size, 114);
  assert.equal(catalog.servers.reduce((total, server) => total + getApisForServer(server.id).length, 0), 114);
  assert.deepEqual(catalog.servers.map(server => getApisForServer(server.id).length), [24, 36, 13, 41]);
});

test('signature uses sorted JSON values and the documented headers', () => {
  assert.equal(stringifySortedValues({ z: 'last', a: 'first' }), 'firstlast');
  assert.equal(formatTimestamp(new Date('2026-08-27T00:00:00.000Z'), 'Asia/Shanghai'), '2026-08-27 08:00:00');
  const headers = createHeaders({ appId: 'app', secret: 'secret', body: { z: 'last', a: 'first' }, now: new Date('2026-08-27T00:00:00.000Z'), timeZone: 'Asia/Shanghai' });
  assert.deepEqual(headers, { APPID: 'app', TIMESTAMP: '2026-08-27 08:00:00', SIGN: 'c9d6155512addabc3feea38ee70df2ca' });
});

test('tools/list exposes real API metadata and dry-run tool calls do not need secrets', async () => {
  const apiClient = new ApiClient({ dryRun: true, appId: '', secret: '' });
  const listResponse = await handleRpcMessage({ jsonrpc: '2.0', id: 1, method: 'tools/list' }, { serverId: 'enterprise-diligence', apiClient });
  assert.equal(listResponse.result.tools.length, 24);
  assert.equal(listResponse.result.tools[0].inputSchema.required[0], 'payload');
  const callResponse = await handleRpcMessage({ jsonrpc: '2.0', id: 2, method: 'tools/call', params: { name: 'company.search', arguments: { payload: { key: '小米' }, dryRun: true } } }, { serverId: 'enterprise-diligence', apiClient });
  assert.equal(callResponse.result.isError, false);
  const result = JSON.parse(callResponse.result.content[0].text);
  assert.equal(result.dryRun, true);
  assert.equal(result.api.id, 1);
});

test('all exposed tool names are unique', () => {
  const tools = catalog.servers.flatMap(server => getToolDefinitions(server.id));
  assert.equal(new Set(tools.map(tool => tool.name)).size, tools.length);
});
