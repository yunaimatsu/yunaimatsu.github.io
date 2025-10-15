---
title: "【永久保存版】グリッドレイアウト"
emoji: "🌐"
type: "tech"
topics:
  - "css"
  - "html"
  - "web"
published: true
published_at: "2024-05-21 02:05"
---

# CSSのグリッドとは
グリッドは２次元の配置を設定するためのツールです。
### グリッドとは、Webページ上を区切って整理するマス目のような物。
以下のスクリーンショットの様に、Webページを区切って、その中に様々なコンテンツを追加していく。
![](https://storage.googleapis.com/zenn-user-upload/1a979bafe289-20240507.jpeg =400x)*[W3の公式ドキュメント](https://www.w3schools.com/css/css_grid.asp)より*
# CSSのグリッドで使われる概念
### カラム(column)
「列」という意味です。COLUMNAはラテン語で「柱」という意味です。新聞や雑誌などの「コラム」と同じ語源です。
![](https://storage.googleapis.com/zenn-user-upload/abe525f6f98c-20240507.jpeg =400x)

### ロー(row)
「行」という意味です。横書きの本やノートで1行, 2行, ...と数える時と同じです。
![](https://storage.googleapis.com/zenn-user-upload/01f2b37a283e-20240507.jpeg =400x)

### ライン(line)
「線」という意味です。
![](https://storage.googleapis.com/zenn-user-upload/292c6476e8a4-20240507.jpeg =400x)

# グリッドの骨組みの作り方
### 1. HTMLを用意する。
コンテナとアイテムに分けます。
|名称|働き|
|---|---|
|アイテム|骨組みに嵌め込む要素|
|コンテナ|骨組み|

これは、僕が個人サイトにある学習ページの実際のコードです。
```html:index.html
<div class="container">
    <div class="item">言語</div>
    <div class="item">チーム・個人のDX</div>
    <div class="item">情報工学</div>
    <div class="item">人文学</div>
    <div class="item">経済学</div>
</div>
```
以上のコードだけだと、下のようになりました。
![](https://storage.googleapis.com/zenn-user-upload/7a7d7b14df34-20240518.png)
### 2. グリッドを有効にする
CSSでコンテナのプロパティとして`display: grid;`を追加することで、グリッドが使えるようになる。
```css:style.css
.container {
    display: grid;
    ...
}
```
グリッドを有効にしただけなので、まだ変化はありません。
![](https://storage.googleapis.com/zenn-user-upload/7a7d7b14df34-20240518.png)
### 3. グリッドの骨組みのサイズを設定する(`-template-`)
```css:style.css
.container {
    <!-- 縦と横で分けて設定する -->
    grid-template-columns: [line-name] WIDTH;
    grid-template-rows: [line-name] HEIGHT;

    <!-- 纏めて設定する -->
    grid-template: ROWS COLUMNS AREAS;
}
```
同じ大きさの行や列を複数回繰り返す場合は、`repeat()`関数を使う。`repeat()`関数は２つの引数をとる。
|第1引数|第2引数|
|---|---|
|それを並べる個数|一つあたりのカラムの幅、ローの高さ|
```css:style.css
.container {
    grid-template-columns: repeat(n, Xpx);
    <!-- Xpxの列を横にn個並べる -->
    grid-template-rows: repeat(m, Ypx);
    <!-- Ypxの行を縦にm個並べる -->
}
```
3.番外編: グリッドエリアに名前をつける
例えば横に2, 縦に3のグリッドがある場合は以下のように名前をつける。
```css:style.css
.container {
    grid-template-areas:
        "area1 area2"
        "area3 area4"
        "area5 area6";
}
```
例えば横に3, 縦に5のグリッドがある場合は以下のように名前をつける。
```css:style.css
.container {
    grid-template-areas:
        "area1 area2 area3"
        "area4 area5 area6"
        "area7 area8 area9"
        "area10 area11 area12"
        "area13 area14 area15";
}
```
### 4. グリッド同士の間隔の大きさを設定する
4.1. 横方向の間隔、縦方向の間隔をそれぞれ設定する
```css:style.css
.container {
    row-gap: ;
    column-gap: ;
}
```
4.2. 横方向・縦方向を纏めて設定する
```css:style.css
.container {
    gap: ROW COLUMN;
}
```
### 5. 明示的にグリッドの値を設定しなかった時の大きさ(`-auto-`)
```css:style.css
.container {
    grid-auto-rows: HEIGHT;
    grid-auto-columns: WIDTH;
    <!-- `grid-auto-`には`-areas`がない -->
}
```
# 作った骨組みにアイテムを配列する
### 6. アイテムが骨組みに並ぶ順番を変更する
自動のアイテム配列設定を変更する。デフォルトでは、左上から右下に配置されるように設定されている。これを変更したい場合は`{row, column, dense}`の中から選ぶ。
```css:style.css
.container {
    grid-auto-flow: {row, column, dense};
}
```
### 7. 行・列の始点・終点を基準に設定する
#### 行の始点・終点を基準
7.1. 始点と終点を別々に設定する。
```css:style.css
.container {
    grid-row-start: ;
    grid-row-end: ;
}
```
7.2. 始点・終点を基準に纏めて設定する。
```css:style.css
.container {
    grid-row: START END;
}
```
#### 列の始点・終点を基準
7.3. 始点と終点を別々に設定する。
```css:style.css
.item {
    grid-column-start: ;
    grid-column-end: ;
}
```
7.4. 始点と終点を纏めて設定する。
```css:style.css
.item {
    grid-column: START END;
}
```
#### 列も行も纏めて設定する。
7.5. 
```css:style.css
.item {
    grid-area: ROW-START COLUMN-START ROW-END COLUMN-END;
}
```
# 全てを一発で設定する神要素
ここまで「骨組みを作る」と「そこにアイテムを嵌め込む」の二段階に大きく分けてグリッドの使い方を紹介しました。しかし、これらの中の重要な部分を取り出して一発で全て設定できる要素があります。
```css:style.css
.container {
    grid: TEMPLATE-ROWS TEMPLATE-COLUMNS TEMPLATE-AREAS AUTO-ROWS AUTO-COLUMNS AUTO-FLOW;
}
```
> この記事で直す所
> * Explain more about `grid-auto-`