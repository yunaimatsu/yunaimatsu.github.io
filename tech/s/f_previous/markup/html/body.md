---
layout: '@layout/Layout.astro'
---
# ボディを編集する流れ
|||
|---|---|
|1|タグを作る|
|2|タグ内のHTMLを作る|
|3|CSSでデザインや成形をする|
|4|JavaScriptで動的な開発をする|

```html:index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
    </div>

    <header>
        <!-- 導入の内容を表し、通常、イントロダクションやナビゲーションの支援となる要素のグループです。見出し要素を含むこともありますが、ロゴ、検索フォーム、著者名、その他の要素も含むことができます。 -->
    </header>

    <main>
    </main>

    <footer>
        a footer for its nearest ancestor sectioning content or sectioning root element.
        A <footer> typically contains information about the author of the section, copyright data or links to related documents.
    </footer>

    <article>
        独立して配布・再利用することを目的にドキュメント・ページ・アプリ・サイトの自己完結した
        Examples include: a forum post, a magazine or newspaper article, or a blog entry, a product card, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.
    </article>

    <section>
    </section>

    <nav>
    </nav>

    <aside>
    </aside>

    <address>
    </address>

    <hgroup>
        <h1>見出し1</h1>
        <h2>見出し2</h2>
        <h3>見出し3</h3>
        <h4>見出し4</h4>
        <h5>見出し5</h5>
        <h6>見出し6</h6>
    </hgroup>

    <p>
        段落
        <hr /> /* 段落区切り */

        <br /> /* 改行 */

        <wbr /> /* 改行可能 */
        
    </p>

    <blockquote>
        引用する段落
    </blockquote>

    <pre>
        この中の文章はそのまま表示される。
    </pre>
</body>
</html>

> HTMLの`<article>`要素は、独立して配布可能ないし再利用可能なドキュメント、ページ、アプリケーション、或いはサイトの自己完結した要素を表す(労組のシンディケーションのように)。例としては以下のようなものが挙げられます。フォーラムの投稿、雑誌或いは新聞の記事、ブログの記事、商品カード、その他コンテンツ内で独立した項目(投稿者訳)。


> The `<section>` HTML element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions.
> HTMLの`<section>`要素は、ドキュメントの中の自立した一般的な部分を表します。


The <nav> HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.


The <aside> HTML element represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes