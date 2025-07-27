---
layout: '@layout/Layout.astro'
---
# ブロックと、ブロックによってできること2つ
## 1. ブロック
### ブロックの作り方は2通り
* `{ }`で囲む
* `do`と`end`で囲む

## 2. ブロックによってできること
### メソッドの呼び出しの関連付け
`yield`文を使ってブロックを1回以上呼び出せる。

`yield`を2回呼び出すメソッドを定義
そのメソッドを呼び出す
ブロックを同じ行（メソッドの引数の後）に記述。メソッドの引数の後であって引数ではない！

### イテレータ
配列などの集合から連続した要素を返すメソッド
```ruby
a = %w( ant bee cat dog elk )    # create an array
a.each { |animal| puts animal }  # iterate over the contents
```

同様に、0回以上関連づいたブロックを呼び出すメソッドを用いることで、CやJavaなどの言語に組み込まれた多くの繰り返し構造体は、Rubyにおいてはメソッド呼び出しでしかない。
```ruby
5.times {  print "*" }
3.upto(6) {|i|  print i }
('a'..'e').each {|char| print char }
```
の結果
```text
*****3456abcde
```

<details><summary>本文</summary>

> This section briefly describes one of Ruby's particular strengths. We're about to look at code blocks: chunks of code that you can associate with method invocations, almost as if they were parameters. This is an incredibly powerful feature. You can use code blocks to implement callbacks (but they're simpler than Java's anonymous inner classes), to pass around chunks of code (but they're more flexible than C's function pointers), and to implement iterators.
Code blocks are just chunks of code between braces or do...end.
```ruby
{ puts "Hello" }       # this is a block

do                     #
  club.enroll(person)  # and so is this
  person.socialize     #
end                    #
```
> Once you've created a block, you can associate it with a call to a method. That method can then invoke the block one or more times using the Ruby `yield` statement. The following example shows this in action. We define a method that calls `yield` twice. We then call it, putting a block on the same line, after the call (and after any arguments to the method).[Some people like to think of the association of a block with a method as a kind of parameter passing. This works on one level, but it isn't really the whole story. You might be better off thinking of the block and the method as coroutines, which transfer control back and forth between themselves.]
```ruby
def callBlock
  yield
  yield
end

callBlock { puts "In the block" }
```
> produces:
```ruby
In the block
In the block
```
> See how the code in the block (`puts "In the block"`) is executed twice, once for each call to yield.
> You can provide parameters to the call to yield: these will be passed to the block. Within the block, you list the names of the arguments to receive these parameters between vertical bars ("`|`").
```ruby
  def callBlock
    yield , 
  end

  callBlock { |, | ... }
```
> Code blocks are used throughout the Ruby library to implement iterators: methods that return successive elements from some kind of collection, such as an array.
```ruby
a = %w( ant bee cat dog elk )    # create an array
a.each { |animal| puts animal }  # iterate over the contents
```
> produces:
```text
ant
bee
cat
dog
elk
```
> Let's look at how we might implement the `Array` class's each iterator that we used in the previous example. The each iterator loops through every element in the array, calling yield for each one. In pseudo code, this might look like:
```ruby
# within class Array...
def each
  for each element
    yield(element)
  end
end
```
> You could then iterate over an array's elements by calling its each method and supplying a block. This block would be called for each element in turn.
```ruby
[ 'cat', 'dog', 'horse' ].each do |animal|
  print animal, " -- "
end
```
> produces:
```text
cat -- dog -- horse --
```
> Similarly, many looping constructs that are built into languages such as C and Java are simply method calls in Ruby, with the methods invoking the associated block zero or more times.
```ruby
5.times {  print "*" }
3.upto(6) {|i|  print i }
('a'..'e').each {|char| print char }
```
> produces:
```text
*****3456abcde
```
> Here we ask the number 5 to call a block five times, then ask the number 3 to call a block, passing in successive values until it reaches 6. Finally, the range of characters from "a" to "e" invokes a block using the method each.

</details>
