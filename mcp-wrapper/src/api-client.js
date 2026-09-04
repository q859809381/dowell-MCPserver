const { createHeaders } = require('./signature.js');

function parseResponseBody(text) {
  if (!text) return null;
  try { return JSON.parse(text); } catch { return text; }
}

class ApiClient {
  constructor({ appId = process.env.API_APP_ID, secret = process.env.API_SECRET, timeoutMs = Number(process.env.API_TIMEOUT_MS || 20000), dryRun = process.env.DRY_RUN === 'true', fetchImpl = globalThis.fetch } = {}) {
    this.appId = appId;
    this.secret = secret;
    this.timeoutMs = timeoutMs;
    this.dryRun = dryRun;
    this.fetchImpl = fetchImpl;
  }

  async call(api, payload, { dryRun = this.dryRun } = {}) {
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
      throw new Error('payload must be a JSON object matching the original API request body.');
    }
    const endpoint = String(api.url || '').trim();
    const method = String(api.method || 'POST').toUpperCase();
    if (!endpoint) throw new Error(`API #${api.id} has no endpoint configured.`);
    if (dryRun) {
      const headers = this.appId && this.secret
        ? createHeaders({ appId: this.appId, secret: this.secret, body: payload })
        : { APPID: 'YOUR_APP_ID', TIMESTAMP: 'generated-at-runtime', SIGN: 'generated-from-secret' };
      return {
        dryRun: true,
        api: { id: api.id, name: api.name, toolName: api.toolName, method, endpoint },
        request: { headers, body: payload },
        note: 'DRY_RUN=true，仅生成请求预览，没有调用原 API。'
      };
    }
    if (!this.appId || !this.secret) {
      throw new Error('Missing API_APP_ID or API_SECRET. Set both environment variables, or use DRY_RUN=true for a request preview.');
    }
    if (typeof this.fetchImpl !== 'function') throw new Error('This Node runtime does not provide fetch. Use Node.js 18 or newer.');

    const headers = { 'content-type': 'application/json', ...createHeaders({ appId: this.appId, secret: this.secret, body: payload }) };
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.timeoutMs);
    try {
      const response = await this.fetchImpl(endpoint, {
        method,
        headers,
        body: method === 'GET' || method === 'HEAD' ? undefined : JSON.stringify(payload),
        signal: controller.signal
      });
      const text = await response.text();
      const data = parseResponseBody(text);
      if (!response.ok) {
        const detail = typeof data === 'string' ? data : JSON.stringify(data);
        throw new Error(`Original API returned HTTP ${response.status}: ${detail.slice(0, 1000)}`);
      }
      return { data, api: { id: api.id, name: api.name, toolName: api.toolName, endpoint } };
    } catch (error) {
      if (error?.name === 'AbortError') throw new Error(`Original API request timed out after ${this.timeoutMs}ms.`);
      throw error;
    } finally {
      clearTimeout(timer);
    }
  }
}

module.exports = { ApiClient, parseResponseBody };
