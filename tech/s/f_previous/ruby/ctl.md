---
layout: '@layout/Layout.astro'
---
# Rubyの制御構文
制御構文とは、`if`文や`while`f文など、プログラム全体の全体を決める、**骨組みとなる構造**のことです。

条件分岐も、繰り返しも、ボディではなく`end`を使う。
Perlに似てるらしい。

### 省略形がある
#### 条件分岐文
**通常の形**
```ruby
if radiation > 3000
  puts "Danger, Will Robinson"
end
```
**省略形**(ブロック内の処理が一行の時)
```ruby
puts "Danger, Will Robinson" if radiation > 3000
```

#### 繰り返し文
**通常の形**
```ruby
while square < 1000
   square = square*square
end
```
**省略形**(ブロック内の処理が一行の時)
```ruby
square = square*square while square < 1000
```

<details>
<summary>
本文
</summary>

> Ruby has all the usual control structures, such as `if` statements and `while` loops. Java, C, and Perl programmers may well get caught by the lack of braces around the bodies of these statements. Instead, Ruby uses the keyword `end` to signify the end of a body.
```ruby
if count > 10
  puts "Try again"
elsif tries == 3
  puts "You lose"
else
  puts "Enter a number"
end
```

> Similarly, `while` statements are terminated with `end`

```ruby
while weight < 100 and numPallets <= 30
  pallet = nextPallet()
  weight += pallet.weight
  numPallets += 1
end
```

> Ruby *statement modifiers* are a useful shortcut if the body of an `if` or `while` statement is just a single expression. Simply write the expression, followed by `if` or `while` and the condition. For example, here's a simple `if` statement.

```ruby
if radiation > 3000
  puts "Danger, Will Robinson"
end
```

> Here it is again, rewritten using a statement modifier.

```ruby
puts "Danger, Will Robinson" if radiation > 3000
```

> Similarly, a `while` loop such as

```ruby
while square < 1000
   square = square*square
end
```

> becomes the more concise

```ruby
square = square*square  while square < 1000
```

> These statement modifiers should seem familiar to Perl programmers.

</details>

---