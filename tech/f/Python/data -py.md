# data -py

### combine str

**python**

```python
s = 'aaa' + 'bbb' + 'ccc'
```

- **process of data**
    - posession of data
        - 配列
            
            n次元配列。ベクトル。線形代数復習。
            
        - リスト
            
            数珠繋ぎで管理。
            
            データ：ポインタ
            
            ポインタの中にメモリアドレス。ハードやらな。
            
        - キュー・スタック
            
            キュー：FIFO
            
            スタック：LIFO
            
        - 木構造
            
            graph theory
            
            - 完全二分木
                
                それぞれ2つの子。
                
            - 二分探索木
                
                左の子<親<右の子
                
            - ヒープ木
                
                [親<子]が常に成立
                
                or
                
                [子<親]が常に成立
                
    - search of data
        - 線形探索法
            
            前から順々にチェックしていく。
            
        - 2分探索法
            
            昇順・降順
            
    - organization of data

“文字列”

変数を埋め込みたいところに{変数}

埋め込み→f”もじれつ”

**primitive↔key-value set**

[primitive](data%20-py%204dc23cd70cfc48d0bc9aee06a9266b8a/primitive%201f0474cff2ca46ec874aaad2f0653d94.md)

[key-value set](data%20-py%204dc23cd70cfc48d0bc9aee06a9266b8a/key-value%20set%20a10807cb015e41bf8dc6a318bf40856d.md)

Dynamic typing or Static typing

[Variable Declaration](data%20-py%204dc23cd70cfc48d0bc9aee06a9266b8a/Variable%20Declaration%20b444c2c83cbc4044b6e3f0019013ea73.md)

[opration of data-collection](data%20-py%204dc23cd70cfc48d0bc9aee06a9266b8a/opration%20of%20data-collection%20257404afabcf4c568083bcf93cf9dc35.md)

**Dynamic**

js, 🐍, 

**Static**

c(c++), ts, ☕:c#

[evaluation of value](data%20-py%204dc23cd70cfc48d0bc9aee06a9266b8a/evaluation%20of%20value%208c31a2361cd34b2a9229d1f4691e7aac.md)

## **data_type and data_structure**

- newly define
- delete
- add
- pick up

<aside>
📖 【鉄則】情報工学において、数の数え方は0,1,2,3,4,…

</aside>

```python
### 1.1 define a new list
### list_name = [element, element, ...(empty-possible)]
		list_a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		list_b = []

### 1.2 enter a
### list_name = [a-1:b] → a, ..., b
list_c = a[1:5]
print(list_c)
#returns [2, 3, 4, 5]

### 1.3 
```

```python
### 1.1 define a new dictionary 
### dictionary_mame = {key:value, key:value, ...}

dict = {"apple":1, "orange":2, "banana":3}

### 1.2 enter a key and return the corresponding value
### dictionary_name[key]

dict["apple"]
var = dict["apple"]
print(var)
# ->returns 1

### 1.3.1 add a new key [dict_name]

dict["peach"] = 4
print(dict)

### 1.3.2 add a new value

dict = {"apple":1, "orange":2, "banana":3}
dict.setdefault("peach", 4)
print(dict)

### 1.4 add a dictionary within a dictionary [dictionary1]

dict_A = {"apple":1, "orange":2, "banana":3}
dict_B = {"peach":4, "cherry":5, "melon":6}
dict_A["dict"] = dict2
print(dict1)

# ------------------------------------------------------
# ------------------------------------------------------

### 2.1 keys method ["key_name" in dictionary_name.keys()]

print("orange" in mydict.keys())
# returns "true"
print("grape" in mydict.keys())
# returns "false"

### 2.2 values method ["key_name" in dictionary_name.values()]

print("2" in mydict.values())
# returns "true"
print("100" in mydict.values())
# returns "false"
```

```python
### 波括弧で辞書を空にする
dict1 = {'Apple':100, 'Banana':200, 'Grape':500}
dict2 = dict1
print(dict1)
#　{'Apple': 100, 'Banana': 200, 'Grape': 500}
print(dict2)
# {'Apple': 100, 'Banana': 200, 'Grape': 500}

dict1 = {}
print(dict1)
# { }
print(dict2)
# {'Apple': 100, 'Banana': 200, 'Grape': 500}

### clearメソッドで辞書を空にする
dict1 = {'Apple':100, 'Banana':200, 'Grape':500}
dict2 = dict1
print(dict1)
#　{'Apple': 100, 'Banana': 200, 'Grape': 500}
print(dict2)
# {'Apple': 100, 'Banana': 200, 'Grape': 500}

dict1.clear()
print(dict1)
# { }
print(dict2)
# { }
```

プリミティブ型

各言語にデフォルトで登録されているデータ型の内、基本的だと見なされるもの。

Javaにおいて、

int型は整数を入れられるだけ→プリミティブ型である。

integer型は整数を入れられる以外にも色々できる→プリミティブ型ではない。

- **list_of_data-type**
    - 数値型
    - 関数型
    - 整数型
    - byte
    - short
    - int
    - long
    - 浮動小数点数型
    - float
    - double
    - 文字列型
    - string
    - char
    - 真偽値型
    - boolean
    - オブジェクト型
    - object
    - class
    - 配列型
    - array
    - ポインタ型pointer
    - 列挙型（enum）
    - 構造体型（struct）
    - 共用体型（union）
    - void型ヌルポインタ型
    - ヌルポインタ型：ポインタ型のうち、値がNULLであるものです。NULLは、何も指していないことを表します。
    - 可変長引数型
    可変長引数型：関数の引数に、個数が決まっていない引数を指定するためのデータ型です。C言語やC++などで使われます。
    - 文字型
    文字型：char型があります。文字列型と同じように1つの文字を表現することができますが、文字列型とは異なり、1文字しか格納することができません
    - ファイル型
    ファイル型：ファイルを操作するためのデータ型です。C言語などで使われます。
- Primitive -immutable
    - [文字列](https://developer.mozilla.org/ja/docs/Glossary/String)
    - [数値](https://developer.mozilla.org/ja/docs/Glossary/Number)
    - [長整数](https://developer.mozilla.org/ja/docs/Glossary/BigInt)
    - [論理値](https://developer.mozilla.org/ja/docs/Glossary/Boolean)
    - [undefined](https://developer.mozilla.org/ja/docs/Glossary/Undefined)
    - [シンボル](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
    - [null](https://developer.mozilla.org/ja/docs/Glossary/Null)
- Object -mutable
    
    collection of properties {key:value}
    
    object_name = {key: value}
    
    new Object{key: value}
    
    objectは設計図。newでインスタンスを作って使う→クラスみたい。
    
    - function
        
        `()`をつけると呼び出せる
        
        我々が関数と思っているものは、厳密には**関数が入った変数**
        
        関数定義とは、新しい関数を作り、それを変数に入れる作業
        
    - 

[Objects of JS](data%20-py%204dc23cd70cfc48d0bc9aee06a9266b8a/Objects%20of%20JS%20aa387e4ad13b42d0ac6a8a91246bca7d.md)

An object is a property, i.e., a set of key (string or Symbol) and value (any data) properties. 

1つのオブジェクトは複数のプロパティを持てるため、1つのオブジェクトで多種多様な値を表現できます。

今までも登場してきた、配列や関数などもオブジェクトの一種です。 JavaScriptには、あらゆるオブジェクトの元となる`Object`というビルトインオブジェクトがあります。 ビルトインオブジェクトは、実行環境にあらかじめ定義されているオブジェクトのことです。 というビルトインオブジェクトはECMAScriptの仕様で定義されているため、あらゆるJavaScriptの実行環境で利用できます。

この章では、オブジェクトの作成や扱い方、`Object`というビルトインオブジェクトについて見ていきます。

**[コラム] `const`は定数ではない**

`const`は「再代入できない変数」を定義する変数宣言であり、必ずしも定数を定義するわけではありません。 定数(一度定義した名前（変数名）が常に同じ値を示すもの)

JavaScriptでも、`const`宣言によって定数に近い変数を定義できます。 次のように、宣言によって定義した変数を、変更できないプリミティブな値で初期化すれば、それは実質的に定数です。 プリミティブな値とは、数値や文字列などオブジェクト以外のデータです（詳細は「[データ型とリテラル](https://jsprimer.net/basic/data-type/)」の章で解説します）。

```
// TEN_NUMBERという変数は常に10という値を示す
const TEN_NUMBER = 10;
```

しかし、JavaScriptではオブジェクトなども`const`宣言できます。 次のコードのように、オブジェクトという値そのものは、初期化したあとでも変更できます。

```
// `const`でオブジェクトを定義している
const object = {
    key: "値"
};
// オブジェクトそのものは変更できてしまう
object.key = "新しい値";

```

このように、`const`で宣言した変数が常に同じ値を示すとは限らないため、定数とは呼べません （詳細は「[オブジェクト](https://jsprimer.net/basic/object/#const-and-object)」の章で解説します）。

また`const`には、変数名の命名規則はなく、代入できる値にも制限はありません。 そのため、宣言の特性として「再代入できない変数」を定義すると理解しておくのがよいでしょう。