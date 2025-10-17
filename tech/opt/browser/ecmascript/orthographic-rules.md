# Orthographic rules -JS

### Case and width

1. Case sensitivity is distinguished.
2. Full-width and half-width characters are distinguished.
3. Half-width spaces, tabs (indents), and line breaks (if between sentences, they help distinguish different sentences) are ignored.

### `;` and line break

1. `;` is used to separate sentences on the same line.
2. If there is a line break between sentences, it is considered a different sentence even without `;`.

### Commenting out (in VS Code or Cursor, use `CMD`+`/`)

1. Single line `//`
2. Multi-line `/* */`

### Case and width

1. Case sensitivity is distinguished.
2. Full-width and half-width characters are distinguished.
3. Half-width spaces, tabs (indents), and line breaks (if between sentences, they help distinguish different sentences) are ignored.

### `;` and line break

1. `;` is used to separate sentences on the same line.
2. If there is a line break between sentences, it is considered a different sentence even without `;`.

### Commenting out (in VS Code or Cursor, use `CMD`+`/`)

1. Single line `//`
2. Multi-line `/* */`


JSON(**J**ava**S**cript **O**bject **N**otation)

### 文字列("...")

ダブルクォーテーション(")で囲んだ文字列を指定します。

```
{ "name": "Tanaka" }
```

文字としては、0x00～0x1F までの制御文字、ダブルクォーテーション(")、バックスラッシュ(\)を除く、UTF-8 でエンコードした Unicode 文字列を使用できます。サロゲートペアも使用可能です。ダブルクォーテーション(")、バックスラッシュ(\)を使用するには、下記のエスケープシーケンスを使用します。

- \" ... ダブルクォーテーション(")
- \\ ... バックスラッシュ(\)
- \/ ... スラッシュ(/) ... 単にスラッシュ(/)のみを記述することも可能
- \b ... バックスペース
- \f ... フォームフィード
- \n ... ラインフィード
- \r ... キャリッジリターン
- \t ... タブ
- \u*XXXX* ... Unicode文字(UTF-8でエンコードした文字でも可能)

### 数値(123, 12.3, 1.23e4)

123, 12.3, 1.23e3 などの数値を指定します。

```
{
  "age":26,
  "pi":3.14,
  "planck_constant":6.62607e-34
}

```

数値は IEEE 754 の 64ビット倍精度の数値として扱われます。整数の場合は -2^53+1(-9,007,199,254,740,991)～2^53-1(9,007,199,254,740,991) の精度を扱うことができます。浮動小数の場合は、仮数部53ビット(10進数で15～16桁)、指数部11ビット(10進数で-1022～+1023)の精度を扱うことができます。精度を超える場合は丸め誤差が発生します。

### ヌル値(null)

値が無いことを示すヌル値を null で指定します。null はすべて小文字で指定します。

```
{
  "name":null
}

```

### 真偽値(true, false)

真偽を true または false で指定します。true や false はすべて小文字で指定します。

```
{
  "active_flag":true,
  "delete_flag":false
}

```

### オブジェクト({...})

オブジェクトを {...} で指定します。オブジェクトは階層構造を持つことができます。

```
{
  "user_info":{
    "user_id": "A1234567",
    "user_name": "Yamada Taro"
  }
}

```

### 配列([...])

配列を [...] で指定します。配列要素には、文字列、数値、ヌル値、真偽値、オブジェクト、配列すべてを使用することができます。

```
{
  "color_list":[ "red", "green", "blue" ],
  "num_list":[ 123, 456, 789 ],
  "mix_list":[ "red", 456, null, true ],
  "array_list":[ [ 12, 23 ], [ 34, 45 ], [ 56, 67 ] ],
  "object_list":[
    { "name": "Tanaka", "age": 26 },
    { "name": "Suzuki", "age": 32 }
  ]
}
```

JSON形式は、言語間でやり取りできるのでよい
https://products.sint.co.jp/topsic/blog/json
