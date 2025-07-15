

色の設定方法には多くの種類がある。
# グラデーション

## 直線のグラデーション
![](https://storage.googleapis.com/zenn-user-upload/1801fb375125-20240524.png =300x)*[MDNのHP](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)より*

### グラデーションの方向
```css:style.css
p {
    PROP: linear-gradient(NUM+deg); /* 任意の角度でグラデーション */

    PROP: linear-gradient(to top ... ); /* 上へ向かうグラデーション　*/
    PROP: linear-gradinet(to top right ... ); /* 右上角へ向かうグラデーション */
    PROP: linear-gradient(to right ... ); /* 右へ向かうグラデーション */
    PROP: linear-gradinet(to bottom right ... ); /* 右下へ向かうグラデーション */
    PROP: linear-gradient(to bottom ... ); /* 下へ向かうグラデーション */
    PROP: lienar-gradinet(to bottom left ... ); /* 左下角へ向かうグラデーション */
    PROP: linear-gradient(to left ... ); /* 左へ向かうグラデーション */
    PROP: linear-gradient(to top left ... ); /* 左上角へ向かうグラデーション */
}
```
### 色
```css:style.css
p {
    PROP: linear-gradient(方向, rgb() ... )
}
```
### 位置

```css:style.css
p {
    PREP: linear-gradient(方向, 色 0%, 色 50%, 色 100%); /* 設定した方向よって0%と100%の位置が決まる。
    PREP: linear-gradient(方向, 色 0, 色 1em, 色 2em);
    PREP: linear-gradient(方向, 色, 色, 色); /* 位置を明示せず色だけ並べた場合、自動で均等に色を割り当てる */
}
```
## 円形・楕円形のグラデーション
### 形状
前提として、**正円**か**楕円**かは`( )`内の最初の引数で設定することができる。
    **正円**なら`circle`と、**楕円**なら`ellipse`と書く。どちらも書かなかった場合は`ellipse`、つまり**楕円**が適用される。
```css:style.css
p {
    PROP: radial-gradient(ellipse ... );
    PROP: radial-gradient(circle ... );
}
```
これ以降、`ellipse`と`circle`をまとめて`形状`と表すことにする。
### サイズ
正円あるいは楕円の**サイズ**
それではまず、グラデーションする正円あるいは楕円の**サイズ**を指定する方法を紹介する。
下に、**サイズ**関連のコードを一通り示す。各行の下に`/* */`で挟まれたコメントがあるので、それを読んでほしい。
```css:style.css
p {
    PROP: radial-gradient(形状 closest-side ... );
    /* 正円or楕円が、最も近い辺に内接する */

    PROP: radial-gradient(形状 farthest-side ... );
    /* 正円or楕円が、最も遠い辺に内接する */

    PROP: radial-gradient(形状 closest-corner ... );
    /* 正円or楕円が、最も近い頂点に接する */

    PROP: radial-gradient(形状 farthest-corner ... );
    /* 正円or楕円が、最も遠い頂点に接する */

    PROP: radial-gradient(形状 NUM+UNIT ... );
    PROP: radial-gradient(形状 NUM% ... );
}
```
次に、それらのコードを実際のグラデーションと比較しながら見てみよう。
![](https://storage.googleapis.com/zenn-user-upload/bb04f73a5048-20240523.png =200x)*closest-side*
![](https://storage.googleapis.com/zenn-user-upload/de9b88bddaab-20240523.png =200x)*farthest-side*
![](https://storage.googleapis.com/zenn-user-upload/aa32b6796ca8-20240523.png =200x)*closest-corner*
![](https://storage.googleapis.com/zenn-user-upload/8207dae65812-20240523.png =200x)*farthest-corner*

```css:style.css
    /* 中心の位置 */
    PROP: radial-gradient(形状 サイズ at top ... );　/* 上辺の中心 */
    PROP: radial-gradient(形状 サイズ at top right ... ); /* 右上 */
    PROP: radial-gradient(形状 サイズ at right ... ); /* 右辺の中心 */
    PROP: radial-gradient(形状 サイズ at bottom right ... );　/* 右下 */
    PROP: radial-gradient(形状 サイズ at bottom ... ); /* 下辺の中心 */
    PROP: radial-gradient(形状 サイズ at bottom left ... ); /* 左下 */
    PROP: radial-gradient(形状 サイズ at left ... ); /* 左辺の中心 */
    PROP: radial-gradient(形状 サイズ at top left ... );　/* 左上 */
    PROP: radial-gradient(形状 サイズ at center ... ); /* 中心 */
    
    PROP: radial-gradient(形状 サイズ NUM+UNIT, 色 場所, 色 場所); /* 水平・垂直方向の半径を空白文字を区切って、単位付き*/
    PROP: radial-gradient(形状 サイズ NUM%, 色 場所, 色 場所); /* 水平・垂直方向の半径を空白文字を区切って、単位付き 値は親ボックスの幅と高さに対する割合 */
}
```
![](https://storage.googleapis.com/zenn-user-upload/5e3814f9c6c5-20240523.png)

```css:style.css
    PROP: repeating-linear-gradient( () );
    PROP: repeating-radial-gradient( () );
```



# issues
radial-gradientのサイズの写真、長方形を明示すべき。
`PROP: radial-gradient(形状 NUM+UNIT ... );`と
`PROP: radial-gradient(形状 NUM% ... );`を理解する