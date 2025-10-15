---
layout: '@layout/Layout.astro'
---
## 数字型
Ruby supports integers and floating-point numbers. This section covers how integers are handled, their types, representations, and special features.

### 1. 整数型
FixnumとBignumの交換は自動的に行われる
#### Fixnum

* $-2^{30}$ to $2^{30}-1$ か $-2^{62}$ to $2^{62}-1$
* もちろんだがバイナリで保存される
```ruby
num = 8
7.times do
  print num.class, " ", num, "\n"
  num *= num
end
```
Output:
```textss
Fixnum 8
Fixnum 64
Fixnum 4096
Fixnum 16777216
Bignum 281474976710656
Bignum 79228162514264337593543950336
Bignum 6277101735386680763835789423207666416102355444464034512896
```
### Bignum
Fixnumの範囲を超えるデータ量の数字は自動的にBignumに割り当てられる
小さな整数の可変長集合として実行される．

### 2. 整数表示
Base Indicators

Ruby supports decimal, hexadecimal, octal, and binary formats for integers.
Examples:
ruby
Copy code
123456                    # Decimal Fixnum
123_456                   # Decimal Fixnum (underscore ignored)
-543                      # Negative Fixnum
123_456_789_123_345_789   # Large number (Bignum)
0xaabb                    # Hexadecimal
0377                      # Octal
-0b101_010                # Binary (negated)
Underscore in Numbers

Underscores can be used to improve readability in large numbers.
Ignored in interpretation.
ASCII Character and Escape Sequences

You can use a ? prefix to get the integer value corresponding to an ASCII character or escape sequence.
Examples:
ruby
Copy code
?A          # 65
?\n         # 10 (newline character)
Control and Meta Combinations

Control and meta key combinations can be generated using the following syntax:
ruby
Copy code
?\C-x       # Control-x
?\M-x       # Meta-x
?\M-\C-x    # Meta-Control-x