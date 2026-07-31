# ホスティング移行：Vercel → Cloudflare Workers (Static Assets)

## 1. 目的

Vercelでのホスティングをやめ、この `introduction-web-page`（Next.js 16 App Router）を
Cloudflare Workers（Static Assets機能）に完全移行する。
移行後は `seminar-system-info.yuu0413.com` からアクセスできるようにする。

## 2. ユーザー

公開ページ。ログイン機能・権限分けは無い。訪問者は誰でも閲覧できる（ゼミ紹介ページ）。

## 3. 課題

現状Vercelでの動作に不具合は無い。動機は「他のCloudflareプロジェクトと運用を揃えたい」という
運用の一本化。緊急度は低いが、後回しにする理由も無い。

## 4. 機能（MVPスコープ）

**含める**
- `next.config.ts` に `output: "export"` を追加
- `next build` で `out/` に静的HTML/CSS/JSを生成できることを確認
- Cloudflare Workers（Static Assets）プロジェクトを作成し `out/` をデプロイ
- `seminar-system-info.yuu0413.com` をカスタムドメインとして設定
- 既存の見た目・リンク（デモ・GitHubボタン等）がVercel版と同じように動くことを確認

**含めない**
- Vercelプロジェクトの削除（動作確認が終わるまで残す。切り替え後に手動で削除）
- 今後の機能追加（お問い合わせフォーム等）
- GitHub連携による自動デプロイの構築（今回は手動 `wrangler deploy` のみ）

## 5〜7. 画面構成・データ構造・API設計

アプリのコード自体（画面構成・データ・API）は変更しない。ホスティング基盤の切り替えのみ。

- 画面構成: `app/page.tsx`（トップページ1枚）+ `app/layout.tsx` のまま
- データ構造: 該当なし（DB無し、静的ページのみ）
- API設計: 該当なし（元々APIルート無し）

現在のアプリはAPIルート・`next/image`・動的ルート・Cookie・Server Actionsを一切使用しておらず、
完全に静的なページであることを確認済み（`node_modules/next/dist/docs/01-app/02-guides/static-exports.md` の
Unsupported Featuresに該当する機能は不使用）。

## 8. フォルダ構成

```
introduction-web-page/
├── app/                     （変更なし）
│   ├── favicon.ico
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/                  （変更なし）
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── next.config.ts           ← output: "export" を追加
├── wrangler.jsonc           ← 新規作成
├── package.json             ← deployスクリプトを追加
├── out/                     ← next build の生成物（.gitignoreに追加、コミットしない）
└── .gitignore                ← out/ と .wrangler/ を追加
```

`main`（Workerスクリプト本体）は作成しない。動的処理が無いため、静的アセットのみを配信する
アセット専用Workerとして構成する。

## 9. 実装手順

1. `next.config.ts` に `output: "export"` を追加
2. `npm run build` → `out/` が生成されることを確認し、`out/index.html` をブラウザで開いて
   見た目・リンクが崩れていないか確認
3. `.gitignore` に `out/` と `.wrangler/` を追加
4. `npm install -D wrangler@latest` を実行
5. `wrangler.jsonc` を新規作成
   ```jsonc
   {
     "$schema": "./node_modules/wrangler/config-schema.json",
     "name": "seminar-info-page",
     "compatibility_date": "<実装日>",
     "assets": {
       "directory": "./out",
       "not_found_handling": "404-page"
     },
     "routes": [
       { "pattern": "seminar-system-info.yuu0413.com", "custom_domain": true }
     ]
   }
   ```
6. `wrangler login` でCloudflareアカウント（`yuu0413.com` ゾーンを管理するアカウント）に認証
7. `wrangler deploy` を実行 → 初回デプロイ時にDNSレコード・SSL証明書が自動作成される
8. `https://seminar-system-info.yuu0413.com` にアクセスして動作確認
9. 動作確認OKなら、Vercel側はすぐには消さず残しておく（切り戻せるように）
10. 十分に安定稼働を確認できたら、Vercelプロジェクトの削除・ドメイン解除は手動で実施

## 10. リスク・決定事項

| # | 項目 | 決定 |
|---|---|---|
| 1 | 目標ドメイン | `seminar-system-info.yuu0413.com`（Issue #1本文の `seminar-info.yuu0413.com` とは異なる。Issue本文を後で修正する必要あり） |
| 2 | Workerの名前(`wrangler.jsonc`の`name`) | `seminar-info-page` |
| 3 | Cloudflareアカウント | `yuu0413.com` ゾーンと同一アカウント。`custom_domain: true` による自動DNS作成の前提を満たす |
| 4 | `wrangler login` の認証 | 非対話セッションのため代行不可。実装時にユーザー自身のターミナルで実行が必要 |
| 5 | Next.js 16の静的エクスポート挙動 | AGENTS.mdの注意書き通り、breaking changesがある可能性。実装直前に `node_modules/next/dist/docs/` を再確認する |

## 技術選定の記録（壁打ちで決めた分岐点）

- **静的エクスポート vs OpenNextアダプタ(Workers上でNext.jsサーバーを丸ごと動かす)** →
  静的エクスポートを選択。理由：現状のアプリがサーバー機能を一切使っていないため
- **Cloudflare Pages vs Workers(Static Assets)** →
  Workers(Static Assets)を選択。理由：2026年3月時点でCloudflareが新規プロジェクトに
  公式推奨している方式であり（[Migrate from Pages to Workers](https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/)）、
  他のCloudflareプロジェクトとの統一という当初の目的にも合致するため
