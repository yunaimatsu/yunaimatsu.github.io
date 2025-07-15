ではいよいよ、Webページを作っていきます。
4章で学習する内容を概観します。
1. まず、HTMLのテンプレートを紹介し、その中身を分解・分析します。これは、全てのWebサイトやWebアプリに共通のテンプレートです。
2. 次に、HTMLのテンプレートが大きく分けて二つの部分からできていることを紹介します。ちなみに、その2つの部分というのは**ヘッド**部分と**ボディ**部分です。それらについて軽く説明すると、以下のようになります。

||内容|
|---|---|
|ヘッド|Webページ自体の基本設定を記述します。|
|ボディ|実際のページの内容を作っていきます|

![](https://storage.googleapis.com/zenn-user-upload/e0fe39179108-20240517.png) 

3. `<head>`と`</head>`の間に入る要素を全て最大限分かりやすくして徹底解説します。
4. `<body>`と`</body>`の中に入る要素は`<head></head>`に比べて非常に多いです。そのため、 wi
    a. 

# ドキュメントの全体像
```html:index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
![](https://storage.googleapis.com/zenn-user-upload/f7664909f9e3-20240512.jpeg)

# `<html></html>`
これは「ルート要素」と呼ばれ、
このタグに挟まれたものが全てHTMLで書かれたものであるということを表します。この外側には何も書きません。
**Advanced**
ページ全体の設定
```html:index.html
<head>
    <base>
</head>
```
# `<head>`と`</head>`の間
# `<body>`と`</body>`の間
`<head></head>`と`<body></body>`の二つです。