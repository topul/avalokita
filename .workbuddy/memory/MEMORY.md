# 观自在 (avalokita) 项目

纯静态佛道双修虚拟修行网站（无框架、无构建步骤），可直接部署到 Vercel。

- 设计约束：纯静态、自包含（音效用 Web Audio 合成、图用内联 SVG，零外部资源），适配桌面/移动。
- 主题靠 `body[data-tradition="gate|buddha|tao"]` 切换；仪轨靠 `GZ.modules` 注册五个面板模块。
- 数据存 localStorage（key `guanzizai.v1`），按日重置 `cur`。
- 部署：Vercel 导入仓库，框架选 Other / 无构建，根目录，无需构建命令；`vercel.json` 已配静态缓存。
- 验证手段：曾用 jsdom 跑冒烟测试（/tmp/guan_smoke.js 思路），覆盖五模块核心交互。
