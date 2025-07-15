# opration of data-collection

定義する方法

参照する方法

編集（追加・削除）

# define

| array | use as a variable multiple values of same type |
| --- | --- |
| list | use as a variable multiple values of same type
and
can be easily modified and deleted |

### js(no distinguishment between array and list

JSは**配列とオブジェクト**です。

インデックスをキーにして、その要素を参照、代入

オブジェクト(連想配列orハッシュ)は**プロパティ（property:属性）**を元に参照・代入

プロパティ（次章で詳しく説明します）と値をコロン(:)でつないだ組み合わせ

カンマ区切りで列挙、全体を波括弧({ })で囲むことで表現します

この表記方法を、**オブジェクトリテラル**といいます。

![Untitled](opration%20of%20data-collection%20257404afabcf4c568083bcf93cf9dc35/Untitled.png)

```jsx
/*
1. 
can contain a mix of different data types
*/
// array-constructor
const arrayConstructor = new Array('リンゴ', 'バナナ', 'イチゴ');

// array-literal
const array = ['リンゴ', 'バナナ', 'イチゴ'];

console.log( array1 );
console.log( array2 );	

/*
2. typed-arrays
cannot obtain
*/
```

**resizable**

When those characteristics are undesirable, use [typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays) instead.)

array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.

typed arrays

### ☕

```java
List<string> list = new ArrayList<string>(){
    {
         add("Apple");
         add("Orange");
         add("Melon");
    }
};
</string></string>
```

# refer

```jsx
/*
refer to the property
ブラケット記法は、プロパティ名に変数を与えることができます。ループなど動的にプロパティ名を変更したい場合
ドット記法ではできません。
*/

	// dot notation
	object_name.property_name

	// barket noation
	object_name['property_name']

// add a new element
	// dot notation
	object_name.property_name = new_key

	// braket noation
	object_name['property_name'] = new_key

// delete element
	delete varibale_name.property_name;
```

# edit(add/delete)

| push | add element to array |
| --- | --- |
| splice | delete element of array |
|  |  |