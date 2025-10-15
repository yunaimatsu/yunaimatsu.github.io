JavaScriptをローカルで実行するためのソフトウェア。これによってブラウザだけでなくスマホアプリやデスクトップアプリでもJavaScriptを実行できるようになった。

**Node.js**のJavaScriptでは、ECMAScriptに加えてCommonJSというモジュールを使うことができる。

```mermaid
graph TD
    A[JavaScript Engine] --> B[ECMAScript]
    A --> C[CommonJS]
    style A stroke:#333,stroke-width:2px
    style B stroke:#333
    style C stroke:#333
```

Vue.jsやReact.jsのようなフレームワークはNode.jsとは根本的に違うものなので混同しないように。

```mermaid
graph TD
    subgraph Browser
        A[ECMAScript]
        B[Web API]
    end
    
    subgraph Node.js
        C[ECMAScript]
        D[CommonJS]
    end

    E[Code that works across different environments is called Universal JavaScript]
    
    A -- Runs in --> E
    C -- Runs in --> E

    style A stroke:#333
    style B stroke:#333
    style C stroke:#333
    style D stroke:#333
    style E stroke:#333,stroke-width:2px

```

ブラウザからJavaScriptを実行する能力のみを抽出
