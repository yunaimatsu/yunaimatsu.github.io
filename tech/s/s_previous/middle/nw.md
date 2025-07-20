---
layout: '@layout/Layout.astro'
---
# 通信はマジで面白い
細かな技術が継ぎ接ぎされて、より良い方へ、より良い方へ、と人間の通信をサポートして、人間の生産性の向上に凄まじく貢献している。
# 「ネットワーク」分野は「セキュリティ」分野と同時に学ぼう
多くのコンピュータサイエンスの専門書や情報技術関連の資格の参考書にいて、ネットワーク分野とセキュリティ分野は棲み分けがされています。
しかし、実際はこの2つの分野は密接に関わっており、分けて学習するのは本質的と言えません。
そこで、当サイトではこの2つを同時に学習します。

# ネットワークの学習の全体像

インターネット層は旅程表を作り、リンク層は切符を作る
# インターネット層で作った旅程表を元にトランスポート層が通信路を作る
# トランスポート層の通信路を元に実際にやりとりしたい内容を書く

# 学ぶ順番
## まずインターネット層とトランスポート層から
### なぜ？
1. イメージがしやすいから。
2. ネットワークの本質だから。
3. インターネット層はノードの繋ぎ方を統一する。トランスポート層はそれらの情報のやり取り方法を統一する。
リンク層は、インターネット層で仮想的に扱えるようにするためにハード面を統一する。
アプリケーション層は「プログラミング」の領域で、サービスにおける通信の方法を統一する感じ。

## インターネット層
イーサネットに基づくリンク層(物理層/データリンク層)は単一のハブに繋がれたネットワーク(LAN)である。
ネットを跨ぐから、インターネット！インター(ネットワーク)。
The main difference between the intranet and the internet comes down to access. The internet is a global collection of computer networks. It's an open network, accessible to anyone with a device and an internet connection. In contrast, the intranet is a closed, online network, only accessible to company employees.

## トランスポート層

インターネット層とトランスポート層の行き来を行う
ARP/RARP

![Network](/b/cs/network.png)

* [リンク層](/b/cs/nw/link)
* [インターネット層](/b/cs/nw/internet)
* [トランスポート層](/b/cs/nw/transport)
* [アプリケーション層](/b/cs/nw/application)

[通信形態](/b/cs/nw/communication-methods)

[OSI](https://opensource.org/licenses)