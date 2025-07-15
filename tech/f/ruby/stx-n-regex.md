# 正規表現
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
> Most of Ruby's built-in types will be familiar to all programmers. A majority of languages have strings, integers, floats, arrays, and so on. However, until Ruby came along, regular expression support was generally built into only the so-called scripting languages, such as Perl, Python, and awk. This is a shame: regular expressions, although cryptic, are a powerful tool for working with text.
Entire books have been written about regular expressions (for example, *Mastering Regular Expressions*), so we won't try to cover everything in just a short section. Instead, we'll look at just a few examples of regular expressions in action. You'll find full coverage of regular expressions starting on page 56.
A regular expression is simply a way of specifying a *pattern* of characters to be matched in a string. In Ruby, you typically create a regular expression by writing a pattern between slash characters (/*pattern*/). And, Ruby being Ruby, regular expressions are of course objects and can be manipulated as such.

> For example, you could write a pattern that matches a string containing the text "Perl" or the text "Python" using the following regular expression.

```ruby
/Perl|Python/
```

> The forward slashes delimit the pattern, which consists of the two things we're matching, separated by a pipe character ("`|`"). You can use parentheses within patterns, just as you can in arithmetic expressions, so you could also have written this pattern as `/P(erl|ython)/`
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
