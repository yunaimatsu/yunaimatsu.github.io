---
layout: '@layout/Layout.astro'
---
ホストOS上で独立したプロセスとして実行されるアプリケーション環境。OSの基本コマンドやアプリケーションの実行バイナリやライブラリなど実行環境全体をパッケージ化する。
![](https://storage.googleapis.com/zenn-user-upload/2b18e669fe41-20240514.png)
![](https://storage.googleapis.com/zenn-user-upload/ef895bd46788-20240514.png)
![](https://storage.googleapis.com/zenn-user-upload/8e7da323b5c8-20240514.png)
![](https://storage.googleapis.com/zenn-user-upload/85b12aa8591b-20240514.png)
![](https://storage.googleapis.com/zenn-user-upload/87bec6388b20-20240514.png)
### メリット
#### ソフトウェア開発の面から
* ハードウェア環境の確保や開発環境のインストールのような非本質的な作業が不要になる。
* アプリケーション単位で分離して開発できる。
* 開発環境の作成・廃棄を容易に行える
#### 運用管理の面から
* IaaS, PaaSが進む
* DevOps, Immutable Infrastructureの実現
→ハード面を気にせず、開発・運用ができる
### デメリット