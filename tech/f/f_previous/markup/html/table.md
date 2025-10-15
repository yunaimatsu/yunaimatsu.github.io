

# HTML
### コードの全体像
```html:index.html
<table>
  <!-- 1 -->
  <caption>
    ここに表のタイトルや、説明を書くことができます。
  </caption>
  <!-- 2 -->
  <thead>
    <tr>
      <th>見出し1</th>
      <th>見出し2</th>
      <th>見出し3</th>
      <th>見出し4</th>
    </tr>
  </thead>
  <!-- 3 -->
  <tbody>
    <tr>
      <td>1の中身</td>
      <td>2の中身</td>
      <td>3の中身</td>
      <td>4の中身</td>
    </tr>
  </tbody>
  <!-- 4 -->
  <tfoot>
  </tfoot>
</table>
```
### コードの詳細
#### `<table></table>`
このタグで囲まれた範囲が、1つの表になります。
#### `<caption>~</caption>`
表のタイトルや説明を書くことができます。`<p>`や`<h1>`など、普通のHTMLと同じ要素を使って自由に書くことができます。
#### `<thead>~</thead>`, `<tbody>~</tbody>`, `<tfoot>~</tfoot>`
この3つは、纏めて説明する。
まず、`thead`, `tbody`, `tfoot`という文字列をよく見てみよう。最初に全て,`t`がついている。これは、table(「表」という意味)の頭文字だ。
つまり、`thead`, `tbody`, `tfoot`はそれぞれ、
「表の頭」、「表の体」、「表の足」を表している。
| 見出し1 | 見出し2 | 見出し3 | 見出し4 | 
|---|---|---|---|
|データ1|データ2|データ3|データ4|
|データ5|データ6|データ7|データ8|
|データ9|データ10|データ11|データ12|
|データ13|データ14|データ15|データ16|
|**合計1**|**合計2**|**合計3**|**合計4**|

上記のコードを書くと、以下のようになる。`thead`, `tbody`, `tfoot`は以下の部分を表す。

![](https://storage.googleapis.com/zenn-user-upload/706010dc95be-20240511.png =300x)

実は、これらの`thead`, `tbody`, `tfoot`は使わなくても構わない。

しかし、下のようなメリットがあるため、原則追加するようにしよう。
* 多くの表はhead, body, footの3つの部分に分けることができる→ `thead`, `tbody`, `tfoot`をつけると、それぞれにまとめて異なるデザインをCSSで設定することができる。

#### `<tr>~</tr>`
1行を表す。
#### `<th>~</th>`と`<td>~</td>`
`<th>~</th>`と`<td>~</td>`はどちらも、`<tr>~</tr>`で挟める要素で、1マスを表す。
`<th>~</th>`と`<td>~</td>`の違いは、マスに入る文字のデザインだ。
||文字の太さ|文字の位置|
|---|---|---|
|`<th>~</th>`|太字|真ん中に来る|
|`<td>~</td>`|細字(デフォルト)|左寄せ|

`<th>~</th>`はよく一番上の行のマスに使われ、`<td>~</td>`は2行目以降のマスで使われることが多い。

```html:index.html
<table>
  <caption>
    ここに表のタイトルや、説明を書くことができます。
  </caption>
  <thead>
    <tr>
      <th>
        見出しは、太字になり・中央寄せさた状態になります。
      </th>
    </tr>
  </tbody>
  <tfoot>
  </tfoot>
</table>
```


#### `<colgroup>~</colgroup>`と`<col>~</col>`
この要素は、デザインのためだけに存在する。CSSである列だけデザインを変えたい時にこの要素を使う。これに関して、W3Schoolsの記事が分かりやすいので引用する。
![](https://storage.googleapis.com/zenn-user-upload/d1bf56d5e79c-20240512.png =200x)
```html:index.html
<html>
<head>
<style>
    table, th, td {
      border: 1px solid black;
    }
</style>
</head>
<body>

<h1>The colgroup element</h1>

<table>
  <colgroup>
    <col span="2" style="background-color:red">
    <col style="background-color:yellow">
  </colgroup>
  <tr>
    <th>ISBN</th>
    <th>Title</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>3476896</td>
    <td>My first HTML</td>
    <td>$53</td>
  </tr>
  <tr>
    <td>5869207</td>
    <td>My first CSS</td>
    <td>$49</td>
  </tr>
</table>

</body>
</html>
```

# CSS
table-layout
border-collapse
border-spacing
empty-cells
caption-side
### コードの全体像
基本的に、テーブルはHTMLでほとんどの設定が行われる。そのため、テーブルにおけるCSSはあくまで補助的なものだと考えよう。
```css:style.css
.table {
    table-layout: {auto, fixed};
    border-collapse: {collapse, separate};
    border-spacing: ;
    empty-cells: {show, hide};
    caption-side: {top, bottom, inline-start, inline-end};
}
```
# CSS
#### `table-layout`
#### `border-collapse`
#### `border-spacing`
#### `empty-cells`
#### `caption-side`