const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");

const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || 8132);
const apiKey = process.env.DEEPSEEK_API_KEY;
const model = process.env.DEEPSEEK_MODEL || "deepseek-v4-flash";
const root = __dirname;
const recentRequests = new Map();

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
};

function sendJson(response, status, body) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(body));
}

async function readBody(request) {
  const chunks = [];
  let size = 0;

  for await (const chunk of request) {
    size += chunk.length;
    if (size > 80_000) throw new Error("请求内容过大");
    chunks.push(chunk);
  }

  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

function isRateLimited(address) {
  const now = Date.now();
  const previous = recentRequests.get(address) || 0;
  recentRequests.set(address, now);
  return now - previous < 8_000;
}

function buildPrompt(payload) {
  return `
你是一名克制、清晰、善于做自我梳理的塔罗解读助手。请根据用户问题、问题类型、牌阵和抽到的牌，给出中文综合分析。

要求：
1. 明确说明这是塔罗视角下的自我观察，不是确定预测。
2. 结合问题类型、牌位、正位/逆位和牌义，不要只重复牌面文字。
3. 回答结构为：整体氛围、牌面重点、行动建议、需要留意。
4. 对医疗、法律、投资等高风险问题，只给一般性提醒，并建议咨询专业人士。
5. 语气温和、具体，不制造恐惧，不保证未来结果。控制在 700 字以内。

用户问题：
${payload.question}

问题类型：
${payload.topic}

牌阵：
${payload.spread}

抽牌资料：
${JSON.stringify(payload.cards, null, 2)}
`.trim();
}

async function interpret(request, response) {
  if (!apiKey) {
    sendJson(response, 503, { error: "服务端尚未配置 DEEPSEEK_API_KEY。" });
    return;
  }

  if (isRateLimited(request.socket.remoteAddress)) {
    sendJson(response, 429, { error: "请求太频繁，请稍后再试。" });
    return;
  }

  try {
    const payload = await readBody(request);
    if (!payload.question || !payload.spread || !Array.isArray(payload.cards)) {
      throw new Error("缺少塔罗牌阵资料");
    }

    const apiResponse = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: "你负责以克制、温和、清晰的方式解读塔罗牌阵。" },
          { role: "user", content: buildPrompt(payload) },
        ],
        stream: false,
      }),
    });

    const result = await apiResponse.json();
    if (!apiResponse.ok) {
      sendJson(response, apiResponse.status, { error: result.error?.message || "DeepSeek API 请求失败。" });
      return;
    }

    sendJson(response, 200, { content: result.choices?.[0]?.message?.content || "未获得有效分析。" });
  } catch (error) {
    sendJson(response, 400, { error: error.message || "请求处理失败。" });
  }
}

async function serveStatic(request, response) {
  const requestedPath = decodeURIComponent(new URL(request.url, `http://${host}`).pathname);
  const relativePath = requestedPath === "/" ? "index.html" : requestedPath.slice(1);
  const filePath = path.resolve(root, relativePath);

  if (!filePath.startsWith(`${root}${path.sep}`)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const body = await fs.readFile(filePath);
    response.writeHead(200, { "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream" });
    response.end(body);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}

const server = http.createServer(async (request, response) => {
  if (request.method === "POST" && request.url === "/api/interpret") {
    await interpret(request, response);
    return;
  }

  if (request.method === "GET" || request.method === "HEAD") {
    await serveStatic(request, response);
    return;
  }

  response.writeHead(405);
  response.end("Method not allowed");
});

server.listen(port, host, () => {
  console.log(`塔罗服务已启动：http://${host}:${port}/`);
  console.log(apiKey ? `DeepSeek 模型：${model}` : "尚未设置 DEEPSEEK_API_KEY，AI 分析暂不可用。");
});
