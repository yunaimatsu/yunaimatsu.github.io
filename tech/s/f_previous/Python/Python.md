# Python

店舗会員番号は、パスワードはhankakieisuujijato999です。（管理番号27287902）

```python
my_var = my_array.split()
```

- 目的と手段を混同するな
    
    俺の目的、人生を豊かにする為に雑務をしないこと。プログラミングを学ぶ時間は無駄だ。速くマスターせねば。
    

雑務リスト

- データ加工
- excelより軽いデータ処理
- 

# general syntax

- `with`
    
    プログラム内で…
    
    `ファイル操作`や`通信`
    
    → `Pre-processing at start`/`post-processing at end` required
    
    open, close of file
    
    connect and disconnect databases
    
    Automatic post-processing after the main process in a block is completed
    
    with文は、特定のコンテキスト内で使用されるオブジェクトに対して
    
    エントリとエグジットの処理を自動管理
    
    エグジット処理（後片付けなど）を手動で行わなければなりません。一般的に、tryおよびfinallyブロックを使用して、エグジット処理を確実に実行できます。以下は、with文を使わずにファイルの読み込みを行う例です：def process_file_without_with(file_path):    file = open(file_path, 'r')    try:        # ファイルの処理をここに記述        contents = file.read()        print(contents)    finally:        file.close()  # ファイルを手動でクローズ
    # 使用例file_path = 'example.txt'process_file_without_with(file_path)この例では、tryブロック内でファイルを処理し、finallyブロックでファイルを手動でクローズしています。ただし、with文を使う方がコードが簡潔でエラーが発生しにくいです。
    
    witとh文を使った処理と使わない場合の処理の違いを意識せよ
    
    ```python
    with open('test.txt', 'r') as file:
    		my_file = file.read()
    		print(my_file)
    
    with open('text.txt', 'w') as file
    		my_file = file.write('Hello, world!\n')
    		print(my_file)
    
    with open('example.txt', 'w') as file:
        file.write('Line 1\n')
        file.write('Line 2\n')
        file.write('Line 3\n')
    
    with open('example.txt', 'w') as file:
        # File is now empty
    # open 'test.txt', 'read', name it 'file', and (automatedly) close it
    
    with open('new_file.txt', 'w') as file:
        # Creates a new empty file named 'new_file.txt'
    
    with open('example.txt', 'w') as file:
        file.write('Hello, world!\n')
        file.flush()  # Flushes the buffer to ensure data is written immediately
    ```
    
    - `open(text, (mode))`
        
        ```python
        'r'
        # reading_mode: no file -> error
        
        'w'
        # writing_mode: no file -> create new, existing -> superscription
        
        'a'
        # adding_mode: no file -> create new
        
        'no 2nd_arg -> read mode.'
        ```
        
    
    ### **with文を使わない場合**
    
    with文を使わない場合、上記のファイル操作を例にするとvery complex
    

---

- pythonライブラリの整理方法
    
    また、pythonで、我々が基本GUIを通して触れるソフトをCUIで操作するライブラリがある。それらの整理の方法を以下に記述する。
    
    まず、そのソフトウェアにGUIでしっかり習熟すること。そして、専門用語や挙動をしっかりと身に着け、イメージができるようにしてからPythonで扱おう。また、MS Officeを始め、リボンやパネルが整然とした階層構造になっているGUIはとても整理しやすい。
    

### import

- そのファイルを実行した場合
- 他のファイルにimportされて実行する場合

このふたつを分ける方法

```python
if __name__ == "__main__"
		# processings done only when executed directly
```

### libraries

[numpy -python](Python%20eab45336292f407c91e1cad0aec7a612/numpy%20-python%209cc0d95eba7847deb627286eb7d74365.md)

[os -py](Python%20eab45336292f407c91e1cad0aec7a612/os%20-py%20ed2d557e6eec4727a4f77fe1ecd8a8c1.md)

[ms -py](Python%20eab45336292f407c91e1cad0aec7a612/ms%20-py%208a2a59cb9bde4cc09e33c0745a7fe7d1.md)

- attribute:data inisde class
- method:processing in class(argument necessary)
    
    <aside>
    🔒 必ず一つ目の引数にはselfと書く。渡したい引数がある場合は、(self, 引数1, 引数2, …, 引数n)とかく。)
    
    </aside>
    
    ```python
    def avg(self): 
    		print((80 + 70)/2)
    #これでは毎回メソッドを書かなければならない。
    #これを、引数を渡すことで計算できるようにしないといけない。するとクラスの書き換えは不要になり、クラスを使い回すことができる。
    
    ```
    
- variable: data outside class
- function: function outside class

These are executed only by being called.

## **control syntax**

at the end of conditional phrase, “:” is necessary.

### binary conditions

```python
if condition:
		# processing_1
else:
		# processing_2
```

### 3 or more conditions

```python
if condition_1:
		# processing_1

elif condition_2:
		# processing_2

else:
		# processing_3
```

### exception

Even if you write grammatically correct code, errors may occur at runtime.

```python
try:
		# A process that may pose an exception, but that you want to perform.

except error name:
    # Processing when an exception occurs.
```

### looping

とにかく1回目, 2回目, 3回目, …, k回目, …, n回目というプログラムに書き換えられて実行されることを忘れるな。

- **for**
    
    counting variable “i” is user-defined.
    
    ```python
    for i in array {
    		# Repeated processing
    }
    
    lang_list = ["en", "es", "fr", "ru", "ar", "ch"]
    
    for l in lang_list:
        print(l)
    
    for l in enumerate(lang_list):
        print(l)
        
    for i, l in enumerate(lang_list):
        print(i)
    ```
    
    - ex1 `in`の前の変数
        
        `in`の前の変数は定義なしに突然使ってOK.なんでもOK.
        
        そして、n回目の処理における`l`(in ex1.1)或いは`lang`(in ex1.2)はリストのn番目の要素を表す。
        
        ```python
        UN_official_languages = ["English", "French", "Spanish", "Arabic", "Russian", "Mandarin"]
        
        # ex1.1
        for l in UN_official_languages
        		print(l)
        
        # ex1.2
        for lang in UN_official_languages
        		print(lang)
        ```
        
    - ex2 `range()`
        
        ### range(i)
        
        ```python
        # ex2.1
        for num_1 in range(i)
        		print(num_1)
        
        # 0, 1, 2, 3, ..., i-1
        ```
        
        ### range(i, j)
        
        ```python
        # ex2.2
        for num_2 in range(i, j)
        		print(num_2)
        
        # i, i+1, i+2, i+3, ..., j-3, j-2, j-1
        ```
        
        ### range(i, j, k)
        
        ```python
        # ex2.3
        for num_3 in range(i, j, k)
        		print(num_3)
        
        # i, i+k, i+2k, i+3k, ..., i+nk, ..., j-1
        ```
        
    - ex3 `enumerate()`
        
        define a new list
        
        ```python
        lang_list = ["en", "es", "fr", "ru", "ar", "ch"]
        ```
        
        It only enumerates the elements of a conventional list.
        
        ```python
        for l in lang_list:
            print(l)
        ```
        
        `enumerate()` with 1 variable taken
        
        ```python
        for l in enumerate(lang_list):
            print(l)
        
        '''
        (0, 'en')
        (1, 'es')
        (2, 'fr')
        (3, 'ru')
        (4, 'ar')
        (5, 'ch')
        '''
        ```
        
        `enumerate()` with 2 variables taken
        
        ```python
        for i, l in enumerate(lang_list):
            print(i, l)
        
        '''
        0 en
        1 es
        2 fr
        3 ru
        4 ar
        5 ch
        '''
        ```
        
        ```python
        i = 0
        for d in my_array:
        print('ind:' + str(i) + 'elem:' + d
        i += 1
        ```
        
        ```python
        for i, d in enumerate(my_array):
        print('ind' + str(i) + 'ele' + d )
        ```
        
- **while**
    
    ```python
    while condition {
    		# Repeated processing
    }
    ```
    

iterable-data

|  |  |  |
| --- | --- | --- |
| List | [i, j, k] |  |
| Tuple | (i, j, k) |  |
| Set | {1, 2, 3} |  |
| Dict | {"key1": "value1", "key2": "value2"} |  |
| String | “” |  |
- 要素へのアクセスが可能
- , 不変
- , 順序なし
- Range
    
    range(5)のように範囲を生成します。
    

## built-in methods

[built-in methods](Python%20eab45336292f407c91e1cad0aec7a612/built-in%20methods%206e710ccda5d947549445c95816eb4a05.md)

- merging text
    
    
- zip()
    
    ```python
    list1 = [1, 2, 3]
    list2 = ['a', 'b', 'c']
    
    # zip()を使って2つのリストをペアごとにまとめる
    zipped = zip(list1, list2)
    
    # 結果をリストに変換して表示
    result = list(zipped)
    print(result)
    ```
    
    zipped自体はClnagで内部的に格納されている。
    
    ```python
    list1 = [1, 2, 3]
    list2 = ['a', 'b', 'c']
    
    # zip()を使って2つのリストをペアごとにまとめる
    zipped = zip(list1, list2)
    
    # zipped自体はClnagで内部的に格納されており、printなどで表示することはできない。
    
    # 結果をリストに変換して表示
    result = list(zipped)
    print(zipped)
    ```
    
- list()
- input()
    
    `input`関数は、デフォルトでstr型である。そのため、変数の説明関数として`input`関数を使用すると、str以外を待っている変数の場合エラーが起きる。よって以下のようにする。
    
    ```python
    newVariable = dataType(previousVariable)
    ```
    
    ```python
    my_rad_str = input("input your radius here: ")
    try:
        my_rad = float(my_rad_str)
        # ここでmy_radを使用して何かしらの処理を行う
        print(f"The entered radius is: {my_rad}")
    except ValueError:
        print("Error: Please enter a valid number.")
    ```
    
1. **Changes might not be saved:** If you have made any changes to the workbook or its sheets, they may n
2. ot be saved if you don't close the workbook. This could result in data loss or inconsistency.
3. **Resource leakage:** Failing to close a workbook could lead to resource leakage. Each open workbook consumes system resources, and if you have a large number of open workbooks without closing them, it could lead to performance issues or even program crashes.
4. **File locks:** Depending on the operating system and file system, not closing the workbook may leave the Excel file locked. This can prevent other processes or users from accessing or modifying the file until the lock is released.
5. **Unpredictable behavior:** Open workbooks hold various internal states and references. Failing to close them may lead to unpredictable behavior, especially if you attempt to open the same workbook again without closing the previous instance.

# data

### data_type

- str
    
    ```python
    s = 'aaa' + 'bbb' + 'ccc'
    print(s)
    # aaabbbccc
    
    s1 = 'aaa'
    s2 = 'bbb'
    s3 = 'ccc'
    
    s = s1 + s2 + s3
    print(s)
    # aaabbbccc
    
    s = s1 + s2 + s3 + 'ddd'
    print(s)
    # aaabbbcccddd
    ```
    
- list
    
    
- get index
    
    ```python
    my_index = my_list.index(element)
    ```
    

クラス

関数

```python

```

- **`return`文:**
    
    ### if **`return` were not to exsit…**
    
    ```python
    def add_numbers(a, b):
        a + b
    		# the above code isn't valid
    
    sum_result = add_numbers(5, 7)
    print(sum_result)
    
    # It returns "None"
    ```
    
    ![Untitled](Python%20eab45336292f407c91e1cad0aec7a612/Untitled.png)
    
    ```python
    def add_numbers(a, b):
        result = a + b
        return result
    
    sum_result = add_numbers(5, 7)
    print(sum_result)
    
    # It will return "12"
    ```
    
    上記の例では、`add_numbers`関数が計算した結果を`return`しています。その結果を`sum_result`に代入し、`print()`関数を使って表示しています。
    

簡単に言えば、`print()`は出力をターミナルに表示するために使い、`return`は関数から値を呼び出し元に返すために使います。同時に、関数内で計算された結果を呼び出し元で利用することができます。

関数は、クラスとインスタンスの関係の様に、呼び出すことで使えるようになる。

**r'\([^)]*\)'**

^)

`[^)]*` は文字クラスを表しています。文字クラスは、角かっこ `[ ]` 内の文字のいずれか一つに一致することを意味します。

先頭に`^`は否定、`[^)]` は閉じ括弧 `)` 以外の文字に一致します。

`*` 直前の文字クラス（または正規表現のパターン）が0回以上繰り返されることを示します。つまり、`[^)]*` は閉じ括弧 `)` 以外の文字が0回以上繰り返されるパターンを表します。

これを言葉で表現すると、「閉じ括弧 `)` 以外の文字が0回以上繰り返される」となります。つまり、この部分は括弧内の文字列に一致し、`()` 内のテキストを取り除くことができます。

例えば：

- `abc` → 一致なし
- `123` → 一致なし
- `)` → 一致なし
- `abc123` → `abc123`（閉じ括弧 `)` 以外の全ての文字に一致）
- `ab)c12(3` → `ab)c12(3`（閉じ括弧 `)` 以外の文字に一致）
- import
    
    ```python
    import aaa from AAA
    import aaa as 
    ```
    

# Class

クラス名の名前は大文字で始めよう

```python
class AAA:
	def 

```

- クラスは、インスタンスになって初めて使えるようになる。
    
    インスタンス化、オブジェクト化、オブジェクト生成
    
    ```python
    a001 = Student()
    #これで使えるようになった。クラスという型から、実際に使える実体にする、というイメージ。
    ```
    

dateとは、ラベルのこと。それぞれに実際の値valueがつく。

```python
class Student:
		def avg(self, math, english):
				print((math + english) / 2)
'''
Si indicas valor de nombre de parámetro, se define valor por defecto.
もしインスタンスが balance 引数を指定せずに作成される場合
balance のデフォルト値として 0 が使用されます。
'''
	def __init__(self, owner, balance=0):
	      self.owner = owner
        self.balance = balance

#"Student"というクラスの中身を定義する。
#まず、"avg"というmethod(クラス内の関数)を定義する。その関数は、"math", "english"という引数を使う。
#次に、その関数の実際の処理を定義する。ここでは、“math”と"english"を合計し、それを2で割り、それをprint(ターミナルに表示)する。

#classは、それだけでは単なる「型」であり、実はそのままでは使えない。それを実際に使える実体にする(=実体化、オブジェクト生成、オブジェクト化)
a001 = Student()
#a001という名前のconstructorは、Studentクラスのインスタンス（実際に使える形にしたもの）
#とりあえずインスタンスを作成するだけなら引数は空で良い。

#これで、まず、classを呼び出して使える形にした。
#instanceの名前はa001である。

#ただ、引数いれたらそのまま出力できる。
a002 = Student(93, 98)
#こんな感じ。

#ではここから、instanceにatribute(data in class)をつけていこう。 
#(2023/08/24: なぜインスタンスなのにattributeなの？？)
#まず、"name"というtypeの値を定義しよう。ここでは、{[a001というinstance]のname}は"sato"だ。
a001.name = "sato"
#試しにprint関数でinstance: a001のattribute: nameを出力しよう。
#すると"sato"とprintしてくれる。
print(a001.name)

#classという型をつくり、それをinstanceという具体物を作って処理していくという流れがわかったと思う。
#ではここから、instanceを大量生産していこう、となるのだが、その際、いちいちattribute(data in class)を定義していくのはしこたま面倒だ。
#そこで、constructorという機能を利用して楽をしよう。以下がその説明だ。
#constructorとは、実は、instanceを作るたびに毎回実行されているmethod(collection of proposal inside class)なのだ。
#実は、attribute(data inside class)をreconstructorというmethod(クラス内の処理の集合)を作る方法がある。
#では、実際にreconstructorの中身をイジるというイメージで「毎回instance(classを使えるようにしたもの)のattribute(classの中のdata のlabel)を定義する」という面倒な作業を自動化してしまおう。

#先ほどのclassの中身をここで再掲する。
class Student:
		def avg(self, math, english):
				print((math + english) / 2)
#ではいよいよ、コンストラクタ、リセット関数をいじるコードを紹介する。
#これに、"avg"関数同様にあたる"__init__"関数を作るイメージだ。
#この"__init__"という関数は、初期化関数専用で組み込み関数として予約されている。
class Student:
		def avg(self, math, english):
				print((math + english) / 2)

		def __init__(self):
				self.name = ""
#【翻訳】
#"__init__"という名前の関数、selfという引数を取る。
#その処理の中身は、self(インスタンスの名前).name(つまり変数[self.name])を""と定義する。
#メソッド（クラス内の処理の集合）なので、引数selfがいる。
#nameの値は空にしておいて、後からinstanceごとに代入することができる。

#---------------------------------------------------------------
#ここで一旦、わかりやすくするため、classとinstanceを並べて書いてみる。
	#【class】
class Student:
		def avg(self, math, english):
				print((math + english) / 2)
#【instance】
a001 = Student()
		def avg(self, math, english): 
				print((math + english) / 2)
#---------------------------------------------------------------

#結論から言うと、このselfとは、instanceの名前のことだったのだ！！

class Student:
		def avg(self, math, english):
				print((math + english) / 2)

		def __init__(self):
				self.name = ""

#selfにinstanceの名前を代入してみる。

class Student:
		def avg(a001, math, english): 
				print((math + english) / 2)
		def __init__(a001): 
				a001.name

#つまりは、classというのは事務所である。instanceを作ったら、実際にそこにclassのコピーができるのではない。
#というより、instanceを作ったらそこから都度都度classという事務所に関数セットをみしてもらいにいくのだ。
#その時、selfにinstanceの名前を代入すると、instanceごとに適切なデータを教えてくれる、というイメージだ

#これで、constructorをいじることで、instanceごとにattributeを定義しないでよくなった。
#では、実際に
```

```python
#Webアプリケーションを実装する時をイメージせよ。

def index():
		# トップページへ遷移する処理

def admin(): 
		# ログイン確認処理
		# 管理画面へ遷移する処理

def create_user():
		# ログイン確認処理
		# ユーザー作成画面へ遷移する処理

# ログイン確認処理は、メインじゃないが、複数の場面で共通して使う処理。
# これをまとめて処理するのがデコレータ

@login_required
def admin():
		# 管理画面へ遷移する処理

@login_required
def create_user():
			# ユーザー作成画面へ遷移する処理

# このように、関数が@の中身が必要だということが視覚的にもわかりやすくなった。

# ---------------------------------------------

def func1()
		print('Called func1!!')
#func1を定義した。

func1()
#func1を呼び出した。

#また新しい関数を作る
def func2(f)
#この引数はfunctionのf
		f()
#この関数の処理内容は、fというobjectを引数にとり、それを実行する。つまり、この引数は関数である前提なのだ。

# func1という関数が定義されているとしよう。
func2(func1)
# としたら、func1という関数の処理内容自体をobjectとして引数にしたことになる。
# それに対し、
func2(func1())
# とすると、func1を実行した結果をfunc2の引数として代入することになる。
```

- [Python] to place all imports in the beginning of the code
    
    for readability
    
    - もしライブラリをコードの中にバラバラに書いてたら、、、
        
        When you import a library within a function or block, the imported names are limited in scope to that function or block. This means they won't be accessible outside that scope.
        
        何度もインポートすると重くなる。