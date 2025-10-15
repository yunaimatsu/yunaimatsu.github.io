# import -info

### <>

```html
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
```

### js

```jsx

```

### 🐍

```python
import abc as ABC

```

### c, c++

そもそも、c, c++には何にも組み込み関数がない。そのため、初めに複数のメソッドをインポートする必要がある。

- list of header
    
    標準ヘッダとは、C言語の標準規格で定められている標準ライブラリの関数宣言が行われているヘッダ群のことです。型の宣言やマクロの定義も行われています。JIS X3010:2003(ISO/IEC 9899：1999)、通称C99では、標準ヘッダとして以下の24ファイルを定めています。
    
    | ヘッダ | 名称 | 内容 |
    | --- | --- | --- |
    | [`assert.h`](http://www.c-lang.org/detail/assert_h.html) | 診断機能 | 実行時診断を行うassertマクロを定義する。 |
    | [`complex.h`](http://www.c-lang.org/detail/complex_h.html) | 複素数計算 | 複素数計算をサポートするマクロ、関数を宣言、定義する。C99より追加。 |
    | [`ctype.h`](http://www.c-lang.org/detail/ctype_h.html) | 文字操作 | 文字分類、文字変換に有用な関数を宣言する。 |
    | [`errno.h`](http://www.c-lang.org/detail/errno_h.html) | エラー | ライブラリ関数内エラーの報告用マクロを定義する。 |
    | [`fenv.h`](http://www.c-lang.org/detail/fenv_h.html) | 浮動小数点環境 | 浮動小数点環境へのアクセス手段を提供するための型、マクロ、関数を宣言、定義する。C99より追加。 |
    | [`float.h`](http://www.c-lang.org/detail/float_h.html) | 浮動小数点型の特性 | 浮動小数点型の大きさや特性を表すマクロを定義する。 |
    | [`inttypes.h`](http://www.c-lang.org/detail/inttypes_h.html) | 整数型の書式変換 | 最大幅の整数を操作する関数、及び数値文字列を最大幅の整数に変換する関数を宣言する。C99より追加。 |
    | [`iso646.h`](http://www.c-lang.org/detail/iso646_h.html) | 代替つづり | 演算子の代替つづりマクロを定義する。C95より追加。 |
    | [`limits.h`](http://www.c-lang.org/detail/limits_h.html) | 整数型の大きさ | 整数型の大きさを表すマクロを定義する。 |
    | [`locale.h`](http://www.c-lang.org/detail/locale_h.html) | 文化圏固有操作 | 文化圏固有のデータ等の操作を行う型、マクロ、関数を宣言、定義する。 |
    | [`math.h`](http://www.c-lang.org/detail/math_h.html) | 数学 | 数学的な演算を行う関数、及び関連するマクロを宣言、定義する。 |
    | [`setjmp.h`](http://www.c-lang.org/detail/setjmp_h.html) | 非局所分岐 | 関数の枠組みを越えた分岐を制御するための型、マクロ、関数を宣言、定義する。 |
    | [`signal.h`](http://www.c-lang.org/detail/signal_h.html) | シグナル操作 | 種々のシグナルを操作するための型、マクロ、関数を宣言、定義する。 |
    | [`stdarg.h`](http://www.c-lang.org/detail/stdarg_h.html) | 可変個数の実引数 | 可変個の実引数を実現するための型、マクロを定義する。 |
    | [`stdbool.h`](http://www.c-lang.org/detail/stdbool_h.html) | 論理型及び論理値 | 論理型及び論理値に関連するマクロを定義する。C99より追加。 |
    | [`stddef.h`](http://www.c-lang.org/detail/stddef_h.html) | 共通の定義 | 処理系に依存する型、マクロを定義する。 |
    | [`stdint.h`](http://www.c-lang.org/detail/stdint_h.html) | 整数型 | 指定幅を持つ整数型を宣言する。また、それらの宣言に対応するマクロを定義する。C99より追加。 |
    | [`stdio.h`](http://www.c-lang.org/detail/stdio_h.html) | 入出力 | 入出力に関連する型、マクロ、関数を宣言、定義する。 |
    | [`stdlib.h`](http://www.c-lang.org/detail/stdlib_h.html) | 一般ユーティリティ | 一般ユーティリティに関連する型、マクロ、関数を宣言、定義する。 |
    | [`string.h`](http://www.c-lang.org/detail/string_h.html) | 文字列操作 | 文字列の操作を行うための型、マクロ、関数を宣言、定義する。 |
    | [`tgmath.h`](http://www.c-lang.org/detail/tgmath_h.html) | 型総称数学関数 | 数学関数の型総称マクロを定義する。 |
    | [`time.h`](http://www.c-lang.org/detail/time_h.html) | 日付及び時間 | 時間を扱うための型、マクロ、関数を宣言、定義する。 |
    | [`wchar.h`](http://www.c-lang.org/detail/wchar_h.html) | 多バイト文字及びワイド文字拡張ユーティリティ | 多バイト文字、ワイド文字に関連する型、マクロ、関数を宣言、定義する。C95より追加。 |
    | [`wctype.h`](http://www.c-lang.org/detail/wctype_h.html) | ワイド文字種分類及びワイド文字大文字小文字変換ユーティリティ | ワイド文字種の分類や大文字小文字変換に有用な型、マクロ、関数を宣言、定義する。C95より追加。 |

[#includeの意味(C/C++) - プログラミング講座 - fuku研究所](http://www5f.biglobe.ne.jp/~fuku-labo/library/program/cpp/1/036.htm)

```cpp

```