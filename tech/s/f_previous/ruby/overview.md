これらの**インスタンス**はどちらも同じ**クラス**から派生しています。しかし、それらは各々独自の特徴を持っています。
第一に、それぞれのオブジェクトは独自の**オブジェクト識別子**(略してオブジェクトID)を持っています。第二に、**インスタンス変数**という、それぞれの**インスタンス**ごとに独自の値を持つ変数を定義できます。インスタンス変数にはオブジェクトの**ステート**を持つことができます。
ジュークボックスの例では、歌の中では歌のタイトルがインスタンス変数としてあるだろう。
インスタンスメソッドを用意することができます。
それぞれの**メソッド**は機能の集合です。
クラスの中で呼び出すことができます。制約によってはクラスの外から呼び出すことができる。
これらのインスタンスメソッドはオブジェクトのインスタンス変数つまりオブジェクトのステートにアクセスできる。

</details>

---

## メソッドを呼びだそう
メソッドは、以下の書き方で呼び出すことができます。
 
<details>
<summary>
本文
</summary>

> メソッドはオブジェクトにメッセージを送ることで呼び出される。メッセージは、メソッドの名前に加えて、メソッドに必要なパラメータを添えたものだ。(因みに、メソッド呼び出しをメッセージという形式で表現するアイデアは、スモールトークからきている)。
オブジェクトがメッセージを受け取ったら、次に対応するクラスを調べる。
もし同じ名前のメソッドがあったら、そのメソッドが実行される。
もし見つからなかったら…そうですね、それについては後で話します。
これらのインスタンスメソッドは、代わりにインスタンス変数にアクセスすることができます。
つまり、オブジェクトのステートアクセスできるってわけです。

</details>

---

メソッド呼び出しの例

<details>
<summary>
本文
</summary>

> メソッドとメッセージの作業は複雑に聞こえるかもしれません。しかし、実際にはとても自然なことです。いくつかメソッド呼び出しを見てみましょう。例のコードの矢印は対応する表現によって返される値を表しています。

|入力|出力|
|---|---|
|`"gin joint".length`|9|
|`"Rick".index("c")`|2|
|`-1942.abs`|1942|
|`sam.play(aSong)`|"duh dum, da dum de dum ..."|
> ここでは、ピリオドの前のものが**レシーバ**と呼ばれます。そして、ピリオドの後のものが呼び出される**メソッド** です。
最初の例は文字列にその長さを尋ねています。
2つ目の例では、別の文字列に`c`という文字のインデックスを見つけるようにお願いしています。
3行目では、数値を、その絶対値を計算させています。
最後にサムに歌を演奏するようお願いしています。

</details>

---
他の言語(Java, C)との、メソッド呼び出しの違いを説明しています。関数に数値を入れてアウトプットを求める他の言語と比べ、Rubyでは常にオブジェクトを中心にメソッドが呼び出されていることが分かります。

<details>
<summary>
本文

</summary>

> It's worth noting here a major difference between Ruby and most other languages. In (say) Java, you'd find the absolute value of some number by calling a separate function and passing in that number. You might write 

```Java
number=Math.abs(number)
// Java code
```

> In Ruby, the ability to determine an absolute value is built into numbers---they take care of the details internally. You simply send the message `abs` to a number object and let it do the work.

```Ruby
number=number.abs
```

> The same applies to all Ruby objects: in C you'd write `strlen(name)`, while in Ruby it's `name.length`, and so on. This is part of what we mean when we say that Ruby is a genuine OO language.

</details>

---

# 2. Rubyの基礎文法
ここから基本的なRubyの構文について学べるそうです。

<details>
<summary>
本文
</summary>

> ## Some Basic Ruby

</details>

---

だらだら読むのは面倒だろう、という理由で、とりあえず必要な事項だけ軽くさらってくれるみたいです。詳細は18章でやってくれるそうです。
まずは、文字列どうしをくっつけるメソッドを例に、Rubyの特徴を追うこととしましょう。

<details>
<summary>
本文
</summary>

> Not many people like to read heaps of boring syntax rules when they're picking up a new language. So we're going to cheat. In this section we'll hit some of the highlights, the stuff you'll just have to know if you're going to write Ruby programs. Later, in Chapter 18, which begins on page 199, we'll go into all the gory details.
Let's start off with a simple Ruby program. We'll write a method that returns a string, adding to that string a person's name. We'll then invoke that method a couple of times.

```ruby
def sayGoodnight(name)
  result = "Goodnight, " + name
  return result
end

# Time for bed...
puts sayGoodnight("John-Boy")
puts sayGoodnight("Mary-Ellen")
```
> First, some general observations. Ruby syntax is clean. You don't need semicolons at the ends of statements as long as you put each statement on a separate line. Ruby comments start with a `#` character and run to the end of the line. Code layout is pretty much up to you; indentation is not significant.

</details>


```text
puts sayGoodnight "John-Boy"
puts sayGoodnight("John-Boy")
puts(sayGoodnight "John-Boy")
puts(sayGoodnight("John-Boy"))
```
> However, life isn't always that simple, and precedence rules can make it difficult to know which argument goes with which method invocation, so we recommend using parentheses in all but the simplest cases.

> This example also shows some Ruby string objects. There are many ways to create a string object, but probably the most common is to use string literals: sequences of characters between single or double quotation marks. The difference between the two forms is the amount of processing Ruby does on the string while constructing the literal. In the single-quoted case, Ruby does very little. With a few exceptions, what you type into the string literal becomes the string's value.
> In the double-quoted case, Ruby does more work. First, it looks for substitutions---sequences that start with a backslash character---and replaces them with some binary value. The most common of these is "\n", which is replaced with a newline character. When a string containing a newline is output, the "\n" forces a line break.

</details>

---



Samples of different names are given in Table 2.1 on page 10.

<details>
<summary>
本文
</summary>

> We promised that this section would be brief. We've got just one more topic to cover: Ruby names. For brevity, we'll be using some terms (such as class variable) that we aren't going to define here. However, by talking about the rules now, you'll be ahead of the game when we actually come to discuss instance variables and the like later.

> Ruby uses a convention to help it distinguish the usage of a name: the first characters of a name indicate how the name is used. Local variables, method parameters, and method names should all start with a lowercase letter or with an underscore. Global variables are prefixed with a dollar sign ($), while instance variables begin with an ``at'' sign (@). Class variables start with two "at" signs (`@@`). Finally, class names, module names, and constants should start with an uppercase letter. Samples of different names are given in Table 2.1 on page 10.

> Following this initial character, a name can be any combination of letters, digits, and underscores (with the proviso that the character following an `@` sign may not be a digit).

![Screenshot 2024-12-24 at 5.07.23 AM.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3629535/5d3c3854-9cab-6dfc-04c7-83bd079ec5c3.png)

</details>

### c. 集合(集合とハッシュ)
|言語|集合|ハッシュ|
|---|---|---|
|Python|リスト|辞書型|
|JS/TS|リスト|オブジェクト|

Pythonにおける辞書、JavaScript/TypeScriptにおけるオブジェクト。いうと、集合はリストで、ハッシュは辞書
配列とハッシュはインデックスが付けられた集合だ。どちらもオブジェクトの集合を格納しており、どんなオブジェクトも、キーを使ってアクセスすることができる。
どちらも、必要に応じてより柔軟性をつけることができる。
配列もハッシュも、(整数、文字列、浮動小数点数など)型を区別するためのオブジェクトを持つことができる。
配列は`[ ]`、ハッシュは`{ }`を使う。


### d-(i) 配列
配列に関して、キーは整数。
#### 配列を定義する
```ruby
a = [ 1, 'cat', 3.14 ] # リテラル
a = %w{ ant bee cat dog elk } # 省略形
```
#### 配列の任意の要素を出力させる
配列の順番(インデックス)は`0`から始まります。
```ruby
a[0] # 1
```
#### 任意の値を上書きする
```ruby
a[2] = nil
```
#### 配列の中身を出力する
```ruby
a # [1, "cat", nil]
```
#### 空の配列を生成する
```ruby
empty1 = [] # リテラル
empty2 = Array.new # コンストラクタを使用
```
### d-(ii). ハッシュ
ハッシュはどんなオブジェクトでもキーになりうる。
配列リテラルを使って配列を作ることができる。スクエアブラケット`[ ]`の間の要素の集合。
配列オブジェクトがあれば、インデックスを与えることで個別の要素にアクセスすることができる。
リテラルでは、必ず二つのものを定義する必要がある。**キー**と**値**だ。


#### ハッシュを定義する
```ruby
instSection = {
  'cello'  => 'string',
  'clarinet'  => 'woodwind',
  'drum'  => 'percussion',
  'oboe'  => 'woodwind',
  'trumpet'  => 'brass','violin'  => 'string'
}
```
#### ハッシュのキーを呼び出して、対応する値を表示
```ruby
instSection['oboe'] # "woodwing"
instSection['bassoon'] # 存在しないキーを入力したらnil
```
空のハッシュを生成するとき、`new()`の引数に入れたものが、デフォルトの値になる。
```ruby
histogram = Hash.new(0)
histogram['key1'] # 0
histogram['key1'] = histogram['key1'] + 1
histogram['key1'] # 1
```

<details>
<summary>
本文
</summary>

> Ruby's arrays and hashes are indexed collections. Both store collections of objects, accessible using a key. With arrays, the key is an integer, whereas hashes support any object as a key. Both arrays and hashes grow as needed to hold new elements. It's more efficient to access array elements, but hashes provide more flexibility. Any particular array or hash can hold objects of differing types; you can have an array containing an integer, a string, and a floating point number, as we'll see in a minute.
> You can create and initialize a new array using an array literal---a set of elements between square brackets. Given an array object, you can access individual elements by supplying an index between square brackets, as the next example shows.

```ruby
a = [ 1, 'cat', 3.14 ]   # array with three elements
# access the first element
a[0]	»	1
# set the third element
a[2] = nil
# dump out the array
a	»	[1, "cat", nil]
```
> You can create empty arrays either by using an array literal with no elements or by using the array object's constructor, `Array.new`.

```ruby
empty1 = []
empty2 = Array.new
```

> Sometimes creating arrays of words can be a pain, what with all the quotes and commas. Fortunately, there's a shortcut: `%w`does just what we want.

```ruby
a = %w{ ant bee cat dog elk }
```
|呼び出し||出力|
|---|---|---|
|a[0]|»|"ant"|
|a[3]|»|"dog"|

> Ruby hashes are similar to arrays. A hash literal uses braces rather than square brackets. The literal must supply two objects for every entry: one for the key, the other for the value.
For example, you might want to map musical instruments to their orchestral sections. You could do this with a hash.
```ruby
instSection = {
  'cello'  => 'string',
  'clarinet'  => 'woodwind',
  'drum'  => 'percussion',
  'oboe'  => 'woodwind',
  'trumpet'  => 'brass',
  'violin'  => 'string'
}
```

> Hashes are indexed using the same square bracket notation as arrays.

|呼び出し||出力|
|---|---|---|
|`instSection['oboe']`|»|`"woodwind"`|
|`instSection['cello']`|»|`"string"`|
|`instSection['bassoon']`|»|`nil`|

> As the last example shows, a hash by default returns `nil` when indexed by a key it doesn't contain. Normally this is convenient, as `nil` means `false` when used in conditional expressions. Sometimes you'll want to change this default. For example, if you're using a hash to count the number of times each key occurs, it's convenient to have the default value be zero. This is easily done by specifying a default value when you create a new, empty hash.

```ruby
histogram = Hash.new(0)
```

|呼び出し||出力|
|---|---|---|
|`histogram['key1']`|»|`0`|

```ruby
histogram['key1'] = histogram['key1'] + 1
```

|呼び出し||出力|
|---|---|---|
|`histogram['key1']`|»|`1`|

> Array and hash objects have lots of useful methods: see the discussion starting on page 33, and the reference sections starting on pages 278 and 317, for details.

</details>

---
# 3. Rubyの制御構文
制御構文とは、`if`文や`while`f文など、プログラム全体の全体を決める、**骨組みとなる構造**のことです。

<details>
<summary>
本文
</summary>

> ## Control Structures
</details>

---
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

# 4. 正規表現
正規表現とは、文字列を検索したり条件文にする時に、詳細な条件をつけられるものです。

<details>
<summary>
冒頭でのお気持ち表明
</summary>

Perl, Python, awkなどのスクリプト言語などにしかなく、著者はそれを*恥ずべきことだ*と言っている。
テキスト処理をするのに非常に優れたツールであり、
それだけで本がまるまる一冊かけてしまう(cf. "*Mastering Regular Expressions*")くらいに、正規表現は奥深い。
ここでは深入りできないが、エッセンスを詰め込むつもりだ。詳細まで含めたものはこの本の後で設けるらしい。

</details>

* パターンを`/`と`/`の間に挟んだらよい。
* Rubyにおいては、正規表現もオブジェクトのひとつ。

<br><br>

**どれかの文字列に一致する**
```ruby
/Perl|Python/
```

**`( )`で区切る**
```ruby
/P(erl|ython)/
```

**繰り返し**
```ruby
/ab+c/
```

**0回以上繰り返す**
```ruby
/ab*c/
```

### 文字クラス
**ホワイトスペース(`Space`, `tab`, 改行など…)に対応**
```ruby
/\s/
```
**数字に対応する**
```ruby
/\d/
```
**典型的な言葉に出現しうる文字と対応する**
```ruby
/\w/
```
#### 任意一文字に対応
```ruby
/./
```

"`=~`"
If the pattern is found in the string, `=~`
1. returns its starting position
1. returns `nil`
`if`や`while`などの制御構文での条件でも使うことができるよ。
```ruby
if line =~ /Perl|Python/
  puts "Scripting language mentioned: #{line}"
end
```

正規表現で一致した文字列の部分は置換メソッドでテキストに変えられる。
```ruby
line.sub(/Perl/, 'Ruby') # replace first 'Perl' with 'Ruby'
line.gsub(/Python/, 'Ruby') # replace every 'Python' with 'Ruby'
```

<details>

<summary>
本文
</summary>

> ## Regular Expressions
> ✅️Most of Ruby's built-in types will be familiar to all programmers. A majority of languages have strings, integers, floats, arrays, and so on. However, until Ruby came along, regular expression support was generally built into only the so-called scripting languages, such as Perl, Python, and awk. This is a shame: regular expressions, although cryptic, are a powerful tool for working with text.
✅️Entire books have been written about regular expressions (for example, *Mastering Regular Expressions*), so we won't try to cover everything in just a short section. Instead, we'll look at just a few examples of regular expressions in action. You'll find full coverage of regular expressions starting on page 56.
✅️A regular expression is simply a way of specifying a *pattern* of characters to be matched in a string. In Ruby, you typically create a regular expression by writing a pattern between slash characters (/*pattern*/). And, Ruby being Ruby, regular expressions are of course objects and can be manipulated as such.

> ✅️For example, you could write a pattern that matches a string containing the text "Perl" or the text "Python" using the following regular expression.

```ruby
/Perl|Python/
```

> ✅️The forward slashes delimit the pattern, which consists of the two things we're matching, separated by a pipe character ("`|`"). You can use parentheses within patterns, just as you can in arithmetic expressions, so you could also have written this pattern as `/P(erl|ython)/`
You can also specify repetition within patterns. `/ab+c/` matches a string containing an "`a`" followed by one or more "`b`"s, followed by a "`c`". Change the plus to an asterisk, and `/ab*c/` creates a regular expression that matches an "a", zero or more "b"s, and a "c".
You can also match one of a group of characters within a pattern. Some common examples are character classes such as "`\s`", which matches a whitespace character (space, tab, newline, and so on), "`\d`", which matches any digit, and "`\w`", which matches any character that may appear in a typical word. The single character "." (a period) matches any character.

We can put all this together to produce some useful regular expressions.

```ruby
/\d\d:\d\d:\d\d/     # a time such as 12:34:56
/Perl.*Python/       # Perl, zero or more other chars, then Python
/Perl\s+Python/      # Perl, one or more spaces, then Python
/Ruby (Perl|Python)/ # Ruby, a space, and either Perl or Python
```

> Once you have created a pattern, it seems a shame not to use it. The match operator "`=~`" can be used to match a string against a regular expression. If the pattern is found in the string, `=~` returns its starting position, otherwise it returns `nil`. This means you can use regular expressions as the condition in `if` and `while` statements. For example, the following code fragment writes a message if a string contains the text 'Perl' or 'Python'.
```ruby
if line =~ /Perl|Python/
  puts "Scripting language mentioned: #{line}"
end
```

> The part of a string matched by a regular expression can also be replaced with different text using one of Ruby's substitution methods.

```ruby
line.sub(/Perl/, 'Ruby') # replace first 'Perl' with 'Ruby'
line.gsub(/Python/, 'Ruby') # replace every 'Python' with 'Ruby'
```

> We'll have a lot more to say about regular expressions as we go through the book.

</details>

---

# 5. ブロックと、ブロックによってできること2つ
## 5.a. ブロック
### ブロックの作り方は2通り
* `{ }`で囲む
* `do`と`end`で囲む

## 5.b. ブロックによってできること
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

> ✅️This section briefly describes one of Ruby's particular strengths. We're about to look at code blocks: chunks of code that you can associate with method invocations, almost as if they were parameters. This is an incredibly powerful feature. You can use code blocks to implement callbacks (but they're simpler than Java's anonymous inner classes), to pass around chunks of code (but they're more flexible than C's function pointers), and to implement iterators.
Code blocks are just chunks of code between braces or do...end.
```ruby
{ puts "Hello" }       # this is a block

do                     #
  club.enroll(person)  # and so is this
  person.socialize     #
end                    #
```
> ✅️Once you've created a block, you can associate it with a call to a method. That method can then invoke the block one or more times using the Ruby `yield` statement. The following example shows this in action. We define a method that calls `yield` twice. We then call it, putting a block on the same line, after the call (and after any arguments to the method).[Some people like to think of the association of a block with a method as a kind of parameter passing. This works on one level, but it isn't really the whole story. You might be better off thinking of the block and the method as coroutines, which transfer control back and forth between themselves.]
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
> ✅️See how the code in the block (`puts "In the block"`) is executed twice, once for each call to yield.
> You can provide parameters to the call to yield: these will be passed to the block. Within the block, you list the names of the arguments to receive these parameters between vertical bars ("`|`").
```ruby
  def callBlock
    yield , 
  end

  callBlock { |, | ... }
```
> ✅️Code blocks are used throughout the Ruby library to implement iterators: methods that return successive elements from some kind of collection, such as an array.
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
> ✅Similarly, many looping constructs that are built into languages such as C and Java are simply method calls in Ruby, with the methods invoking the associated block zero or more times.
```ruby
5.times {  print "*" }
3.upto(6) {|i|  print i }
('a'..'e').each {|char| print char }
```
> produces:
```text
*****3456abcde
```
> ✅Here we ask the number 5 to call a block five times, then ask the number 3 to call a block, passing in successive values until it reaches 6. Finally, the range of characters from "a" to "e" invokes a block using the method each.

</details>

# 6. ターミナルにおける入力/出力

## a. 入力
```ruby
gets 
```
`gets`で得た値は、`$_`というグローバル変数に格納される。

## b. 出力
```ruby
puts
print 
printf
```
`print`を引数なしで呼び出すと、`$_`の値が出力される。

<details><summary>本文</summary>

> # Reading and 'Riting
> Ruby comes with a comprehensive I/O library. However, in most of the examples in this book we'll stick to a few simple methods. We've already come across two methods that do output. puts writes each of its arguments, adding a newline after each. print also writes its arguments, but with no newline. Both can be used to write to any I/O object, but by default they write to the console.
Another output method we use a lot is printf, which prints its arguments under the control of a format string (just like printf in C or Perl).
```ruby
printf "Number: %5.2f, String: %s", 1.23, "hello"
```
> produces:
```text
Number:  1.23, String: hello
```
> In this example, the format string "Number: %5.2f, String: %s" tells printf to substitute in a floating point number (allowing five characters in total, with two after the decimal point) and a string.
There are many ways to read input into your program. Probably the most traditional is to use the routine gets, which returns the next line from your program's standard input stream.
```ruby
line = gets
print line
```
> The `gets` routine has a side effect: as well as returning the line just read, it also stores it into the global variable `$_`. This variable is special, in that it is used as the default argument in many circumstances. If you call `print` with no argument, it prints the contents of `$_`. If you write an `if` or `while` statement with just a regular expression as the condition, that expression is matched against `$_`. While viewed by some purists as a rebarbative barbarism, these abbreviations can help you write some concise programs. For example, the following program prints all lines in the input stream that contain the word "Ruby."
```ruby
while gets           # assigns line to $_
  if /Ruby/          # matches against $_
    print            # prints $_
  end
end
```
> The "Ruby way" to write this would be to use an iterator.
```ruby
ARGF.each { |line|  print line  if line =~ /Ruby/ }
```
> This uses the predefined object `ARGF`, which represents the input stream that can be read by a program.

</details>

# 終わり!
最後の一言が書いてあります。
次の章からは**クラス**/**オブジェクト**など、上位概念を扱うようです。

<details>
<summary>本文</summary>

> ## Onward and Upward
> 以上です。いくつかのRubyの基本的機能の爆速紹介を終えました。オブジェクト、メソッド、文字列、コンテナ、正規表現をざっと見てきました。単純な制御構文を眺め、かなりいけてる繰り返し構文も体験しました。願わくは、本章があなたにとって本書の残りが理解するに十分なammunitionを与えたことを望みます。
さあ、次へ進む時です。そしてよりハイレベルな場所へ。次は、クラス、オブジェクトを見ていきます。これまた、Rubyにおいてどちらも最上位の構造体です。 そしてRubyという言語全体において、非常に重要な土台となります。

</details>

---