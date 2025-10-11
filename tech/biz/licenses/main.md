[Licenses](https://opensource.org/licenses)

- [はじめに](https://www.tohoho-web.com/ex/license.html#summary)
- [MITライセンス](https://www.tohoho-web.com/ex/license.html#mit)
- [BSDライセンス](https://www.tohoho-web.com/ex/license.html#bsd)
    - [四条項BSDライセンス(旧BSDライセンス)](https://www.tohoho-web.com/ex/license.html#bsd-4)
    - [三条項BSDライセンス(修正BSDライセンス)](https://www.tohoho-web.com/ex/license.html#bsd-3)
    - [二条項BSDライセンス](https://www.tohoho-web.com/ex/license.html#bsd-2)
- [Apacheライセンス](https://www.tohoho-web.com/ex/license.html#apache)
- [MPL (Mozilla Public License)](https://www.tohoho-web.com/ex/license.html#mpl)
- [GPL系ライセンス](https://www.tohoho-web.com/ex/license.html#gpl-license)
    - [LGPL (GNU Lesser General Public License)](https://www.tohoho-web.com/ex/license.html#lgpl)
    - [GPL (GNU General Public License)](https://www.tohoho-web.com/ex/license.html#gpl)
    - [AGPL (GNU Affero General Public License)](https://www.tohoho-web.com/ex/license.html#agpl)
- [リンク](https://www.tohoho-web.com/ex/license.html#links)

---

OSSライセンスでは **コピーレフト** の概念があります。OSS を利用・改造してもよいけど、OSS の普及・共有を目的として、OSS を利用・改造した場合は、利用・改造したソースコードも同ライセンスのOSSとして公開することを義務付けるものです。**コピーレフト型ライセンス** としては [GPL](https://www.tohoho-web.com/ex/license.html#gpl)、[AGPL](https://www.tohoho-web.com/ex/license.html#agpl) 等があります。**準コピーレフト系ライセンス** としては、利用しただけであれば公開の義務はないけど、改造した場合は義務付けるもので、[LGPL](https://www.tohoho-web.com/ex/license.html#lgpl), [MPL](https://www.tohoho-web.com/ex/license.html#mpl) などがあります。**非コピーレフト型ライセンス** はこれらの制約がなく、縛りの少ないライセンスで、[MIT](https://www.tohoho-web.com/ex/license.html#mit), [BSD](https://www.tohoho-web.com/ex/license.html#bsd), [Apacheライセンス](https://www.tohoho-web.com/ex/license.html#apache) などがあります。

| **形態** | **ライセンス** | **利用者へのコード公開** | **利用物のコード公開** | **改造物のコード公開** | **ライセンス明記** | **改造
複製
再配布
商用利用** |
| --- | --- | --- | --- | --- | --- | --- |
| 非コピーレフト | [MIT](https://www.tohoho-web.com/ex/license.html#mit) | 不要 | 不要 | 不要 | 必要 | 可能 |
|  | [BSD](https://www.tohoho-web.com/ex/license.html#bsd) | 不要 | 不要 | 不要 | 必要 | 可能 |
|  | [Apache](https://www.tohoho-web.com/ex/license.html#apache) | 不要 | 不要 | 不要 | 必要 | 可能 |
| 準コピーレフト | [MPL](https://www.tohoho-web.com/ex/license.html#mpl) | 不要 | 不要 | ***必要*** | 必要 | 可能 |
|  | [LGPL](https://www.tohoho-web.com/ex/license.html#lgpl) | 不要 | 不要 | ***必要*** | 必要 | 可能 |
| コピーレフト | [GPL](https://www.tohoho-web.com/ex/license.html#gpl) | 不要 | ***必要*** | ***必要*** | 必要 | 可能 |
|  | [AGPL](https://www.tohoho-web.com/ex/license.html#agpl) | ***必要*** | ***必要*** | ***必要*** | 必要 | 可能 |

## MITライセンス

Massachusetts Institute of Technology License の略です。X Window System などを開発していたマサチューセッツ工科大学が定めたライセンスです。著作権および許諾表示を記載すれば、非営利、商用を問わず、使用、改変、複製、再頒布が可能です。二条項BSDライセンスと同様、制約が少なく、GitHub で配布されているオープンソースでも最も利用されているライセンスです。

- https://opensource.org/licenses/MIT (英語)
- https://licenses.opensource.jp/MIT/MIT.html (日本語)

## BSDライセンス

Berkeley Software Distribution License の略です。BSD系UNIXを開発していたカリフォルニア大学バークレー校が定めたライセンスです。四条項版、三条項版、二条項版があります。非営利、商用を問わず、使用、改変、複製、再頒布が可能です。

### 四条項BSDライセンス(旧BSDライセンス)

古い時代のBSDライセンスで、プロダクトへのライセンス掲示の他、宣伝媒体にも謝辞を掲載することが条件とされていました。現在ではあまり使用されていません。下記の使用条件があります。

1. ソースコードを再配布する際は、上記著作権表示、本条件項目、および下記免責事項を含めること。
2. バイナリ形式で再配布する際は、上記著作権表示、本条件項目、および下記免責事項をドキュメント、もしくは、共に配布される他の媒体に複製して含めること。
3. 本ソフトウェアの機能や効用について述べるすべての宣伝媒体に、下記の謝辞を表示すること：「この製品は、～によって開発されたソフトウェアを含んでいます。」
4. 事前の書面による許可無しに、(開発者)やコントリビュータの名前を、本ソフトウェアから派生した製品を推薦・宣伝する目的に使用してはならない。

1. 1. ソースコードを再配布する際は、上記著作権表示、本条件項目、および下記免責事項を含めること。
2. 2. バイナリ形式で再配布する際は、上記著作権表示、本条件項目、および下記免責事項をドキュメント、もしくは、共に配布される他の媒体に複製して含めること。
3. 3. 本ソフトウェアの機能や効用について述べるすべての宣伝媒体に、下記の謝辞を表示すること：「この製品は、～によって開発されたソフトウェアを含んでいます。」
4. 4. 事前の書面による許可無しに、(開発者)やコントリビュータの名前を、本ソフトウェアから派生した製品を推薦・宣伝する目的に使用してはならない。

### 三条項BSDライセンス(修正BSDライセンス)

1999年7月22日に発表されたもので、四条項BSDライセンスから第三条を削除し、宣伝媒体への謝辞掲載が不要となりました。修正BSDライセンスとも呼ばれます。BSD 系で最もよく利用されるライセンスです。

- https://opensource.org/licenses/BSD-3-Clause (英語)
- https://licenses.opensource.jp/BSD-3-Clause/BSD-3-Clause.html (日本語)

### 二条項BSDライセンス

三条項BSDライセンスからさらに第三条を削除し、四条項BSDライセンスから第三条、第四条を削除したもので、(開発者)やコントリビューターの名前の使用制限が解除されました。

- https://opensource.org/licenses/BSD-2-Clause (英語)
- https://licenses.opensource.jp/BSD-2-Clause/BSD-2-Clause.html (日本語)

## Apacheライセンス

[MIT](https://www.tohoho-web.com/ex/license.html#mit) や [BSD](https://www.tohoho-web.com/ex/license.html#bsd) と同様、制限の緩いライセンスです。ライセンス明記することで商用でも使用・改変・複製・再配布が可能です。

- https://opensource.org/licenses/Apache-2.0 (英語)
- https://licenses.opensource.jp/Apache-2.0/Apache-2.0.html (日本語)

## MPL (Mozilla Public License)

Mozilla が最初に公開したライセンスで、MIT/BSD/Apacheライセンスと、GPLの中間くらい、LGPLと同程度のライセンスです。利用しただけのコードは独自のライセンスを適用することができますが、改造した場合は、改造物もMPLライセンスとして公開する必要があります。

- https://opensource.org/licenses/MPL-1.1 (英語)
- https://opensource.org/licenses/MPL-2.0 (英語)
- https://licenses.opensource.jp/MPL-1.1/MPL-1.1.html (日本語)
- https://licenses.opensource.jp/MPL-2.0/MPL-2.0.html (日本語)

## GPL系ライセンス

### LGPL (GNU Lesser General Public License)

[GPL](https://www.tohoho-web.com/ex/license.html#gpl) をベースとしていますが、GPL が、GPL のモジュールをライブラリとして呼び出しているだけで、成果物の配布先に開発コードの公開が必要となる(感染する)のに対し、GPL モジュールをライブラリとして呼び出すだけであれば、開発コードの公開は不要としたものです。LGPL モジュールを改造した場合は、改造したソースコードを公開する必要があります。

- https://opensource.org/licenses/LGPL-2.1 (英語)
- https://opensource.org/licenses/LGPL-3.0 (英語)
- https://licenses.opensource.jp/LGPL-2.1/LGPL-2.1.html (日本語)
- https://licenses.opensource.jp/LGPL-3.0/LGPL-3.0.html (日本語)

### GPL (GNU General Public License)

無償で利用・改造・再配布できますが、GPLのモジュールをライブラリとして呼び出すだけでも、呼び出したソースコード自体も GPL ライセンスとする必要があり、成果物の配布先に開発コードを公開する必要があります。これを **コピーレフト** とも呼びます。利用しただけでソース公開の義務が生じることから「GPLに感染する」ともいわれています。ライブラリのリンクは、静的リンクの場合はGPLに感染、動的リンクの場合は議論が分かれています。C言語、Java、Python、PHP などで通常のライブラリとして利用する場合は静的リンクとみなされます。ライブラリではなくコマンドとして呼び出す場合は感染しません。ソース公開はWeb公開や、要求に応じて媒体送付でもよいですが、媒体送付の場合は送付実費以上の金額を要求してはなりません。公開するソースのコンパイルに必要なモジュールもすべて提供する必要があります。

- https://opensource.org/licenses/GPL-2.0 (英語)
- https://opensource.org/licenses/GPL-3.0 (英語)
- https://licenses.opensource.jp/GPL-2.0/GPL-2.0.html (日本語)
- https://licenses.opensource.jp/GPL-3.0/GPL-3.0.html (日本語)

### AGPL (GNU Affero General Public License)

[GPL](https://www.tohoho-web.com/ex/license.html#gpl) をベースとしていますが、GPL が、バイナリの提供先にのみ公開義務があり、バイナリを配布しない場合、例えば、Webサーバに組み込んで Webサービスとして公開する場合は、利用者に開発コードの公開義務が無いのに対し、AGPL の場合はサービスとして公開するだけであっても、開発コードを AGPL ライセンスとし、利用者に公開する義務が生じます。

- https://opensource.org/licenses/AGPL-3.0 (英語)
- https://licenses.opensource.jp/AGPL-3.0/AGPL-3.0.html (日本語)

## リンク

- https://opensource.org/licenses/alphabetical (英語)
- https://licenses.opensource.jp/ (日本語)

---

Copyright (C) 2022 杜甫々

初版:2022年1月2日 最終更新:2022年1月2日

https://www.tohoho-web.com/ex/license.html
