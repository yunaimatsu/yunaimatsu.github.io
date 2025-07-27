# Iteration

If iteration did not exist in programming, the approach to writing code would be significantly different, and several implications would arise. Here are some key aspects of how programming might be affected:

### 1. **Increased Code Redundancy**

- Without loops, tasks that require repetition would have to be coded explicitly for each iteration. This would lead to significant code duplication, making programs longer and harder to maintain.
- For example, to sum the numbers from 1 to 10, you would need to write out each addition individually:

```jsx
let sum = 0;
sum += 1;
sum += 2;
sum += 3;
sum += 4;
sum += 5;
sum += 6;
sum += 7;
sum += 8;
sum += 9;
sum += 10;
```

### 2. **Limited Problem-Solving Capabilities**

- Many algorithms and data structures rely on iteration to function effectively, such as searching algorithms (e.g., linear search, binary search) and sorting algorithms (e.g., bubble sort, quicksort).
- Without iteration, it would be challenging to implement these algorithms, limiting the efficiency and effectiveness of many applications.

### 3. **Increased Complexity in Logic**

- The lack of iteration would necessitate more complex control structures to achieve repetitive tasks. Developers might have to rely heavily on recursion, which can lead to additional challenges such as stack overflow if not handled carefully.
- Recursive functions would need to be carefully designed to avoid excessive memory usage and to ensure that base cases are clearly defined.

### 4. **Inefficient Use of Resources**

- Without the ability to iterate, certain tasks would require more computational resources and time. The lack of loops might lead to inefficient algorithms that are not scalable, making it difficult to handle larger datasets or complex operations.

### 5. **More Difficult Maintenance and Readability**

- Code without iteration would be more verbose and less readable due to the repetition of similar code blocks. This would make it harder for other developers to understand, maintain, and modify the code.

### 6. **Limited Functionality in User Interfaces**

- User interfaces often require dynamic elements that update based on user interactions (e.g., animations, real-time updates). Without iteration, creating responsive and interactive applications would be significantly more complex and cumbersome.

### Conclusion

In summary, without iteration, programming would become more cumbersome and less efficient. It would lead to increased redundancy, complexity, and difficulty in maintaining code. Many algorithms and data structures that are fundamental to computing would become impractical, limiting the capabilities of software development. Iteration is a crucial concept in programming that enhances the expressiveness, efficiency, and maintainability of code.

# Iteration

- 配列ではfor, for…ofを使う。for…ofでは添え字が使えないので添え字が必要ならfor文を使え。
- オブジェクトではforではループ処理無理。プロパティのみ必要ならfor…in文で繰り返し処理を記述してもよい。列挙可能性に注意して。Object.values Object.entries

## while(for binary condition)

```jsx
while(conditional){
	// Process while the `conditional` is truthy
}
```

Iterate the process between `{}` when conditional sentence is truthy, break the process when it turns into faulsy.

1. If the conditional is truthy forever, browswer(Node.js) will freeze. Re-execute.
2. If the conditional is faulsy from scratch, the processes in `while` block will never be executed.
- Example
    
    ```jsx
    let i = 0;
    
    while(i<5){
    	console.log(i);
    	i++;
    }
    ```
    

In while-sentence, `i`, `j`, and `k` are used to represent identifier.

## for (for Primitive data-type)

```jsx
for(initialization; conditional; process_for_every_iteration){
	// Process executed while the conditional(2nd parameter) is true
}
```

**1st param:** Initialization

Executed only for 1st iteration

**2nd param:** Conditional

Same as conditional of while-sentence

**3rd param:** Process for every iteration

Executed after all processes in `{}` are done

<aside>
⌨️

Each parameter can be omitted.

`for` 文には3つのパラメータ（初期化、条件、増分/減分）があり、それぞれ省略するかしないかの組み合わせで、全部で8通りのパターンがあります。それぞれのケースについて、JavaScriptで何が起こるかを説明します。

- 1. 全てのパラメータを指定 (`for (initialization; condition; increment)`)
    - **例**: `for (let i = 0; i < 5; i++)`
    - **動作**:
        - 初期化が行われ (`let i = 0`)、条件 (`i < 5`) が真である限りループが実行されます。
        - 各ループの後に増分 (`i++`) が適用されます。
    - **結果**: `0` から `4` までの数値が順番に出力され、5でループが終了します。
- 2. 初期化のみ省略 (`for (; condition; increment)`)
    - **例**: `let i = 0; for (; i < 5; i++)`
    - **動作**:
        - 変数の初期化はループの外で行われます (`let i = 0`)。
        - ループ条件 (`i < 5`) が真である限り実行され、各ループの後に増分 (`i++`) が適用されます。
    - **結果**: 0から4までが出力され、5でループが終了します。
- 3. 条件のみ省略 (`for (initialization; ; increment)`)
    - **例**: `for (let i = 0; ; i++)`
    - **動作**:
        - 初期化が行われ (`let i = 0`)、ループ条件が指定されていないため、デフォルトで無限ループになります。
        - 増分 (`i++`) が各ループの後に適用されます。
        - ループ内で明示的に `break` するなどしない限り、ループは終了しません。
    - **結果**: 無限ループ。ただし、`if (i > 10) break;` のような条件をループ内で設定すれば、ループを終了できます。
- 4. 増分/減分のみ省略 (`for (initialization; condition;)`)
    - **例**: `for (let i = 0; i < 5;)`
    - **動作**:
        - 初期化が行われ (`let i = 0`)、条件 (`i < 5`) が真である限り実行されます。
        - 増分や減分が指定されていないため、ループ内で明示的に変数の変更を行わなければ、条件は変わらず無限ループになります。
    - **結果**: 無限ループ。ただし、`i++` などをループ内で手動で行えば、ループが適切に終了します。
- 5. 初期化と条件を省略 (`for (; ; increment)`)
    - **例**: `let i = 0; for (; ; i++)`
    - **動作**:
        - 初期化はループの外で行われます。
        - 条件がないため、ループは無限に続きます。
        - 各ループ後に増分 (`i++`) が適用されます。
    - **結果**: 無限ループ。ただし、`if (i > 10) break;` のような条件をループ内で設定すれば、ループを終了できます。
- 6. 初期化と増分/減分を省略 (`for (; condition;)`)
    - **例**: `let i = 0; for (; i < 5;)`
    - **動作**:
        - 初期化はループの外で行われます。
        - 条件 (`i < 5`) が真である限り、ループが実行されます。
        - 増分や減分が指定されていないため、ループ内で変数の変更を手動で行う必要があります。
    - **結果**: 無限ループ。ただし、`i++` などをループ内で手動で行えば、ループが適切に終了します。
- 7. 条件と増分/減分を省略 (`for (initialization;;)`)
    - **例**: `for (let i = 0;;)`
    - **動作**:
        - 初期化が行われます (`let i = 0`)。
        - 条件がないため、ループは無限に続きます。
        - 増分や減分が指定されていないため、ループ内で手動で変数の変更を行う必要があります。
    - **結果**: 無限ループ。ただし、`if (i > 10) break;` のような条件をループ内で設定すれば、ループを終了できます。
- 8. 全てのパラメータを省略 (`for (;;)` )
    - **例**: `for (;;)`
    - **動作**:
        - 初期化、条件、増分/減分のいずれも指定されていないため、ループは無限に続きます。
        - 明示的に `break` するか、`return` などで終了させない限り、ループは終わりません。
    - **結果**: 無限ループ。`break` 文を使うなどして手動で終了させる必要があります。

省略によって無限ループが発生する場合が多い

明示的に `break` 文や変数の更新を行う必要がある

</aside>

- Example
    
    ```jsx
    for(let i = 0; i<5; i++){
    	console.log(i);
    }
    ```
    

## for … in …(for Non-primitive data-type)

```jsx
for(const key in myObject){
	// Process for each property then `key` can be used as variable
}
```

Reflect.getOwnPropertyDescriptor

Object.getOwnPropertyDescriptor

Reflect.defineProperty

Object.defineProperty

- Enumerability
    
    取得されるプロパティは列挙可能プロパティと呼ぶ。この性質を列挙可能性と呼ぶ。
    
    列挙可能性(+)のプロパティは`for … in …`文の取得対象。
    
    列挙可能性(-)のプロパティは`for … in …`文の取得対象ではない。
    
    - 時には列挙したくないプロパティをオブジェクトに保持することがある。
        - 配列（`.length()`はプロパティだが配列の要素ではない）
    
    そのようなプロパティは列挙可能性がオフになってある。
    
    列挙可能性はdescriptorというObjectのプロパティとして保持されている。
    
    - Data descriptor
        
        value 
        
        configurable
        
        enumerable
        
        writable
        
    - Accessory descriptor
        
        get
        
        set
        

「for … in … 文とSymbol文」は飛ばす。

## for … of …

反復可能オブジェクトに対する繰り返し処理を記述

「反復可能オブジェクト」については12章

```jsx
for(const value of iterable){
	// Process for each element itreable object
}
// value: 反復可能オブジェクトの種類によって渡される値が変わる
// itreable: array, map, set, string, arguments
```

- Example
    
    ```jsx
    const map = new Map;
    map.set("apple", "manzana");
    map.set("grape", "uva");
    
    for(const row of map){
    	// 
    	console.log(row[0], row[1]);
    }
    ```
    
    Mapのループは分割代入と組み合わせて使うこともある。
    

「オブジェクトをfor…ofで扱う」は飛ばす。