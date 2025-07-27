- Operand & Operator
    
    ![1000011404.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d36be01f-c315-4c3e-890b-9b2043984cc4/c1a9ce57-1949-475b-bdd2-9881c19b7060/1000011404.png)
    

# Functionalities and Concepts of operator

1. 処理をする
2. 値を返す（処理を経て一つの値になると言ってもいい。）

もし処理がうまく行かない場合は、コンソールで実行して挙動を確認しよう

### Precedence

In the first place, in the code below, why is `+` executed before `=`? It’s because there are number defined in JavaScript. If there's difference between the precedence, operator with higher point will be executed. If all of them are same point, JavaScript engine will execute from left to right.

```jsx
a = 1 + 2
```

### Associativity

オペランドを処理する順番。

# List of operator

[JavaScript Operator](https://www.notion.so/eb8d7ea1b75c4645ababc6409b9ff190?pvs=21)

## Unary operator

[Untitled](https://www.notion.so/ac74e349f820464cb2ca8a6ee98cb65c?pvs=21)

## Binary operator

### Arithmetic

[Untitled](https://www.notion.so/242bf952bcfb437c87b5ee5506e80adf?pvs=21)

### Equality

[Untitled](https://www.notion.so/e8212fd31eef44b0be5e71ae5cc36756?pvs=21)

`===`は値と型を比較する。

`==`は、（オペランドの型が異なる場合、型の変換で左右のオペランドの方を揃えてから）オペランドの値を比較する。ここで行われる型変換は複雑なので、基本的には`===`を使うようにする。

**Equality of non-primitive data**

オブジェクトが格納されているメモリアドレスが比較される。

### Relational

[Untitled](https://www.notion.so/e7716217c71b47dc93ae65aa9c8227b8?pvs=21)

### Assignment

[Untitled](https://www.notion.so/edadab0ab6654aa89e0b1adeefa7872a?pvs=21)

Self-assignment: do both processing and assignment

### Logic

[Untitled](https://www.notion.so/c663ac7a13554a53aeee7a989ab90832?pvs=21)

Take boolean as operand.

**Truthy and Falsy**

|  | Truthy | Falsy |
| --- | --- | --- |
| String | `“”`以外 | `“”` |
| Number | `0`, `-0`, `NaN`以外 | `0`, `-0`, `NaN` |
| BigInt | `0n`以外 | `0n` |
| Boolean | `true` | `false` |
| `null` | No | `null` |
| `undefined` | No | `undefined` |
| Symbol | - |  |

**The processing of logical operator**

`&&`

1. 左から順にTruthy or Falsyを判断
2. Fasly valueがあったらその時点で処理を終了し、そのvalueを返す
3. 最後までfalsyがなかった場合は最後のoperandを返す。

`||`

1. 左から順にTruthy or Falsyを判断
2. Truthy valueがあったらその時点で処理を終了し、そのvalueを返す
3. 最後までtruthyがなかった場合は最後のoperandを返す。

<aside>
💡

つまり、返された値がtruthyだったらtrue、falsyだったらfalse。

`Boolean()`を使って明確に`true`か`false`か表示することもできる。

</aside>

### Comma

[Untitled](https://www.notion.so/512a97415a6e4a778372b903a939f762?pvs=21)

### Bitwise

[Untitled](https://www.notion.so/7464db6b07f240f29816c02c486381b3?pvs=21)

| Operation | Description | JavaScript | Python | C++ |
| --- | --- | --- | --- | --- |
| AND | Performs a binary AND between two numbers | `a & b` | `a & b` | `a & b` |
| OR | Performs a binary OR between two numbers | `a | b` | `a | b` | `a | b` |
| XOR | Performs a binary XOR between two numbers | `a ^ b` | `a ^ b` | `a ^ b` |
| NOT | Performs a binary NOT (inverts all bits) | `~a` | `~a` | `~a` |
| Left Shift | Shifts bits of the number to the left | `a << n` | `a << n` | `a << n` |
| Right Shift | Shifts bits of the number to the right | `a >> n` | `a >> n` | `a >> n` |
| Unsigned Right Shift | Shifts bits to the right, filling zeros (only in unsigned) | `a >>> n` | Not applicable | Not applicable |

### Operators after ES6

[Untitled](https://www.notion.so/958d42702b7b4fb689e5ffff5034bc45?pvs=21)

## Ternary

[Untitled](https://www.notion.so/d008a99f43f64dcc85e1c87975051645?pvs=21)