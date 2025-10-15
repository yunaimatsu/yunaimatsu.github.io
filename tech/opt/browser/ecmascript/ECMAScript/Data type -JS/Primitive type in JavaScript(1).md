Data Type,Value,Literal(How to write data types in source code.),Concatinate,型変換
String,"Text string: Enclosed in single quotes (' '), double quotes ("" ""), or backticks (` `).","‘’, “”, `` (ES6 and later. variables or constants can be inserted into `${ }`)
If the opening and closing quotes do not match, an error will occur.
シングルクォートやダブルクォートを文字列に含める時は、文字列に含めたいクォートの種類と別のクォートで全体を囲む。
もしダブルクォートの中でダブルクォートを文字として表示したい場合には、\を使う。",+を間につける,String()
Number,"Numeric value:
A number from ($-(2^{53}-1)$ to $(2^{53}-1)$ (integer or floating-point number).
$\text{Cf. }2^{53} - 1$ = $9007199254740991$.",Write the number as is.,,Number() (Error: NaN)
BigInt,Arbitrary-size integer.,Write a number followed by n.,,BigInt()
Boolean,True/false value.,true / false,,Boolean()
null,Null value: Represents an empty (non-existent) value.,null,,= null;
undefined,Undefined: Represents a value that is not defined.,,,= undefined;
Symbol,Symbol: A unique and immutable value.,,,Symbol()