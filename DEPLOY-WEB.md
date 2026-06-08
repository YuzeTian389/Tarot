# 网页公网部署

## 推荐方式：Render

项目包含 DeepSeek AI 智能分析后端，因此不能只上传静态网页。需要部署为 Node Web Service。

## 准备 GitHub 仓库

1. 在 GitHub 新建一个仓库。
2. 将 `塔罗牌` 项目文件提交并推送到仓库。
3. 确认 `.env` 没有被提交，仓库中只保留 `.env.example`。

## 在 Render 部署

1. 打开 [Render Dashboard](https://dashboard.render.com/)。
2. 选择 `New` -> `Blueprint`。
3. 连接刚才创建的 GitHub 仓库。
4. Render 会读取项目根目录中的 `render.yaml`。
5. 按提示填写 `DEEPSEEK_API_KEY`。
6. 创建服务并等待部署完成。

部署成功后，Render 会提供类似下面的公网地址：

```text
https://tarot-web.onrender.com
```

## 注意事项

- 不要把 `.env` 上传到 GitHub。
- DeepSeek API 会产生费用，公开网站上线后建议设置预算和限流。
- 当前后端只有简单单 IP 频率限制，正式公开前建议增加每日额度限制或验证码。
