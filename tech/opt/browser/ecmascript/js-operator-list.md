

## Unary
Logical NOT
```js
!... // 17, Associativity: rtl
```
Converts data of any type into a numeric data type
```js
+... // 17, Associativity: rtl
```
Converts data of any type into a numeric data type
Then changes the sign to negative
```js
-... // 17, Associativity: rtl
```

## Binary
Postfix Increment
Postfix Decrement
Prefix Increment
Prefix Decrement


### Arithmetic
#### Prefix Increment/Decrement (`++x`, `--x`)
```js
...++ // 18, Associativity: none
...-- // 18, Associativity: none
++... // 17, Associativity: rtl
--... // 17, Associativity: rtl
```
The operator is applied *before* the value is returned. The variable is incremented or decremented first, and then the new, updated value is used in the expression.

```js
let a = 5;
let b = ++a; // a becomes 6, then b is set to 6
console.log({ a, b }); // { a: 6, b: 6 }

let c = 5;
let d = --c; // c becomes 4, then d is set to 4
console.log({ c, d }); // { c: 4, d: 4 }
```

#### Suffix (Postfix) Increment/Decrement (`x++`, `x--`)
The operator is applied *after* the value is returned. The original value of the variable is used in the expression first, and then the variable is incremented or decremented.
```js
let x = 5;
let y = x++; // y is set to 5, then x becomes 6
console.log({ x, y }); // { x: 6, y: 5 }

let m = 5;
let n = m--; // n is set to 5, then m becomes 4
console.log({ m, n }); // { m: 4, n: 5 }
```

### Equality


### Relational
### Assignment
### Logic
### Comma
### Bitwise
### After ES6
## Ternary
