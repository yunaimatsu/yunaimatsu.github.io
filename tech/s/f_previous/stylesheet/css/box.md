# ボックスモデルとは？ －直感的に
まず、下の写真を見てください。色んなWebページですが、何やら長方形が青や緑、ピンクで色付けされたり、様々な情報が書いてある吹き出しがあったりします。
これらは、Webブラウザにある「検証」という機能を使った写真です。これによって、あらゆるWebページのCSSの設定状況を全て詳細に確認することができます。
#### Mercariのページを「検証」する
![](https://storage.googleapis.com/zenn-user-upload/23972d4f01b6-20240511.png =600x)
#### Amazonのページを「検証」する1
![](https://storage.googleapis.com/zenn-user-upload/427cd2982b69-20240511.png =400x)
#### Amazonのページを「検証」する2
![](https://storage.googleapis.com/zenn-user-upload/73a1a032c16c-20240511.png =400x)

> 以下は「検証」の方法です。
> 1. `Ctrl` + `Shift` + `I`(Windows), `CMD` + `Option` + `I`(Mac)を押す
> 2. 赤い丸で囲ってあるボタンをクリック
>  ![](https://storage.googleapis.com/zenn-user-upload/36ef35e4b115-20240511.png)
> 3. カーソルを任意の部分に当てるとHTML/CSSの情報が分かる。


#### 「検証」機能を使って様々なサイトのCSSを眺めていると、Web上のパーツは全て長方形だと気づくでしょう。そして、その長方形たちこそが、本稿のテーマである「ボックスモデル」に基づいて設定された長方形たちなのです。

# ボックスモデルとは？ －理論的に
次に、下の図を見てください。これは、ボックスモデルと呼ばれるモデルの、各パーツの名称を表したものです。
![](https://storage.googleapis.com/zenn-user-upload/e4634fc393e2-20240505.png =500x)*Cf. [CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp)*
先ほど述べた通り、Web上の全てのパーツは長方形が元にできています。しかし、長方形は長方形でも、幾つかの長方形が複雑に重なったり繋がったりして存在しているように見えます（冒頭のMercariやAmazonのサイトの「検証」を見てもらえればわかると思います）。

実は、それらの長方形は全て、このボックスモデルを基準に大きさやデザインが設定されています。そのため、Web開発をするときはこの図を頭に入れておく必要があります。

参考までにそれぞれの名称の由来を紹介します。
||日本語での呼ばれ方|意味|身近な例|
|---|---|---|---|
|content|コンテンツ|内容|すでに日本語としても使われている|
|padding|パディング|パッド、間に挟むクッション|傷パワーパッド（絆創膏）、スーツの「肩パッド」|
|border|ボーダー|境界|「![](https://storage.googleapis.com/zenn-user-upload/0dbfc738b816-20240612.png)ボーダーライン」、「ボーダレスな世界」|
|margin|マージン|周縁、すみっこ|「マージンを取る」などというが、「周縁、すみっこ」の意味とは異なる...|

ただ、「内側から**コンテンツ**→**パディング**→**ボーダー**...」と丸暗記するのはやめてください。
より本質的な覚え方は以下の通りです。
「まず、**コンテンツ**という長方形がある」
「次に、それを囲む**ボーダー**がある」
「コンテンツとボーダーの間の空間が**パディング**、ボーダーの外側の空間が**マージン**である」

以上の覚え方を踏まえ、本稿では以下のような順番で説明していきます。なぁに、大したことはありません。一つずつ理解していきましょう。
1. コンテンツ
2. ボーダー
3. パディング
4. マージン

# 1. コンテンツ
では早速、コンテンツの設定をしましょう。ボックスモデルで確認すると、以下のオレンジ色の部分に該当します。
![](https://storage.googleapis.com/zenn-user-upload/d4783b270fc6-20240513.png =500x)

## デフォルトの幅と高さを設定する
```css:style.css
.box {
    width: ;
    height: ;
}
```
## 幅と高さの最大値と最小値を設定する
今、上でコンテンツの幅と高さを設定しました。しかし、それだけだと、以下のようなバグが起きてしまう可能性があります。
* 画面サイズを小さくした時に、大きすぎて入らない
* 画面サイズを大きくした時に、小さすぎてみづらい。
* 意図しないサイズに伸びたり、歪んだりしてデザインが壊れる。
これらを防ぐために、コンテンツの高さと幅には最大値・最小値を設定することができます。

さまざまな画面サイズで、利用可能なスペースに応じてレイアウトを調整することができます。

ビューポートのサイズに基づいて特定のスタイルを適用するためにメディアクエリと組み合わせてよく使用されます。このテクニックは、レスポンシブウェブデザインとして知られ、ウェブサイトがさまざまなデバイスや画面解像度で見栄えよく機能することを保証します。

基本的に、最大値には**相対単位**を、最小値には**絶対単位**を用いることが一般的です。

```css:style.css
.box {
    /* 横 */
    max-width: ;
    min-width: ;

    /* 縦 */
    max-height: ;
    min-height: ;
}
```

# 2. ボーダー
続いて、ボーダーの設定をしましょう。ボックスモデルで確認すると、以下の緑色の部分に該当します。
![](https://storage.googleapis.com/zenn-user-upload/e4634fc393e2-20240505.png =500x)
ボーダーに関しては、(**2.1.**)スタイル(**2.2.**)太さ(**2.3.**)色の３つの要素を設定できます。
これら三つは、2.1~2.3

## 2.1. ボーダーのスタイルのみを設定する
```css:style.css
.box {
    /* 辺ごとに分けて設定する */
    border-top-style: ;
    border-right-style: ;
    border-left-style: ;
    border-bottom-style: ;

    /* 4辺まとめて設定する */
    border-style: TOP RIGHT BOTTOM LEFT;
}
```
## 2.2. ボーダーの太さのみを設定する
```css:style.css
.box {
    /* 辺ごとに分けて設定をする */
    border-top-width: ;
    border-right-width: ;
    border-bottom-width: ;
    border-left-width: ;

    /* 4辺まとめて設定する */
    border-width: TOP RIGHT BOTTOM LEFT;
}
```
## 2.3. ボーダーの色のみを設定する
```css:style.css
.box {
    /* 辺ごとに異なる設定をする */
    border-top-color: ;
    border-right-color: ;
    border-bottom-color: ;
    border-left-color: ;

    /* 4辺まとめて設定をする */
    border-color: TOP RIGHT BOTTOM LEFT;
}
```
## 2.４. スタイル・太さ・色を一括で設定する
```css:style.css
.box {
    /* 辺ごとに分けて設定をする */
    border-top: STYLE WIDTH COLOR;
    border-right: STYLE WIDTH COLOR;
    border-bottom: STYLE WIDTH COLOR;
    border-left: STYLE WIDTH COLOR;

    /* 4辺まとめて設定をする */
    border: STYLE WIDTH COLOR;
}
```
## 2. 【番外編】 角丸を設定する
ボーダーは長方形ですが、角に丸みを持たせることもできます。
丸みの半径を指定することで丸みの程度をカスタマイズできます。
```css:style.css
.box {
    /* 点ごとに分けて設定する */
    border-top-left-radius: ;
    border-top-right-radius: ;
    border-bottom-right-radius: ;
    border-bottom-left-radius: ;

    /* 4辺まとめて設定する */
    border-radius: TOP-LEFT TOP-RIGHT BOTTOM-RIGHT BOTTOM-LEFT;
```
## 2. 【番外編】　ボーダーを画像に設定する
実は、細長い画像をボーダーとして使うこともできます。
気になる方はこちらをご覧ください。
https://zenn.dev/yunaimatsu/articles/43adb58779c5c2

# 3. パディング
そして、パディングの設定をしましょう。ボックスモデルで確認すると、以下のオレンジ色の部分に該当します。
![](https://storage.googleapis.com/zenn-user-upload/648d34bcb6d5-20240513.png =500x)
```css:style.css
.box {
    /* 辺ごとに分けて設定する */
    padding-top: ;
    padding-right: ;
    padding-bottom: ;
    padding-left: ;

    /* 4辺まとめて設定する */
    padding: TOP RIGHT BOTTOM LEFT;
}
```

# 4. マージン
最後に、マージンの設定をしましょう。ボックスモデルで確認すると、以下のオレンジ色の部分に該当します。
![](https://storage.googleapis.com/zenn-user-upload/648d34bcb6d5-20240513.png =500x)
```css:style.css
.box {
    /* 辺ごとに分けて設定する */
    margin-top: ;
    margin-right: ;
    margin-bottom: ;
    margin-left: ;

    /* 4辺まとめて設定する */
    margin: TOP RIGHT BOTTOM LEFT;
}
```
# ボックスモデルとスクロール
```css:style.css
scroll-behavior
scroll-snap-type
scroll-snap-align
```

```css:style.css
sroll-margin: ;
-top: ;
-right: ;
-bottom: ;
-left: ;
```

```css:style.css
scroll-padding: ;
-top: ;
-right: ;
-bottom: ;
-left: ;
```

# ボックスモデルの例外処理
## 要素同士の重なり・混合
```css:style.css
p {
    opacity: 0;
    opacity: NUM(0~1);
    opacity: 1;

    filter: none;
    filter: blur();
    filter: brightness();
    filter: contrast();
    filter: drop-shadow();
    filter: grayscale();
    filter: hue-rotate();
    filter: invert();
    filter: opacity();
    filter: sepia();
    filter: url();

    background-filter: none;
    background-filter: blur();
    background-filter: brightness();
    background-filter: contrast();
    background-filter: drop-shadow();
    background-filter: grayscale();
    background-filter: hue-rotate();
    background-filter: invert();
    background-filter: opacity();
    background-filter: sepia();
    background-filter: url();

    isolation: auto;
    isolation: isolate;

    mix-blend-mode: normal;
    mix-blend-mode: multiply;
    mix-blend-mode: screen;
    mix-blend-mode: overlay;
    mix-blend-mode: darken;
    mix-blend-mode: lighten;
    mix-blend-mode: color-dodge;
    mix-blend-mode: color-burn;
    mix-blend-mode: hard-light;
    mix-blend-mode: soft-light;
    mix-blend-mode: difference;
    mix-blend-mode: exclusion;
    mix-blend-mode: hue;
    mix-blend-mode: saturation;
    mix-blend-mode: color;
    mix-blend-mode: luminosity;

    
    background-blend-mode: normal;
    background-blend-mode: multiply;
    background-blend-mode: screen;
    background-blend-mode: overlay;
    background-blend-mode: darken;
    background-blend-mode: lighten;
    background-blend-mode: color-dodge;
    background-blend-mode: color-burn;
    background-blend-mode: hard-light;
    background-blend-mode: soft-light;
    background-blend-mode: difference;
    background-blend-mode: exclusion;
    background-blend-mode: hue;
    background-blend-mode: saturation;
    background-blend-mode: color;
    background-blend-mode: luminosity;
}
```
## 要素のはみ出し
```css:style.css
text-overflow
```

## 強制カラーモード
```css:style.css
p {
    forced-color-adjust: auto;
    forced-color-adjust: none;
    forced-color-adjust: preserve-parent-color;
}
```

### 1. Box itself
```css:style.css
* {
    width: ;
    height: ;
    <!-- max -->
    max-width: ;
    max-height: ;
    <!-- minimum -->
    min-width: ;
    min-height: ;
    }
```
### 2. Padding
パディングの大きさの設定の仕方は2通り。
1. 四辺ごとに設定する
```css:style.css
* {
    padding-top: ;
    padding-right: ;
    padding-left: ;
    padding-bottom: ;
    }
```

2. 四辺纏めて設定する
```css:style.css
* {
    margin: TOP RIGHT BOTTOM LEFT;
    }
```
### 3. Border
### 4. Margin
マージンの大きさの設定の仕方は2通り。
1. 四辺ごとに設定する
```css:style.css
* {
    padding-top: ;
    padding-right: ;
    padding-left: ;
    padding-bottom: ;
    }
```

2. 四辺纏めて設定する
```css:style.css
* {
    padding: TOP RIGHT BOTTOM LEFT;
    }
```

### Outline