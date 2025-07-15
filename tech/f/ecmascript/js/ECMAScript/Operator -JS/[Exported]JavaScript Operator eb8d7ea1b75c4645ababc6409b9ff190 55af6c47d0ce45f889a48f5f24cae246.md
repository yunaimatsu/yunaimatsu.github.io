# ?.

Associativity: Left to Right
Description: Optional Chaining
Precedence: 20
Type: After ES6, Data Type

ObjectではないNon-primitive dataのプロパティ（キー）を取得しようとしたら、通常は`Error`になる。

しかし、　`?.`をオブジェクト名とプロパティ名（キー名）の間に挟むことで、そのような場合でも`undefined`を返す。

## Dot notation

```jsx
"I'm Yoshi"?.prop; // String
31415?.prop; // Number
31415n?.prop; // BigInt
true?.prop; // Boolean
null?.prop; // Null
undefined?.prop; // Undefined
```

## Bracket notation

```jsx
"I'm Yoshi"?.["prop"]; // String
31415?.["prop"]; // Number
31415n?.["prop"]; // BigInt
true?.["prop"]; // Boolean
null?.["prop"]; // Null
undefined?.["prop"]; // Undefined
```