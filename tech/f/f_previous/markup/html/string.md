---
layout: '@layout/Layout.astro'
---

CSSを作る時に考える必要があるパラメータ
1. Initial value
2. Inheritance
3. HTML element to which CSS is applied
4. Module to which property belong
 
段組
## layout
column-count
column-width
columns

column-gap
solumn-span
column-fill

/* borderと同じ感じ */
column-rule-style
column-rule-width
column-rule-color
column-rule

![](https://storage.googleapis.com/zenn-user-upload/e70dfed885b4-20240520.jpeg)
widows
orphans

break-before
break-after
break-inside
## 文字の定義
```html:index.html
<span></span>
<a>リンク</a>
```
### 強調関連
```html:index.html
<em>強調</em>
<strong>強調</strong>
<mark>強調</mark>
<b>(現在は使われない)太字</b>
<u>アンダーライン</u>
<i>イタリック</i>
```
### 文字の大きさ
```html:index.html
<small>小さい文字</small>
<sup>上付き文字</sup>
<sub>下付き文字</sub>
```
### 編集関連
```html:index.html
<s>無効</s>
<del>削除</del>
<ins>追記</ins>
```
### 用語関連
```html:index.html
<dfn>定義</dfn>
<abbr>略称</abbr>
```
### 書籍関連
```html:index.html
<cite>作品のタイトル</cite>
<q>引用</q>
```
### データ関連
```html:index.
<data>データ</data>
<time>時間・日付</time>
```
### ふりがな（日本語専用）
```html:index.html
<ruby>
    明日
    <rp>(</rp>
        <rt>Ashita</rt>
    <rp>)</rp>
</ruby>
```
### 書字方向
```html:index.html
<bdi>異なる書字方向</bdi>
<bdo>書字方向を手動で設定する</bdi>
```
### プログラミング関連
```html:index.html
<code>プログラミング言語の文章</code>
<var>変数</var>
<kbd>入力</kbd>
<samp>出力</samp>
```
## CSS
```css:style.css
.p {
    color: ;
    font: -style -variant -weight -size -line-height -stretch -family;
    /* -size -family 以外は省略可能 */

    font-style: ( normal | italic | oblique );
    font-variant: ( -caps | -numeric | -alternates | -ligatures | -east-asian );
        font-variant-caps: ( normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps );
        font-variant-numeric: ( normal | ordinal | slashed-zero ) ( lining-nums | oldstyle-nums ) ( proportinal-nums | tabular-nams ) ( diagonal-fractions | stacked-fractions );
        @font-feature-values
        font-variant-alternates: ( normal | historical-forms | stylistic(カスタム名) | styleset(random_name, random_name) | character-variant(random_name, random_name) | swash(random_name) | ornaments(random_name) | annotation(random_name) );
        font-variant-ligatures: ( normal | none ) ( common-ligatures | no-common-ligatures )( discretionary-ligatures | no-discretionary-ligatures ) ( historical-ligatures | no-historical-ligatures ) ( contextual | no-contextual );
        font-variant-east-asian: ( normal | ruby ) ( simplified | traditional | jis78 | jis83 | jis90 | jis04 ) ( proportional-width | full-width );
    font-weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | normal | bold | bolder | lighter ;
    /* 300以下に設定したがその太さがなかった場合
    より細いサイズ探す→なかったらより太いフォント探す。
    400に設定したがその太さがなかった場合
    500を試す→なかったら300以下の場合と同じ方法を試す。
    500に設定したがその太さがなかった場合
    400を試す→なかったら300以下の場合と同じ方法を試す。
    600以上に設定したがその太さがなかった場合
    より太いサイズ探す→なかったらより細いフォント探す
    */
    font-size: \abs(xxx-large | xx-large | x-large | large | medium | small | x-small | xx-xmall |) \rel( larger | smaller ) \num( 数字+単位 | 数字+% );
    line-height: normal | num+unit | num | num%;
    /*
    normal: フォントサイズに従って自動的に設定する
    num+unit:
    num: フォントサイズにこの数値をかけた値を行の高さとして設定する
    num%: フォントサイズに対する割合を行の高さとして設定する
    */
    font-stretch: normal | ultra-expanded | extra-expanded | expanded | semi-expanded | condensed | extra-condensed | ultra-condensed | num+%;
    font-family: ();
    /*
    `,`で複数のfont-familyを設定します。複数設定しておくと、前から順番に適用を試みます。そして、そのPC・ブラウザに用意されているフォントが見つかったら、そのフォントが実際に適用されて表示されます。

    ちなみに、フォントには２種類あります。特殊フォントとデフォルト・フォントです。特殊フォントは、開発者が新たに追加する必要があるフォントです。デフォルト・フォントはどのPC・ブラウザにも元から用意されているフォントです。
    以下がデフォルトフォントの一覧です。
    ( serif | sans-serif | monospace | cursive | fantasy | emoji | math | fangsong | system-ui | ui-serif | ui-sans-serif | ui-monospace | ui-rounded )
    */
}
```
## 大文字/小文字、全角/半角に関する設定
```css:style.css
p {
    text-transform: none; 
    text-transform: capitalize; /* 単語の先頭を全て大文字にする */
    text-transform: uppercase; /* 全ての文字を大文字にする */
    text-transform: lowercase; /* 全ての文字を小文字にする */
    text-transform: full-width; /* 日本語と中国語でアルファベットや数字・記号を強制的に全角に統一する。 */
    text-transform: full-size-kana; /* Webコンテンツにおいてルビで使用される捨てカナ（小書きのカナ）を通常のカナに変換 */
}
```
## 文字の向き
```html:index.html

```
一応CSSでも設定できるけど、基本はHTMLで。
```css:style.css
p {
    direction: ltr;
    direction: rtl;
}
```
```css:style.css
p {
    writing-mode: horizontal-tb; /* 横書き、上から下へ行ブロックを並べる */
    
    writing-mode: vertical-rl; /* 縦書き、ブロック配置は右から左 */
    writing-mode: vertical-lr; /* 縦書き、ブロック配置は左から右 */

    /* 【以下、FireFox以外では非対応】 */
    writing-mode: sideways-rl; /* 縦書き、ブロック配置は右から左、全て横倒し */
    writing-mode: sideways-lr; /* 縦書き、ブロック配置は左から右、全て横倒し */
}
p {
    text-orientation: mixed;　/* 日本語なら縦書き・その他の言語なら横倒しにする */
    text-orientation: upright; /* 縦にする */
    text-orientation: sideways; /* 全字を横倒しにする */
}

p {
    text-combine-upright: none; /* 縦中横にしない */
    text-combine-upright: all; /* 縦中横にする、全ての文字を1文字分のスペースに詰め込む */
    text-combine-upright: digits ( 2 | 3 | 4 ); /* 指定した桁数以下の数字を1文字分スペースの縦中横にする */
}
未完成！！！！！！！！！
/* 書字方向の設定のコンフリクトをどう解決するか */
p {
    unicode-bidi: normal; /* 何もしない */
    unicode-bidi: enbed; /* 双方向アルゴリズムに加えてdirectionプロパティの値に応じた書字方向決定アルゴリズムが適用される表示する */
    unicode-bidi: bidi-override; /*  */
    unicode-bidi: isolate;
    unicode-bidi: isolate-override;
    unicode-bidi: plaintext;
}
```
## 文章の揃え位置、文章の均等割つけ、改行の方法（ハイフネーション）
```css:style.css
p {
    text-align: start; /* 左から右に進む表記ならleft, 右から左に進む表記ならrightとして解釈される。 */
    text-align: end;　/* 行の終了位置に揃える */
    text-align: left;　/* 左揃え */
    text-align: right; /* 右揃え */
    text-align: center; /* 中央揃え */
    text-align: justify; /* 最終行を除いて均等割つけ */
    text-align: match-parent; /* 親要素の値を継承する */
    text-align: justify-all; /* 【対応ブラウザなし！】最終行も強制的に均等割つけ */

    text-align-last: auto; /* text-alignプロパティに準じる、justifyならstartとして解釈される */
    text-align-last: start; /* 開始位置 */
    text-align-last: end; /* 終了位置 */
    text-align-last: left; /* 左 */
    text-align-last: right; /* 右 */
    text-align-last: center; /* 中央揃え */
    text-align-last: justify; /* 均等割つけ */
    text-align-last: match-parent; /* 親要素の設定を継承する */

    vertical-align: baseline; /* 親要素のベースラインの位置になる */
    
    vertical-align: super; /* 親要素の上つき文字の位置 */
    vertical-align: sub; /* 親要素の下つき文字の位置 */
    
    vertical-align: top; /* [親要素or先頭行のセル]の上端 */
    vertical-align: bottom; /* [親要素or先頭行のセル]の下端 */
    vertical-align: middle;
    
    vertical-align: text-top;
    vertical-align: text-bottom;
    
    vertical-align: NUM+UNIT;　/* ベースラインから移動する距離 */
    vertical-align: NUM%; /* 要素の行の高さに対する割合 */

    text-justify: auto;　/* ブラウザが自動的に適切な値を指定する */
    text-justify: none; /* 均等割付けをしない */
    text-justify: inter-word; /* 単語間を調整して均等割付けする */
    text-justify: inter-character;　/* 文字間を調整して均等割つけする */

    hyphens: manual; /* HTMLに&shy;だけを基準に改行 */
    hyphens: auto; /* HTMLに&shy;があれば改行するが、その他の場所でも適切な場所があれば自動で改行する */
    hyphens: none; /* &shy;があっても単語を分割しない */
}
```

### Font-height
```css:style.css
.p {
    font-height: ;
}
```
### Font-kerning
```css:style.css
.p {
    font-kerning: auto | normal | none;
}
```
![](https://storage.googleapis.com/zenn-user-upload/556bfde8033f-20240522.png =600x)*[モリサワ様のHP](https://www.morisawa.co.jp/culture/dictionary/1988)より引用　(最終アクセス: 2024年　5/22 11:40)*

### Background
```css:style.css
. {
    background: {color | image | repeat | position | attachment | clip | size | origin};

    background-color: COLOR;

    background-image: none;
    background-image: url(); /* 複数指定可能。指定した順に一番前に来る。 */
    background-image: linear-gradient(); /* 複数指定可能。指定した順に一番前に来る。 */
     
    background-repeat: repeat; /* 背景画像を繰り返し表示.はみ出たら切り取る. */
    background-repeat: space; /* 背景画像を繰り返し表示.はみ出ないよう間隔を調整. */
    background-repeat: round; /* 背景画像を繰り返し表示.はみ出ないよう画像の比率を調整. */
    background-repeat: repeat-x; /* x方向にのみ繰り返す */
    background-repeat: repeat-y; /* y方向にのみ繰り返す */
    background-repeat: no-repeat; /* 繰り返さない */

    background-position: NUM+UNIT;
    background-position: NUM%;
    background-position: top;
    background-position: right;
    background-position: bottom;
    background-position: left;
    background-position: center;

    background-attachment: scroll;
    background-attachment: fixed;
    background-attachment: local;

    background-clip: border-box;
    background-clip: padding-box;
    background-clip: content-box;
    background-clip: text;

    background-size: cover;
    background-size: contain;
    background-size: auto;
    background-size: NUM+UNIT;
    background-size: NUM%;

    background-origin: border-box;
    background-origin: padding-box;
    background-origin: content-box;
}
```
## 傍点
```css:style.css
p {
    text-emphasis: STYLE COLOR;
    text-emphasis-color: ;
    text-emphasis-style: ( none | filled | open | ONE_RANDOM_CHAR ) ( dot | circle | double-circle | triangle | sesame );

    text-emphasis-position: ( over | under | right | left );
}
```

## 傍線・下線
```css:style.css
p {
    text-decoration: -line -style -color -thickness;
    text-decoration-line: ( none | underline | overline | line-through );
    text-decoration-style: ( solid | double | dotted | dashed | wavy );
    text-decoration-color: ( COLOR | currentclor );
    text-decoration-thick: ( auto | from-font | NUM+UNIT | NUM+% );
}

p {
    text-underline-position: ( auto | under | left | right );
}
```
## かげ
```css:style.css
p {
    text-shadow: X-COR Y-COR WIDTH COLOR;
}
```
## スペース、改行
```css:style.css
p {
    text-indent: ( 0 | num+unit | num% | each-line | hanging );

    letter-spacing: normal;
    letter-spacing: NUM+UNIT;
    word-spacing: normal
    word-spacing: NUM+UNIT;

    tab-size: NUM(+UNIT);

    white-space: normal; /* no setting */
    white-space: nowrap; /* space, tab, new-line are displayed as 'hankaku' */
    white-space: pre; /* space, tab, new-line are displayed as usual manner */
    white-space: pre-wrap; /* same with `pre` but not automatically made new-line */
    white-space: pre-line; /* new-line is displayed as usual manner and space and tab are displayed as 'hankaku' */
    white-space: break-spaces; /* same with `pre-line` but not automatically made new-line */

    word-break: normal; /* 改行方法を指定しない */
    word-break: keep-all; /* ja, ch, ko の単語間では改行しない */
    word-break: break-all; /* いつでも改行する。ただし、`line-break`優先 */
    word-break: brewak-word; /* 【互換性を考えると非推奨】適切に改行でき場所が他にない→単語の途中でも改行 */

    line-break: auto; /* 禁則処理を設定せず、ブラウザに任せる */
    line-break: loose; /* 必要最低限の禁則処理を設定する */
    line-break: normal; /* 通常の禁則処理を適用する */
    line-break: strict; /* 厳格な禁則処理を適用する */
    line-break: anywhere; /* どこでも改行を許可し、hyphenationを禁止する */

    overflow-wrap: normal; /* 単語間の空間など、通常折り返しが許可されている位置のみで改行する */
    overflow-wrap: break-word; /* 適当な折り返し機会がない時、単語の途中で改行する */
    overflow-wrap: anywhere; /*【FireFox以外使用不可！】 どこでも改行を許可、hyphenationを禁止する。ただし、なるべく沢山折り返す */
}
```
# フォントの位置

text-indent
letter-spacing
word-spacing
tab-size
white-space
word-break
line-break
### text-combine-upright
### text-orientation
### （使わない方がいい）Font-feature-settings
```css:style.css
.p {
    font-feature-settings: ( normal | tag_1, tag_2, tag_3,..., tag_n ) ( 0 | 1 ) ;
}
```

## リスト
css:style.css
#### HTML
```html:index.html
<ol>
    <li></li>
    <li></li>
    <li></li>
</ol>
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>
```
#### CSS
```css:style.css
.item {
    /* 分けて設定する */
    list-style-position: ( inside | outside );
    list-style-type: ; ( none | mojiretsu | disc | circle | square 
 )
    list-style-image: ;

    /* 纏めて設定する */
    list-style: ( type | position | map );
}
```

tagを選択した場合、( 0 | 1 )で機能の有効・無効を設定する。