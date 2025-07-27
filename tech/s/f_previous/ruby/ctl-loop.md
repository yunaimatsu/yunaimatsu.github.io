---
layout: '@layout/Layout.astro'
---
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