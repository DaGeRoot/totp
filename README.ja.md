🌍 Languages: [English](README.md) | [Français](README.fr.md) | [日本語](README.ja.md) | [中文](README.zh.md) | [Deutsch](README.de.md) | [Español](README.es.md)

# TOTPジェネレーター

HTML、JavaScript、Tailwind CSSで構築された、シンプルで安全かつレスポンシブなブラウザベースのワンタイムパスワード（TOTP）ジェネレーターです。

## 🌐 デモサイト

👉 [https://dagetotp.pages.dev/](https://dagetotp.pages.dev/)

## ✨ 特徴

- RFC 6238 準拠のTOTP生成
- Base32形式のシークレット入力
- Tailwind CSSによるレスポンシブUI
- 完全クライアントサイド、サーバー不要
- JavaScriptモジュールとして呼び出せるTOTP関数

## 🚀 デプロイ方法

### 🟦 Cloudflare Pages（推奨）

数分でデプロイ可能です：

1. このリポジトリをGitHubにフォークまたはアップロードします。
2. [Cloudflare Pages](https://pages.cloudflare.com/) にアクセスします。
3. 新しいプロジェクトを作成し、GitHubリポジトリを接続します。
4. 以下を設定：
   - **Framework preset:** None  
   - **Build command:** _(空欄)_  
   - **Output directory:** `/`
5. **Deploy**をクリックして完了！

## 🌐 クライアントサイドAPIとしての利用

他のアプリからTOTP関数を呼び出せます：

```js
import { generateTOTP } from 'https://dagetotp.pages.dev/functions/totpapi.js';

generateTOTP('JBSWY3DPEHPK3PXP').then(code => {
  console.log('TOTP:', code);
});
```

> ⚠️ これはREST APIではありません。`generateTOTP` 関数は他のJavaScriptアプリからインポートして使う想定です。

## 🔐 仕組み

- Base32のシークレットを16進数に変換
- 現在時刻を元にカウンターを計算
- Web Crypto APIでHMAC-SHA1を生成
- ダイナミックトランケーションで6桁コードを取得

## 🛠 使用技術

- **HTML5**
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **Web Crypto API**

## 📜 ライセンス

MITライセンス
