# TOTP Generator

A simple, secure, and responsive browser-based Time-based One-Time Password (TOTP) generator built with HTML, JavaScript, and Tailwind CSS.

## 🌐 Live Demo

👉 [https://dagetotp.pages.dev/](https://dagetotp.pages.dev/)

## ✨ Features

- RFC 6238-compliant TOTP generation
- Base32 secret input
- Responsive UI with Tailwind CSS
- Fully client-side, no backend required
- TOTP generator function callable as a JavaScript module

---

## 🚀 Deployment

### 🟦 Cloudflare Pages (Recommended)

Deploy in minutes:

1. **Fork or upload** this repo to GitHub.
2. Visit [Cloudflare Pages](https://pages.cloudflare.com/) and create a new project.
3. Connect your GitHub repo.
4. Configure:
   - **Framework preset:** None  
   - **Build command:** _(leave empty)_  
   - **Output directory:** `/`
5. Click **Deploy** – done!

---

## 🌐 Use as a Client-Side API

You can call the TOTP generation function from other apps or scripts:

```js
import { generateTOTP } from 'https://dagetotp.pages.dev/functions/totpapi.js';

generateTOTP('JBSWY3DPEHPK3PXP').then(code => {
  console.log('TOTP:', code);
});
```

> ⚠️ This is **not** a REST API. The `generateTOTP` function is meant to be imported into other JS apps as a module.

Example usage in a simple HTML page:

```html
<script type="module">
  import { generateTOTP } from 'https://dagetotp.pages.dev/functions/totpapi.js';
  generateTOTP('JBSWY3DPEHPK3PXP').then(code => {
    document.body.innerText = "Your TOTP: " + code;
  });
</script>
```

---


## 🔐 How It Works

- Converts Base32 secret to hexadecimal
- Uses system time to compute counter
- Generates HMAC-SHA1 with Web Crypto API
- Applies dynamic truncation to extract a 6-digit code

---

## 🛠 Built With

- **HTML5**
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **Web Crypto API**

---

## 📜 License

MIT License
