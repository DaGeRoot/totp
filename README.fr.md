# Générateur TOTP

Un générateur de mot de passe à usage unique basé sur le temps (TOTP), simple, sécurisé et réactif, fonctionnant dans le navigateur avec HTML, JavaScript et Tailwind CSS.

## 🌐 Démo en ligne

👉 [https://dagetotp.pages.dev/](https://dagetotp.pages.dev/)

## ✨ Fonctionnalités

- Génération TOTP conforme à la RFC 6238
- Saisie de clé secrète en Base32
- Interface utilisateur réactive avec Tailwind CSS
- Entièrement côté client, aucun backend requis
- Fonction de génération TOTP importable en tant que module JavaScript

## 🚀 Déploiement

### 🟦 Cloudflare Pages (recommandé)

Déployez en quelques minutes :

1. Forkez ou téléversez ce dépôt sur GitHub.
2. Accédez à [Cloudflare Pages](https://pages.cloudflare.com/).
3. Créez un nouveau projet et connectez votre dépôt GitHub.
4. Configuration :
   - **Framework preset :** Aucun  
   - **Commande de build :** _(laisser vide)_  
   - **Répertoire de sortie :** `/`
5. Cliquez sur **Deploy** – c'est fait !

## 🌐 Utilisation comme API côté client

Vous pouvez appeler la fonction TOTP dans d'autres applications :

```js
import { generateTOTP } from 'https://dagetotp.pages.dev/functions/totpapi.js';

generateTOTP('JBSWY3DPEHPK3PXP').then(code => {
  console.log('TOTP :', code);
});
```

> ⚠️ Ce n'est **pas** une API REST. La fonction `generateTOTP` est conçue pour être importée dans d'autres applications JavaScript.

## 🔐 Fonctionnement

- Convertit la clé Base32 en hexadécimal
- Calcule le compteur basé sur l'heure
- Génére un HMAC-SHA1 avec l’API Web Crypto
- Applique une troncature dynamique pour extraire un code à 6 chiffres

## 🛠 Construit avec

- **HTML5**
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **Web Crypto API**

## 📜 Licence

Licence MIT
