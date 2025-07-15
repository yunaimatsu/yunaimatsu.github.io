---
layout: '@layout/Layout.astro'
---
`yield`メソッドを使えば，メソッド内からブロックを呼び出せる．
```ruby
def takeBlock(p1)
  if block_given?
    yield
  else
    e1
  end
end
```
## 定義
### 範囲
1. `def`から始まって`end`に終わります．

### 文字の慣習
1. メソッド名は小文字から始まる
1. 終わりの記号
    1. `!`: 何か予想外の挙動をしうるメソッドの名前
    1. `?`: クエリ処理をするメソッドの名前

### 引数
1. 引数はローカル変数である
    1. 引数の`( )`は，紛らわしくない場合は省略することができるが，非推奨
    1. In particular, you must use parentheses on a method call that is itself a parameter to another method call (unless it is the last parameter).
1. デフォルト値(呼び出し側が引数の指定されなかった場合に渡される値)
1. 通常の引数の後にパラメータ名の前にアスタリスク`*`を配置します。
    1. 可変個数の引数をメソッドに渡したい場合
    1. 複数の引数をまとめて扱いたい場合
1. 最後の引数の前に`&`をつけると，関連付けられたブロックは`Proc`オブジェクトに変換され、そのオブジェクトがパラメータに割り当てられます。

### ボディ
1. Ruby表現
1. 許容されないもの
    1. インスタンスメソッド
    1. クラス
    1. モジュール

### 出力
1. 最後に実行された処理の結果が出力される
1. `return`文で明示的に指定されたものも出力される

```ruby
def takeBlock(p1)
  if block_given?
    yield(p1)
  else
    p1
  end
end
```

```ruby
takeBlock("no block")
takeBlock("no block") { |s| s.sub(/no /, '') }
```

```ruby
class TaxCalculator
  def initialize(name, &block)
    @name, @block = name, block
  end
  def getTax(amount)
    "#@name on #{amount} = #{ @block.call(amount) }"
  end
end

tc = TaxCalculator.new("Sales tax") { |amt| amt * 0.075 }
tc.getTax(100)	# "Sales tax on 100 = 7.5"
tc.getTax(250)	# "Sales tax on 250 = 18.75"
```

## 呼び出し
### 呼び出す方法
以下の4行は全て同じアウトプット。
だけど、各個を使うのかオススメ。複雑なコードになると、主従関係がややこしくため。
```text
puts sayGoodnight "John-Boy"
puts sayGoodnight("John-Boy")
puts(sayGoodnight "John-Boy")
puts(sayGoodnight("John-Boy"))
```

メソッドが呼び出される時，必ずブロックと関連づけられる．
メソッド内から呼びだされる時は`yield`を使う．

1. 以下の2つは必須で書く
    1. レシーバ(クラス/モジュールメソッド/メソッド)を書く(省略すると，最新のオブジェクト(`self.`)に設定される)
    1. メソッド名を書くことによって呼び出すことができる．
1. 任意で以下のものも書くことができる
    1. 引数
    1. 関連づけられたブロック

```ruby
receiber.methodName(parameters) { associatedBlock }
```

### 引数
* 集合の前に`*`をおくことで，それを分解して引数として渡すことができる．

```ruby
def five(a, b, c, d, e)
  "I was passed #{a} #{b} #{c} #{d} #{e}"
end

five(1, 2, 3, 4, 5)
# => "I was passed 1 2 3 4 5"

five(1, 2, 3, *['a', 'b'])
# => "I was passed 1 2 3 a b"

five(*(10..14).to_a)
# => "I was passed 10 11 12 13 14"
```