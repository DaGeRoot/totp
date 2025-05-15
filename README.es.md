# Generador TOTP

Un generador de contraseñas de un solo uso basadas en tiempo (TOTP), simple, seguro y con interfaz adaptable, desarrollado con HTML, JavaScript y Tailwind CSS.

## 🌐 Demostración en Vivo

👉 [https://dagetotp.pages.dev/](https://dagetotp.pages.dev/)

## ✨ Características

- Generación TOTP conforme a la RFC 6238
- Entrada de clave secreta en Base32
- Interfaz responsive usando Tailwind CSS
- Totalmente del lado del cliente, sin backend
- Función TOTP importable como módulo JavaScript

## 🚀 Despliegue

### 🟦 Cloudflare Pages (Recomendado)

Despliega en minutos:

1. Haz un fork o sube este repositorio a GitHub.
2. Ve a [Cloudflare Pages](https://pages.cloudflare.com/).
3. Crea un nuevo proyecto y conecta tu repositorio de GitHub.
4. Configuración:
   - **Framework preset:** Ninguno  
   - **Build command:** _(déjalo vacío)_  
   - **Output directory:** `/`
5. Haz clic en **Deploy** – ¡listo!

## 🌐 Uso como API del lado del cliente

Puedes llamar la función TOTP desde otras aplicaciones:

```js
import { generateTOTP } from 'https://dagetotp.pages.dev/functions/totpapi.js';

generateTOTP('JBSWY3DPEHPK3PXP').then(code => {
  console.log('TOTP:', code);
});
```

> ⚠️ Esto **no** es una API REST. La función `generateTOTP` está pensada para ser importada en otras apps JavaScript.

## 🔐 Cómo Funciona

- Convierte la clave Base32 a hexadecimal
- Calcula el contador basado en el tiempo actual
- Usa Web Crypto API para generar HMAC-SHA1
- Aplica truncamiento dinámico para obtener un código de 6 dígitos

## 🛠 Tecnologías Usadas

- **HTML5**
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **Web Crypto API**

## 📜 Licencia

Licencia MIT
