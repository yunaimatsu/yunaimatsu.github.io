# String

Concatinate: +を間につける
Literal(How to write data types in source code.): ‘’, “”, `` (ES6 and later. variables or constants can be inserted into `${ }`)
If the opening and closing quotes do not match, an error will occur.
シングルクォートやダブルクォートを文字列に含める時は、文字列に含めたいクォートの種類と別のクォートで全体を囲む。
もしダブルクォートの中でダブルクォートを文字として表示したい場合には、\を使う。
Value: Text string: Enclosed in single quotes (' '), double quotes (" "), or backticks (` `).
型変換: String()

### Escaped Sequences List

| Escaped Sequence | Meaning |
| --- | --- |
| `\b` | Backspace |
| `\t` | Horizontal Tab |
| `\v` | Vertical Tab |
| `\n` | New Line |
| `\r` | Carriage Return |
| `\f` | Form Feed |
| `\"` | Double Quote |
| `\'` | Single Quote |
| `\`` | Backquote |
| `\\` | Backslash |
| `\0` | NULL Character |
| `\xXX` | Latin-1 Character Represented by 2 Hex Digits |
| `\uXXXX` | Unicode Character Represented by 4 Hex Digits |
| `\u{XXXXXX}` | Unicode Character Represented by Code Points |