# Variable Declaration

### JS

- `const`, `let`, `var`どれも、数同士を`,`で区切ると、同時に複数の変数を定義できる。
    
    例:`bookTitle`と`bookCategory`という変数を順番に定義
    
    ```jsx
    const bookTitle = "JavaScript Primer", bookCategory = "プログラミング";
    /*
    It is just like following.
    const (A=B, C=D)
    */
    
    const bookTitle = "JavaScript Primer";
    const bookCategory = "プログラミング";
    //Here the two variables are defined separately.
    ```
    
- `var` ↔ `const`&`let`
    
    `var`: 同じ名前の変数を再定義できてしまう。
    
    `let`や`const`: 同じ名前の変数を再定義しようとすると、`SyntaxError`が発生。 間違えて変数を二重に定義してしまうというミスを防げる。
    
    ```jsx
    // 変数を定義
    let x;
    const y;
    
    // 同じ名前の変数を定義するとSyntaxError
    let x; // => SyntaxError: redeclaration of let x
    const y; // => SyntaxError: redeclaration of const y
    ```
    
    一方、`var`は同じ名前の変数を再定義できます。 これは意図せずに同じ変数名で定義してもエラーとならずに、値を上書きしてしまいます。
    
    ```jsx
    // "x"という変数を定義する
    var x = 1;
    // 同じ名前の変数"x"を定義できる
    var x = 2;
    // 変数xは2となる
    ```
    
    [コラム] なぜ`let`や`const`は追加されたのか？
    
- `const` ↔ `let`
    
    変数への再代入はという参照透過性(変数の値はfirst-defined-valueと常に同じ)を壊すため、in generalバグを発生させやすい要因。Basically, `const` should be used.
    
    - `const`:変数に値を再代入不可能
        
        初期値を指定しない変数も定義できます。
        
        初期値が指定されなかった変数はデフォルト値として`undefined`という値で初期化される。
        
    - `let`:変数に値を再代入可能:
        
        反復処理の途中で特定の変数が参照する値を変化させたい場合。
        
- `var`
    
    もっとも古くからある変数宣言のキーワードだが、意図しない動作を作りやすい.
    
    - ECMAScript 2015
        
        `var`の問題を改善するために`const`と`let`という新しいキーワードが導入されました。
        
    
    `var`値の再代入が可能な変数を宣言可能。 `var`の使い方は`let`とほとんど同じです。
    
    ```jsx
    var bookTitle = "JavaScript Primer";
    ```
    
    `var`では、`let`と同じように初期値がない変数を宣言でき、変数に対して値の再代入もできます。
    
    ```jsx
    var bookTitle;
    bookTitle = "JavaScript Primer";
    bookTitle = "新しいタイトル";
    ```
    
    - **`var`の問題1: 再定義可能性**
        - **`var`の問題2: 変数の巻き上げ**
            
            `let`や`const`ではこの問題が解消されている。
            
            `var`による変数の巻き上げの問題については「[関数とスコープ](https://jsprimer.net/basic/function-scope/)」の章で解説します。 そのため、現時点では「`let`は`var`を改善したバージョン」ということだけ覚えておくとよいです。
            
    
    ほぼ全ケースで`var`は`const`か`let`に置き換えが可能→これから書くコードに対して`var`を使うことは避けるべき。
    
    ```jsx
    const variable_band = primary_value;
    ```
    
    再代入できない変数の宣言とその変数が参照する値（初期値）を定義できます。後から値を代入することはできません。
    
    - Example of error
        
        次のコードでは、`const`で宣言した変数`bookTitle`に対して値を再代入しているため、次のようなエラー（`TypeError`）が発生します。 エラーが発生するとそれ以降の処理は実行されなくなります。
        
        ```
        const bookTitle = "JavaScript Primer";
        bookTitle = "新しいタイトル"; // => TypeError: invalid assignment to const 'bookTitle'
        
        ```
        
    - 例
        
        
        ```jsx
        bookTitleという変数を宣言し、初期値が"JavaScript Primer"という文字列であることを定義しています。
        let bookTitle = "JavaScript Primer";
        
        let bookTitle;
        //bookTitleという変数を宣言し、このときbookTitleには初期値が指定されていないため、デフォルト値としてundefinedで初期化されます
        ```
        
    
    この`let`で宣言された`bookTitle`という変数には、代入演算子（`=`）を使うことで値を代入できます。 代入演算子（`=`）の右側には変数へ代入する値を書きますが、ここでは`"JavaScript Primer"`という文字列を代入しています。
    
    ```jsx
    let bookTitle;
    bookTitle = "JavaScript Primer";
    
    ```
    
    `let`で宣言した変数に対しては何度でも値の代入が可能です。
    
    ```jsx
    let count = 0;
    count = 1;
    count = 2;
    count = 3;
    ```
    
- ECMAScript 2015
    
    `var`そのものを改善するのではなく、新しく`const`と`let`というキーワードを追加することで、`var`の問題を回避できるようにしました。
    
    `var`自体の動作を変更しなかったのは、後方互換性(`var`で書かれたコードの動作が変わってしまい、動かなくなるアプリケーションが出てくるため)のため。
    
    新しく`const`や`let`などのキーワードをECMAScript仕様に追加しても、そのキーワードを使っているソースコードは追加時点では存在しません。[1](https://jsprimer.net/basic/variables/#fn_1) そのため、`const`や`let`が追加されても後方互換性には影響がありません。
    
    このように、ECMAScriptでは機能を追加する際にも後方互換性を重視しているため、`var`自体の挙動は変更されませんでした。
    

### 🐍

```python
AAA = BBB
```

### ☕️

```java
/type name;/
```

## **manner_of_typing**

**dynamically typed language**

**statically typed language**