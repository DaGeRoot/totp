# TOTP 生成器

一个简单、安全、响应迅速的基于浏览器的时间一次性密码（TOTP）生成器，使用 HTML、JavaScript 和 Tailwind CSS 构建。

## 🌐 在线演示

👉 [https://dagetotp.pages.dev/](https://dagetotp.pages.dev/)

## ✨ 功能特点

- 遵循 RFC 6238 的 TOTP 生成
- 支持 Base32 密钥输入
- 使用 Tailwind CSS 构建响应式界面
- 完全在客户端运行，无需后端
- 可作为 JavaScript 模块调用的 TOTP 函数

## 🚀 部署

### 🟦 推荐：Cloudflare Pages

几分钟即可完成部署：

1. Fork 或上传本项目到 GitHub。
2. 前往 [Cloudflare Pages](https://pages.cloudflare.com/)。
3. 创建新项目并连接 GitHub 仓库。
4. 设置参数：
   - **Framework preset：** None  
   - **Build command：** _(留空)_  
   - **Output directory：** `/`
5. 点击 **Deploy**，部署完成！

## 🌐 作为客户端 API 使用

您可以在其他应用中调用 TOTP 生成函数：

```js
import { generateTOTP } from 'https://dagetotp.pages.dev/functions/totpapi.js';

generateTOTP('JBSWY3DPEHPK3PXP').then(code => {
  console.log('TOTP:', code);
});
```

> ⚠️ 注意：这不是 REST API。`generateTOTP` 是为 JavaScript 应用设计的可导入函数。

## 🔐 工作原理

- 将 Base32 密钥转换为十六进制
- 使用当前时间计算计数器
- 通过 Web Crypto API 生成 HMAC-SHA1
- 使用动态截断提取6位验证码

## 🛠 技术栈

- **HTML5**
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **Web Crypto API**

## 📜 许可证

MIT 许可证
