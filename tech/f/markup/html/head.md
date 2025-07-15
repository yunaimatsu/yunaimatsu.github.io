---
title: "HTMLのヘッド"
emoji: "🌐"
type: "tech"
topics:
  - "html"
  - "web"
published: true
published_at: "2024-05-20 15:59"
---

## `<head></head>`の中に書かれるもの
Webページ自体の基本設定をここで記述していきます。
下の「ここから」「ここまで」の領域に書かれる部分です。
```html:index.html
<!DOCTYPE html>
<html lang="en">
<!-- ここから -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link></link>
</head>
<!-- ここまで -->
<body>
</body>
</html>
```
#### `<title></title>`
```html:index.html
<head>
    <title>Document</title>
</head>
```

Webページの名前を書きます。
ブラウザで、タブに表示される名前です。
![](https://storage.googleapis.com/zenn-user-upload/b45b2f5ce8b1-20240512.png)
今僕が編集しているZennのページのタブはこのようになっています。
#### `<style></style>`
<!-- 実は、`<style></style>`に挟まれた境界で、CSSを書くことができます。 -->
#### `<base>`
```html:index.html
<head>
    <base>
</head>
```
**Advanced**
ページ全体の設定
```html:index.html
<head>
    <base>
</head>
```
#### `<meta>`
```html:index.html
<head>
    <meta>
</head>
```
**Advanced**
ページ全体の設定
```html:index.html
<head>
    <base>
</head>
```
#### `<link>`
```html:index.html
<head>
    <link href="">
</head>
```
**Advanced**
ページ全体の設定
```html:index.html
<head>
    <base>
</head>
```