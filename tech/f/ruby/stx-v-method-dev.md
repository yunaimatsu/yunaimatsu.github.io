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