## リテラル
以下の記号で文字列を囲めば、文字列としてコンピュータが理解できる。
ただ、シングルクォーテーションを使ったときの方がCPUの処理が速くなる。
ダブルクォーテーションの場合は、中に`\`で始まる制御文字を許可するので、そっちを探すため、遅くなる。

### シングルクォーテーション(`'`)
### ダブルクォーテーション(`"`)

### リテラル
1. シングルクォーテーション(`'`)
1. ダブルクォーテーション(`"`)

以上で文字列を囲めば、文字列としてコンピュータが理解できる。
ただ、シングルクォーテーションを使ったときの方がCPUの処理が速くなる。
ダブルクォーテーションの場合は、中に`\`で始まる制御文字を許可するので、そっちを探すため、遅くなる。

Simple, with minimal escape sequences:
```ruby　
'\\' # Escaped backslash
'\'' # Escaped apostrophe
```
becomes
```text
\
'
```

```ruby
'escape using "\\"'   # => escape using "\"
'That\'s right'       # => That's right
Double-Quoted Strings ("):
```
Supports more escape sequences, such as \n (newline).
Allows interpolation of Ruby expressions using #{}.
Examples:

```ruby
"Seconds/day: #{24*60*60}"   # => Seconds/day: 86400
"#{'Ho! '*3}Merry Christmas" # => Ho! Ho! Ho! Merry Christmas
"This is line #$."           # => This is line 3
Escape Sequences in Double-Quoted Strings
Refer to Table 18.2 (Page 203) for a complete list of escape sequences.
```

#### Advanced String Construction
`%q` and `%Q` Literals:

`%q`: Single-quoted string (no interpolation or special escape sequences).
`%Q`: Double-quoted string (supports interpolation and escape sequences).
Examples:

```ruby
%q/general single-quoted string/   # => general single-quoted string
%Q!general double-quoted string!  # => general double-quoted string
%Q{Seconds/day: #{24*60*60}}      # => Seconds/day: 86400
The character following q or Q acts as a delimiter. If it is an opening symbol (e.g., {, [, (, <), the string ends at the matching closing symbol.
```

Here Documents (<<):

Creates multi-line strings using a special syntax:

ruby
Copy code
aString = <<END_OF_STRING
The body of the string
is the input lines up to
one ending with the same
text that followed the '<<'
END_OF_STRING
By default, the terminator must start in the first column. You can indent it by adding a - after the <<.

Examples:

```ruby
Copy code
print <<-STRING1, <<-STRING2
   Concat
STRING1
      enate
STRING2
# Produces:
# Concat
# enate
```


Here’s an organized version of the text, dividing it into sections for better readability and flow: 