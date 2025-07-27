---
layout: '@layout/Layout.astro'
---
# Overview of named function

## 3 components of functions

- **input** `()`[optional]
    
    input_identifierは関数の`()`の中で定義する。
    
    JSでは、引数の名前を指定して値を渡すことはできない。
    
    - Omission
        
        Nothing happens. There are a lot of methods without parameters 
        
    - Radical omission
        
        `()` is necessary.
        
    - Multiple inputs
        
        複数個指定するときは`,`で区切る
        
        指定した順に渡される。ss
        
        実引数と仮引数の数が違った時の挙動
        
        <detials><summary>JS and Python</summary>
        
          There are differences between JavaScript (JS) and Python in how they handle arguments and defaults. Here are some key differences highlighted by your images:
            1. Default Argument Values:
            Python: You can specify default values for function arguments, and these can be skipped if not provided. In the example shown, arg1 and arg2 have values, but if you only pass one, Python fills in the rest using the defaults.
            JavaScript: You can also specify default argument values in modern JavaScript, but if you want to skip an argument and only provide values for later arguments, you would have to explicitly pass undefined for the skipped ones.

            2. Named Arguments:
            Python: Supports named arguments, allowing you to specify values out of order by directly assigning them. For example, python_fn(arg2="World", arg1="Hello") allows flexibility with argument placement.
            JavaScript: Does not support named arguments in the same way. You need to pass arguments in the order they are defined unless you use an object to group named arguments.

            3. Handling Multiple Arguments:
            Python: Handles a variable number of arguments easily with *args and **kwargs, where you can pack and unpack positional and keyword arguments.
            JavaScript: With ES6, JavaScript introduced "rest parameters" (...args), which is similar to Python’s *args. However, in older versions, arguments had to be passed sequentially, and skipping arguments was cumbersome.

            In summary, both languages allow for default argument values, but Python's named arguments provide more flexibility in argument ordering. When dealing with many arguments, both languages offer solutions, but JavaScript usually employs objects or rest parameters to group arguments, while Python has its own packing/unpacking mechanism.
            Let me know if you need more detailed comparisons or code examples!
        
        </details>

        ![1000011823.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d36be01f-c315-4c3e-890b-9b2043984cc4/6230aac3-4699-4241-af43-7732756fe875/1000011823.png)
        
        `arguments`
        
    - Naming conventions
        
        the same as variable/constant
        
    
    [JS vs Python](https://www.notion.so/JS-vs-Python-113496eb7c9080cebf20d72d94e26777?pvs=21)
    
    <aside>
    👉
    
    変数として関数のスコープ内で使える。しかし、スキップできない上に数が多くなると順番間違いによるバグに繋がる。
    
    [Object as parameter](https://www.notion.so/Object-as-parameter-113496eb7c90800fb770d481c630e245?pvs=21)
    
    仮引数: 関数定義時に指定する
    
    実引数: 実行時に指定する
    
    - Default parameter
        
        実引数が `undefined`の時にデフォルトパラメーターが使われる。
        
        実引数が `null`の場合はデフォルトパラメータによる設定が行われない。
        
        ```jsx
        function myFunction(”input” = “defaultParameter”){
        	// Processing
        };
        ```
        
    </aside>
    
- **processing**
- **output** `return myOutput;`[optional]
    
    output_identifierは関数内の`return`で定義する。
    
    - Omission
        
        `return`のを省略した場合、 `undefined`が返される。
        
    - Radical omission
        
        `return`文をそもそも書かなかった場合、最後の処理まで実行した上で `undefined`が返される。
        
    - Multiple outputs
        
        最初の `return;`で処理を終える。
        
    - Naming conventions
        
        the same as variable/constant
        
    
    <aside>
    👉
    
    `return`文が実行されると、関数の処理がその時点で終了する。if文の中で処理を強制的に終わらせたりする際にもL使われる。
    
    `return`によって出力が関数から返されても、必ずしも実行文で出力を受け取る必要はない。
    
    ```jsx
    function add(a, b) {
        return a + b;
    }
    
    add(5, 3);          // The value 8 is returned, but it's not used anywhere
    result = add(5, 3)  // The value 8 is returned, and it's used as `result`
    ```
    
    </aside>
    

## Name of functions

<aside>
💡

Functions without name cannot be called, which means they cannot be (1)**used repeatedly** nor (2)**as recursive function.**

</aside>

Both types of functions can be included as a property of an object.

### Named

```jsx
functionName(input){
  // Processing
}
```

### Anonymous

```jsx
function(input){
  // Processing
}
```

- Arrow notation
    1. number of input 
        1. 0
        2. 1
        3. 2~
    2. number of lines of processing 
        1. 1
        2. 2~
    3. number of output
        1. 0
        2. 1~
    
    ```jsx
    
    ```
    
- Difference between anonymous functions and arrow functions
    
    
    |  | Anonymous(Arrow) | Anonymous |
    | --- | --- | --- |
    | `this` |   |  |
    | `arguments` | Unavailable | Available |
    | `new` |  |  |
    | `prototype` |  |  |

## Initialization(Definition)

1. Function declaration
2. Function expression 
    1. `Function` constructor

### Function Declaration(Named function)

<aside>
👉

重複しても、機能が書き換えられるだけでエラーにならない。ただ、`package.json` で `“type”: “module”;`としておけばエラーを吐かせるようにできる。

関数の処理内容を定義する前に実行できる。

</aside>

```jsx
function myFunction(myInput){
	// Processing
	return myOutput;
}
```

### Function Expression(Assign name to anonymous function)

右辺はAnonymous functionsである。ただ、変数や定数のように定義することで呼び出せるようになる。

<aside>
👉

重複するとエラーになる。`const`で同じ関数を定義することになるから。

関数の処理内容を定義する前に実行しようとするとエラーになる。`const`で設定されていない識別子を呼び出したらエラーになるから。

</aside>

```jsx
const myFunction = function(myInput){
	// Processing
	return myOutput;
}
```

- `Function` constructor
    
    変数や定数と同じようにメソッドを定義する。文字列から入力/処理を定義できる。
    
    → Though we can define methods **dynamically**, it’s not recomendable from the POV of security.
    
    `eval()`ではそもそも文字列をJSコードとして実行できる。これも単なる文字列からJSコードを実行できてしまうので絶対使わない。
    

```jsx
new Function(input1, input2, input3, ..., processing);
```

## Execution

```jsx
let myVariable = myFunction(input);
myFunction(input);
```

```jsx
let myVariable = myFunction(input);
```

# Application

## Learn built-in functions

When you learn method(function), get 3 points.

1. Input
2. Processing
3. Output

**To hoist: the built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution**

## Built-in functions which can be used as callback

## Callback functions(=Functions as object)

関数の引数として使用できる、(シンタクスの観点からはオブジェクトである)関数のこと。

関数(`()`がついたもの)を入れるとエラーになる。

コールバック関数は関数のスコープ内で`()`をつけて実行する。