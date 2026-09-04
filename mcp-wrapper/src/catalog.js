const catalog = require('../../mcp-catalog.js');

const SERVER_IDS = catalog.servers.map(server => server.id);

function getServer(serverId) {
  const server = catalog.servers.find(item => item.id === serverId);
  if (!server) {
    throw new Error(`Unknown MCP Server: ${serverId}. Expected one of: ${SERVER_IDS.join(', ')}`);
  }
  return server;
}

function getApisForServer(serverId) {
  getServer(serverId);
  return catalog.apis.filter(api => api.serverId === serverId);
}

function buildInputSchema(api) {
  return {
    type: 'object',
    additionalProperties: false,
    required: ['payload'],
    properties: {
      payload: {
        type: 'object',
        additionalProperties: true,
        description: `原 API #${api.id} 的 JSON 请求体，参数以接口文档为准。`
      },
      dryRun: {
        type: 'boolean',
        description: '仅返回签名请求预览，不调用原 API。'
      }
    }
  };
}

function buildToolDefinition(api) {
  const internalNote = api.internal ? ' 当前市场记录标记为测试/待清理，正式环境请先确认是否开放。' : '';
  return {
    name: api.toolName,
    description: `${api.description || `${api.name} 数据查询`} 原 API：${api.name}（API ID ${api.id}）。返回字段：${api.fields?.length ? api.fields.join('、') : '以接口文档中的返回结构为准'}。${internalNote}`,
    inputSchema: buildInputSchema(api),
    _meta: {
      apiId: api.id,
      apiName: api.name,
      method: String(api.method || 'POST').toUpperCase(),
      endpoint: String(api.url || '').trim(),
      price: api.price,
      internal: Boolean(api.internal)
    }
  };
}

function getToolDefinitions(serverId) {
  return getApisForServer(serverId).map(buildToolDefinition);
}

function getApiByToolName(serverId, toolName) {
  return getApisForServer(serverId).find(api => api.toolName === toolName);
}

module.exports = {
  catalog,
  SERVER_IDS,
  getServer,
  getApisForServer,
  getToolDefinitions,
  getApiByToolName
};
