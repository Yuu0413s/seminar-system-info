# seminar-system-info

「つもり」と「実際」のズレを可視化する作業時間トラッカー **Tsumori** の紹介ページです。
Tsumoriの機能紹介に加え、その開発の元になっている研究（実行しやすさ特徴量に基づくパーソナライズドタスク実行時間推薦）の概要も掲載しています。

公開URL: [https://seminar-system-info.yuu0413.com](https://seminar-system-info.yuu0413.com)

## 構成

- トップページ（`/`）: Tsumoriの機能・使い方・技術スタックの紹介
- 研究概要ページ（`/research`）: Tsumoriの元になっている研究の紹介

## 技術スタック

- [Next.js](https://nextjs.org)（App Router / 静的エクスポート）
- [Tailwind CSS](https://tailwindcss.com)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/)（Static Assets）でホスティング

## Getting Started

開発サーバーを起動する。

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認できます。`app/page.tsx` を編集すると自動で反映されます。

## ビルド

`next build` で静的ファイルを `out/` に生成します（`next.config.ts` の `output: "export"` による静的エクスポート）。

```bash
npm run build
```

## デプロイ

`main` ブランチへのpushをトリガーに、GitHub Actions（`.github/workflows/deploy.yml`）が自動でCloudflare Workersへデプロイします。

手動でデプロイする場合は以下を実行します。

```bash
npm run deploy
```

ホスティング移行の背景・設計判断は [docs/design/cloudflare-workers-migration.md](docs/design/cloudflare-workers-migration.md) を参照してください。

### プレビューデプロイ（PR単位のデプロイ）

現在は未設定です。ゼミ紹介用の静的ページで更新頻度・関係者数が少なく、`main` へのマージ前にローカル（`npm run dev` / `npm run build`）で見た目を確認できれば十分なため、追加のインフラを持ち込まない判断をしています。PR単位のプレビューが必要になった場合は改めて検討してください。

### デプロイ失敗時の通知

Slack等への通知は追加していません。現状は運用者が少なく、GitHub Actionsの実行結果はリポジトリの「Actions」タブで確認できます。必要な運用者はGitHub Actionsのメール/Web通知を各自有効化する前提とし（この通知は通知設定を有効化したユーザーにのみ届きます）、関係者が増えた場合はSlack等のチーム通知を改めて検討します。
