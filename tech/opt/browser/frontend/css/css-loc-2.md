# 1. 【2ステップ】HTML要素の位置を指定する方法
要素の位置を指定ときは、以下の3段階を踏みます。
1. HTML要素を用意する
2. `position`でモードを選択
3. `top`,　`right`,　`bottom`,　`left`で位置を指定する

以下で、それぞれ解説します。

#### 1. HTML要素を用意する

**コード**
```html:index.html
<div class="box">This is box!</div>
```

**結果**
CSSが何も適用されていない裸のHTML要素です。
![](https://storage.googleapis.com/zenn-user-upload/49b658413e81-20240702.png)

#### 2. `position`でモードを選択
モードによって、`top`,　`right`,　`bottom`,　`left`の適用の仕方が変わります。

**コード**
以下の5つのモードから、1つだけ選びます。
```css:style.css
.box {
    position: static;
    position: relative;
    position: absolute;
    position: fixed;
    position: sticky;
}
```

#### 簡単なまとめ
|選ぶ値|使い方|注意点|
|---|---|---|
|`static`|本来あるべき場所に留まります。|`top`,　`right`,　`bottom`,　`left`を書いても適用されません。|
|`relative`|本来あるべき場所から移動します。|`top`と`bottom`は、どちらかしか書けません。`right`か`left`は、どちらかしか書けません。|
|`absolute`|親要素かHTML要素を基準に|
|`fixed`|パソコンの画面を基準に決められます。|
|`sticky`|パソコンの画面を基準に決められます。|

**結果**
位置を指定するモードを決めただけなので、何も変化はありません。
![](https://storage.googleapis.com/zenn-user-upload/49b658413e81-20240702.png)

#### 3. `top`,　`right`,　`bottom`,　`left`で位置を指定する
`top`,　`right`,　`bottom`,　`left`とその数値を記述することで、「**どの方向に**、**どれだけ**移動するか」を設定できます。

**コード**
```css:style.css
.box {
    position: relative;
    top: 50px;
    left: 100px;
}
```

なぜこのように動くかは後で話します。とにかく、`top`や`left`というプロパティによって`<div class="box">This is box!</div>`というHTML要素が動いた、ということだけ理解してもらえたらOKです！

**結果**
![](https://storage.googleapis.com/zenn-user-upload/cda7a2233932-20240702.png)

# 2. `position:`の後にくる値は5種類!
`position:`の後にくる値は、`static` `relative` `absolute` `fixed` `sticky`の五つ。これらは、実は綺麗に分類することができる。それは、下のような図にまとめることができる。
まず、以下のように
## `position: static;`の時
特に何も指定されない。ページの通常フローに従って位置付けられる。
## `position: relative;`の時
本来あるべき場所(`position: static;`の時にある場所)から`top:`, `right:`, `bottom:`, `left:`で設定した値通りに移動した場所になる。
* Other content will not be adjusted to fit into any gap left by the element.
# 3. 「ある他の長方形」基準
## ユーザの画面基準`position: fixed;` `position: sticky;`
画面に固定された位置になる。
A fixed element does not leave a gap in the page where it would normally have been located.
## 一つ上の祖先要素基準`position: absolute;`
Notice the fixed element in the lower-right corner of the page. Here is the CSS that is used

---
title: "【総まとめ】CSSでHTML要素の位置を変える"
emoji: "💬"
type: "tech" # tech: 技術記事 / idea: アイデア
topics: []
published: false
---
# CSSでHTML要素の位置を変更する手順
要素の位置を動かすときは、以下の3段階を踏みます。
1. HTML要素を用意する
2. `position`でモードを選択
3. `top`,　`right`,　`bottom`,　`left`で位置を指定する

それぞれ解説します。

# 1. HTML要素を用意する
HTMLがなければ何も始まりません。
```html:index.html
<div class="box">This is box!</div>
```
何もCSSが適用されていない、裸のHTMLです。
![](https://storage.googleapis.com/zenn-user-upload/49b658413e81-20240702.png)

# 2. `position`で配置方法を選択
以下の5つの配置方法があります。**1つのHTML要素につき1つだけ**選べます。

```css:style.css
.box {
    position: static;
    position: relative;
    position: absolute;
    position: fixed;
    position: sticky;
}
```

## ２.1. 元々の位置のままなら`static`
### 機能
もしこのように書いた場合、そのHTML要素は、元々あった場所に配置されます。そのため、その後に`top`,　`right`,　`bottom`,　`left`を書いても何も変わりません。当たり前ですね。
ちなみに、HTML要素が重なる順番を指定する`z-index`も`position:static;`では固定され、変更できません。
```css:style.css
.box {
    position: static;
}
```
固定されているので、何も変わりません。
![](https://storage.googleapis.com/zenn-user-upload/49b658413e81-20240702.png)

## 2.2. 微調整には`relative`
下の画像を見てください。これが、`position:relative;`の配置設定のイメージです。
![](https://storage.googleapis.com/zenn-user-upload/0e4258a4562c-20240704.png =400x)
また、`top`と`bottom`がどちらも定義された場合は`top`が適用されます。
そして、`left`と`right`がどちらも定義された場合は`left`が適用されます。
例えば、元々の位置から**右に**`50px`, **下に**`100px`ズラしたところにHTML要素を置きたい時を考えましょう。その場合は、
```css:style.css
.box {
    position: relative;
    top: 100px;
    rigt: right: 50px;
}
```
あるいは、元々の位置から**左に**`50px`, **下に**`100px`ズラしたところにHTML要素を置きたい時は、
```css:style.css
.box {
    position: relative
    top: 100px;
    left: 50px;
}
```
![](https://storage.googleapis.com/zenn-user-upload/e57089788f74-20240704.png =400x)

## 2.3. 子要素を親要素上で配置する`absolute`
Webサイトを開発していると、親要素の中に小要素を並べる時があります。
その時に、小要素は親要素を基準に位置を決める必要があります。そのような時に`absolute`を使います。
その前にまず、配置の基準となる親要素に`relative`を与える必要があります。もし、親要素に`relative`が与えられなかった場合、ユーザのデバイスの画面(ビューポートと言います)を基準に配置されてしまいます。
次に、小要素に`absolute`を与えます。
```css:style.css
.container {
    position: relative;
}
```
コンテナというクラスをもつ親要素と、その中に属するボックスというクラスをもつ子要素を作りました。
```html:index.html
<div class="container">
    <div class="box">This is box!</div>
</div>
```
基準としたい親要素は`relative`にします。そして、実際に配置したい小要素は`absolute`にします。
```css:style.css
.container {
    position: relative;
}

.box {
    position: absolute;
}
```
## 2.4. 固定するなら`fixed`
`fixed`を持つHTML要素は画面の端っこを基準に大きさを変えたり配置したりできます。
`fixed`を与えられたHTML要素は、元々あった場所からその姿を消します。そして、指定したところに
`fixed`を適用されたHTML要素は、固定されます。いくらスクロールしても、ずっとその場所にあります。
```css:style.css
.box {
    position: fixed;
    top: 100px;
    right: 50px;
    bottom: 80px;
    left: 60px;
}
```
## 2.5. 画面内にある時はスクロールできる`sticky`
画面の端っこを基準に固定するのは`fixed`と同じです。しかし、`sticky`は`fixed`と異なり、通常フロー残ります。そのため、通常フローが画面上にある時は普通にスクロールできます。
下のような広告を見たことはありますか...？海外のデスクトップアプリのサイトでよくあります。
![](https://storage.googleapis.com/zenn-user-upload/159f64534406-20240706.gif =500x)