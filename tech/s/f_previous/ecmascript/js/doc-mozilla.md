---
title: "JavaScriptの詳細な全体像"
emoji: "🌊"
type: "tech"
topics: []
published: false
---

JavaScript is a multi-paradigm, dynamic language with 1types and 2operators, 3standard built-in objects, and 4methods.  JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming since functions are first-class objects that can be easily created via expressions and passed around like any other object.

# JavaScriptは、正式名称ではない！
ECMAScript
# Java言語と関係あるの？
**同じ会社の商標ですが、全く異なる言語です。**
プログラミングにおいては何も関係のない、全く異なるプログラミング言語です。文法も、それらの意味も、使われる用途も全く異なります。
文法はJava言語やC言語をもとにしていて、多くの構造がJavaScriptにも取り入れられています。

しかし、どちらもアメリカの[Oracle](https://www.oracle.com/)社の商標或いは登録商標という点で共通しています。

# JavaScriptが使われるのは、Webサイトだけじゃない！
* [Node.js](https://developer.mozilla.org/en-US/docs/Glossary/Node.js)
*  [Apache CouchDB](https://couchdb.apache.org/)
*  [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/)

# JavaScriptはどのように実行されるのか？
**「JavaScriptはインタプリタ言語です。つまり、実行される度に自動でコンパイルが行われます。**

と言われても難しいです。より分かりやすく説明します。

「インタプリタ言語？」「コンパイル？」これらの用語を理解していただくために、「そもそもプログラミング言語がどのように実行されるのか」を説明します。

## そもそもプログラムはどのように実行されるのか
まずそもそも、コンピュータは、0と1しか理解できません。そのため、実際にコンピュータが実行するコードはこのようなものになります。
![](https://storage.googleapis.com/zenn-user-upload/9165a9a6afa7-20240607.png  =300x)*画像は[こちらのサイト](https://www.geeksforgeeks.org/what-is-machine-language/)より引用*

本当に0と1の組み合わせだけでできた文章です。これを「機械語」と言います。しかし、これでは人間の我々にとってはさっぱりわかりませんね。

そこで、人間にも（機械語よりかは）理解しやすい**プログラミング言語**という言語でコードを書き、それを0と1だけの機械語に**翻訳**してもらうことにします。

この「**プログラミング言語**から**機械語**に翻訳すること」を**コンパイル**と言います。

## コンパイル言語とインタプリタ言語とは？
そして、コンパイル(翻訳)のタイミングによって、プログラミング言語は大きく2つに分かれます。

||説明|具体例|
|---|---|---|
|**コンパイラ言語**|コードを書き終わった後に手動でコンパイル|C言語, JAVAなど|
|**インタプリタ言語**|コードを実行するときに自動でコンパイル|JavaScript, Pythonなど|

#### コンパイラ言語
プログラミグ言語でコードを書き終わった後、まず、そのコードを書いたファイルを**コンパイル**した(0と1だけに書き直した)新しいファイルを作成します。これはターミナルで1行コマンドを書いてエンターキーを押すだけで実行できるので、何にも難しいことはありません。

#### インタプリタ言語
JavaScriptやPythonでは、実行ボタンを押すと、コンピュータが1行ずつ勝手にコンパイル(翻訳)&実行していってくれます。コンパイル(翻訳)と実行を同時に行なってくれるので、コンパイル言語で行うようなコンパイルという下処理をする必要がありません。

## コンパイル言語とインタプリタ言語それぞれのメリット・デメリット
||メリット|デメリット|
|---|---|---|
|**コンパイラ言語**|最終的にはコンパイル（翻訳）済みの機械語を実行するため、速い。|コンパイル（翻訳）処理をする手間が要る。|
|**インタプリタ言語**|実行するだけなので、楽。|コンパイル（翻訳）と同時並行で実行されるため、実行が遅い。|

# JavaScriptの基準
# 他のWeb系言語の中でのJavaScriptの位置
| 言語 | 働き |
| --- | --- |
| HTML | Webページの構造やコンテンツを定義する。 |
| CSS | データ形式や見た目を整える。 |
| JavaScript | Webサイトと交流できるようにしたり、柔軟なインターフェースを持つWebアプリを作ったりする。 |

# JavaScriptという用語
ただ、JavaScript という用語は、下のような色んな意味を含んでいる。
* 中心となる言語であるECMAScript
* DOMを含む[Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)の集合

## [JavaScript, the core language (ECMAScript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview#javascript_the_core_language_ecmascript)
The core language of JavaScript is standardized by the ECMA TC39 committee as a language named ECMAScript. "ECMAScript" is the term for the language standard, but "ECMAScript" and "JavaScript" can be used interchangeably.


JavaScriptの中心となる言語は、ECMA TC39という会議でECMAScriptという名前として決められた。ECMAScriptとは基準となる言語のことだが、JavaScriptと同じ意味で使ってもよい。

### ECMAScriptの範疇にあるもの

Among other things, ECMAScript defines:

- Language syntax (parsing rules, keywords, control flow, object literal initialization, ...)
- Error handling mechanisms ([`throw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw), [`try...catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch), ability to create user-defined [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) types)
- Types (boolean, number, string, function, object, ...)
- A prototype-based inheritance mechanism
- Built-in objects and functions, including [`JSON`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON), [`Math`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math), [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) methods, [`parseInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt), [`decodeURI`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI), etc.
- [Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- A [module system](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- Basic memory model

### 標準化のプロセス

<aside>
💡 ECMAScript editions are approved and published as a standard by the ECMA General Assembly on a yearly basis. All development is public on the [Ecma TC39 GitHub organization](https://github.com/tc39), which hosts proposals, the official specification text, and meeting notes.

</aside>

<aside>
💡 Before the 6th edition of ECMAScript (known as ES6), specifications were published once every several years, and are commonly referred by their major version numbers — ES3, ES5, etc. After ES6, the specification is named by the publishing year — ES2017, ES2018, etc. ES6 is synonymous with ES2015. *ESNext* is a dynamic name that refers to whatever the next version is at the time of writing. ESNext features are more correctly called proposals, because, by definition, the specification has not been finalized yet.

</aside>

<aside>
💡 The current committee-approved snapshot of ECMA-262 is available in PDF and HTML format on Ecma International's [ECMA-262 language specification page](https://ecma-international.org/publications-and-standards/standards/ecma-262/). ECMA-262 and ECMA-402 are continuously maintained and kept up to date by the specification editors; the TC39 website hosts the latest, up-to-date [ECMA-262](https://tc39.es/ecma262/) and [ECMA-402](https://tc39.es/ecma402/) versions.

</aside>

<aside>
💡 New language features, including introduction of new syntaxes and APIs and revision of existing behaviors, are discussed in the form of proposals. Each proposal goes through a [4-stage process](https://tc39.es/process-document/), and is typically implemented by JavaScript engines at stage 3 or stage 4 and thus available for public consumption.

</aside>

<aside>
💡 See [Wikipedia ECMAScript entry](https://en.wikipedia.org/wiki/ECMAScript) for more information on ECMAScript history.

</aside>
JSの基準に関しては、下の二つがあります。

the [ECMAScript Language Specification](https://tc39.es/ecma262/) (ECMA-262)

the [ECMAScript Internationalization API specification](https://tc39.es/ecma402/) (ECMA-402)

ブラウザが何か新しい仕様を実行したら、[Mozilla](https://mozilla.org/en-US/)の皆さんは、それらをなるべく早く[MDN](https://developer.mozilla.org/en-US/)のドキュメントにするよう頑張っている。もし[proposals for new ECMAScript features](https://github.com/tc39/proposals)がもう実装されていたら、[MDN](https://developer.mozilla.org/en-US/)さんは、仕様書や例にそれらを取り入れるかもしれない。

大抵これらはステージ公式(3, 4の間の段階)に発表されるう前でこれらは起きる。


# 何から学べばいいか、公式からのおすすめ

### 完全初心者は…

Head over to our [Learning Area JavaScript topic](https://developer.mozilla.org/en-US/docs/Learn/JavaScript) if you want to learn JavaScript but have no previous experience with JavaScript or programming. The complete modules available there are as follows:

[JavaScript first steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps)Answers some fundamental questions such as "what is JavaScript?", "what does it look like?", and "what can it do?", along with discussing key JavaScript features such as variables, strings, numbers, and arrays.[JavaScript building blocks](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks)Continues our coverage of JavaScript's key fundamental features, turning our attention to commonly-encountered types of code blocks such as conditional statements, loops, functions, and events.[Introducing JavaScript objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)The object-oriented nature of JavaScript is important to understand if you want to go further with your knowledge of the language and write more efficient code, therefore we've provided this module to help you.[Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)Discusses asynchronous JavaScript, why it is important, and how it can be used to effectively handle potential blocking operations such as fetching resources from a server.[Client-side web APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs)Explores what APIs are, and how to use some of the most common APIs you'll come across often in your development work.

### ガイド

[JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)A much more detailed guide to the JavaScript language, aimed at those with previous programming experience either in JavaScript or another language.

### 中級者は…

[Understanding client-side JavaScript frameworks](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)JavaScript frameworks are an essential part of modern front-end web development, providing developers with proven tools for building scalable, interactive web applications. This module gives you some fundamental background knowledge about how client-side frameworks work and how they fit into your toolset, before moving on to a series of tutorials covering some of today's most popular ones.[JavaScript language overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview)An overview of the basic syntax and semantics of JavaScript for those coming from other programming languages to get up to speed.[JavaScript data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)Overview of available data structures in JavaScript.[Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)JavaScript provides three different value comparison operations: strict equality using `===`, loose equality using `==`, and the [`Object.is()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) method.[Enumerability and ownership of properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)How different methods that visit a group of object properties one-by-one handle the enumerability and ownership of properties.[Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)A closure is the combination of a function and the lexical environment within which that function was declared.

### 上級者は…

[Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)Explanation of the widely misunderstood and underestimated prototype-based inheritance.[Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management)Memory life cycle and garbage collection in JavaScript.[The event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop)JavaScript has a runtime model based on an "event loop".






---

4. [第一級関数](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)（変数として扱える関数）を使う
- [プロトタイプ](https://developer.mozilla.org/en-US/docs/Glossary/Prototype-based_programming)志向である
    - 説明
        
        元々「クラス」が明示的にあったわけではないが、後付けてそれに似たものを使えるようにした言語ということ。
        
        **Prototype-based programming** is a style of [object-oriented programming](https://developer.mozilla.org/en-US/docs/Glossary/OOP) in which [classes](https://developer.mozilla.org/en-US/docs/Glossary/Class) are not explicitly defined, but rather derived by adding properties and methods to an instance of another class or, less frequently, adding them to an empty object.
        
        In simple words: this type of style allows the creation of an [object](https://developer.mozilla.org/en-US/docs/Glossary/Object) without first defining its [class](https://developer.mozilla.org/en-US/docs/Glossary/Class).
        
- [single-threaded](https://developer.mozilla.org/en-US/docs/Glossary/Thread)
    - 説明
        
        Thread in computer science is the execution of running multiple tasks or programs at the same time. Each unit capable of executing code is called a **thread**.
        
        The [**main thread**](https://developer.mozilla.org/en-US/docs/Glossary/Main_thread) is the one used by the browser to handle user events, render and paint the display, and to run the majority of the code that comprises a typical web page or app. Because these things are all happening in one thread, a slow website or app script slows down the entire browser; worse, if a site or app script enters an infinite loop, the entire browser will hang. This results in a frustrating, sluggish (or worse) user experience.
        
        Modern [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript) offers ways to create additional threads, each executing independently while possibly communicating between one another. This is done using technologies such as [web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API), which can be used to spin off a sub-program that runs concurrently with the main thread in a thread of its own. This allows slow, complex, or long-running tasks to be executed independently of the main thread, preserving the overall performance of the site or app—as well as that of the browser overall. Threading also allows web applications to take advantage of modern multi-core processors: enabling even better performance than multi-threaded applications running on a single core.
        
        A special type of worker, called a [**service worker**](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API), can be created which can be left behind by a site—with the user's permission—to run even when the user isn't currently using that site. This is used to create sites capable of notifying the user when things happen while they're not actively engaged with a site. Such as notifying a user they have received new email even though they're not currently logged into their mail service.
        
        Overall it can be observed these threads within our operating system are extremely helpful. They help minimize the context switching time, enables more efficient communication and allows further use of the multiprocessor architecture.
        
- [dynamic-typing](https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_typing)
    - 説明
        
        **Dynamically-typed languages** are those (like [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript)) where the interpreter assigns [variables](https://developer.mozilla.org/en-US/docs/Glossary/Variable) a [type](https://developer.mozilla.org/en-US/docs/Glossary/Type) at runtime based on the variable's [value](https://developer.mozilla.org/en-US/docs/Glossary/Value) at the time.
        
- “multi-paradigm”
    - オブジェクト指向
    - 命令型プログラミング
    - 宣言型プログラミング（関数型プログラミング）

    JavaScriptの動的な機能には以下のようなものがある。

1. プログラムを実行中にオブジェクトを作ることができる。
2. 関数に渡される引数の個数を関数に伝えることができる=引数が何個でも良い
3. 【未完了】関数自体を変数として定義することができる。
    - ChatGPTによる説明
        - 第1級関数
        関数は他の関数から返すことができ、関数ファクトリやクロージャの作成が可能です。
            - 関数ファクトリ
                
                
            
            ```jsx
            // 関数を変数に割り当てる
            // 定義
            let greet = function() {
                console.log('Hello, world!');
            };
            
            // 呼び出し
            greet(); // Output: Hello, world!
            
            // 関数を他の関数の引数として渡す
            
            function executeFunction(fn) {
                fn(); // Call the function passed as an argument
            }
            
            // 呼び出し
            executeFunction(greet); // Output: Hello, world!
            
            // 関数が他の関数の返り値として出る
            ```
            
            - クロージャ
            
            ```jsx
            // 定義
            function createGreeter(greeting) {
                return function(name) {
                    console.log(`${greeting}, ${name}!`);
                };
            }
            
            // 呼び出し
            let sayHello = createGreeter('Hello');
            sayHello('Alice'); // Output: Hello, Alice!
            ```
            
        - **Stored in data structures**:
        Functions can be stored in arrays, objects, and other data structures.
            
            ```jsx
            let operations = {
                add: function(a, b) { return a + b; },
                multiply: function(a, b) { return b * a; }
            };
            
            console.log(operations.add(2, 3)); // Output: 5
            console.log(operations.multiply(2, 3)); // Output: 6
            ```
            
4. eval()関数を使って
    - 実行するプログラムの中で、コードを生成して実行することができる。
    - `eval()`
        
        [eval() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)
        
5. プログラムを実行する際に、オブジェクトのプロパティやメソッドの中身を調べることができる。
    
    <aside>
    💡 オブジェクトとは、メソッド（関数）とプロパティ（データ）のくみ合わせのことである。
    
    </aside>
    
    - まず、以下のようなオブジェクトがあるとする。
        
        ```jsx
        const person = {
        name: 'Alice',
        age: 30,
        occupation: 'Engineer'
        };
        ```
        
    - これを、下の `for … in` や `Object` を使って出力させることができる。
        - `for … in`
            
            ```jsx
            for (let key in person) {
            console.log(${key}: ${person[key]});
            }
            ```
            
        - `Object`
            
            ```jsx
            Object.keys(person); // ["name", "age", "occupation"]と、キーだけを出力する。
            Object.values(person); // ["Alice", 30, "Engineer"]と、値だけ出力する。
            Object.entries(person); // [["name", "Alice"], ["age", 30], ["occupation", "Engineer"]]と、キーと値のペアを出力する。
            ```
            
6. 関数名の後に `.toString()`をつけると、その関数のソースコードを返す。
    
    (JavaScript functions store their source text and can be retrieved through [`toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString)).
    
    - ChatGPTによる説明
        
        ```jsx
        function exampleFunction(a, b) {
        return a + b;
        }
        
        // Using the toString() method to retrieve the source code of the function
        let functionSource = exampleFunction.toString();
        
        console.log(functionSource);
        ```



## レファレンス
###  [Standard objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
Get to know standard built-in objects [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean), [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error), [`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function), [`JSON`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON), [`Math`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math), [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object), [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp), [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map), [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set), [`WeakMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap), [`WeakSet`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet), and others.
### 2. [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
    1. Learn more about the behavior of JavaScript's operators
        1.  [`instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
        2. [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
        3. [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
        4. [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
        5. the [operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
        
        and more.
        
### 3. [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
    Learn how
        1.  [`do-while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
        2. [`for-in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
        3. [`for-of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
        4. [`try-catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
        5. [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
        6. [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
        7. [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
        8. [`if-else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
        9. [`switch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
        
        and more JavaScript statements and keywords work.
        
### 4. [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
    1. Learn how to work with JavaScript's functions to develop your applications.
### 5. [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
    JavaScript classes are the most appropriate way to do object-oriented programming.


    
- [developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/ja/docs/Web/JavaScript) のTutorialにあったリンクたち
    
    [developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics](https://developer.mozilla.org/ja/docs/Learn/JavaScript/First_steps)
    
    [developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps](https://developer.mozilla.org/ja/docs/Learn/JavaScript/First_steps)
    
    [developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Building_blocks)
    
    [developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Objects)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Introduction)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Grammar_and_types)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Loops_and_iteration)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Functions)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Expressions_and_operators)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Numbers_and_dates)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Text_formatting)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_expressions)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
    
    [developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)
    
    [developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs](http://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures](http://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management)
    
    [developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop)
implement complex functionalities on web pages
Every time a web page does more than just sit there and display static information for you 
* to look at—displaying
* timely content updates
* interactive maps
* animated 2D/3D graphics
* scrolling video jukeboxes

you can bet that JavaScript is probably involved.
    
- [Prerequisites](https://developer.mozilla.org/en-US/docs/Learn/JavaScript#prerequisites)
    
    JavaScript is arguably more difficult to learn than related technologies such as [HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML) and [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS). Before attempting to learn JavaScript, you are strongly advised to get familiar with at least these two technologies first, and perhaps others as well. Start by working through the following modules:
    
    - [Getting started with the Web](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web)
    - [Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)
    - [Introduction to CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
    
    Having previous experience with other programming languages might also help.
    
    After getting familiar with the basics of JavaScript, you should be in a position to learn about more advanced topics, for example:
    
    - JavaScript in depth, as taught in our [JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
    - [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)
- [Modules](https://developer.mozilla.org/en-US/docs/Learn/JavaScript#modules)
    
    **Our policy on modern JavaScript**
    
    JavaScript is an actively evolving language and has changed greatly over the years. In particular, the 6th edition of the language (sometimes known as ECMAScript 2015 or ES6), introduced in 2015, added many new features. At the same time, to maintain backwards compatibility with older websites, old features of the language have been retained, even when they are no longer considered good practice.
    
    We think that the features added to JavaScript in ECMAScript 2015 and subsequent versions enable developers to write more readable, reliable, and expressive code, and that it's important to learn about them.
    
    The features we teach in this course are stable and have been supported by all major browsers for several years.
    
    This topic contains the following modules, in a suggested order for working through them.
    
    [JavaScript first steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps)In our first JavaScript module, we first answer some fundamental questions such as "what is JavaScript?", "what does it look like?", and "what can it do?", before moving on to taking you through your first practical experience of writing JavaScript. After that, we discuss some key JavaScript features in detail, such as variables, strings, numbers and arrays.[JavaScript building blocks](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks)In this module, we continue our coverage of all JavaScript's key fundamental features, turning our attention to commonly-encountered types of code block such as conditional statements, loops, functions, and events. You've seen this stuff already in the course, but only in passing — here we'll discuss it all explicitly.[Introducing JavaScript objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)In JavaScript, most things are objects, from core JavaScript features like strings and arrays to the browser APIs built on top of JavaScript. You can even create your own objects to encapsulate related functions and variables into efficient packages. The object-oriented nature of JavaScript is important to understand if you want to go further with your knowledge of the language and write more efficient code, therefore we've provided this module to help you. Here we teach object theory and syntax in detail, look at how to create your own objects, and explain what JSON data is and how to work with it.[Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)In this module we take a look at asynchronous JavaScript, why it is important, and how it can be used to effectively handle potential blocking operations such as fetching resources from a server.[Client-side web APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs)When writing client-side JavaScript for websites or applications, you won't go very far before you start to use APIs — interfaces for manipulating different aspects of the browser and operating system the site is running on, or even data from other websites or services. In this module we will explore what APIs are, and how to use some of the most common APIs you'll come across often in your development work.
    
- [Solving common JavaScript problems](https://developer.mozilla.org/en-US/docs/Learn/JavaScript#solving_common_javascript_problems)
    
    [Solve common problems in your JavaScript code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto) provides a little advice on how to avoid common beginner JavaScript programming mistakes, along with many helpful links to topics that show how to solve common JavaScript programming problems.
    
- [See also](https://developer.mozilla.org/en-US/docs/Learn/JavaScript#see_also)
    
    [JavaScript on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)The main entry point for core JavaScript documentation on MDN — this is where you'll find extensive reference docs on all aspects of the JavaScript language, and some advanced tutorials aimed at experienced JavaScripters.[Learn JavaScript](https://learnjavascript.online/)An excellent resource for aspiring web developers — Learn JavaScript in an interactive environment, with short lessons and interactive tests, guided by automated assessment. The first 40 lessons are free.[Coding math](https://www.youtube.com/user/codingmath)An excellent series of video tutorials to teach the math you need to understand to be an effective programmer, by [Keith Peters](https://www.bit-101.com/2017/about-me/).



### [Internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview#internationalization_api)

The [ECMAScript Internationalization API Specification](https://402.ecma-international.org/1.0/) is an addition to the ECMAScript Language Specification, also standardized by Ecma TC39. The internationalization API provides collation (string comparison), number formatting, and date-and-time formatting for JavaScript applications, letting the applications choose the language and tailor the functionality to their needs. The initial standard was approved in December 2012; the status of implementations in browsers is tracked in the documentation of the [`Intl`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) object. The Internationalization specification is nowadays also ratified on a yearly basis and browsers constantly improve their implementation.

### [Related resources](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview#related_resources)

There are a variety of ways you can participate in or just track current work on the ECMAScript Language Specification and the ECMAScript Internationalization API Specification and related resources:

- [ECMAScript Language Specification repo](https://github.com/tc39/ecma262)
- [ECMAScript Internationalization API Specification repo](https://github.com/tc39/ecma402)
- [ECMAScript proposals repo](https://github.com/tc39/proposals)
- [ECMAScript conformance test suite repo](https://github.com/tc39/test262)
- [TC39 meeting notes](https://github.com/tc39/notes)
- [ECMAScript spec discussion; current mailing list](https://es.discourse.group/)
- [ECMAScript spec discussion; historical mailing-list archives (until March 2021)](https://esdiscuss.org/)

## [DOM APIs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview#dom_apis)

### [WebIDL](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview#webidl)

The [WebIDL specification](https://webidl.spec.whatwg.org/) provides the glue between the DOM technologies and ECMAScript.

### [The Core of the DOM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview#the_core_of_the_dom)

The Document Object Model (DOM) is a cross-platform, **language-independent convention** for representing and interacting with objects in HTML, XHTML and XML documents. Objects in the **DOM tree** may be addressed and manipulated by using methods on the objects. The [W3C](https://developer.mozilla.org/en-US/docs/Glossary/W3C) standardizes the Core Document Object Model, which defines language-agnostic interfaces that abstract HTML and XML documents as objects, and also defines mechanisms to manipulate this abstraction. Among the things defined by the DOM, we can find:

- The document structure, a tree model, and the DOM Event architecture in [DOM core](https://dom.spec.whatwg.org/): [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node), [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element), [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment), [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document), [`DOMImplementation`](https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation), [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event), [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget), …
- A less rigorous definition of the DOM Event Architecture, as well as specific events in [DOM events](https://w3c.github.io/uievents/).
- Other things such as [DOM Traversal](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html) and [DOM Range](https://dom.spec.whatwg.org/#ranges).

From the ECMAScript point of view, objects defined in the DOM specification are called "host objects".

### [HTML DOM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview#html_dom)

[HTML](https://html.spec.whatwg.org/multipage/), the Web's markup language, is specified in terms of the DOM. Layered above the abstract concepts defined in DOM Core, HTML also defines the *meaning* of elements. The HTML DOM includes such things as the `className` property on HTML elements, or APIs such as [`document.body`](https://developer.mozilla.org/en-US/docs/Web/API/Document/body).

The HTML specification also defines restrictions on documents; for example, it requires all children of a [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) element, which represents an unordered list, to be [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) elements, as those represent list items. In general, it also forbids using elements and attributes that aren't defined in a standard.

Looking for the [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) object, [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) object, and the other DOM elements? Read the [DOM documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).

## [Other notable APIs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview#other_notable_apis)

- The [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) and [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) functions were first specified on the [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) interface in HTML Standard.
- [XMLHttpRequest](https://xhr.spec.whatwg.org/) makes it possible to send asynchronous HTTP requests.
- The [Fetch API](https://fetch.spec.whatwg.org/) provides a more ergonomic abstraction for network requests.
- The [CSS Object Model](https://drafts.csswg.org/cssom/) abstract CSS rules as objects.
- [WebWorkers](https://html.spec.whatwg.org/multipage/workers.html) allows parallel computation.
- [WebSockets](https://html.spec.whatwg.org/multipage/#network) allows low-level bidirectional communication.
- [Canvas 2D Context](https://html.spec.whatwg.org/multipage//#2dcontext) is a drawing API for [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas).
- The [WebAssembly interface](https://webassembly.github.io/spec/js-api) provides utilities for communication between JavaScript code and [WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly) modules.

Non-browser environments (like Node.js) often do not have DOM APIs — because they don't interact with a document — but they still usually implement many web APIs, such as [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch) and [`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout).

## [JavaScript implementations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview#javascript_implementations)

There are three main JavaScript implementations used in browser environments and beyond:

- Mozilla's [SpiderMonkey](https://spidermonkey.dev/), used in Firefox. This was the first *ever* JavaScript engine, created by Brendan Eich at Netscape.
- Google's [V8](https://v8.dev/), used in Google Chrome, Opera, Edge, [Node.js](https://nodejs.org/), [Deno](https://deno.land/), [Electron](https://www.electronjs.org/), and more.
- Apple's [JavaScriptCore](https://trac.webkit.org/wiki/JavaScriptCore) (also known as SquirrelFish/Nitro), used in WebKit browsers such as Apple Safari, and [Bun](https://bun.sh/).

Besides the above implementations, there are other popular JavaScript engines such as:

- [Carakan](https://dev.opera.com/blog/carakan-faq/), used in earlier versions of Opera.
- Microsoft's [Chakra](https://en.wikipedia.org/wiki/Chakra_(JScript_engine)) engine, used in Internet Explorer (although the language it implements is formally called "JScript" to avoid trademark issues). Earlier versions of Edge used a new JavaScript engine, confusingly also called [Chakra](https://en.wikipedia.org/wiki/Chakra_(JavaScript_engine)).
- [LibJS](https://serenityos.github.io/libjs-website/), used in the browser implementation of [SerenityOS](https://serenityos.org/).
- Mozilla's [Rhino](https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)) engine, a JavaScript implementation written in Java, created primarily by Norris Boyd (also at Netscape).

There are some engines specifically tailored for non-browser purposes:

- [Engine262](https://engine262.js.org/), a JavaScript engine written in JavaScript. It is created for JavaScript developers to explore new language features and find bugs in the specification.
- [Moddable XS](https://www.moddable.com/), used in embedded systems such as IoT.
- [QuickJS](https://bellard.org/quickjs/), a small and embeddable JavaScript engine.
- Meta's [Hermes](https://hermesengine.dev/) engine, an engine optimized for [React Native](https://reactnative.dev/docs/hermes).
- Oracle's [GraalJS](https://www.graalvm.org/), a high performance implementation built on the GraalVM by Oracle Labs.

JavaScript engines expose a public API which application developers can use to integrate JavaScript into their software. By far, the most common host environment for JavaScript is web browsers. Web browsers typically use the public API to create **host objects** responsible for reflecting the [DOM](https://dom.spec.whatwg.org/) into JavaScript.

Another common application for JavaScript is as a (Web) server-side scripting language. A JavaScript web server exposes host objects representing a HTTP request and response objects, which can then be manipulated by a JavaScript program to dynamically generate web pages. [Node.js](https://nodejs.org/) is a popular example of this.

## [Shells](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview#shells)

A JavaScript shell allows you to quickly test snippets of JavaScript code without having to reload a web page. They are extremely useful for developing and debugging code.

### [Standalone JavaScript shells](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview#standalone_javascript_shells)

The following JavaScript shells are stand-alone environments, like Perl or Python.

- [Node.js](https://nodejs.org/) - Node.js is a platform for easily building fast, scalable network applications.
- [ShellJS](https://github.com/shelljs/shelljs) - Portable Unix shell commands for Node.js.

### [Browser-based JavaScript shells](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview#browser-based_javascript_shells)

The following JavaScript shells run code through the browser's JavaScript engine.

- Firefox has a [built-in JavaScript console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html), which support multi-line editing.
- [Babel REPL](https://babeljs.io/repl) - A browser-based [REPL](https://en.wikipedia.org/wiki/REPL) for experimenting with future JavaScript.
- [TypeScript playground](https://www.typescriptlang.org/play) — A browser-based playground for experimenting both new JavaScript features (via the tsc compiler) and TypeScript syntax.

## [Tools & resources](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview#tools_resources)

Helpful tools for writing and debugging your JavaScript code.

[Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)[Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), [JavaScript Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), and more.[Learn JavaScript](https://learnjavascript.online/)An excellent resource for aspiring web developers — Learn JavaScript in an interactive environment, with short lessons and interactive tests, guided by automated assessment. The first 40 lessons are free, and the complete course is available for a small one-time payment.
* [TogetherJS](https://togetherjs.com/)Collaboration made easy. By adding TogetherJS to your site, your users can help each other out on a website in real-time!
* [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)Stack Overflow questions tagged with "JavaScript".
* [JSFiddle](https://jsfiddle.net/)Edit JavaScript, CSS, and HTML and get live results. Use external resources and collaborate with your team online.
* [Plunker](https://plnkr.co/)Plunker is an online community for creating, collaborating on, and sharing your web development ideas. Edit your JavaScript, CSS, and HTML files and get live results and file structure.
* [JSBin](https://jsbin.com/)JS Bin is an open-source collaborative web development debugging tool.
* [Codepen](https://codepen.io/)Codepen is another collaborative web development tool used as a live result playground.
* [StackBlitz](https://stackblitz.com/)StackBlitz is another online playground/debugging tool, which can host and deploy full-stack applications using React, Angular, etc.
* [RunJS](https://runjs.app/)RunJS is a desktop playground/scratchpad tool, which provides live results and access to both Node and Browser APIs.


# 何を持って「詳細な全体像」と呼んでいるのか
## 出典
この記事は、すべて[Mozilla](https://www.mozilla.org/en-US/)という企業の[MDN](https://developer.mozilla.org/en-US/)という開発者向けサイトのみをもとにしています。
具体的にこのページでは
https://developer.mozilla.org/en-US/docs/Learn/JavaScript

では、なぜでしょうか。結論は、[MDN](https://developer.mozilla.org/en-US/)最も"正統派"の文献だからです。
### FACT1： SEOでかなり優遇されている
もしネットでHTMLやCSS, JavaScript, HTTPに関して調べたら大抵[MDN](https://developer.mozilla.org/en-US/)のページが上位に出てくるはずです（日本語バージョンもあります）。
### FACT2： VS CodeでのDocumentとしても使われている
HTMLタグやCSSのプロパティ、JavaScriptのコマンドを選択してカーソルを数秒当てると、以下の写真のような説明が出てきます。そこに出てくる説明はすべて[MDN](https://developer.mozilla.org/en-US/)の本文をそのまま使っています。
![](https://storage.googleapis.com/zenn-user-upload/0c012f5bb80f-20240607.png)
### FACT3: 有名ブラウザを手がける企業である
[Mozilla](https://www.mozilla.org/en-US/)は[FireFox](https://www.mozilla.org/en-US/firefox/)というエンジニア好みのブラウザを手がけるテック企業です。