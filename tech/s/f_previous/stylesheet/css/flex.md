---
title: "【永久保存版】フレキシブルボックス"
emoji: "🌐"
type: "tech"
topics:
  - "css"
  - "html"
  - "web"
published: true
published_at: "2024-05-21 01:44"
---

# FlexBoxを使ってデザインをする３STEP
1. HTMLを作る
2. フレキシブルボックスの枠組みを作る
3. 枠組みに嵌めていくアイテムを作る
# HTMLを作る
HTMLがなければ何も始まりません。
```html:index.html
<div class="container">
    <div class="box">Item1</div>
    <div class="box">Item2</div>
    <div class="box">Item3</div>
</div>
```
# 骨組みを作る
## 1.Flex Boxを有効にする。
```css:style.css
.container {
    display: flex;
}
```
「フレキシブル」モードを有効にしただけなので、何も変わりません。
## 2. 「アイテムの並び順」と「折り返し方向」を設定をする
まず、以下の概念図をご覧ください。
![](https://storage.googleapis.com/zenn-user-upload/eba25dd2406a-20240727.png =300x)*『Web制作必携HTML&CSS全事典』より*
2.1. 方向と折り返しを個別に設定する。
2.1. 方向と折り返しを個別に設定する。
```css:style.css
.container {
    flex-direction: (row, row-reverse, column, column-reverse);　/* 
    flex-wrap: (nowrap, wrap, wrap-reverse);
}
```
2.2. 方向と折り返しを纏めて設定する。
```css:style.css
.container {
    flex-flow: (row, row-reverse, column, column-reverse) (nowrap, wrap, wrap-reverse);
}
```
### 3. コンテナの中で配置する
#### 3.1. コンテナの中の全てのアイテムを統一的に並べる
```css:style.css
.item {
    /* 横・縦で分けて設定する */
    justify-items: ;
    align-items: ;
    /* 纏めて設定する */
    place-items: ALIGN JUSTIFY;
}
```
#### 3.2. コンテナの中のアイテムたちが、それぞれ自分に与えられたスペースの中でどう並べられるか設定する
```css:style.css
.item {
    /* 横・縦分けて設定する */
    justify-content: {
            normal,
            start, end,
            flex-start, flex-end,
            <!-- 先頭詰め、後ろ詰め -->
            center,
            <!-- 中央詰め -->
            space-between, space-around, space-evenly,
            stretch, baseline, fistr baseline, last baseline,
            safe, unsafe
        };
    align-content: {
            normal,
            start, end,
            flex-start, flex-end,
            center,
            space-between, space-around, space-evenly
            stretch, baseline, first baseline, last baseline,
            safe, unsafe
        };
        };
}
}
    /* 纏めて設定する */
    /* 纏めて設定する */
    place-content: ALIGN-CONTENT JUSTIFY-CONTENT;
    place-content: ALIGN-CONTENT JUSTIFY-CONTENT;
}
}
```
```
## 骨組みに嵌め込むアイテムに関する設定をする
## 骨組みに嵌め込むアイテムに関する設定をする
### 4. 並べられる順番を設定する
### 4. 並べられる順番を設定する
```css:style.css
```css:style.css
.item {
.item {
    order: ;
    order: ;
}
}
```
```
### 5. アイテム自体の大きさ・拡張/縮小率を設定する
### 5. アイテム自体の大きさ・拡張/縮小率を設定する
いくつかのアイテムが並んだ時に、コンテナに入り切らなかったり、逆にコンテナに余白ができてしまうことがあります。それらの場合でどのようにボックスの大きさを変えるか設定しておきます。
いくつかのアイテムが並んだ時に、コンテナに入り切らなかったり、逆にコンテナに余白ができてしまうことがあります。それらの場合でどのようにボックスの大きさを変えるか設定しておきます。
5.1. 伸び率・縮み率・デフォルトの大きさを別々に設定する
5.1. 伸び率・縮み率・デフォルトの大きさを別々に設定する
```css:style.css
```css:style.css
.item {
.item {
    flex-grow: ;
    flex-grow: ;
    flex-shrink: ;
    flex-shrink: ;
    flex-basis: ;
    flex-basis: ;
}
}
```
```
5.2. 伸び率・縮み率・デフォルトの大きさを纏めて設定する
5.2. 伸び率・縮み率・デフォルトの大きさを纏めて設定する
```css:style.css
```css:style.css
.item {
.item {
    flex: GROW SHRINK BASIS;
    flex: GROW SHRINK BASIS;
}
}
```
```
### 6. アイテムごとに個別に場所を設定する
### 6. アイテムごとに個別に場所を設定する
6.1. 縦方向の位置と横方向の位置を別々に設定する
6.1. 縦方向の位置と横方向の位置を別々に設定する
```css:style.css
```css:style.css
.item {
.item {
    justify-self: ;
    justify-self: ;
    align-self: ;
    align-self: ;
}
}
```
```
6.2. 縦方向の位置と横方向の位置を纏めて設定する
6.2. 縦方向の位置と横方向の位置を纏めて設定する
```
```
.item {
.item {
    place-self: ALIGN JUSTIFY;
    place-self: ALIGN JUSTIFY;
}
}
```

---
title: "【永久保存版】フレキシブルボックス"
emoji: "🎃"
type: "tech" # tech: 技術記事 / idea: アイデア
topics: []
published: false
---
# FlexBoxを使ってデザインをする３STEP
1.HTMLを作る
2. フレキシブルボックスの枠組みを作る
3. 枠組みに嵌めていくアイテムを作る
# HTMLを作る
HTMLがなければ何も始まりません。

```html:index.html
<div class="container">
    <div class="box">Item1</div>
    <div class="box">Item2</div>
    <div class="box">Item3</div>
</div>
```

# 骨組みを作る
## 1.Flex Boxを有効にする。
```css:style.css
.container {
    display: flex;
}
```
### 2. アイテムを並べる順番と折り返しに関する設定をする
「フレキシブル」モードを有効にしただけなので、何も変わりません。
## 2. 「アイテムの並び順」と「折り返し方向」を設定をする
2.1. 方向と折り返しを個別に設定する。
2.1. 方向と折り返しを個別に設定する。
```css:style.css
```css:style.css
.container {
.container {
    flex-direction: (row, row-reverse, column, column-reverse);
    flex-direction: (row, row-reverse, column, column-reverse);　/* 
    flex-wrap: (nowrap, wrap, wrap-reverse);
    flex-wrap: (nowrap, wrap, wrap-reverse);
}
}
```
```
2.2. 方向と折り返しを纏めて設定する。
2.2. 方向と折り返しを纏めて設定する。
```css:style.css
```css:style.css
.container {
.container {
    flex-flow: (row, row-reverse, column, column-reverse) (nowrap, wrap, wrap-reverse);
    flex-flow: (row, row-reverse, column, column-reverse) (nowrap, wrap, wrap-reverse);
}
}
```
```
### 3. コンテナの中で配置する
### 3. コンテナの中で配置する
#### 3.1. コンテナの中の全てのアイテムを統一的に並べる
#### 3.1. コンテナの中の全てのアイテムを統一的に並べる
```css:style.css
```css:style.css
.item {
.item {
    /* 横・縦で分けて設定する */
    /* 横・縦で分けて設定する */
    justify-items: ;
    justify-items: ;
    align-items: ;
    align-items: ;
    /* 纏めて設定する */
    /* 纏めて設定する */
    place-items: ALIGN JUSTIFY;
    place-items: ALIGN JUSTIFY;
}
}
```
```
#### 3.2. コンテナの中のアイテムたちが、それぞれ自分に与えられたスペースの中でどう並べられるか設定する
#### 3.2. コンテナの中のアイテムたちが、それぞれ自分に与えられたスペースの中でどう並べられるか設定する
```css:style.css
```css:style.css
.item {
.item {
    /* 横・縦分けて設定する */
    /* 横・縦分けて設定する */
    justify-content: {
    justify-content: {
            normal,
            normal,
            start, end,
            start, end,
            flex-start, flex-end,
            flex-start, flex-end,
            <!-- 先頭詰め、後ろ詰め -->
            <!-- 先頭詰め、後ろ詰め -->
            center,
            center,
            <!-- 中央詰め -->
            <!-- 中央詰め -->
            space-between, space-around, space-evenly,
            space-between, space-around, space-evenly,
            stretch, baseline, fistr baseline, last baseline,
            stretch, baseline, fistr baseline, last baseline,
            safe, unsafe
            safe, unsafe
        };
        };
    align-content: {
    align-content: {
            normal,
            normal,
            start, end,
            start, end,
            flex-start, flex-end,
            flex-start, flex-end,
            center,
            center,
            space-between, space-around, space-evenly
            space-between, space-around, space-evenly
            stretch, baseline, first baseline, last baseline,
            stretch, baseline, first baseline, last baseline,
            safe, unsafe
            safe, unsafe
        };
        };
}
}
    /* 纏めて設定する */
    /* 纏めて設定する */
    place-content: ALIGN-CONTENT JUSTIFY-CONTENT;
    place-content: ALIGN-CONTENT JUSTIFY-CONTENT;
}
}
```
```
## 骨組みに嵌め込むアイテムに関する設定をする
## 骨組みに嵌め込むアイテムに関する設定をする
### 4. 並べられる順番を設定する
### 4. 並べられる順番を設定する
```css:style.css
```css:style.css
.item {
.item {
    order: ;
    order: ;
}
}
```
```
### 5. アイテム自体の大きさ・拡張/縮小率を設定する
### 5. アイテム自体の大きさ・拡張/縮小率を設定する
いくつかのアイテムが並んだ時に、コンテナに入り切らなかったり、逆にコンテナに余白ができてしまうことがあります。それらの場合でどのようにボックスの大きさを変えるか設定しておきます。
いくつかのアイテムが並んだ時に、コンテナに入り切らなかったり、逆にコンテナに余白ができてしまうことがあります。それらの場合でどのようにボックスの大きさを変えるか設定しておきます。
5.1. 伸び率・縮み率・デフォルトの大きさを別々に設定する
5.1. 伸び率・縮み率・デフォルトの大きさを別々に設定する
```css:style.css
```css:style.css
.item {
.item {
    flex-grow: ;
    flex-grow: ;
    flex-shrink: ;
    flex-shrink: ;
    flex-basis: ;
    flex-basis: ;
}
}
```
```
5.2. 伸び率・縮み率・デフォルトの大きさを纏めて設定する
5.2. 伸び率・縮み率・デフォルトの大きさを纏めて設定する
```css:style.css
```css:style.css
.item {
.item {
    flex: GROW SHRINK BASIS;
    flex: GROW SHRINK BASIS;
}
}
```
```
### 6. アイテムごとに個別に場所を設定する
### 6. アイテムごとに個別に場所を設定する
6.1. 縦方向の位置と横方向の位置を別々に設定する
6.1. 縦方向の位置と横方向の位置を別々に設定する
```css:style.css
```css:style.css
.item {
.item {
    justify-self: ;
    justify-self: ;
    align-self: ;
    align-self: ;
}
}
```
```
6.2. 縦方向の位置と横方向の位置を纏めて設定する
6.2. 縦方向の位置と横方向の位置を纏めて設定する
```
```
.item {
.item {
    place-self: ALIGN JUSTIFY;
    place-self: ALIGN JUSTIFY;
}
}
```
```