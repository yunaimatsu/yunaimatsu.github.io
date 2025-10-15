# Number

Literal(How to write data types in source code.): Write the number as is.
Value: Numeric value:
A number from ($-(2^{53}-1)$ to $(2^{53}-1)$ (integer or floating-point number).
$\text{Cf. }2^{53} - 1$ = $9007199254740991$.
型変換: Number() (Error: NaN)

In JS, Integer and Float aren’t distinguished.

### Float number

`0.n` or `.n`

### Exponent where base is 10

`eN` represents $10^N$ where $N\in\mathbb{Z}$

Example(to express $3\times 10^4$)

```jsx
console.log(3e4);
```

![Screenshot 2024-09-01 at 17.06.06.png](Number%20ff9d56ddbbff469ca524e0f2f5c13f10/Screenshot_2024-09-01_at_17.06.06.png)

`e+15` represents $10^{15}$ here thus the above number indicates $9.0071993\times 10^{15}$

## Decimal(Start with number not 0)

## Binary(Start with `0b`/`0B`)

## Octal(Start with `0o`/`0O`)

## Hexadecimal(Start with `0x`/`0X`)