# ... ?? ...

Associativity: Left to Right
Description: Nullish Coalescing
Precedence: 5
Type: After ES6

```jsx
// Assign `null` to variable
let val = null;

// If left operand is null/undefined, right operand will be returned
val = val ?? "Initial value";
console.log("val is ${val}");
```