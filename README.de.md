🌍 Languages: [English](README.md) | [Français](README.fr.md) | [日本語](README.ja.md) | [中文](README.zh.md) | [Deutsch](README.de.md) | [Español](README.es.md)


# TOTP-Generator

Ein einfacher, sicherer und responsiver browserbasierter Time-based One-Time Password (TOTP) Generator, entwickelt mit HTML, JavaScript und Tailwind CSS.

## 🌐 Live-Demo

👉 [https://dagetotp.pages.dev/](https://dagetotp.pages.dev/)

## ✨ Funktionen

- TOTP-Erzeugung gemäß RFC 6238
- Base32-Schlüssel-Eingabe
- Reaktionsfähiges UI mit Tailwind CSS
- Vollständig clientseitig, kein Backend notwendig
- TOTP-Funktion als JavaScript-Modul aufrufbar

## 🚀 Bereitstellung

### 🟦 Cloudflare Pages (empfohlen)

In wenigen Minuten einsatzbereit:

1. Forken oder laden Sie dieses Repository auf GitHub hoch.
2. Besuchen Sie [Cloudflare Pages](https://pages.cloudflare.com/).
3. Erstellen Sie ein neues Projekt und verbinden Sie Ihr GitHub-Repository.
4. Einstellungen:
   - **Framework preset:** None  
   - **Build-Befehl:** _(leer lassen)_  
   - **Ausgabeverzeichnis:** `/`
5. Klicken Sie auf **Deploy** – fertig!

## 🌐 Verwendung als Client-Side-API

Sie können die TOTP-Funktion in anderen Apps nutzen:

```js
import { generateTOTP } from 'https://dagetotp.pages.dev/functions/totpapi.js';

generateTOTP('JBSWY3DPEHPK3PXP').then(code => {
  console.log('TOTP:', code);
});
```

> ⚠️ Dies ist **keine** REST-API. Die Funktion `generateTOTP` ist zum Import in andere JavaScript-Apps gedacht.

## 🔐 Funktionsweise

- Konvertiert Base32-Schlüssel in Hexadezimal
- Berechnet Zeit-basierten Zähler
- Generiert HMAC-SHA1 mittels Web Crypto API
- Dynamische Trunkierung zur Erzeugung eines 6-stelligen Codes

## 🛠 Technologien

- **HTML5**
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **Web Crypto API**

## 📜 Lizenz

MIT-Lizenz
