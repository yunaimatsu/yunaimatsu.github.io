---
layout: '@layout/Layout.astro'
---
# フレームワーク: Svelte、クラウドサービス: Cloudflare
```bash:bash
$ bun create cloudflare@latest . -- --framework=svelte
```
# bunの初期化・インストール
```bash:bash
$ bun init
$ bun install
```
# ルーティング構造の作成
```bash:bash
$ mkdir 1aaa 2bbb 3ccc 4ddd ... Nxxx
$ for i in {1..N}*; do touch $i/+page.svelte; done
```