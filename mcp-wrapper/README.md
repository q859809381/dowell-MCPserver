# 笃威尔 API MCP Wrapper

这个 Wrapper 将 API 市场中的 114 个真实接口按业务组织为 4 个 MCP Server。每个 MCP Tool 对应一个原 API，工具调用时把原 API 的 JSON 请求参数放在 `arguments.payload` 中。

| MCP Server | Server ID | Tool 数量 |
| --- | --- | ---: |
| 企业尽调 MCP Server | `enterprise-diligence` | 24 |
| 风险与合规 MCP Server | `risk-compliance` | 36 |
| 股权与关系 MCP Server | `equity-relations` | 13 |
| 知识产权与经营 MCP Server | `ip-operations` | 41 |

## 启动 HTTP MCP 服务

Node.js 18 或更高版本自带 `fetch`，不需要额外依赖：

```powershell
cd mcp-wrapper
Copy-Item .env.example .env
# 编辑 .env，填写 API_APP_ID 和 API_SECRET
npm start
```

一个 HTTP 进程会提供四个逻辑 MCP Server：

```text
http://localhost:8787/mcp/enterprise-diligence
http://localhost:8787/mcp/risk-compliance
http://localhost:8787/mcp/equity-relations
http://localhost:8787/mcp/ip-operations
```

建议设置 `MCP_AUTH_TOKEN` 保护 HTTP 入口。设置后，客户端请求必须携带 `Authorization: Bearer <token>`；留空仅适合本地联调。正式平台还应在这层接入租户身份、额度和计费校验。

客户端先调用 `initialize` 和 `tools/list`，即可发现对应业务 Server 的全部工具。工具调用示例：

```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/call",
  "params": {
    "name": "company.profile",
    "arguments": {
      "payload": {
        "key": "华为技术有限公司"
      }
    }
  }
}
```

## stdio 模式

需要本地 MCP 客户端启动进程时，可以为每个客户端配置一个业务 Server：

```powershell
$env:MCP_SERVER_ID = "enterprise-diligence"
npm run start -- --stdio
```

把 `MCP_SERVER_ID` 换成其他三个 Server ID 即可。stdio 输入输出使用 JSON-RPC JSONL，日志写入 stderr，不会污染协议输出。

## 鉴权与 dry-run

原 API 请求头使用 `APPID`、`TIMESTAMP`、`SIGN`。`SIGN` 按 `APPID + TIMESTAMP + API_SECRET + 按 JSON key 升序拼接 value` 计算 MD5，并转为小写。测试或联调时可设置 `DRY_RUN=true`，工具会返回签名请求预览而不访问原 API；未配置密钥时，正式调用会明确返回错误，不会伪造成功结果。

市场中 5 条测试/待清理接口会继续在目录中保留并标记为测试状态，以确保四个 Server 与市场的 114 条接口完整对应。正式发布前可以在目录审核后移除或增加过滤策略。

## 文件关系

`../mcp-catalog.js` 是前端与 Wrapper 共用的接口目录来源。`src/catalog.js` 负责 MCP Server 与 Tool 映射，`src/signature.js` 负责签名，`src/api-client.js` 负责请求转发，`src/server.js` 负责 MCP JSON-RPC over HTTP/stdio。

```text
Skill 业务流程
  -> MCP Server 业务工具集合
    -> MCP Tool API 包装
      -> 原有 API 接口
```

## 验证

```powershell
npm test
```
