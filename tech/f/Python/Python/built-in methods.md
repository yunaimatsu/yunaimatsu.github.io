# built-in methods

- `with open('test.txt', 'r') as file:`

Python インタプリタには数多くの関数と型が組み込まれており、いつでも利用できます。それらをここにアルファベット順に挙げます。

**R**`range()`

`repr()`

`reversed()`

`round()`

**S**

- `split()`
    
    ```python
    variable1 = '区切り文字を含む文字列'
    array = 変数.split('区切り文字')
    for 変数2 in 配列:
      print(変数2)
    ```
    

`set()`

`setattr()`

`slice()`

`sorted()`

`staticmethod()`

`str()`

`sum()`

`super()`

**T**`tuple()type()`

**V**`vars()`

**Z**`zip()`

**_**`__import__()`

| 組み込み関数 |  |  |  |
| --- | --- | --- | --- |
| **A**[`abs()](https://docs.python.org/ja/3/library/functions.html#abs)
[aiter()](https://docs.python.org/ja/3/library/functions.html#aiter)[all()](https://docs.python.org/ja/3/library/functions.html#all)[anext()](https://docs.python.org/ja/3/library/functions.html#anext)[any()](https://docs.python.org/ja/3/library/functions.html#any)[ascii()](https://docs.python.org/ja/3/library/functions.html#ascii)`**B**[`bin()](https://docs.python.org/ja/3/library/functions.html#bin)[bool()](https://docs.python.org/ja/3/library/functions.html#bool)[breakpoint()](https://docs.python.org/ja/3/library/functions.html#breakpoint)[bytearray()](https://docs.python.org/ja/3/library/functions.html#func-bytearray)[bytes()](https://docs.python.org/ja/3/library/functions.html#func-bytes)`**C**[`callable()](https://docs.python.org/ja/3/library/functions.html#callable)[chr()](https://docs.python.org/ja/3/library/functions.html#chr)[classmethod()](https://docs.python.org/ja/3/library/functions.html#classmethod)[compile()](https://docs.python.org/ja/3/library/functions.html#compile)[complex()](https://docs.python.org/ja/3/library/functions.html#complex)`**D**[`delattr()](https://docs.python.org/ja/3/library/functions.html#delattr)[dict()](https://docs.python.org/ja/3/library/functions.html#func-dict)[dir()](https://docs.python.org/ja/3/library/functions.html#dir)[divmod()](https://docs.python.org/ja/3/library/functions.html#divmod)` | **E**[`enumerate()](https://docs.python.org/ja/3/library/functions.html#enumerate)[eval()](https://docs.python.org/ja/3/library/functions.html#eval)[exec()](https://docs.python.org/ja/3/library/functions.html#exec)`**F**[`filter()](https://docs.python.org/ja/3/library/functions.html#filter)[float()](https://docs.python.org/ja/3/library/functions.html#float)[format()](https://docs.python.org/ja/3/library/functions.html#format)[frozenset()](https://docs.python.org/ja/3/library/functions.html#func-frozenset)`**G**[`getattr()](https://docs.python.org/ja/3/library/functions.html#getattr)[globals()](https://docs.python.org/ja/3/library/functions.html#globals)`**H**[`hasattr()](https://docs.python.org/ja/3/library/functions.html#hasattr)[hash()](https://docs.python.org/ja/3/library/functions.html#hash)[help()](https://docs.python.org/ja/3/library/functions.html#help)[hex()](https://docs.python.org/ja/3/library/functions.html#hex)`**I**[`id()](https://docs.python.org/ja/3/library/functions.html#id)[input()](https://docs.python.org/ja/3/library/functions.html#input)[int()](https://docs.python.org/ja/3/library/functions.html#int)[isinstance()](https://docs.python.org/ja/3/library/functions.html#isinstance)[issubclass()](https://docs.python.org/ja/3/library/functions.html#issubclass)[iter()](https://docs.python.org/ja/3/library/functions.html#iter)` | **L**[`len()](https://docs.python.org/ja/3/library/functions.html#len)[list()](https://docs.python.org/ja/3/library/functions.html#func-list)[locals()](https://docs.python.org/ja/3/library/functions.html#locals)`**M**[`map()](https://docs.python.org/ja/3/library/functions.html#map)[max()](https://docs.python.org/ja/3/library/functions.html#max)[memoryview()](https://docs.python.org/ja/3/library/functions.html#func-memoryview)[min()](https://docs.python.org/ja/3/library/functions.html#min)`**N**[`next()`](https://docs.python.org/ja/3/library/functions.html#next)**O**[`object()](https://docs.python.org/ja/3/library/functions.html#object)[oct()](https://docs.python.org/ja/3/library/functions.html#oct)[open()](https://docs.python.org/ja/3/library/functions.html#open)[ord()](https://docs.python.org/ja/3/library/functions.html#ord)`**P**[`pow()](https://docs.python.org/ja/3/library/functions.html#pow)[print()](https://docs.python.org/ja/3/library/functions.html#print)[property()](https://docs.python.org/ja/3/library/functions.html#property)` |  |

**abs**(*x*)数の絶対値を返します。引数は整数、浮動小数点数または `__abs__()` が実装されたオブジェクトです。引数が複素数なら、その絶対値 (magnitude) が返されます。

**aiter**(*async_iterable*)[asynchronous iterable](https://docs.python.org/ja/3/glossary.html#term-asynchronous-iterable) から [asynchronous iterator](https://docs.python.org/ja/3/glossary.html#term-asynchronous-iterator) を返します。 `x.__aiter__()` を呼び出すのと等価です。
なお、 [`iter()`](https://docs.python.org/ja/3/library/functions.html#iter) とは異なり、 [`aiter()`](https://docs.python.org/ja/3/library/functions.html#aiter) は第二引数を持ちません。
*バージョン 3.10 で追加.*

**all**(*iterable*)*iterable* の全ての要素が真ならば (もしくは *iterable* が空ならば) `True` を返します。以下のコードと等価です:

**`def** all(iterable):
    **for** element **in** iterable:
        **if** **not** element:
            **return** **Falsereturn** **True**`

*awaitable* **anext**(*async_iterator*)*awaitable* **anext**(*async_iterator*, *default*)待ち受け中に、与えられた非同期イテレータ ([asynchronous iterator](https://docs.python.org/ja/3/glossary.html#term-asynchronous-iterator)) を返します。イテレータが枯渇した場合、 *default* が与えられていれば *default* を返します。
これは組み込みの [`next()`](https://docs.python.org/ja/3/library/functions.html#next) 関数の非同期版であり、同じように動作します。
これは *async_iterator* の [`__anext__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__anext__) メソッドを呼び出し、待ち受け可能オブジェクト ([awaitable](https://docs.python.org/ja/3/glossary.html#term-awaitable)) を返します。待ち受けることによりイテレータの次の値を返します。 *default* が与えられた場合、イテレータが枯渇したときにその値が返されます。 *default* が与えられない場合は [`StopAsyncIteration`](https://docs.python.org/ja/3/library/exceptions.html#StopAsyncIteration) が送出されます。
*バージョン 3.10 で追加.*

**any**(*iterable*)*iterable* のいずれかの要素が真ならば `True` を返します。*iterable* が空なら `False` を返します。以下のコードと等価です:

**`def** any(iterable):
    **for** element **in** iterable:
        **if** element:
            **return** **Truereturn** **False**`

**ascii**(*object*)[`repr()`](https://docs.python.org/ja/3/library/functions.html#repr) と同様、オブジェクトの印字可能な表現を含む文字列を返しますが、[`repr()`](https://docs.python.org/ja/3/library/functions.html#repr) によって返された文字列中の非 ASCII 文字は `\x` 、 `\u` 、 `\U` エスケープを使ってエスケープされます。これは Python 2 の [`repr()`](https://docs.python.org/ja/3/library/functions.html#repr) によって返されるのと同じ文字列を作ります。

**bin**(*x*)整数を先頭に "0b" が付いた 2 進文字列に変換します。 結果は Python の式としても使える形式になります。 *x* が Python の [`int`](https://docs.python.org/ja/3/library/functions.html#int) オブジェクトでない場合、整数を返す [`__index__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__index__) メソッドが定義されていなければなりません。 いくつかの例を示します:>>>

**`>>>** bin(3)
'0b11'
**>>>** bin(-10)
'-0b1010'`

先頭に "0b" が付いて欲しい、もしくは付いて欲しくない場合には、次の方法のどちらでも使えます。>>>

**`>>>** format(14, '#b'), format(14, 'b')
('0b1110', '1110')
**>>>** f'**{**14**:**#b**}**', f'**{**14**:**b**}**'
('0b1110', '1110')`

より詳しいことは [`format()`](https://docs.python.org/ja/3/library/functions.html#format) も参照してください。

*class* **bool**(*x=False*)真偽値、すなわち `True` か `False` のいずれかを返します。 *x* は標準の [真偽値判定手続き](https://docs.python.org/ja/3/library/stdtypes.html#truth) を用いて変換されます。 *x* が偽かまたは省略された場合、この関数は `False` を返します。それ以外の場合は `True` を返します。 [`bool`](https://docs.python.org/ja/3/library/functions.html#bool) クラスは [`int`](https://docs.python.org/ja/3/library/functions.html#int) クラスの派生クラスです ([数値型 int, float, complex](https://docs.python.org/ja/3/library/stdtypes.html#typesnumeric) を参照してください)。このクラスからさらに派生することはできません。このクラスのインスタンスは `False` と `True` の身です ([ブーリアン型 - bool](https://docs.python.org/ja/3/library/stdtypes.html#typebool) を参照してください)。
*バージョン 3.7 で変更: x* は位置専用引数になりました。

**breakpoint**(**args*, ***kws*)この関数は、呼び出された箇所から処理をデバッガに移行します。より具体的には、この関数は [`sys.breakpointhook()`](https://docs.python.org/ja/3/library/sys.html#sys.breakpointhook) を `args` と `kws` をそのまま渡して呼び出します。デフォルトでは、 `sys.breakpointhook()` は引数なしで [`pdb.set_trace()`](https://docs.python.org/ja/3/library/pdb.html#pdb.set_trace) を呼び出すだけです。そのような場合、この関数は [`pdb`](https://docs.python.org/ja/3/library/pdb.html#module-pdb) を明示的にインポートしたり、デバッガに処理を移行するためのコードを書いたりしなくても済むようにするだけの、ただの便利な関数です。しかし [`sys.breakpointhook()`](https://docs.python.org/ja/3/library/sys.html#sys.breakpointhook) を別の関数に設定して [`breakpoint()`](https://docs.python.org/ja/3/library/functions.html#breakpoint) が自動的に呼び出させるようにすると、自分好みのデバッガに処理を移行させることができます。 [`sys.breakpointhook()`](https://docs.python.org/ja/3/library/sys.html#sys.breakpointhook) にアクセスできない場合、この関数は [`RuntimeError`](https://docs.python.org/ja/3/library/exceptions.html#RuntimeError) を送出します。
デフォルトでは、環境変数 [`PYTHONBREAKPOINT`](https://docs.python.org/ja/3/using/cmdline.html#envvar-PYTHONBREAKPOINT) をセットすることで [`breakpoint()`](https://docs.python.org/ja/3/library/functions.html#breakpoint) の動作を変えることができます。 使い方の詳細は [`sys.breakpointhook()`](https://docs.python.org/ja/3/library/sys.html#sys.breakpointhook) を参照してください。
ただし、 [`sys.breakpointhook()`](https://docs.python.org/ja/3/library/sys.html#sys.breakpointhook) が別の関数で置き換えられている場合、上記の環境変数によって必ずしも動作を変えることができないことに注意してください。
引数 `breakpointhook` 付きで [監査イベント](https://docs.python.org/ja/3/library/sys.html#auditing) `builtins.breakpoint` を送出します。
*バージョン 3.7 で追加.*

*class* **bytearray**(*source=b''*)*class* **bytearray**(*source*, *encoding*)*class* **bytearray**(*source*, *encoding*, *errors*)新しいバイト配列を返します。[`bytearray`](https://docs.python.org/ja/3/library/stdtypes.html#bytearray) クラスは0 <= x < 256の範囲の整数からなる変更可能な配列です。[ミュータブルなシーケンス型](https://docs.python.org/ja/3/library/stdtypes.html#typesseq-mutable) に記述されている変更可能な配列に対する普通のメソッドの大半を備えています。また、[`bytes`](https://docs.python.org/ja/3/library/stdtypes.html#bytes) 型が持つメソッドの大半も備えています（see [bytes と bytearray の操作](https://docs.python.org/ja/3/library/stdtypes.html#bytes-methods))。
オプションの *source* 引数は、配列を異なる方法で初期化するのに使われます:
• *文字列* の場合、 *encoding* (と、オプションの *errors*) 引数も与えなければなりません。このとき [`bytearray()`](https://docs.python.org/ja/3/library/stdtypes.html#bytearray) は文字列を [`str.encode()`](https://docs.python.org/ja/3/library/stdtypes.html#str.encode) でバイトに変換して返します。
• *整数* の場合、配列はそのサイズになり、null バイトで初期化されます。
• [バッファインターフェース](https://docs.python.org/ja/3/c-api/buffer.html#bufferobjects) に適合するオブジェクトの場合、そのオブジェクトの読み出し専用バッファがバイト配列の初期化に使われます。
• *イテラブル* の場合、範囲 `0 <= x < 256` 内の整数のイテラブルでなければならず、それらが配列の初期の内容として使われます。
引数がなければ、長さ 0 の配列が生成されます。
[バイナリシーケンス型 --- bytes, bytearray, memoryview](https://docs.python.org/ja/3/library/stdtypes.html#binaryseq) と [bytearray オブジェクト](https://docs.python.org/ja/3/library/stdtypes.html#typebytearray) も参照してください。

*class* **bytes**(*source=b''*)*class* **bytes**(*source*, *encoding*)*class* **bytes**(*source*, *encoding*, *errors*)範囲 `0 <= x < 256` の整数のイミュータブルなシーケンスである "bytes" オブジェクトを返します。 [`bytes`](https://docs.python.org/ja/3/library/stdtypes.html#bytes) は [`bytearray`](https://docs.python.org/ja/3/library/stdtypes.html#bytearray) のイミュータブル版であり、オブジェクトを変化させないメソッドや、インデックス指定、オブジェクトのスライスについてのふるまいは同じです。
従って、コンストラクタ引数は [`bytearray()`](https://docs.python.org/ja/3/library/stdtypes.html#bytearray) のものと同様に解釈されます。
バイト列オブジェクトはリテラルでも生成できます。 [文字列およびバイト列リテラル](https://docs.python.org/ja/3/reference/lexical_analysis.html#strings) を参照してください。
[バイナリシーケンス型 --- bytes, bytearray, memoryview](https://docs.python.org/ja/3/library/stdtypes.html#binaryseq), [バイトオブジェクト](https://docs.python.org/ja/3/library/stdtypes.html#typebytes), [bytes と bytearray の操作](https://docs.python.org/ja/3/library/stdtypes.html#bytes-methods) も参照してください。

**callable**(*object*)*object* 引数が呼び出し可能オブジェクトであれば [`True`](https://docs.python.org/ja/3/library/constants.html#True) を、そうでなければ [`False`](https://docs.python.org/ja/3/library/constants.html#False) を返します。この関数が `True` を返しても、呼び出しは失敗する可能性がありますが、`False` であれば、 *object* の呼び出しは決して成功しません。なお、クラスは呼び出し可能 (クラスを呼び出すと新しいインスタンスを返します) です。また、インスタンスはクラスが `__call__()` メソッドを持つなら呼び出し可能です。
*バージョン 3.2 で追加:* この関数は Python 3.0 で一度取り除かれましたが、Python 3.2 で復活しました。

**chr**(*i*)Unicode コードポイントが整数 *i* である文字を表す文字列を返します。例えば `chr(97)` は文字列 `'a'` を、 `chr(8364)` は文字列 `'€'` を返します。 [`ord()`](https://docs.python.org/ja/3/library/functions.html#ord) の逆です。
引数の有効な範囲は 0 から 1,114,111 (16 進数で 0x10FFFF) です。 *i* が範囲外の場合 [`ValueError`](https://docs.python.org/ja/3/library/exceptions.html#ValueError) が送出されます。

@**classmethod**メソッドをクラスメソッドへ変換します。
クラスメソッドは、インスタンスメソッドが暗黙の第一引数としてインスタンスをとるように、第一引数としてクラスをとります。クラスメソッドを宣言するには、以下のイディオムを使います:

**`class** **C**:
    @classmethod
    **def** f(cls, arg1, arg2): ...`

`@classmethod` 形式は関数 [デコレータ](https://docs.python.org/ja/3/glossary.html#term-decorator) です。詳しくは [関数定義](https://docs.python.org/ja/3/reference/compound_stmts.html#function) を参照してください。
クラスメソッドは、(`C.f()` のように) クラスから呼び出すことも、(`C().f()` のように) インスタンスから呼び出すこともできます。 インスタンスはそのクラスが何であるかを除いて無視されます。 クラスメソッドが派生クラスから呼び出される場合は、その派生クラスオブジェクトが暗黙の第一引数として渡されます。
クラスメソッドは C++ や Java の静的メソッドとは異なります。静的メソッドは、この節の [`staticmethod()`](https://docs.python.org/ja/3/library/functions.html#staticmethod) を参照してください。クラスメソッドについてより詳しいことは [標準型の階層](https://docs.python.org/ja/3/reference/datamodel.html#types) を参照してください。
*バージョン 3.9 で変更:* クラスメソッドは [`property()`](https://docs.python.org/ja/3/library/functions.html#property) など、他の [デスクリプタ](https://docs.python.org/ja/3/glossary.html#term-descriptor) をラップすることができるようになりました。
*バージョン 3.10 で変更:* クラスメソッドはメソッド属性 (`__module__`, `__name__`, `__qualname__`, `__doc__` や `__annotations__`) を引き継ぐようになりました。また、新たに `__wrapped__` 属性を持つようになりました。
*バージョン 3.11 で変更:* クラスメソッドは [`property()`](https://docs.python.org/ja/3/library/functions.html#property) など、他の [デスクリプタ](https://docs.python.org/ja/3/glossary.html#term-descriptor) をラップすることができなくなりました。

**compile**(*source*, *filename*, *mode*, *flags=0*, *dont_inherit=False*, *optimize=- 1*)*source* をコードオブジェクト、もしくは、 AST オブジェクトにコンパイルします。 コードオブジェクトは [`exec()`](https://docs.python.org/ja/3/library/functions.html#exec) 文で実行したり、 [`eval()`](https://docs.python.org/ja/3/library/functions.html#eval) 呼び出しで評価できます。 *source* は通常の文字列、 バイト列、 AST オブジェクトのいずれでもかまいません。 AST オブジェクトへの、また、 AST オブジェクトからのコンパイルの方法は、 [`ast`](https://docs.python.org/ja/3/library/ast.html#module-ast) モジュールのドキュメントを参照してください。
*filename* 引数には、コードの読み出し元のファイルを与えなければなりません; ファイルから読み出されるのでなければ、認識可能な値を渡して下さい (`'<string>'` が一般的に使われます)。
*mode* 引数は、コンパイルされるコードの種類を指定します; *source* が一連の文から成るなら `'exec'` 、単一の式から成るなら `'eval'` 、単一の対話的文の場合 `'single'` です。(後者の場合、評価が `None` 以外である式文が印字されます)。
オプション引数 *flags* と *dont_inherit* は、どの [コンパイラオプション](https://docs.python.org/ja/3/library/ast.html#ast-compiler-flags) を有効化するか、 [将来の機能](https://docs.python.org/ja/3/reference/simple_stmts.html#future) のどれを許可するかを制御します。どちらの引数も存在しない (またはどちらもゼロである) 場合は、 [`compile()`](https://docs.python.org/ja/3/library/functions.html#compile) の呼び出し元のコードに作用したものと同じフラグでコンパイルされます。 *flags* 引数が与えられて *dont_inherit* が与えられない (またはゼロ) の場合、上記に加えて *flags* 引数で与えられたコンパイラオプションと future 文が使われます。 *dont_inherit* がゼロでない整数の場合、 *flags* 引数で指定されたオプションだけが有効です -- 呼び出し元コードに適用されたフラグ (将来の機能とコンパイラオプション) は無視されます。
有効化するコンパイラオプションと future 文はビットフィールドで指定可能で、ビット単位の OR をとることで複数のオプションを一緒に指定することができます。特定の future 機能を指定するために必要なビットフィールドの情報は、 [`__future__`](https://docs.python.org/ja/3/library/__future__.html#module-__future__) モジュールにおける `_Feature` インスタンスの `compiler_flag` 属性で得ることができます。 [コンパイラフラグ](https://docs.python.org/ja/3/library/ast.html#ast-compiler-flags) の情報は [`ast`](https://docs.python.org/ja/3/library/ast.html#module-ast) モジュールの `PyCF_` で始まるフラグで得ることができます。
引数 *optimize* は、コンパイラの最適化レベルを指定します; デフォルトの値 `-1` は、インタプリタの [`-O`](https://docs.python.org/ja/3/using/cmdline.html#cmdoption-O) オプションで与えられるのと同じ最適化レベルを選びます。明示的なレベルは、 `0` (最適化なし、 `__debug__` は真)、 `1` (assert は取り除かれ、 `__debug__` は偽)、 `2` (docstring も取り除かれる) です。
この関数は、コンパイルされたソースが不正である場合 [`SyntaxError`](https://docs.python.org/ja/3/library/exceptions.html#SyntaxError) を、ソースがヌルバイトを含む場合 [`ValueError`](https://docs.python.org/ja/3/library/exceptions.html#ValueError) を送出します。
Python コードをパースしてその AST 表現を得たいのであれば、 [`ast.parse()`](https://docs.python.org/ja/3/library/ast.html#ast.parse) を参照してください。
引数 `source`, `filename` を指定して [監査イベント](https://docs.python.org/ja/3/library/sys.html#auditing) `compile` を送出します。
**注釈** 
複数行に渡るコードの文字列を `'single'` や `'eval'` モードでコンパイルするとき、入力は一つ以上の改行文字で終端されなければなりません。これは、 [`code`](https://docs.python.org/ja/3/library/code.html#module-code) モジュールで不完全な文と完全な文を検知しやすくするためです。
**警告** 
AST オブジェクトにコンパイルしているときに、十分に大きい文字列や複雑な文字列によって Python の抽象構文木コンパイラのスタックが深さの限界を越えることで、 Python インタプリタをクラッシュさせられます。
*バージョン 3.2 で変更:* Windows や Mac の改行も受け付けます。また `'exec'` モードでの入力が改行で終わっている必要もありません。*optimize* 引数が追加されました。
*バージョン 3.5 で変更:* 以前は *source* にヌルバイトがあったときに [`TypeError`](https://docs.python.org/ja/3/library/exceptions.html#TypeError) を送出していました。
*バージョン 3.8 で追加:* `ast.PyCF_ALLOW_TOP_LEVEL_AWAIT` フラグを渡してトップレベルの `await`, `async for`, および `async with` のサポートを有効化することができるようになりました。

*class* **complex**(*real=0*, *imag=0*)*class* **complex**(*string*)値 *real* + *imag**1j の複素数を返すか、文字列や数を複素数に変換します。第一引数が文字列なら、それが複素数と解釈され、この関数は第二引数無しで呼び出されなければなりません。第二引数は文字列であってはなりません。それぞれの引数は (複素数を含む) 任意の数値型です。 *imag* が省略された場合、標準の値はゼロで、このコンストラクタは [`int`](https://docs.python.org/ja/3/library/functions.html#int) や [`float`](https://docs.python.org/ja/3/library/functions.html#float) のような数値変換としてはたらきます。両方の引数が省略された場合、 `0j` を返します。
一般的な Python オブジェクト `x` に対して、 `complex(x)` は `x.__complex__()` に処理を委譲します。 [`__complex__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__complex__) が定義されていない場合は [`__float__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__float__) にフォールバックします。 [`__float__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__float__) も定義されていない場合は [`__index__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__index__) にフォールバックします。
**注釈** 
文字列から変換するとき、その文字列は中央の `+` や `-` 演算子の周りに空白を含んではなりません。例えば、`complex('1+2j')` はいいですが、`complex('1 + 2j')` は [`ValueError`](https://docs.python.org/ja/3/library/exceptions.html#ValueError) を送出します。
複素数型については [数値型 int, float, complex](https://docs.python.org/ja/3/library/stdtypes.html#typesnumeric) に説明があります。
*バージョン 3.6 で変更:* コードリテラル中で桁をグループ化するのにアンダースコアを利用できます。
*バージョン 3.8 で変更:* [`__complex__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__complex__) と [`__float__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__float__) が定義されていない場合、 [`__index__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__index__) へフォールバックします。

**delattr**(*object*, *name*)[`setattr()`](https://docs.python.org/ja/3/library/functions.html#setattr) の親戚です。引数はオブジェクトと文字列です。文字列はオブジェクトの属性名のいずれかでなければなりません。対象のオブジェクトが許可する場合に限り、この関数は指定された名前の属性を削除します。たとえば、 `delattr(x, 'foobar')` は `del x.foobar` と等価です。 *name* は Python の識別子である必要はありません ([`setattr()`](https://docs.python.org/ja/3/library/functions.html#setattr) を参照してください)。

*class* **dict**(***kwarg*)*class* **dict**(*mapping*, ***kwarg*)*class* **dict**(*iterable*, ***kwarg*)新しい辞書を作成します。 [`dict`](https://docs.python.org/ja/3/library/stdtypes.html#dict) オブジェクトは辞書クラスです。このクラスに関するドキュメンテーションは [`dict`](https://docs.python.org/ja/3/library/stdtypes.html#dict) と [マッピング型 --- dict](https://docs.python.org/ja/3/library/stdtypes.html#typesmapping) を参照してください。
他のコンテナについては、 ビルトインの [`list`](https://docs.python.org/ja/3/library/stdtypes.html#list), [`set`](https://docs.python.org/ja/3/library/stdtypes.html#set), [`tuple`](https://docs.python.org/ja/3/library/stdtypes.html#tuple) クラスおよび [`collections`](https://docs.python.org/ja/3/library/collections.html#module-collections) モジュールを参照してください。

**dir**()**dir**(*object*)引数がない場合、現在のローカルスコープにある名前のリストを返します。引数がある場合、そのオブジェクトの有効な属性のリストを返そうと試みます。
オブジェクトが `__dir__()` という名のメソッドを持つなら、そのメソッドが呼び出され、属性のリストを返さなければなりません。これにより、カスタムの `__getattr__()` や `__getattribute__()` 関数を実装するオブジェクトは、[`dir()`](https://docs.python.org/ja/3/library/functions.html#dir) が属性を報告するやり方をカスタマイズできます。
オブジェクトが `__dir__()` を提供しない場合、その型オブジェクトと、定義されていればオブジェクトの [`__dict__`](https://docs.python.org/ja/3/library/stdtypes.html#object.__dict__) 属性から、できるだけ情報を集めようとします。結果のリストは必ずしも完全ではなく、カスタムの `__getattr__()` を持つ場合は不正確かもしれません。
デフォルトの [`dir()`](https://docs.python.org/ja/3/library/functions.html#dir) メカニズムは、完全というより最重要な情報を作成しようとするため、異なる型のオブジェクトでは異なって振る舞います:
• オブジェクトがモジュールオブジェクトの場合、リストにはモジュールの属性の名前が含まれます。
• オブジェクトが型オブジェクトやクラスオブジェクトの場合、リストにはその属性の名前と、再帰的にたどったその基底クラスの属性が含まれます。
• それ以外の場合には、リストにはオブジェクトの属性名、クラス属性名、再帰的にたどった基底クラスの属性名が含まれます。
返されるリストはアルファベット順に並べられています。例えば:>>>

**`>>> import** **struct>>>** dir()   *# show the names in the module namespace*  ['__builtins__', '__name__', 'struct']
**>>>** dir(struct)   *# show the names in the struct module* ['Struct', '__all__', '__builtins__', '__cached__', '__doc__', '__file__',
 '__initializing__', '__loader__', '__name__', '__package__',
 '_clearcache', 'calcsize', 'error', 'pack', 'pack_into',
 'unpack', 'unpack_from']
**>>> class** **Shape**:
**...**     **def** __dir__(self):
**...**         **return** ['area', 'perimeter', 'location']
**...>>>** s = Shape()
**>>>** dir(s)
['area', 'location', 'perimeter']`

**注釈** 
[`dir()`](https://docs.python.org/ja/3/library/functions.html#dir) は主に対話プロンプトでの使用に便利なように提供されているので、厳密性や一貫性を重視して定義された名前のセットというよりも、むしろ興味を引くような名前のセットを返そうとします。また、この関数の細かい動作はリリース間で変わる可能性があります。例えば、引数がクラスであるとき、メタクラス属性は結果のリストに含まれません。

**divmod**(*a*, *b*)2つの (複素数でない) 数を引数としてとり、整数の除法を行ったときの商と剰余からなる2つの数のペアを返します。被演算子の型が混ざっている場合、二項算術演算子での規則が適用されます。整数に対する結果は `(a // b, a % b)` と同じです。浮動小数点数では、結果は `(q, a % b)` とあらわされます。ただし *q* は通常 `math.floor(a / b)` で、それより 1 だけ小さくなることもあります。いずれにせよ `q * b + a % b` は *a* に非常に近い値になります。もし `a % b` がゼロでないときは、その符号は *b* と同じであり、かつ `0 <= abs(a % b) < abs(b)` を満たします。

**enumerate**(*iterable*, *start=0*)enumerate オブジェクトを返します。 *iterable* は、シーケンスか [iterator](https://docs.python.org/ja/3/glossary.html#term-iterator) か、あるいはイテレーションをサポートするその他のオブジェクトでなければなりません。 [`enumerate()`](https://docs.python.org/ja/3/library/functions.html#enumerate) によって返されたイテレータの [`__next__()`](https://docs.python.org/ja/3/library/stdtypes.html#iterator.__next__) メソッドは、 (デフォルトでは 0 となる *start* からの) カウントと、 *iterable* 上のイテレーションによって得られた値を含むタプルを返します。>>>

**`>>>** seasons = ['Spring', 'Summer', 'Fall', 'Winter']
**>>>** list(enumerate(seasons))
[(0, 'Spring'), (1, 'Summer'), (2, 'Fall'), (3, 'Winter')]
**>>>** list(enumerate(seasons, start=1))
[(1, 'Spring'), (2, 'Summer'), (3, 'Fall'), (4, 'Winter')]`

次と等価です:

**`def** enumerate(iterable, start=0):
    n = start
    **for** elem **in** iterable:
        **yield** n, elem
        n += 1`

**eval**(*expression*, *globals=None*, *locals=None*)文字列とオプションの引数 *globals*、*locals* をとります。*globals* を与える場合は辞書でなくてはなりません。*locals* を与える場合は任意のマッピングオブジェクトにできます。
*globals* と *locals* の2つの辞書をそれぞれグローバルとローカルの名前空間とし、*expression* 引数が Python 式 (技術的な言葉では条件のリスト) として評価されます。 *globals* 辞書が存在し、 `__builtins__` をキーとして持たない場合は、そのキーの値として 組み込みモジュール [`builtins`](https://docs.python.org/ja/3/library/builtins.html#module-builtins) の辞書への参照が、*expression* が解析される前に挿入されます。これにより、 [`eval()`](https://docs.python.org/ja/3/library/functions.html#eval) に渡す前の *globals* に自身で定義した `__builtins__` を定義することで、実行されるコードで利用可能な組み込み関数を制御することができます。 *locals* 辞書が省略された場合、 *globals* 辞書がデフォルトとして使われます。どちらの辞書も省略された場合、 [`eval()`](https://docs.python.org/ja/3/library/functions.html#eval) が呼び出された環境における *globals* と *locals* のもとで式が評価されます。 *eval()* は、その実行環境において、 [ネストされたスコープ](https://docs.python.org/ja/3/glossary.html#term-nested-scope) (ローカルでないオブジェクト) へのアクセスを持たないことに注意してください。
返される値は、式が評価された結果になります。構文エラーは例外として報告されます。例:>>>

**`>>>** x = 1
**>>>** eval('x+1')
2`

この関数は ([`compile()`](https://docs.python.org/ja/3/library/functions.html#compile) で生成されるような) 任意のコードオブジェクトを実行するのにも利用できます。この場合、文字列の代わりにコードオブジェクトを渡してください。このコードオブジェクトが、引数 *mode* を `'exec'` としてコンパイルされている場合、 [`eval()`](https://docs.python.org/ja/3/library/functions.html#eval) の戻り値は `None` になります。
ヒント: [`exec()`](https://docs.python.org/ja/3/library/functions.html#exec) 関数により文の動的な実行がサポートされています。[`globals()`](https://docs.python.org/ja/3/library/functions.html#globals) および [`locals()`](https://docs.python.org/ja/3/library/functions.html#locals) 関数は、それぞれ現在のグローバルおよびローカルな辞書を返すので、それらを [`eval()`](https://docs.python.org/ja/3/library/functions.html#eval) や [`exec()`](https://docs.python.org/ja/3/library/functions.html#exec) に渡して使うことができます。
ソースコードとして文字列が与えられた場合、先頭と末尾の空白文字およびタブは取り去られます。
リテラルだけを含む式の文字列を安全に評価できる関数、 [`ast.literal_eval()`](https://docs.python.org/ja/3/library/ast.html#ast.literal_eval) も参照してください。
引数 `code_object` を指定して [監査イベント](https://docs.python.org/ja/3/library/sys.html#auditing) `exec` を送出します。

**exec**(*object*, *globals=None*, *locals=None*, */*, ***, *closure=None*)この関数は Python コードの動的な実行をサポートします。 *object* は文字列かコードオブジェクトでなければなりません。文字列の場合、その文字列は一連の Python 文として解析され、そして (構文エラーにならない限り) 実行されます。 [1](https://docs.python.org/ja/3/library/functions.html#id2) コードオブジェクトの場合は、単純に実行されます。どの場合でも、実行されるコードはファイル入力形式として有効であることが期待されます (リファレンスマニュアルの [ファイル入力](https://docs.python.org/ja/3/reference/toplevel_components.html#file-input) 節を参照してください)。 [`nonlocal`](https://docs.python.org/ja/3/reference/simple_stmts.html#nonlocal), [`yield`](https://docs.python.org/ja/3/reference/simple_stmts.html#yield), および [`return`](https://docs.python.org/ja/3/reference/simple_stmts.html#return) 文は、 [`exec()`](https://docs.python.org/ja/3/library/functions.html#exec) 関数に渡されたコードの文脈中でさえ、関数定義の外側で使うことはできません。戻り値は `None` です。
どの場合でも、オプションの部分が省略されると、コードは現在のスコープ内で実行されます。 *globals* だけが与えられた場合、その値は辞書でなければならず (かつ辞書のサブクラスであってはならず)、グローバル変数とローカル変数の両方に使われます。 *globals* と *locals* の両方が与えられた場合、それぞれグローバル変数とローカル変数に使われます。 *locals* を指定する場合、その値はマップ型オブジェクトでなければなりません。モジュールレベルでは globals と locals は同じ辞書であることに留意してください。もし exec が *globals* と *locals* に異なる2つのオブジェクトを受け取った場合、コードはクラス定義に埋め込まれたかのように実行されます。
*globals* 辞書がキー `__builtins__` に対する値を含まなければ、そのキーに対して、組み込みモジュール [`builtins`](https://docs.python.org/ja/3/library/builtins.html#module-builtins) の辞書への参照が挿入されます。ですから、実行されるコードを [`exec()`](https://docs.python.org/ja/3/library/functions.html#exec) に渡す前に、 *globals* に自作の `__builtins__` 辞書を挿入することで、コードがどの組み込みを利用できるか制御できます。
引数 *closure* はクロージャ、すなわちセル変数のタプルを指定します。この引数は *object* が自由変数を含むコードオブジェクトである場合のみ有効です。タプルの長さはコードオブジェクトから参照されている自由変数の数と厳密に一致しなければなりません。
引数 `code_object` を指定して [監査イベント](https://docs.python.org/ja/3/library/sys.html#auditing) `exec` を送出します。
**注釈** 
組み込み関数 [`globals()`](https://docs.python.org/ja/3/library/functions.html#globals) および [`locals()`](https://docs.python.org/ja/3/library/functions.html#locals) は、それぞれ現在のグローバルおよびローカルの辞書を返すので、それらを [`exec()`](https://docs.python.org/ja/3/library/functions.html#exec) の第二、第三引数にそのまま渡して使うと便利なことがあります。
**注釈** 
標準では *locals* は後に述べる関数 [`locals()`](https://docs.python.org/ja/3/library/functions.html#locals) のように動作します: 標準の *locals* 辞書に対する変更を試みてはいけません。 [`exec()`](https://docs.python.org/ja/3/library/functions.html#exec) の呼び出しが返る時にコードが *locals* に与える影響を知りたいなら、明示的に *locals* 辞書を渡してください。
*バージョン 3.11 で変更: closure* パラメータが追加されました。

**filter**(*function*, *iterable*)*iterable* の要素のうち、 *function* が真であるものからイテレータを構築します。 *iterable* にはシーケンスか、イテレーションをサポートするコンテナか、イテレータを渡せます。 *function* が `None` のときは恒等関数が指定されたものとして扱われ、 *iterable* のうち偽であるものがすべて取り除かれます。
なお、`filter(function, iterable)` は、関数が `None` でなければジェネレータ式 `(item for item in iterable if function(item))` と同等で、関数が `None` なら `(item for item in iterable if item)` と同等です。
逆の働きをする関数については、 [`itertools.filterfalse()`](https://docs.python.org/ja/3/library/itertools.html#itertools.filterfalse) を参照してください。 *iterable* の要素のうち、 *function* が偽であるものを返します。

*class* **float**(*x=0.0*)数または文字列 *x* から生成された浮動小数点数を返します。
引数が文字列の場合、10進数でなければなりません。先頭に符号または空白を含んでもかまいません。符号は `'+'` か `'-'` のいずれかです。正符号 `'+'` は生成される値に対して何の効果もありません。引数は NaN (not-a-number) や正または負の無限大をあらわす文字列でもかまいません。より正確にいうと、入力は先頭と末尾の空白文字を除き、以下に示す `floatvalue` の生成規則に従う必要があります:

**`sign**        ::=  "+" | "-"
**infinity**    ::=  "Infinity" | "inf"
**nan**         ::=  "nan"
**digitpart**   ::=  digit (["_"] digit)*
**number**      ::=  [[digitpart](https://docs.python.org/ja/3/library/functions.html#grammar-token-float-digitpart)] "." [digitpart](https://docs.python.org/ja/3/library/functions.html#grammar-token-float-digitpart) | [digitpart](https://docs.python.org/ja/3/library/functions.html#grammar-token-float-digitpart) ["."]
**exponent**    ::=  ("e" | "E") ["+" | "-"] [digitpart](https://docs.python.org/ja/3/library/functions.html#grammar-token-float-digitpart)**floatnumber** ::=  number [[exponent](https://docs.python.org/ja/3/library/functions.html#grammar-token-float-exponent)]
**floatvalue**  ::=  [[sign](https://docs.python.org/ja/3/library/functions.html#grammar-token-float-sign)] ([floatnumber](https://docs.python.org/ja/3/library/functions.html#grammar-token-float-floatnumber) | [infinity](https://docs.python.org/ja/3/library/functions.html#grammar-token-float-infinity) | [nan](https://docs.python.org/ja/3/library/functions.html#grammar-token-float-nan))`

ここで `digit` は、ユニコードでの10進数の数字 (ユニコードの一般カテゴリ `Nd` に含まれる文字) です。大文字と小文字の区別はありません。したがって、例えば "inf", "Inf", "INFINITY", そして "iNfINity" は全て正の無限大として有効な書き方です。
一方で、引数が整数または浮動小数点数なら、(Python の浮動小数点数の精度で) 同じ値の浮動小数点数が返されます。引数が Python の浮動小数点数の範囲外なら、 [`OverflowError`](https://docs.python.org/ja/3/library/exceptions.html#OverflowError) が送出されます。
一般の Python オブジェクト `x` に対して、`float(x)` は `x.__float__()` に委譲します。 [`__float__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__float__) が定義されていない場合、[`__index__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__index__) へフォールバックします。
引数が与えられなければ、`0.0` が返されます。
例:>>>

**`>>>** float('+1.23')
1.23
**>>>** float('   -12345**\n**')
-12345.0
**>>>** float('1e-003')
0.001
**>>>** float('+1E6')
1000000.0
**>>>** float('-Infinity')
-inf`

浮動小数点数型については、 [数値型 int, float, complex](https://docs.python.org/ja/3/library/stdtypes.html#typesnumeric) も参照してください。
*バージョン 3.6 で変更:* コードリテラル中で桁をグループ化するのにアンダースコアを利用できます。
*バージョン 3.7 で変更: x* は位置専用引数になりました。
*バージョン 3.8 で変更:* [`__float__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__float__) が定義されていない場合、 [`__index__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__index__) へフォールバックします。

**format**(*value*, *format_spec=''*)*value* を *format_spec* で指示された通りに "整形" した文字列表現に変換します。 *format_spec* の解釈は *value* 引数の型に依存しますが、ほとんどの組み込み型で使われる標準的な構文が存在します: [書式指定ミニ言語仕様](https://docs.python.org/ja/3/library/string.html#formatspec)。
デフォルトの *format_spec* は空の文字列です。それは通常 [`str(value)`](https://docs.python.org/ja/3/library/stdtypes.html#str) の呼び出しと同じ結果になります。
`format(value, format_spec)` の呼び出しは、 `type(value).__format__(value, format_spec)` に翻訳され、これは value の `__format__()` メソッドの検索をするとき、インスタンス辞書を回避します。このメソッドの探索が [`object`](https://docs.python.org/ja/3/library/functions.html#object) に到達しても *format_spec* が空にならなかったり、 *format_spec* や返り値が文字列でなかったりした場合、 [`TypeError`](https://docs.python.org/ja/3/library/exceptions.html#TypeError) が送出されます。
*バージョン 3.4 で変更: format_spec* が空の文字列でない場合 `object().__format__(format_spec)` は [`TypeError`](https://docs.python.org/ja/3/library/exceptions.html#TypeError) を送出します。

*class* **frozenset**(*iterable=set()*)新しい [`frozenset`](https://docs.python.org/ja/3/library/stdtypes.html#frozenset) オブジェクトを返します。オプションで *iterable* から得られた要素を含みます。 `frozenset` はビルトインクラスです。このクラスに関するドキュメントは [`frozenset`](https://docs.python.org/ja/3/library/stdtypes.html#frozenset) と [set（集合）型 --- set, frozenset](https://docs.python.org/ja/3/library/stdtypes.html#types-set) を参照してください。
他のコンテナについては、ビルトインクラス [`set`](https://docs.python.org/ja/3/library/stdtypes.html#set), [`list`](https://docs.python.org/ja/3/library/stdtypes.html#list), [`tuple`](https://docs.python.org/ja/3/library/stdtypes.html#tuple), [`dict`](https://docs.python.org/ja/3/library/stdtypes.html#dict) や [`collections`](https://docs.python.org/ja/3/library/collections.html#module-collections) モジュールを見てください。

**getattr**(*object*, *name*)**getattr**(*object*, *name*, *default*)*object* の指定された属性の値を返します。 *name* は文字列でなければなりません。与えられた文字列がオブジェクトの属性名のうちいずれかに一致すれば、戻り値はその属性の値になります。たとえば、 `getattr(x, 'foobar')` は `x.foobar` と等価です。もし指定された属性が存在しない場合、 *default* が指定されていればその値が返されます。そうでない場合は [`AttributeError`](https://docs.python.org/ja/3/library/exceptions.html#AttributeError) が送出されます。 *name* は Python 識別子である必要はありません ([`setattr()`](https://docs.python.org/ja/3/library/functions.html#setattr) を参照してください)。
**注釈** 
[プライベートな名前のマングリング](https://docs.python.org/ja/3/reference/expressions.html#private-name-mangling) はコンパイル時に行われます。そのため、プライベートな属性 (先頭に2つのアンダースコアを伴う名前を持つ属性) の値を [`getattr()`](https://docs.python.org/ja/3/library/functions.html#getattr) で取り出すためには、属性名を手動でマングリングする必要があります。

**globals**()現在のモジュールの名前空間を実装した辞書を返します。関数内のコードに対しては、関数が定義されるときに辞書が設定され、その関数がどこから呼ばれたかにかかわらず同じ内容になります。

**hasattr**(*object*, *name*)引数はオブジェクトと文字列です。文字列がオブジェクトの属性名の一つであった場合 `True` を、そうでない場合 `False` を返します。 (この関数は、 `getattr(object, name)` を呼び出して [`AttributeError`](https://docs.python.org/ja/3/library/exceptions.html#AttributeError) を送出するかどうかを見ることで実装されています。)

**hash**(*object*)オブジェクトのハッシュ値を (存在すれば) 返します。ハッシュ値は整数です。これらは辞書を検索する際に辞書のキーを高速に比較するために使われます。等しい値となる数値は等しいハッシュ値を持ちます (1 と 1.0 のように型が異なっていてもです)。
**注釈** 
独自の `__hash__()` メソッドを実装したオブジェクトを使う場合、[`hash()`](https://docs.python.org/ja/3/library/functions.html#hash) が実行するマシンのビット幅に合わせて戻り値を切り捨てることに注意してください。詳しくは [`__hash__`](https://docs.python.org/ja/3/reference/datamodel.html#object.__hash__) を参照してください。

**help**()**help**(*request*)組み込みヘルプシステムを起動します。(この関数は対話的な使用のためのものです。) 引数が与えられていない場合、対話的ヘルプシステムはインタプリタコンソール上で起動します。引数が文字列の場合、文字列はモジュール、関数、クラス、メソッド、キーワード、またはドキュメントの項目名として検索され、ヘルプページがコンソール上に印字されます。引数がその他のオブジェクトの場合、そのオブジェクトに関するヘルプページが生成されます。
[`help()`](https://docs.python.org/ja/3/library/functions.html#help) を呼び出したときに関数の引数リストにスラッシュ (/) が現れた場合は、スラッシュより前の引数が位置専用引数だという意味であることに注意してください。より詳しい情報は、 [位置専用引数についての FAQ の項目](https://docs.python.org/ja/3/faq/programming.html#faq-positional-only-arguments) を参照してください。
この関数は、 [`site`](https://docs.python.org/ja/3/library/site.html#module-site) モジュールから、組み込みの名前空間に移されました。
*バージョン 3.4 で変更:* [`pydoc`](https://docs.python.org/ja/3/library/pydoc.html#module-pydoc) と [`inspect`](https://docs.python.org/ja/3/library/inspect.html#module-inspect) への変更により、呼び出し可能オブジェクトの報告されたシグニチャがより包括的で一貫性のあるものになりました。

**hex**(*x*)整数を先頭に "0x" が付いた小文字の 16 進文字列に変換します。 *x* が Python の [`int`](https://docs.python.org/ja/3/library/functions.html#int) オブジェクトでない場合、整数を返す [`__index__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__index__) メソッドが定義されていなければなりません。 いくつかの例を示します:>>>

**`>>>** hex(255)
'0xff'
**>>>** hex(-42)
'-0x2a'`

整数を大文字の 16 進文字列や小文字の 16 進文字列、先頭の "0x" 付きや "0x" 無しに変換したい場合は、次に挙げる方法が使えます:>>>

**`>>>** '**%#x**' % 255, '**%x**' % 255, '**%X**' % 255
('0xff', 'ff', 'FF')
**>>>** format(255, '#x'), format(255, 'x'), format(255, 'X')
('0xff', 'ff', 'FF')
**>>>** f'**{**255**:**#x**}**', f'**{**255**:**x**}**', f'**{**255**:**X**}**'
('0xff', 'ff', 'FF')`

より詳しいことは [`format()`](https://docs.python.org/ja/3/library/functions.html#format) も参照してください。
16を底として16進数文字列を整数に変換するには [`int()`](https://docs.python.org/ja/3/library/functions.html#int) も参照してください。
**注釈** 
浮動小数点数の16進文字列表記を得たい場合には、 [`float.hex()`](https://docs.python.org/ja/3/library/stdtypes.html#float.hex) メソッドを使って下さい。

**id**(*object*)オブジェクトの "識別値" を返します。この値は整数で、このオブジェクトの有効期間中は一意かつ定数であることが保証されています。有効期間が重ならない 2 つのオブジェクトは同じ [`id()`](https://docs.python.org/ja/3/library/functions.html#id) 値を持つかもしれません。
**CPython 実装の詳細:** これはオブジェクトのメモリアドレスです。
引数 `id` を指定して [監査イベント](https://docs.python.org/ja/3/library/sys.html#auditing) `builtins.id` を送出します。

**input**()**input**(*prompt*)引数 *prompt* が存在すれば、それが末尾の改行を除いて標準出力に書き出されます。次に、この関数は入力から 1 行を読み込み、文字列に変換して (末尾の改行を除いて) 返します。 EOF が読み込まれたとき、 [`EOFError`](https://docs.python.org/ja/3/library/exceptions.html#EOFError) が送出されます。例:>>>

**`>>>** s = input('--> ')  
--> Monty Python's Flying Circus
**>>>** s  
"Monty Python's Flying Circus"`

[`readline`](https://docs.python.org/ja/3/library/readline.html#module-readline) モジュールが読み込まれていれば、 [`input()`](https://docs.python.org/ja/3/library/functions.html#input) はそれを使って精緻な行編集やヒストリ機能を提供します。
引数 `prompt` 付きで [監査イベント](https://docs.python.org/ja/3/library/sys.html#auditing) `builtins.input` を送出します。
引数 `result` 付きで [監査イベント](https://docs.python.org/ja/3/library/sys.html#auditing) `builtins.input/result` を送出します。

*class* **int**(*x=0*)*class* **int**(*x*, *base=10*)数値または文字列 *x* から作成された整数オブジェクトを返します。引数が与えられない場合には `0` を返します。 *x* に [`__int__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__int__) が定義されている場合は、 `int(x)` は `x.__int__()` を返します。 *x* に [`__index__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__index__) が定義されている場合は、 `x.__index__()` を返します。 *x* に [`__trunc__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__trunc__) が定義されている場合は、 `x.__trunc__()` を返します。 浮動小数点数については、これは 0 に近い側へ切り捨てます。
*x* が数値でないか、または *base* が与えられた場合、 *x* は *base* を基数とした整数を表現する文字列、 [`bytes`](https://docs.python.org/ja/3/library/stdtypes.html#bytes) インスタンス、または [`bytearray`](https://docs.python.org/ja/3/library/stdtypes.html#bytearray) インスタンスのいずれかでなければなりません。文字列は先頭に `+` or `-` を伴ったり (符号と数値の間に空白文字を入れてはいけません)、数値の先頭に任意の数のゼロを付けたり、前後に空白文字を付けたり、各桁を単一の下線で区切ったりしても有効です。
n-進数の整数文字列は、各桁が0から n-1 の数値で表されます。ユニコードの10進数では、各桁は0から9のいずれかです。また10から35までの値は `a` から `z` (または `A` から `Z`) で表されます。デフォルトの *base* は10です。基数に指定可能な値は0および2から36までの整数です。2進数、8進数、16進数の文字列は、整数リテラルと同様に、それぞれ `0b`/`0B`, `0o`/`0O`, または `0x`/`0X` をプレフィックスとして追加することができます。基数を0に指定した場合、文字列は [コードにおける整数リテラル](https://docs.python.org/ja/3/reference/lexical_analysis.html#integers) と同じように解釈されます。すなわち、プレフィックスによって基数が2, 8, 10, または 16 のどれになるかが決まります。基数を0にした場合先頭にゼロを追加することはできません: すなわち `int('010', 0)` は基数を0に指定しているため不正ですが、 `int('010')` や `int('010', 8)` は有効です。
整数型については、 [数値型 int, float, complex](https://docs.python.org/ja/3/library/stdtypes.html#typesnumeric) も参照してください。
*バージョン 3.4 で変更: base* が [`int`](https://docs.python.org/ja/3/library/functions.html#int) のインスタンスでなく、*base* オブジェクトが [`base.__index__`](https://docs.python.org/ja/3/reference/datamodel.html#object.__index__) メソッドを持っている場合、そのメソッドを呼んで底に対する整数を得ることができます。以前のバージョンでは [`base.__index__`](https://docs.python.org/ja/3/reference/datamodel.html#object.__index__) ではなく [`base.__int__`](https://docs.python.org/ja/3/reference/datamodel.html#object.__int__) を使用していました。
*バージョン 3.6 で変更:* コードリテラル中で桁をグループ化するのにアンダースコアを利用できます。
*バージョン 3.7 で変更: x* は位置専用引数になりました。
*バージョン 3.8 で変更:* [`__int__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__int__) が定義されていない場合、 [`__index__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__index__) へフォールバックします。
*バージョン 3.11 で変更:* [`__trunc__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__trunc__) への処理の委譲は非推奨になりました。
*バージョン 3.11 で変更:* [`int`](https://docs.python.org/ja/3/library/functions.html#int) への文字列入力やその文字列表現は、サービス拒否攻撃 (DoS 攻撃) を避けるために制限されることがあります。文字列 *x* を [`int`](https://docs.python.org/ja/3/library/functions.html#int) に変換したり [`int`](https://docs.python.org/ja/3/library/functions.html#int) を文字列に変換したりする際にその制限を超えた場合、 [`ValueError`](https://docs.python.org/ja/3/library/exceptions.html#ValueError) が送出されます。詳しくは [整数文字列の変換における長さ制限](https://docs.python.org/ja/3/library/stdtypes.html#int-max-str-digits) を参照してください。

**isinstance**(*object*, *classinfo*)*object* 引数が *classinfo* 引数に指定した型、またはその (直接、間接、または [仮想](https://docs.python.org/ja/3/glossary.html#term-abstract-base-class) の) サブクラスのインスタンスである場合に `True` を返します。 *object* が与えられた型のオブジェクトでない場合、この関数は常に `False` を返します。 *classinfo* が型オブジェクトのタプル (または再帰的にそのようなタプルを含むタプル) や複数の型の [Union Type](https://docs.python.org/ja/3/library/stdtypes.html#types-union) である場合、 *object* がそれらの型のいずれかのインスタンスであれば `True` を返します。 *classinfo* が型や型からなるタプルまたは再帰的タプルのいずれでもない場合、 [`TypeError`](https://docs.python.org/ja/3/library/exceptions.html#TypeError) 例外が送出されます。タプルの中で先行する型に対するチェックが成功した場合、後続の不正な型に対して [`TypeError`](https://docs.python.org/ja/3/library/exceptions.html#TypeError) が送出されないことがあります。
*バージョン 3.10 で変更: classinfo* に [Union Type](https://docs.python.org/ja/3/library/stdtypes.html#types-union) を指定できるようになりました。

**issubclass**(*class*, *classinfo*)*class* が *classinfo* の (直接、間接、または [仮想](https://docs.python.org/ja/3/glossary.html#term-abstract-base-class) の) サブクラスである場合に `True` を返します。クラスは自身のサブクラスとみなされます。 *classinfo* はクラスオブジェクトのタプル (または再帰的にそのようなタプルを含むタプル) やクラスオブジェクトの [Union Type](https://docs.python.org/ja/3/library/stdtypes.html#types-union) でもよく、この場合は *class* が *classinfo* のいずれかのクラスのサブクラスであれば `True` を返します。上記以外の値が指定された場合、 [`TypeError`](https://docs.python.org/ja/3/library/exceptions.html#TypeError) 例外が送出されます。
*バージョン 3.10 で変更: classinfo* に [Union Type](https://docs.python.org/ja/3/library/stdtypes.html#types-union) を指定できるようになりました。

**iter**(*object*)**iter**(*object*, *sentinel*)[iterator](https://docs.python.org/ja/3/glossary.html#term-iterator) オブジェクトを返します。第二引数があるかどうかによって第一引数の解釈は大きく異なります。第二引数がない場合、 *object* は [iterable](https://docs.python.org/ja/3/glossary.html#term-iterable) プロトコル (`__iter__()` メソッド) をサポートするコレクションオブジェクトか、またはシーケンスプロトコル (`0` から始まる整数を引数にとる [`__getitem__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__getitem__) メソッド) をサポートするオブジェクトでなければなりません。第一引数がどちらのプロトコルもサポートしない場合は [`TypeError`](https://docs.python.org/ja/3/library/exceptions.html#TypeError) 例外が送出されます。第二引数 *sentinel* が与えられた場合、 *object* は呼び出し可能オブジェクトでなければなりません。この場合に生成されるイテレータは [`__next__()`](https://docs.python.org/ja/3/library/stdtypes.html#iterator.__next__) メソッドを呼び出すごとに引数なしで *object* を呼び出します; 戻り値が *sentinel* と等しければ、 [`StopIteration`](https://docs.python.org/ja/3/library/exceptions.html#StopIteration) が送出されます。それ以外の場合は戻り値がそのまま返されます。
[イテレータ型](https://docs.python.org/ja/3/library/stdtypes.html#typeiter) も見てください。
2引数形式の [`iter()`](https://docs.python.org/ja/3/library/functions.html#iter) の便利な利用方法の1つは、ブロックリーダーの構築です。 例えば、バイナリのデータベースファイルから固定幅のブロックをファイルの終端に到達するまで読み出すには次のようにします:

**`from** **functools** **import** partial
**with** open('mydata.db', 'rb') **as** f:
    **for** block **in** iter(partial(f.read, 64), b''):
        process_block(block)`

**len**(*s*)オブジェクトの長さ (要素の数) を返します。引数はシーケンス (文字列、バイト列、タプル、リスト、range 等) かコレクション (辞書、集合、凍結集合等) です。
**CPython 実装の詳細:** `len` は、例えば [`range(2 ** 100)`](https://docs.python.org/ja/3/library/stdtypes.html#range) のような、 [`sys.maxsize`](https://docs.python.org/ja/3/library/sys.html#sys.maxsize) を超える長さに対して [`OverflowError`](https://docs.python.org/ja/3/library/exceptions.html#OverflowError) を送出します。

*class* **list***class* **list**(*iterable*)[`list`](https://docs.python.org/ja/3/library/stdtypes.html#list) は、実際には関数ではなくミュータブルなシーケンス型で、 [リスト型 (list)](https://docs.python.org/ja/3/library/stdtypes.html#typesseq-list) と [シーケンス型 --- list, tuple, range](https://docs.python.org/ja/3/library/stdtypes.html#typesseq) にドキュメント化されています。

**locals**()現在のローカルシンボルテーブルを表す辞書を更新して返します。 関数ブロックで [`locals()`](https://docs.python.org/ja/3/library/functions.html#locals) を呼び出したときは自由変数が返されますが、クラスブロックでは返されません。 モジュールレベルでは、 [`locals()`](https://docs.python.org/ja/3/library/functions.html#locals) と [`globals()`](https://docs.python.org/ja/3/library/functions.html#globals) は同じ辞書であることに注意してください。
**注釈** 
この辞書の内容は変更してはいけません; 変更しても、インタプリタが使うローカル変数や自由変数の値には影響しません。

**map**(*function*, *iterable*, **iterables*)*function* を *iterable* の全ての要素に適用して結果を生成 (yield) するイテレータを返します。追加の *iterables* 引数が渡された場合、 *function* は渡されたイテラブルと同じ数の引数を取らなければならず、関数は全てのイテラブルから並行して得られた要素の組に対して適用されます。複数のイテラブルが渡された場合、そのうちで最も短いイテラブルが使い尽くされた段階で止まります。関数の入力が引数タプルとして単一のイテラブルの形で整理されている場合は、 [`itertools.starmap()`](https://docs.python.org/ja/3/library/itertools.html#itertools.starmap) を参照してください。

**max**(*iterable*, ***, *key=None*)**max**(*iterable*, ***, *default*, *key=None*)**max**(*arg1*, *arg2*, **args*, *key=None*)iterable の中で最大の要素、または2つ以上の引数の中で最大のものを返します。
位置引数が1つだけ与えられた場合、それは空でない [iterable](https://docs.python.org/ja/3/glossary.html#term-iterable) でなくてはいけません。その iterable の最大の要素が返されます。2 つ以上のキーワード無しの位置引数が与えられた場合、その位置引数の中で最大のものが返されます。
任意のキーワード専用引数が 2 つあります。 *key* 引数は引数を 1 つ取る順序関数 ([`list.sort()`](https://docs.python.org/ja/3/library/stdtypes.html#list.sort) のもののように) を指定します。 *default* 引数は与えられたイテラブルが空の場合に返すオブジェクトを指定します。 イテラブルが空で *default* が与えられていない場合 [`ValueError`](https://docs.python.org/ja/3/library/exceptions.html#ValueError) が送出されます。
最大の要素が複数あるとき、この関数はそのうち最初に現れたものを返します。これは、`sorted(iterable, key=keyfunc, reverse=True)[0]` や `heapq.nlargest(1, iterable, key=keyfunc)` のような、他のソート安定性を維持するツールと両立します。
*バージョン 3.4 で追加: default* キーワード専用引数。
*バージョン 3.8 で変更: key* 引数が `None` であることを許容します。

*class* **memoryview**(*object*)与えられたオブジェクトから作られた "メモリビュー" オブジェクトを返します。詳しくは [メモリビュー](https://docs.python.org/ja/3/library/stdtypes.html#typememoryview) を参照してください。

**min**(*iterable*, ***, *key=None*)**min**(*iterable*, ***, *default*, *key=None*)**min**(*arg1*, *arg2*, **args*, *key=None*)iterable の中で最小の要素、または2つ以上の引数の中で最小のものを返します。
位置引数が1つだけ与えられた場合、それは空でない [iterable](https://docs.python.org/ja/3/glossary.html#term-iterable) でなくてはいけません。その iterable の最小の要素が返されます。2 つ以上のキーワード無しの位置引数が与えられた場合、その位置引数の中で最小のものが返されます。
任意のキーワード専用引数が 2 つあります。 *key* 引数は引数を 1 つ取る順序関数 ([`list.sort()`](https://docs.python.org/ja/3/library/stdtypes.html#list.sort) のもののように) を指定します。 *default* 引数は与えられたイテラブルが空の場合に返すオブジェクトを指定します。 イテラブルが空で *default* が与えられていない場合 [`ValueError`](https://docs.python.org/ja/3/library/exceptions.html#ValueError) が送出されます。
最小の要素が複数あるとき、この関数はそのうち最初に現れたものを返します。これは、`sorted(iterable, key=keyfunc)[0]` や `heapq.nsmallest(1, iterable, key=keyfunc)` のような、他のソート安定性を維持するツールと両立します。
*バージョン 3.4 で追加: default* キーワード専用引数。
*バージョン 3.8 で変更: key* 引数が `None` であることを許容します。

**next**(*iterator*)**next**(*iterator*, *default*)[iterator](https://docs.python.org/ja/3/glossary.html#term-iterator) の [`__next__()`](https://docs.python.org/ja/3/library/stdtypes.html#iterator.__next__) メソッドを呼び出すことにより、次の要素を取得します。イテレータが使い尽くされた場合、 *default* が与えられていればその値が返されます。そうでない場合は [`StopIteration`](https://docs.python.org/ja/3/library/exceptions.html#StopIteration) が送出されます。

*class* **object**何の機能も持たない新しいオブジェクトを返します。 [`object`](https://docs.python.org/ja/3/library/functions.html#object) は全てのクラスの基底クラスです。これは、全ての Python クラスのインスタンスに共通のメソッド群を持ちます。この関数はいかなる引数も受け付けません。
**注釈** 
[`object`](https://docs.python.org/ja/3/library/functions.html#object) は [`__dict__`](https://docs.python.org/ja/3/library/stdtypes.html#object.__dict__) を *持たない* ので、 [`object`](https://docs.python.org/ja/3/library/functions.html#object) クラスのインスタンスに任意の属性を代入することはできません。

**oct**(*x*)整数を先頭に "0o" が付いた 8 進文字列に変換します。 結果は Python の式としても使える形式になります。 *x* が Python の [`int`](https://docs.python.org/ja/3/library/functions.html#int) オブジェクトでない場合、整数を返す [`__index__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__index__) メソッドが定義されていなければなりません。 例えば、次のようになります:>>>

**`>>>** oct(8)
'0o10'
**>>>** oct(-56)
'-0o70'`

整数を接頭辞 "0o" 付きや "0o" 無しの 8 進文字列に変換したい場合は、次に挙げる方法のいずれかを使ってください。>>>

**`>>>** '**%#o**' % 10, '**%o**' % 10
('0o12', '12')
**>>>** format(10, '#o'), format(10, 'o')
('0o12', '12')
**>>>** f'**{**10**:**#o**}**', f'**{**10**:**o**}**'
('0o12', '12')`

より詳しいことは [`format()`](https://docs.python.org/ja/3/library/functions.html#format) も参照してください。

**open**(*file*, *mode='r'*, *buffering=- 1*, *encoding=None*, *errors=None*, *newline=None*, *closefd=True*, *opener=None*)*file* を開き、対応する [ファイルオブジェクト](https://docs.python.org/ja/3/glossary.html#term-file-object) を返します。ファイルを開くことができなければ、[`OSError`](https://docs.python.org/ja/3/library/exceptions.html#OSError) が送出されます。 この関数の利用例について、 [ファイルを読み書きする](https://docs.python.org/ja/3/tutorial/inputoutput.html#tut-files) を参照してください。
*file* は [path-like object](https://docs.python.org/ja/3/glossary.html#term-path-like-object) で、開くファイルのパス名 (絶対パスまたは現在の作業ディレクトリからの相対パス) あるいはラップするファイルの整数のファイルデスクリプタを与えます。 (ファイルデスクリプタが与えられた場合、 *closefd* が `False` に設定されていないかぎり、この関数が返す I/O オブジェクトがクローズされるときにファイルデスクリプタもクローズされます。)
*mode* はファイルが開かれる際のモードを指定するオプションの文字列です。デフォルトは `'r'` で、読み込み用にテキストモードで開くという意味です。その他によく使われるモードは、書き込み用の `'w'` (ファイルが既に存在する場合は上書きします)、排他的な生成をあらわす `'x'` 、そして追記用の `'a'` (*いくつかの* Unix システムで、 *すべての* 書き込みは現在のシーク位置にかかわらずファイルの末尾に追記する、という意味です) です。テキストモードで *encoding* が指定されない場合に使われるエンコーディングは、プラットフォーム依存です: 現在のロケールエンコーディングを取得するために [`locale.getencoding()`](https://docs.python.org/ja/3/library/locale.html#locale.getencoding) が呼ばれます。 (生のバイトデータを読み書きする際にはバイナリモードを使います。このときは *encoding* は未指定のままとします。) 指定可能なモードは以下の通りです:文字意味`'r'`読み込み用に開く (デフォルト)`'w'`書き込み用に開き、まずファイルを切り詰める`'x'`排他的な生成に開き、ファイルが存在する場合は失敗する`'a'`書き込み用に開き、ファイルが存在する場合には末尾に追記する`'b'`バイナリモード`'t'`テキストモード (デフォルト)`'+'`更新用に開く (読み込み・書き込み用)
デフォルトのモードは `'r'` (テキストの読み込み用に開く、 `'rt'` と同義) です。 `'w+'` と `'w+b'` はファイルを開いて上書きします。 `'r+'` と `'r+b'` はファイルを上書きせずに開きます。
[概要](https://docs.python.org/ja/3/library/io.html#io-overview) で触れられているように、Python はバイナリとテキストの I/O を区別します。(*mode* 引数に `'b'` を含めて) バイナリモードで開かれたファイルは、内容をいかなるデコーディングもせずに [`bytes`](https://docs.python.org/ja/3/library/stdtypes.html#bytes) オブジェクトとして返します。(デフォルトや、 *mode* 引数に `'t'` が含まれたときの) テキストモードでは、ファイルの内容は [`str`](https://docs.python.org/ja/3/library/stdtypes.html#str) として返され、バイト列はまず、プラットフォーム依存のエンコーディングか、*encoding* が指定された場合は指定されたエンコーディングを使ってデコードされます。
**注釈** 
Python は、下層のオペレーティングシステムがテキストファイルをどう認識するかには依存しません; すべての処理は Python 自身で行われ、よってプラットフォーム非依存です。
*buffering* is an optional integer used to set the buffering policy. Pass 0 to switch buffering off (only allowed in binary mode), 1 to select line buffering (only usable when writing in text mode), and an integer > 1 to indicate the size in bytes of a fixed-size chunk buffer. Note that specifying a buffer size this way applies for binary buffered I/O, but `TextIOWrapper` (i.e., files opened with `mode='r+'`) would have another buffering. To disable buffering in `TextIOWrapper`, consider using the `write_through` flag for [`io.TextIOWrapper.reconfigure()`](https://docs.python.org/ja/3/library/io.html#io.TextIOWrapper.reconfigure). When no *buffering* argument is given, the default buffering policy works as follows:
• バイナリファイルは固定サイズのチャンクでバッファリングされます。バッファサイズは、下層のデバイスの「ブロックサイズ」を決定するヒューリスティックを用いて選択され、それが不可能な場合は代わりに [`io.DEFAULT_BUFFER_SIZE`](https://docs.python.org/ja/3/library/io.html#io.DEFAULT_BUFFER_SIZE) が使われます。多くのシステムでは、バッファサイズは通常 4096 か 8192 バイト長です。
• 「対話的な」テキストファイル ([`isatty()`](https://docs.python.org/ja/3/library/io.html#io.IOBase.isatty) が `True` を返すファイル) は行バッファリングを使用します。 その他のテキストファイルは、上で説明したバイナリファイル用の方針を使用します。
*encoding* はファイルのエンコードやデコードに使われる [text encoding](https://docs.python.org/ja/3/glossary.html#term-text-encoding) の名前です。このオプションはテキストモードでのみ使用してください。デフォルトエンコーディングはプラットフォーム依存 ([`locale.getencoding()`](https://docs.python.org/ja/3/library/locale.html#locale.getencoding) が返すもの) ですが、Pythonでサポートされているエンコーディングはどれでも使えます。詳しくは [`codecs`](https://docs.python.org/ja/3/library/codecs.html#module-codecs) モジュール内のサポートしているエンコーディングのリストを参照してください。
*errors* はオプションの文字列で、エンコードやデコードでのエラーをどのように扱うかを指定するものです。バイナリモードでは使用できません。様々な標準のエラーハンドラが使用可能です ([エラーハンドラ](https://docs.python.org/ja/3/library/codecs.html#error-handlers) に列記されています) が、 [`codecs.register_error()`](https://docs.python.org/ja/3/library/codecs.html#codecs.register_error) に登録されているエラー処理の名前も使用可能です。標準のエラーハンドラの名前には、以下のようなものがあります:
• `'strict'` はエンコーディングエラーがあると例外 [`ValueError`](https://docs.python.org/ja/3/library/exceptions.html#ValueError) を発生させます。デフォルト値である `None` も同じ効果です。
• `'ignore'` はエラーを無視します。エンコーディングエラーを無視することで、データが失われる可能性があることに注意してください。
• `'replace'` は、不正な形式のデータが存在した場所に(`'?'` のような) 置換マーカーを挿入します。
• `'surrogateescape'` は正しくないバイト列をユニコードの下位サロゲート領域のうち U+DC80 から U+DCFF の範囲のコードユニットであらわします。データの書き込み時に `surrogateescape` エラーハンドラが使われると、これらのサロゲートコードユニットは元と同じバイト列に変換されます。これはエンコーディングが不明なファイルを処理するのに便利です。
• `'xmlcharrefreplace'` はファイルへの書き込み時のみサポートされます。そのエンコーディングでサポートされない文字は、`&#*nnn*;` 形式の適切な XML 文字参照で置換されます。
• `'backslashreplace'` は不正なデータを Python のバックスラッシュ付きのエスケープシーケンスで置換します。
• `'namereplace'` (書き込み時のみサポートされています) はサポートされていない文字を `\N{...}` エスケープシーケンスで置換します。
*newline* はストリームから受け取った改行文字をどのようにパースするかを決定します。 `None`, `''`, `'\n'`, `'\r'`, または `'\r\n'` のいずれかを指定できます。これは以下のように動作します:
• ストリームからの入力の読み込み時、*newline* が `None` の場合、ユニバーサル改行モードが有効になります。入力中の行は `'\n'`, `'\r'`, または `'\r\n'` で終わり、呼び出し元に返される前に `'\n'` に変換されます。 `''` の場合、ユニバーサル改行モードは有効になりますが、行末は変換されずに呼び出し元に返されます。その他の正当な値の場合、入力行は与えられた文字列でのみ終わり、行末は変換されずに呼び出し元に返されます。
• ストリームへの出力の書き込み時、*newline* が `None` の場合、全ての `'\n'` 文字はシステムのデフォルトの行セパレータ [`os.linesep`](https://docs.python.org/ja/3/library/os.html#os.linesep) に変換されます。 *newline* が `''` または `'\n'` の場合は変換されません。*newline* がその他の正当な値の場合、全ての `'\n'` 文字は与えられた文字列に変換されます。
*closefd* が `False` で、ファイル名ではなくてファイル記述子が与えられた場合、下層のファイル記述子はファイルが閉じられた後も開いたままとなります。 ファイル名が与えられた場合、*closefd* は `True` (デフォルト値) でなければなりません。 そうでない場合エラーが送出されます。
呼び出し可能オブジェクトを *opener* として与えることで、カスタムのオープナーが使えます。そしてファイルオブジェクトの下層のファイル記述子は、*opener* を (*file*, *flags*) で呼び出して得られます。*opener* は開いたファイル記述子を返さなければなりません。 ([`os.open`](https://docs.python.org/ja/3/library/os.html#os.open) を *opener* として渡すと、`None` を渡したのと同様の機能になります)。
新たに作成されたファイルは [継承不可](https://docs.python.org/ja/3/library/os.html#fd-inheritance) です。
次の例は [`os.open()`](https://docs.python.org/ja/3/library/os.html#os.open) 関数の [dir_fd](https://docs.python.org/ja/3/library/os.html#dir-fd) 引数を使い、与えられたディレクトリからの相対パスで指定されたファイルを開きます:>>>

**`>>> import** **os>>>** dir_fd = os.open('somedir', os.O_RDONLY)
**>>> def** opener(path, flags):
**...**     **return** os.open(path, flags, dir_fd=dir_fd)
**...>>> with** open('spamspam.txt', 'w', opener=opener) **as** f:
**...**     print('This will be written to somedir/spamspam.txt', file=f)
**...>>>** os.close(dir_fd)  *# don't leak a file descriptor*`
[`open()`](https://docs.python.org/ja/3/library/functions.html#open) 関数が返す [file object](https://docs.python.org/ja/3/glossary.html#term-file-object) の型はモードに依存します。 [`open()`](https://docs.python.org/ja/3/library/functions.html#open) をファイルをテキストモード (`'w'`, `'r'`, `'wt'`, `'rt'`, など) で開くのに使ったときは [`io.TextIOBase`](https://docs.python.org/ja/3/library/io.html#io.TextIOBase) (特に [`io.TextIOWrapper`](https://docs.python.org/ja/3/library/io.html#io.TextIOWrapper)) のサブクラスを返します。 ファイルをバッファリング付きのバイナリモードで開くのに使ったときは [`io.BufferedIOBase`](https://docs.python.org/ja/3/library/io.html#io.BufferedIOBase) のサブクラスを返します。 実際のクラスは様々です。 読み込みバイナリモードでは [`io.BufferedReader`](https://docs.python.org/ja/3/library/io.html#io.BufferedReader) を返します。 書き込みバイナリモードや追記バイナリモードでは [`io.BufferedWriter`](https://docs.python.org/ja/3/library/io.html#io.BufferedWriter) を返します。 読み書きモードでは [`io.BufferedRandom`](https://docs.python.org/ja/3/library/io.html#io.BufferedRandom) を返します。 バッファリングが無効なときはrawストリーム、すなわち [`io.RawIOBase`](https://docs.python.org/ja/3/library/io.html#io.RawIOBase) のサブクラスである [`io.FileIO`](https://docs.python.org/ja/3/library/io.html#io.FileIO) を返します。
[`fileinput`](https://docs.python.org/ja/3/library/fileinput.html#module-fileinput) 、([`open()`](https://docs.python.org/ja/3/library/functions.html#open) が宣言された場所である) [`io`](https://docs.python.org/ja/3/library/io.html#module-io) 、 [`os`](https://docs.python.org/ja/3/library/os.html#module-os) 、 [`os.path`](https://docs.python.org/ja/3/library/os.path.html#module-os.path) 、 [`tempfile`](https://docs.python.org/ja/3/library/tempfile.html#module-tempfile) 、 [`shutil`](https://docs.python.org/ja/3/library/shutil.html#module-shutil) などの、ファイル操作モジュールも参照してください。
引数 `file`, `mode`, `flags` を指定して [監査イベント](https://docs.python.org/ja/3/library/sys.html#auditing) `open` を送出します。
`mode` と `flags` の2つの引数は呼び出し時の値から修正されたり、推量により設定されたりする可能性があります。
*バージョン 3.3 で変更:*
• *opener* 引数を追加しました。
• `'x'` モードを追加しました。
• 以前は [`IOError`](https://docs.python.org/ja/3/library/exceptions.html#IOError) が送出されました; それは現在 [`OSError`](https://docs.python.org/ja/3/library/exceptions.html#OSError) のエイリアスです。
• 既存のファイルを 排他的生成モード(`'x'`)で開いた場合、 [`FileExistsError`](https://docs.python.org/ja/3/library/exceptions.html#FileExistsError) を送出するようになりました。
*バージョン 3.4 で変更:*
• ファイルが継承不可になりました。
*バージョン 3.5 で変更:*
• システムコールが中断されシグナルハンドラが例外を送出しなかった場合、この関数は [`InterruptedError`](https://docs.python.org/ja/3/library/exceptions.html#InterruptedError) 例外を送出する代わりにシステムコールを再試行するようになりました (論拠については [**PEP 475**](https://peps.python.org/pep-0475/) を参照してください)。
• `'namereplace'` エラーハンドラが追加されました。
*バージョン 3.6 で変更:*
• [`os.PathLike`](https://docs.python.org/ja/3/library/os.html#os.PathLike) を実装したオブジェクトを受け入れるようになりました。
• Windowsでは、コンソールバッファのオープンは、[`io.FileIO`](https://docs.python.org/ja/3/library/io.html#io.FileIO) ではなく、[`io.RawIOBase`](https://docs.python.org/ja/3/library/io.html#io.RawIOBase) のサブクラスを返すでしょう。
*バージョン 3.11 で変更:* `'U'` モードは削除されました。

**ord**(*c*)1 文字の Unicode 文字を表す文字列に対し、その文字の Unicode コードポイントを表す整数を返します。例えば、 `ord('a')` は整数 `97` を返し、 `ord('€')` (ユーロ記号) は `8364` を返します。これは [`chr()`](https://docs.python.org/ja/3/library/functions.html#chr) の逆です。

**pow**(*base*, *exp*, *mod=None*)*base* の *exp* 乗を返します; *mod* があれば、*base* の *exp* 乗に対する *mod* の剰余を返します (`pow(base, exp) % mod` より効率よく計算されます)。二引数の形式 `pow(base, exp)` は、冪乗演算子を使った `base**exp` と等価です。
引数は数値型でなければなりません。型混合の場合、二項算術演算における型強制規則が適用されます。 [`int`](https://docs.python.org/ja/3/library/functions.html#int) オペランドの場合、第2引数が負でない限り、結果は (型強制後の) オペランドと同じ型になります; 第2引数が負の場合、全ての引数は浮動小数点数に変換され、浮動小数点数の結果が返されます。例えば、 `pow(10, 2)` は `100` を返しますが、 `pow(10, -2)` は `0.01` を返します。底が [`int`](https://docs.python.org/ja/3/library/functions.html#int) 型または [`float`](https://docs.python.org/ja/3/library/functions.html#float) 型で負の値であり、かつ指数が整数でない場合、複素数の結果が返されます。例えば、 `pow(-9, 0.5)` は `3j` に近い値を返します。
*base* と *exp* が [`int`](https://docs.python.org/ja/3/library/functions.html#int) オペランドで *mod* が存在するとき、 *mod* もまた整数型でなければならず、かつゼロであってはいけません。 *mod* が存在して *exp* が負の整数の場合、 *base* は *mod* と互いに素 (最大公約数が1) でなければなりません。この場合、 *inv_base* を *base* に対する *mod* を法とするモジュラ逆数 (*base* と *inv_base* の積を *mod* で割った余りが1になるような数) として、 `pow(inv_base, -exp, mod)` が返されます。
以下は `97` を法とする `38` のモジュラ逆数の計算例です:>>>

**`>>>** pow(38, -1, mod=97)
23
**>>>** 23 * 38 % 97 == 1
True`

*バージョン 3.8 で変更:* [`int`](https://docs.python.org/ja/3/library/functions.html#int) オペランドに対して、三引数形式の `pow` で第二引数に負の値を取ることができるようになりました。これによりモジュラ逆数の計算が可能になります。
*バージョン 3.8 で変更:* キーワード引数を取ることができるようになりました。以前は位置引数だけがサポートされていました。

**print**(**objects*, *sep=' '*, *end='\n'*, *file=None*, *flush=False*)*objects* を *sep* で区切りながらテキストストリーム *file* に表示し、最後に *end* を表示します。*sep* 、 *end* 、 *file* 、 *flush* を与える場合、キーワード引数として与える必要があります。
キーワードなしの引数はすべて、 [`str()`](https://docs.python.org/ja/3/library/stdtypes.html#str) がするように文字列に変換され、 *sep* で区切られながらストリームに書き出され、最後に *end* が続きます。 *sep* と *end* の両方とも、文字列でなければなりません。これらを `None` にすると、デフォルトの値が使われます。 *objects* が与えられなければ、 [`print()`](https://docs.python.org/ja/3/library/functions.html#print) は *end* だけを書き出します。
*file* 引数は、 `write(string)` メソッドを持つオブジェクトでなければなりません。指定されないか、 `None` である場合、 [`sys.stdout`](https://docs.python.org/ja/3/library/sys.html#sys.stdout) が使われます。表示される引数は全てテキスト文字列に変換されますから、 [`print()`](https://docs.python.org/ja/3/library/functions.html#print) はバイナリモードファイルオブジェクトには使用できません。代わりに `file.write(...)` を使ってください。
出力がバッファ化されるかどうかは通常 *file* で決まりますが、*flush* キーワード引数が真ならストリームは強制的にフラッシュされます。
*バージョン 3.3 で変更:* キーワード引数 *flush* が追加されました。

*class* **property**(*fget=None*, *fset=None*, *fdel=None*, *doc=None*)property 属性を返します。
*fget* は属性値を取得するための関数です。*fset* は属性値を設定するための関数です。*fdel* は属性値を削除するための関数です。*doc* は属性の docstring を作成します。
典型的な使用法は、属性 `x` の処理の定義です:

**`class** **C**:
    **def** __init__(self):
        self._x = **Nonedef** getx(self):
        **return** self._x

    **def** setx(self, value):
        self._x = value

    **def** delx(self):
        **del** self._x

    x = property(getx, setx, delx, "I'm the 'x' property.")`

*c* が *C* のインスタンスならば、`c.x` は getter を呼び出し、`c.x = value` は setter を、`del c.x` は deleter を呼び出します。
*doc* は、与えられれば property 属性のドキュメント文字列になります。 与えられなければ、 property は *fget* のドキュメント文字列 (もしあれば) をコピーします。 そのため [`property()`](https://docs.python.org/ja/3/library/functions.html#property) を [デコレータ](https://docs.python.org/ja/3/glossary.html#term-decorator) として使えば、読み出し専用 property を作るのは容易です:

**`class** **Parrot**:
    **def** __init__(self):
        self._voltage = 100000

    @property
    **def** voltage(self):
        *"""Get the current voltage."""***return** self._voltage`

`@property` デコレータは `voltage()` を同じ名前のまま 読み出し専用属性の "getter" にし、*voltage* のドキュメント文字列を "Get the current voltage." に設定します。
property オブジェクトは `getter`, `setter`, `deleter` メソッドを持っています。これらのメソッドをデコレータとして使うと、対応するアクセサ関数がデコレートされた関数に設定された、 property のコピーを作成できます。これを一番分かりやすく説明する例があります:

**`class** **C**:
    **def** __init__(self):
        self._x = **None**@property
    **def** x(self):
        *"""I'm the 'x' property."""***return** self._x

    @x.setter
    **def** x(self, value):
        self._x = value

    @x.deleter
    **def** x(self):
        **del** self._x`

このコードは最初の例と等価です。追加の関数には、必ず元の property と同じ名前 (この例では `x`) を与えて下さい。
返される property オブジェクトも、コンストラクタの引数に対応した `fget`, `fset`, および `fdel` 属性を持ちます。
*バージョン 3.5 で変更:* 属性オブジェクトのドックストリングが書き込み可能になりました。

*class* **range**(*stop*)*class* **range**(*start*, *stop*, *step=1*)[`range`](https://docs.python.org/ja/3/library/stdtypes.html#range) は、実際には関数ではなくイミュータブルなシーケンス型で、 [range](https://docs.python.org/ja/3/library/stdtypes.html#typesseq-range) と [シーケンス型 --- list, tuple, range](https://docs.python.org/ja/3/library/stdtypes.html#typesseq) にドキュメント化されています。

**repr**(*object*)オブジェクトの印字可能な表現を含む文字列を返します。この関数は多くの型について、 [`eval()`](https://docs.python.org/ja/3/library/functions.html#eval) に渡されたときと同じ値を持つようなオブジェクトを表す文字列を生成しようとします。そうでない場合は、山括弧に囲まれたオブジェクトの型の名前と追加の情報 (大抵の場合はオブジェクトの名前とアドレスを含みます) を返します。クラスは、 `__repr__()` メソッドを定義することで、この関数によりそのクラスのインスタンスが返すものを制御することができます。[`sys.displayhook()`](https://docs.python.org/ja/3/library/sys.html#sys.displayhook) にアクセスできない場合、この関数は [`RuntimeError`](https://docs.python.org/ja/3/library/exceptions.html#RuntimeError) を送出します。

**reversed**(*seq*)要素を逆順に取り出すイテレータ (reverse [iterator](https://docs.python.org/ja/3/glossary.html#term-iterator)) を返します。 *seq* は `__reversed__()` メソッドを持つか、シーケンス型プロトコル (`__len__()` メソッド、および、 `0` 以上の整数を引数とする [`__getitem__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__getitem__) メソッド) をサポートするオブジェクトでなければなりません。

**round**(*number*, *ndigits=None*)*number* を小数点以下 *ndigits* 桁の精度で丸めた値を返します。*ndigits* が省略されたり、`None` だった場合、入力値に最も近い整数を返します。
[`round()`](https://docs.python.org/ja/3/library/functions.html#round) をサポートする組み込み型では、値は 10 のマイナス *ndigits* 乗の倍数の中で最も近いものに丸められます; 二つの倍数が同じだけ近いなら、偶数を選ぶ方に (そのため、例えば `round(0.5)` と `round(-0.5)` は両方とも `0` に、 `round(1.5)` は `2` に) 丸められます。 *ndigits* には任意の整数値が有効となります (正の整数、ゼロ、負の整数)。 返り値は *ndigits* が指定されていないか `None` の場合は整数、そうでなければ返り値は *number* と同じ型です。
一般的な Python オブジェクト `number` に対して、`round` は処理を number.__round__ に移譲します。
**注釈** 
浮動小数点数に対する [`round()`](https://docs.python.org/ja/3/library/functions.html#round) の振る舞いは意外なものかもしれません: 例えば、 `round(2.675, 2)` は予想通りの `2.68` ではなく `2.67` を与えます。これはバグではありません: これはほとんどの小数が浮動小数点数で正確に表せないことの結果です。詳しくは [浮動小数点演算、その問題と制限](https://docs.python.org/ja/3/tutorial/floatingpoint.html#tut-fp-issues) を参照してください。

*class* **set***class* **set**(*iterable*)オプションで *iterable* の要素を持つ、新しい [`set`](https://docs.python.org/ja/3/library/stdtypes.html#set) オブジェクトを返します。 `set` は組み込みクラスです。このクラスについて詳しい情報は [`set`](https://docs.python.org/ja/3/library/stdtypes.html#set) や [set（集合）型 --- set, frozenset](https://docs.python.org/ja/3/library/stdtypes.html#types-set) を参照してください。
他のコンテナについては [`collections`](https://docs.python.org/ja/3/library/collections.html#module-collections) モジュールや組み込みの [`frozenset`](https://docs.python.org/ja/3/library/stdtypes.html#frozenset) 、 [`list`](https://docs.python.org/ja/3/library/stdtypes.html#list) 、 [`tuple`](https://docs.python.org/ja/3/library/stdtypes.html#tuple) 、 [`dict`](https://docs.python.org/ja/3/library/stdtypes.html#dict) クラスを参照してください。

**setattr**(*object*, *name*, *value*)[`getattr()`](https://docs.python.org/ja/3/library/functions.html#getattr) の相方です。引数はオブジェクト、文字列、それから任意の値です。文字列は既存の属性または新たな属性の名前にできます。この関数は指定したオブジェクトが許せば、値を属性に関連付けます。例えば、 `setattr(x, 'foobar', 123)` は `x.foobar = 123` と等価です。
[`__getattribute__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__getattribute__) のカスタマイズや [`__slots__`](https://docs.python.org/ja/3/reference/datamodel.html#object.__slots__) を通じてオブジェクトが強制していない限り、 *name* は [識別子 (identifier) およびキーワード (keyword)](https://docs.python.org/ja/3/reference/lexical_analysis.html#identifiers) で定義されている Python 識別子である必要はありません。属性名が識別子でない場合、ドットを使った属性へのアクセスはできませんが、 [`getattr()`](https://docs.python.org/ja/3/library/functions.html#getattr) などを通じてアクセス可能です。
**注釈** 
[プライベートな名前のマングリング](https://docs.python.org/ja/3/reference/expressions.html#private-name-mangling) はコンパイル時に行われます。そのため、プライベートな属性 (先頭に2つのアンダースコアを伴う名前を持つ属性) の値を [`setattr()`](https://docs.python.org/ja/3/library/functions.html#setattr) でセットするためには、属性名を手動でマングリングする必要があります。

*class* **slice**(*stop*)*class* **slice**(*start*, *stop*, *step=None*)`range(start, stop, step)` で指定されるインデクスの集合を表す、 [スライス](https://docs.python.org/ja/3/glossary.html#term-slice) オブジェクトを返します。引数 *start* および *step* はデフォルトでは `None` です。スライスオブジェクトは読み出し専用の属性 `start`、`stop` および `step` を持ち、これらは単に引数で使われた 値 (またはデフォルト値) を返します。これらの値には、その他のはっきりと した機能はありません。しかしながら、これらの値は NumPy および、その他のサードパーティ製パッケージで利用されています。スライスオブジェクトは拡張されたインデクス指定構文が使われる際にも生成されます。例えば `a[start:stop:step]` や `a[start:stop, i]` です。この関数の代替となるイテレータを返す関数、[`itertools.islice()`](https://docs.python.org/ja/3/library/itertools.html#itertools.islice) も参照してください。
*バージョン 3.12 で変更:* スライスオブジェクトが [hashable](https://docs.python.org/ja/3/glossary.html#term-hashable) (ハッシュ可能) となりました (ただし、属性 `start` 、 `stop` 、 `step` がすべてハッシュ可能である場合に限ります)。

**sorted**(*iterable*, */*, ***, *key=None*, *reverse=False*)*iterable* の要素を並べ替えた新たなリストを返します。
2 つのオプション引数があり、これらはキーワード引数として指定されなければなりません。
*key* には 1 引数関数を指定します。これは *iterable* の各要素から比較キーを展開するのに使われます (例えば、 `key=str.lower` のように指定します)。 デフォルト値は `None` です (要素を直接比較します)。
*reverse* は真偽値です。 `True` がセットされた場合、リストの要素は個々の比較が反転したものとして並び替えられます。
旧式の *cmp* 関数を *key* 関数に変換するには [`functools.cmp_to_key()`](https://docs.python.org/ja/3/library/functools.html#functools.cmp_to_key) を使用してください。
組み込みの [`sorted()`](https://docs.python.org/ja/3/library/functions.html#sorted) 関数は安定なことが保証されています。同等な要素の相対順序を変更しないことが保証されていれば、ソートは安定です。これは複数のパスでソートを行なうのに役立ちます（例えば部署でソートしてから給与の等級でソートする場合）。
ソートアルゴリズムは、要素間の比較に `<` 演算子だけを使います。したがってソートのためには [`__lt__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__lt__) メソッドを定義すれば十分なはずですが、 [**PEP 8**](https://peps.python.org/pep-0008/) は6つの [比較演算子](https://docs.python.org/ja/3/reference/expressions.html#comparisons) を全て実装することを推奨しています。これにより、異なるメソッドを必要とする [`max()`](https://docs.python.org/ja/3/library/functions.html#max) のような他のソートツールを、同じデータに対して適用することによって起こりうるバグを避ける助けになります。6つの比較演算子を全て実装することは、リフレクションによって [`__gt__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__gt__) メソッドを呼び出す可能性のある型混合の比較での混乱を避けることにも役立ちます。
ソートの例と簡単なチュートリアルは [ソート HOW TO](https://docs.python.org/ja/3/howto/sorting.html#sortinghowto) を参照して下さい。

@**staticmethod**メソッドを静的メソッドへ変換します。
静的メソッドは暗黙の第一引数を受け取りません。静的メソッドを宣言するには、このイディオムを使ってください:

**`class** **C**:
    @staticmethod
    **def** f(arg1, arg2, argN): ...`

`@staticmethod` 形式は関数 [デコレータ](https://docs.python.org/ja/3/glossary.html#term-decorator) です。詳しくは [関数定義](https://docs.python.org/ja/3/reference/compound_stmts.html#function) を参照してください。
静的メソッドは (`C.f()` のように) クラスに対して呼び出すことも、 (`C().f()` のように) インスタンスに対して呼び出すこともできます。さらに、 (`f()` のように) 普通の関数として呼び出すこともできます。
Python における静的メソッドは Java や C++ における静的メソッドと類似しています。クラスコンストラクタの代替を生成するのに役立つ変種、 [`classmethod()`](https://docs.python.org/ja/3/library/functions.html#classmethod) も参照してください。
あらゆるデコレータと同じく、 `staticmethod` は普通の関数のように呼べ、その返り値で処理が行えます。 この機能は、クラス本体から関数を参照する必要があり、かつ、インスタンスメソッドに自動変換されるのを避けたいケースで必要になります。 そのようなケースでは、このイディオムが使えます:

**`def** regular_function():
    ...

**class** **C**:
    method = staticmethod(regular_function)`

静的メソッドについて詳しい情報は [標準型の階層](https://docs.python.org/ja/3/reference/datamodel.html#types) を参照してください。
*バージョン 3.10 で変更:* 静的メソッドはメソッド属性 (`__module__`, `__name__`, `__qualname__`, `__doc__` そして `__annotations__`) を継承するようになり、また新たに `__wrapped__` 属性を持つようになりました。さらに、静的メソッドを通常の関数として呼び出すことができるようになりました。

*class* **str**(*object=''*)*class* **str**(*object=b''*, *encoding='utf-8'*, *errors='strict'*)*object* の [`str`](https://docs.python.org/ja/3/library/stdtypes.html#str) 版を返します。詳細は [`str()`](https://docs.python.org/ja/3/library/stdtypes.html#str) を参照してください。
`str` は組み込みの文字列 [クラス](https://docs.python.org/ja/3/glossary.html#term-class) です。文字列に関する一般的な情報は、[テキストシーケンス型 --- str](https://docs.python.org/ja/3/library/stdtypes.html#textseq) を参照してください。

**sum**(*iterable*, */*, *start=0*)*start* と *iterable* の要素を左から右へ合計し、総和を返します。 *iterable* の要素は通常は数値で、start の値は文字列であってはなりません。
使う場面によっては、 [`sum()`](https://docs.python.org/ja/3/library/functions.html#sum) よりもいい選択肢があります。文字列からなるシーケンスを結合する高速かつ望ましい方法は `''.join(sequence)` を呼ぶことです。浮動小数点数値を拡張された精度で加算するには、 [`math.fsum()`](https://docs.python.org/ja/3/library/math.html#math.fsum) を参照してください。一連のイテラブルを連結するには、 [`itertools.chain()`](https://docs.python.org/ja/3/library/itertools.html#itertools.chain) の使用を考えてください。
*バージョン 3.8 で変更: start* パラメータをキーワード引数として指定することができるようになりました。
*バージョン 3.12 で変更:* 浮動小数点数の総和を計算するとき、ほとんどの環境でより高精度な結果が得られるアルゴリズムを使用するようになりました。

*class* **super***class* **super**(*type*, *object_or_type=None*)メソッドの呼び出しを *type* の親または兄弟クラスに委譲するプロキシオブジェクトを返します。これはクラスの中でオーバーライドされた継承メソッドにアクセスするのに便利です。
*object_or_type* はメソッドの検索のための [method resolution order](https://docs.python.org/ja/3/glossary.html#term-method-resolution-order) (メソッド解決順序) を決定します。検索は *type* 直後のクラスから開始します。
例えば *object_or_type* の [`__mro__`](https://docs.python.org/ja/3/library/stdtypes.html#class.__mro__) 属性が `D -> B -> C -> A -> object` であり、 *type* の値が `B` だとすると、 [`super()`](https://docs.python.org/ja/3/library/functions.html#super) は `C -> A -> object` の順番でメソッドを検索します。
*object_or_type* の [`__mro__`](https://docs.python.org/ja/3/library/stdtypes.html#class.__mro__) 属性は、 [`getattr()`](https://docs.python.org/ja/3/library/functions.html#getattr) と [`super()`](https://docs.python.org/ja/3/library/functions.html#super) の 両方で使われる、メソッド解決の探索順序を列記します。 この属性は動的で、継承の階層構造が更新されれば、随時変化します。
第 2 引数が省かれたなら、返されるスーパーオブジェクトは束縛されません。第 2 引数がオブジェクトであれば、 `isinstance(obj, type)` は真でなければなりません。第 2 引数が型であれば、 `issubclass(type2, type)` は真でなければなりません (これはクラスメソッドに役に立つでしょう)。
*super* の典型的な用途は 2 つあります。第一に、単継承のクラス階層構造で *super* は名前を明示することなく親クラスを参照するのに使え、それゆえコードをメンテナンスしやすくなります。この用途は他のプログラミング言語で見られる *super* の用途によく似ています。
2つ目の用途は動的な実行環境において協調的 (cooperative) な多重継承をサポートすることです。これは Python に特有の用途で、静的にコンパイルされる言語や、単継承のみをサポートする言語には見られないものです。この機能により、同じ名前のメソッドを実装する複数の基底クラスを使った "ダイヤモンド型* の継承構造を実装することができます。良い設計は、そのような実装において、どのような場合でも同じ呼び出しシグネチャを持つように強制します。 (理由は呼び出しの順序が実行時に決定されること、呼び出し順序はクラス階層構造の変化に順応すること、そして呼び出し順序が実行時まで未知の兄弟クラスが含まれる場合があることです)。
両方の用途において、典型的なスーパークラスの呼び出しは次のようになります:

**`class** **C**(B):
    **def** method(self, arg):
        super().method(arg)    *# This does the same thing as:# super(C, self).method(arg)*`
メソッドのルックアップに加えて、 [`super()`](https://docs.python.org/ja/3/library/functions.html#super) は属性のルックアップに対しても同様に動作します。考えうる用途のひとつは親クラスや兄弟クラスの [descriptors](https://docs.python.org/ja/3/glossary.html#term-descriptor) (デスクリプタ) を呼び出すことです。
なお、[`super()`](https://docs.python.org/ja/3/library/functions.html#super) は `super().__getitem__(name)` のような明示的なドット表記属性探索の束縛処理の一部として実装されています。これは、 `__getattribute__()` メソッドを予測可能な順序でクラスを検索するように実装し、協調的な多重継承をサポートすることで実現されています。従って、 [`super()`](https://docs.python.org/ja/3/library/functions.html#super) は文や `super()[name]` のような演算子を使った暗黙の探索向けには定義されていません。
また、 [`super()`](https://docs.python.org/ja/3/library/functions.html#super) の使用は引数無しの形式を除きメソッド内部に限定されないことにも注目して下さい。2引数の形式は、必要な要素を正確に指定するので、適当な参照を作ることができます。クラス定義中における引数無しの形式は、定義されているクラスを取り出すのに必要な詳細を、通常の方法で現在のインスタンスにアクセスするようにコンパイラが埋めるのではたらきます。
[`super()`](https://docs.python.org/ja/3/library/functions.html#super) を用いて協調的なクラスを設計する方法の実践的な提案は、 [guide to using super()](https://rhettinger.wordpress.com/2011/05/26/super-considered-super/) を参照してください。

*class* **tuple***class* **tuple**(*iterable*)[`tuple`](https://docs.python.org/ja/3/library/stdtypes.html#tuple) は、実際は関数ではなくイミュータブルなシーケンス型で、[タプル型 (tuple)](https://docs.python.org/ja/3/library/stdtypes.html#typesseq-tuple) と [シーケンス型 --- list, tuple, range](https://docs.python.org/ja/3/library/stdtypes.html#typesseq) にドキュメント化されています。

*class* **type**(*object*)*class* **type**(*name*, *bases*, *dict*, ***kwds*)引数が1つだけの場合、*object* の型を返します。返り値は型オブジェクトで、一般に [`object.__class__`](https://docs.python.org/ja/3/library/stdtypes.html#instance.__class__) によって返されるのと同じオブジェクトです。
オブジェクトの型の判定には、 [`isinstance()`](https://docs.python.org/ja/3/library/functions.html#isinstance) 組み込み関数を使うことが推奨されます。これはサブクラスを考慮するからです。
引数が3つの場合、新しい型オブジェクトを返します。これは本質的には [`class`](https://docs.python.org/ja/3/reference/compound_stmts.html#class) 文の動的な書式です。 *name* 文字列はクラス名で、 [`__name__`](https://docs.python.org/ja/3/library/stdtypes.html#definition.__name__) 属性になります。 *bases* 基底クラスのタプルで、 [`__bases__`](https://docs.python.org/ja/3/library/stdtypes.html#class.__bases__) 属性になります; 空の場合は全てのクラスの基底クラスである [`object`](https://docs.python.org/ja/3/library/functions.html#object) が追加されます。 *dict* は、クラス本体の属性とメソッドの定義を含む辞書です; 辞書は [`__dict__`](https://docs.python.org/ja/3/library/stdtypes.html#object.__dict__) 属性になる前にコピーされたり、ラップされることがあります。以下の2つの文は同じ [`type`](https://docs.python.org/ja/3/library/functions.html#type) オブジェクトを生成します:>>>

**`>>> class** **X**:
**...**     a = 1
**...>>>** X = type('X', (), dict(a=1))`

[型オブジェクト](https://docs.python.org/ja/3/library/stdtypes.html#bltin-type-objects) も参照してください。
三引数形式の呼び出しに与えられたキーワード引数は、(*metaclass* を除く) クラス定義におけるキーワード引数と同様に、適切なメタクラスの機構 (通常は [`__init_subclass__()`](https://docs.python.org/ja/3/reference/datamodel.html#object.__init_subclass__)) に渡されます。
[クラス生成をカスタマイズする](https://docs.python.org/ja/3/reference/datamodel.html#class-customization) も参照してください。
*バージョン 3.6 で変更:* `type.__new__` をオーバーライドしていない [`type`](https://docs.python.org/ja/3/library/functions.html#type) のサブクラスは、オブジェクトの型を得るのに１引数形式を利用することができません。

**vars**()**vars**(*object*)モジュール、クラス、インスタンス、あるいはそれ以外の [`__dict__`](https://docs.python.org/ja/3/library/stdtypes.html#object.__dict__) 属性を持つオブジェクトの、 [`__dict__`](https://docs.python.org/ja/3/library/stdtypes.html#object.__dict__) 属性を返します。
モジュールやインスタンスのようなオブジェクトは、更新可能な [`__dict__`](https://docs.python.org/ja/3/library/stdtypes.html#object.__dict__) 属性を持っています。ただし、それ以外のオブジェクトでは [`__dict__`](https://docs.python.org/ja/3/library/stdtypes.html#object.__dict__) 属性への書き込みが制限されている場合があります。書き込みに制限がある例としては、辞書を直接更新されることを防ぐために [`types.MappingProxyType`](https://docs.python.org/ja/3/library/types.html#types.MappingProxyType) を使っているクラスがあります。
引数がなければ、[`vars()`](https://docs.python.org/ja/3/library/functions.html#vars) は [`locals()`](https://docs.python.org/ja/3/library/functions.html#locals) のように振る舞います。ただし、辞書 locals への更新は無視されるため、辞書 locals は読み出し時のみ有用であることに注意してください。
指定されたオブジェクトに [`__dict__`](https://docs.python.org/ja/3/library/stdtypes.html#object.__dict__) 属性がない場合 (たとえばそのクラスが [`__slots__`](https://docs.python.org/ja/3/reference/datamodel.html#object.__slots__) 属性を定義している場合)、 [`TypeError`](https://docs.python.org/ja/3/library/exceptions.html#TypeError) 例外が送出されます。

**zip**(**iterables*, *strict=False*)複数のイテラブルを並行に反復処理し、各イテラブルの要素からなるタプルを生成します。
以下はプログラム例です:>>>

**`>>> for** item **in** zip([1, 2, 3], ['sugar', 'spice', 'everything nice']):
**...**     print(item)
**...**(1, 'sugar')
(2, 'spice')
(3, 'everything nice')`

より正式な定義: [`zip()`](https://docs.python.org/ja/3/library/functions.html#zip) は、 *i* 番目のタプルが 引数に与えた各イテラブルの *i* 番目の要素を含むような、タプルのイテレータを返します。
[`zip()`](https://docs.python.org/ja/3/library/functions.html#zip) に対する別の考え方は、この関数は行を列に、また列を行に変換するということです。これは [行列の転置](https://en.wikipedia.org/wiki/Transpose) とよく似ています。
[`zip()`](https://docs.python.org/ja/3/library/functions.html#zip) は遅延評価です: イテラブルが `for` ループに渡されたり、 [`list`](https://docs.python.org/ja/3/library/stdtypes.html#list) でラップされたりするなどして反復処理されるまで、要素が実際に処理されることはありません。
ここで考慮すべきことは、 [`zip()`](https://docs.python.org/ja/3/library/functions.html#zip) に渡されるイテラブルが異なる長さを持つことがあるという点です; ときには意図的な場合もあり、またときにはイテラブルを準備するコードにおけるバグのこともあるでしょう。 Python はこの問題に対して3つの異なるアプローチを提供します:
• デフォルトでは、 [`zip()`](https://docs.python.org/ja/3/library/functions.html#zip) は最も短いイテラブルが消費しきった時点で停止します。より繰り返し数の長いイテラブルの残りの要素は無視して、結果を最も短いイテラブルの長さに切り詰めます:>>>

**`>>>** list(zip(range(3), ['fee', 'fi', 'fo', 'fum']))
[(0, 'fee'), (1, 'fi'), (2, 'fo')]`

• [`zip()`](https://docs.python.org/ja/3/library/functions.html#zip) は、しばしば受け取ったイテラブルが全て同じ長さであるという想定の下で使われます。そのような場合、 `strict=True` オプションの利用が推奨されます。その出力は通常の [`zip()`](https://docs.python.org/ja/3/library/functions.html#zip) と同じです:>>>

**`>>>** list(zip(('a', 'b', 'c'), (1, 2, 3), strict=**True**))
[('a', 1), ('b', 2), ('c', 3)]`

しかし、デフォルトの動作と異なり、あるイテラブルが他のイテラブルよりも先に消費しきった場合に [`ValueError`](https://docs.python.org/ja/3/library/exceptions.html#ValueError) 例外を送出します:>>>

**`>>> for** item **in** zip(range(3), ['fee', 'fi', 'fo', 'fum'], strict=**True**):  
**...**     print(item)
**...**(0, 'fee')
(1, 'fi')
(2, 'fo')
Traceback (most recent call last):
  *...*ValueError: zip() argument 2 is longer than argument 1`

`strict=True` 引数なしの場合、長さの異なるイテラブルを生じる原因となるいかなるバグも、この時点では問題なく処理されます。そして代わりにプログラムの別の場所で、原因を特定しにくいバグとして検出されることになるでしょう。
• 短いイテラブルを一定の値でパディングして全てのイテラブルが同じ長さになるようにすることもできます。この機能は [`itertools.zip_longest()`](https://docs.python.org/ja/3/library/itertools.html#itertools.zip_longest) で提供されます。
エッジケース: 引数としてイテラブルをひとつだけ渡した場合、 [`zip()`](https://docs.python.org/ja/3/library/functions.html#zip) は 1 タプルのイテレータを返します。引数なしの場合は空のイテレータを返します。
ヒントとコツ:
• イテラブルの左から右への評価順序は保証されています。そのため `zip(*[iter(s)]*n, strict=True)` を使ってデータ系列を長さ n のグループにクラスタリングするイディオムが使えます。これは、各出力タプルがイテレータを `n` 回呼び出した結果となるよう、 *同じ* イテレータを `n` 回繰り返します。これは入力を長さ n のチャンクに分割する効果があります。
• [`zip()`](https://docs.python.org/ja/3/library/functions.html#zip) に続けて `*` 演算子を使うと、zip したリストを元に戻せます:>>>

**`>>>** x = [1, 2, 3]
**>>>** y = [4, 5, 6]
**>>>** list(zip(x, y))
[(1, 4), (2, 5), (3, 6)]
**>>>** x2, y2 = zip(*zip(x, y))
**>>>** x == list(x2) **and** y == list(y2)
True`

*バージョン 3.10 で変更:* `strict` 引数が追加されました。

**__import__**(*name*, *globals=None*, *locals=None*, *fromlist=()*, *level=0*)**注釈** 
これは [`importlib.import_module()`](https://docs.python.org/ja/3/library/importlib.html#importlib.import_module) とは違い、日常の Python プログラミングでは必要ない高等な関数です。
この関数は [`import`](https://docs.python.org/ja/3/reference/simple_stmts.html#import) 文により呼び出されます。 ([`builtins`](https://docs.python.org/ja/3/library/builtins.html#module-builtins) モジュールをインポートして `builtins.__import__` に代入することで) この関数を置き換えて `import` 文のセマンティクスを変更することができますが、同様のことをするのに通常はインポートフック ([**PEP 302**](https://peps.python.org/pep-0302/) 参照) を利用する方が簡単で、かつデフォルトのインポート実装が使用されていることを仮定するコードとの間で問題が起きないので、このやり方は *強く* 推奨されません。 [`__import__()`](https://docs.python.org/ja/3/library/functions.html#import__) を直接使用することも推奨されず、 [`importlib.import_module()`](https://docs.python.org/ja/3/library/importlib.html#importlib.import_module) の方が好まれます。
この関数は、モジュール *name* をインポートし、 *globals* と *locals* が与えられれば、パッケージのコンテキストで名前をどう解釈するか決定するのに使います。 *fromlist* は *name* で与えられるモジュールからインポートされるべきオブジェクトまたはサブモジュールの名前を与ます。標準の実装では *locals* 引数はまったく使われず、 *globals* は [`import`](https://docs.python.org/ja/3/reference/simple_stmts.html#import) 文のパッケージコンテキストを決定するためにのみ使われます。
*level* は絶対と相対どちらのインポートを使うかを指定します。 `0` (デフォルト) は絶対インポートのみ実行します。正の *level* の値は、 [`__import__()`](https://docs.python.org/ja/3/library/functions.html#import__) を呼び出したディレクトリから検索対象となる親ディレクトリの数を示します (詳細は [**PEP 328**](https://peps.python.org/pep-0328/) を参照してください)。
*name* 変数が `package.module` 形式であるとき、通常は、*name* で指名されたモジュール *ではなく*、最上位のパッケージ (最初のドットまでの名前) が返されます。しかしながら、空でない *fromlist* 引数が与えられると、 *name* で指名されたモジュールが返されます。
例えば、文 `import spam` は、以下のコードのようなバイトコードに帰結します:

`spam = __import__('spam', globals(), locals(), [], 0)`

文 `import spam.ham` は、この呼び出しになります:

`spam = __import__('spam.ham', globals(), locals(), [], 0)`

ここで [`__import__()`](https://docs.python.org/ja/3/library/functions.html#import__) がどのように最上位モジュールを返しているかに注意して下さい。 [`import`](https://docs.python.org/ja/3/reference/simple_stmts.html#import) 文により名前が束縛されたオブジェクトになっています。
一方で、文 `from spam.ham import eggs, sausage as saus` は、以下となります

`_temp = __import__('spam.ham', globals(), locals(), ['eggs', 'sausage'], 0)
eggs = _temp.eggs
saus = _temp.sausage`

ここで、[`__import__()`](https://docs.python.org/ja/3/library/functions.html#import__) から `spam.ham` モジュールが返されます。このオブジェクトから、インポートされる名前が取り出され、それぞれの名前として代入されます。
単純に名前からモジュール (パッケージの範囲内であるかも知れません) をインポートしたいなら、 [`importlib.import_module()`](https://docs.python.org/ja/3/library/importlib.html#importlib.import_module) を使ってください。
*バージョン 3.3 で変更:* 負の *level* の値はサポートされなくなりました (デフォルト値の 0 に変更されます)。
*バージョン 3.9 で変更:* コマンドラインオプション [`-E`](https://docs.python.org/ja/3/using/cmdline.html#cmdoption-E) or [`-I`](https://docs.python.org/ja/3/using/cmdline.html#cmdoption-I) が指定された場合、環境変数 [`PYTHONCASEOK`](https://docs.python.org/ja/3/using/cmdline.html#envvar-PYTHONCASEOK) は無視されるようになりました。

**脚注**

[1](https://docs.python.org/ja/3/library/functions.html#id1)なお、パーサは Unix スタイルの行末の記法しか受け付けません。コードをファイルから読んでいるなら、必ず、改行変換モードで Windows や Mac スタイルの改行を変換してください。

### 前のトピックへ

[はじめに](https://docs.python.org/ja/3/library/intro.html)

### 次のトピックへ

[組み込み定数](https://docs.python.org/ja/3/library/constants.html)

### このページ

- [バグ報告](https://docs.python.org/ja/3/bugs.html)
- [ソースの表示](https://github.com/python/cpython/blob/main/Doc/library/functions.rst)

«

- [索引](https://docs.python.org/ja/3/genindex.html)
- [モジュール](https://docs.python.org/ja/3/py-modindex.html) |
- [次へ](https://docs.python.org/ja/3/library/constants.html) |
- [前へ](https://docs.python.org/ja/3/library/intro.html) |
- 
    
    ![https://docs.python.org/ja/3/_static/py.svg](https://docs.python.org/ja/3/_static/py.svg)
    
- [Python](https://www.python.org/) »
- EnglishSpanishFrenchJapaneseKoreanBrazilian PortugueseTurkishSimplified ChineseTraditional Chinese
    
    dev (3.13)3.12.03.113.103.93.83.73.63.53.43.33.23.13.02.72.6
    
- 
- [3.12.0 Documentation](https://docs.python.org/ja/3/index.html) »
- [Python 標準ライブラリ](https://docs.python.org/ja/3/library/index.html) »
- [組み込み関数](https://docs.python.org/ja/3/library/functions.html)
- |
- Theme  Auto Light Dark  |

© [Copyright](https://docs.python.org/ja/3/copyright.html) 2001-2023, Python Software Foundation.This page is licensed under the Python Software Foundation License Version 2.Examples, recipes, and other code in the documentation are additionally licensed under the Zero Clause BSD License.See [History and License](https://docs.python.org/license.html) for more information.The Python Software Foundation is a non-profit corporation. [Please donate.](https://www.python.org/psf/donations/)最終更新: Dec 03, 2023 (11:37 UTC) [Found a bug](https://docs.python.org/bugs.html)?Created using [Sphinx](https://www.sphinx-doc.org/) 4.5.0.

No definition found.

[Search the web for "a abs() aiter() all() anext() any() ascii() b bin() bool() breakpoint() bytearray() bytes() c call" »](https://www.google.com/search?q=a%0Aabs()%0Aaiter()%0Aall()%0Aanext()%0Aany()%0Aascii()%0A%0Ab%0Abin()%0Abool()%0Abreakpoint()%0Abytearray()%0Abytes()%0A%0Ac%0Acall)