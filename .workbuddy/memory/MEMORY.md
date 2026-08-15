# 观自在 (avalokita) 项目

纯静态佛道双修虚拟修行网站（无框架、无构建步骤），可直接部署到 Vercel。

- 设计约束：纯静态、自包含（音效用 Web Audio 合成、图用内联 SVG，零外部资源），适配桌面/移动。
- 主题靠 `body[data-tradition="gate|buddha|tao"]` 切换；仪轨靠 `GZ.modules` 注册五个面板模块。
- 数据存 localStorage（key `guanzizai.v1`），按日重置 `cur`。
- 部署：Vercel 导入仓库，框架选 Other / 无构建，根目录，无需构建命令；`vercel.json` 已配静态缓存。
- 验证手段：曾用 jsdom 跑冒烟测试（/tmp/guan_smoke.js 思路），覆盖五模块核心交互。

## 神像库（礼拜可选神佛）
- 两宗神像定义在独立文件：`scripts/deities-buddha.js`、`scripts/deities-tao.js`，挂在全局 `window.DEITIES = { buddha:[...], tao:[...] }`。
- 每个神 `{ id, title, short, honor, kind, sound, gatha, svg }`；`svg` 为自包含 `<svg viewBox="0 0 600 560">` 字符串（含头光/背光/莲座或云座/衣纹/五官/宝冠/法器，渐变 id 用 `db_`/`dt_` 前缀防冲突）。
- 佛门 5 尊：释迦牟尼佛、观世音菩萨、文殊菩萨、弥勒菩萨（笑口财神）、财宝天王（武财神）；道门 5 尊：玉清元始天尊、上清灵宝天尊、太清道德天尊、玉皇大帝、赵公明财神真君。
- 礼拜面板（`mod-bow.js`）：`#deityArt` 动态注入当前神 svg，`#deityPick` 渲染神像选择器（含各神已拜数）；`selectDeity(i)` 切神并重置本轮；按神累计用 `Store.deityAdd(tr,id)` / `Store.deityCount(tr,id)`（存 `total.byDeity`）。
- 新增神只需往对应数组 push 一条（`kind` 用于选择器标签），无需改其它模块。
