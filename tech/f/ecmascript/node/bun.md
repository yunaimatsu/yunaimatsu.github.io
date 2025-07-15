---
layout: '@layout/Layout.astro'
---
# 金輪際npm, npxを使ってはいけない。bun, bunxを使おう
Bunとは、Web開発用のランタイムである。Bunをインストールし、これまで`npm`と打ってた箇所を全て`bun`に変えるだけで、パッケージの追加から`run dev`までが最適化され、非常に高速で快適な開発になる。使ってみたら分かるが、本当に爆速だ。
# Instalation
```shell:Terminal
curl -fsSL https://bun.sh/install | bash
```
![](https://storage.googleapis.com/zenn-user-upload/47f8ee73d37f-20240508.png)
# レポジトリに移動
これから開発を始める**空の**レポジトリに移動してください。
```shell:Terminal
cd [レポジトリへのパス]
```
# 初期化
```shell:Terminal
bun init
```
# インストール
```shell:Terminal
bun install
```
# フレームワークのインストール
```shell:Terminal
bun create [フレームワーク名]