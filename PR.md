# POSSE課題 PR本文

## 提出URL

- リポジトリ: https://github.com/asahi1117/kankyou1
- GitHub Pages: https://asahi1117.github.io/kankyou1/

## プロジェクトを作ってから完成までに打ったコマンドの順序

```
cd C:\Users\okura\workspace
pnpm create vite my-counter-app --template vanilla
cd my-counter-app
pnpm install
pnpm run dev
pnpm add -D gh-pages tailwindcss @tailwindcss/vite
pnpm run build
pnpm run deploy
```

## vite.config.js に base: './' を設定した理由

GitHub Pages のURLは `https://ユーザー名.github.io/リポジトリ名/` になる。`base` を付けないと、ビルド後の JS/CSS が `/assets/...` というサイト直下のパスを見に行き、`kankyou1` が抜けて 404 になり画面が真っ白になる。`base: './'` にすると `./assets/...` の相対パスになり、リポジトリ名の下でもファイルをたどれる。

## 詰まった場所とどう解決したか

1. ターミナルで `cd workspace` と `pnpm create vite ...` を1行にくっつけて打ってしまい、別の場所にもプロジェクトができた。1コマンドずつ Enter で実行し、使うフォルダは `C:\Users\okura\workspace\my-counter-app` に揃えた。
2. `pnpm run dev` で `Port 5173 is in use` と出た。すでに別の Vite が動いていたので、空いているポート（例: 5175）をブラウザで開いた。
3. GitHub の Compare で `main` と `gh-pages` を比べると `entirely different commit histories` になる。`gh-pages` は本番用の `dist/` を置く公開ブランチで、ソースの `main` とは履歴が別物。PR はソースのブランチ同士（例: `docs/assignment-pr` → `main`）で作る。

## 確認結果

### 表示確認

- スマホ幅（375px）: カードが縦並び。ボタンが1列。見切れていない。
- PC幅（1280px）: カードが中央。ボタンが「減らす / リセット / 増やす」の3列。

## 判断の記録

今週の実装で判断が必要だった場面:

- 選択肢A: デプロイは dist の中身を手動で公開ブランチに置く方式
- 選択肢B: デプロイは gh-pages ツールに任せる方式
- 採用した理由: 教材が `pnpm add -D gh-pages` と `"deploy": "gh-pages -d dist"` を使う流れだった。手動コピーより再現しやすい。
- 確認方法: `pnpm run build` で `dist/` ができること、`dist/index.html` が `./assets/...` であること、Pages でカウンターが表示されることを確認した。

## AI利用

- 使ったAIツール: Cursor（チャットのコーディング支援）
- 何を依頼したか: Vite の立ち上げ、GitHub への push、Pages 公開、3ボタン化と発展要件の実装
- 自分で修正した箇所: GitHub リポジトリの作成、Pages の公開ブランチを `gh-pages` にする設定、ブラウザでの表示確認

## AIとの比較

- AIが正しく実装できていたこと: Vanilla テンプレート、CSS の `import`、`base: './'`、3ボタン、Tailwind を pnpm で入れること、localStorage
- AIが間違えた・足りなかったこと: 最初は教材の「増やす」1ボタンだけで、課題の「減らす」「リセット」がなかった。ターミナル操作をまとめて打つ案内になりやすく、ポートが 5173 以外になることがあった。
- 自分が修正・判断した箇所: 使うフォルダを `workspace/my-counter-app` に固定した。Pages の公開元は `main` ではなく `gh-pages` にした。PR の比較対象に `gh-pages` を使わないようにした。
