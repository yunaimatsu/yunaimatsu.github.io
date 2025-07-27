---
layout: '@layout/Layout.astro'
---
| Key | Value |
| --- | --- |
| What | プログラムで使われる値を名前付きで管理するラベル。 |
| Why | 同じ値をなん度も使ったり、一時的に値を保存したりしたい時に繰り返し使用するためある。 |
- 変数の本質
    
    プログラム上で使われる数値で表現される。メモリ（メモリ空間、メモリスペース）上の場所はアドレスという数値で表現される。
    
    一般的にアドレスを表す時に16進数が使われる。番地を使ってメモリ空間表現する。
    
    - Image
        
        ```mermaid
        graph TD
            A["console.log(hello);"] --> B["Start retrieving value (1)"]
            B --> C["Check the address where hello is stored (2)"]
            C --> D["hello at location 3"]
            D --> E["Memory Space"]
            E --> F["Find the value! (3)"]
            F --> G["こんにちは"]
            G --> H["Retrieve the value (4)"]
            
            E -->|Reference| D
            D -->|Location 3| G
        ```
        
    1. 変数名を指定する
    2. 変数が保持しているアドレスの値を取得する
    3. 変数は値の保管アドレスを保持している（変数は値への参照を保持する）
    4. プログラムの実行中に変数を取得する時、JavaScript Engineは変数が保持している参照先の値を取得
- `var`
    
    使わないようにする。
    

# Variable

```jsx
let myVariable = myValue;
```

### 何度でも変更できる

値を変更したい変数を、新しい値と繋げることで代入できる。

```jsx
let myVariable = myValue;
myVariable = newValue;
```

古くて使われなくなった値は自動でメモリから削除される。

![Screenshot 2024-09-01 at 13.58.16.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d36be01f-c315-4c3e-890b-9b2043984cc4/2953971a-e8b0-4797-b1f1-bad0e3404b6d/Screenshot_2024-09-01_at_13.58.16.png)

# Constant

```jsx
const MY_CONSTANT = myValue;
```

```jsx
 myVariable = myValue;
```

一度定義すると変更できない

![Screenshot 2024-09-01 at 14.05.18.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d36be01f-c315-4c3e-890b-9b2043984cc4/4d2ce4b6-6140-4226-82b9-a28f4a06f147/Screenshot_2024-09-01_at_14.05.18.png)

変数のコピー

定数のコピー

```jsx
let myVariable = myValue;
let newVariable = myVariable;
```

![Screenshot 2024-09-01 at 13.59.26.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d36be01f-c315-4c3e-890b-9b2043984cc4/106a832c-6f7b-460a-931d-a40a9a2f98f0/Screenshot_2024-09-01_at_13.59.26.png)

- Naming convention for Identifiers(Name of variables and constants)
    - Reserved words cannot be used.
        - List of Reserved Words
            
            
            | break | case | catch | class | const | continue | debugger |
            | --- | --- | --- | --- | --- | --- | --- |
            | default | delete | do | else | export | extends | finally |
            | for | function | if | import | in | instanceof | new |
            | return | super | switch | this | throw | try | typeof |
            | var | void | while | with | enum |  |  |
    - The first character must start with an alphabet letter, underscore (`_`), or dollar sign (`$`).
    - Digits (`0`-`9`) can be used from the second character onwards.
    - Uppercase and lowercase letters are distinguished.
    - Unicode alphabets like `å`, `ü`, and characters like `\u` (escape sequences) are also allowed. However, it is advisable not to use them unless there is a specific reason, as they may cause bugs.
    - More strict convention
        - Do not use reserved words.
            
            ✖ `break`
            
            ○ `breakSomething`
            
        - The first character should generally start with a lowercase alphabet letter.
            
            ✖ `_world`
            
            ○ `world`
            
            ※ `_` and `$` are generally used for variables with special meanings.
            
        - Do not use identifiers that are distinguished only by uppercase and lowercase letters in the same character sequence.
            
            ✖ `Metal` and `metal`
            
            ○ `gold` and `silver`
            
        - The variable name should suggest the role of the data.
            
            ✖ `s`, `m`
            
            ○ `sports`, `music`, etc.
            
    - Uppercase and Lowercase
        
        
        |  | Upper or Lower |  | Where to use |
        | --- | --- | --- | --- |
        | snake_case |  |  | Used to be used as name of variables, constants, and functions (until ES5) |
        | camelCase |  |  | Name of variables, constants, and functions |
        | PascalCase. |  |  | Name of Constructor function or Class |