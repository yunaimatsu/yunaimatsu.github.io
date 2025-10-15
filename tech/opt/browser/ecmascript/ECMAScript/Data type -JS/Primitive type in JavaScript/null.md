# null

Literal(How to write data types in source code.): null
Value: Null value: Represents an empty (non-existent) value.
型変換: = null;

Explicitly indicates that it does not hold a reference, or that the contents of the variable are empty.

![Screenshot 2024-09-01 at 17.12.34.png](null%20a6a03d3576fe44f4a03a09313b7f98a6/Screenshot_2024-09-01_at_17.12.34.png)

- `typeof null`
    
    NetscapeのJavaScriptでは、`typeof null === 'object'`となるバグがあった。
    
    しかし、このバグを修正するとJavaScriptコードに影響が出るため修正が見送られ、現在の挙動(typeof nullがobjectを返す)使用になっています。
    
    This is a known quirk in JavaScript.