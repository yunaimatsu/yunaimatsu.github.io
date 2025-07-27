---
layout: '@layout/Layout.astro'
---
## 条件分岐文
### 通常の形
1. `if`
1. 条件
1. 処理
1. `end`
```ruby
if radiation > 3000
  puts "Danger, Will Robinson"
end
```
### 省略形(ブロック内の処理が一行の時)
1. 処理(単行)
1. `if`
1. 条件
```ruby
puts "Danger, Will Robinson" if radiation > 3000
```
