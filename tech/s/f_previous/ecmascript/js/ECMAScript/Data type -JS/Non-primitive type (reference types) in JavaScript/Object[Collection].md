# Object[Collection]

Executable: No

Object: A container for key-value pairs.

`{
    key0: "value0",
    key1: "value1",
    key2: "value2",
    ...
    keyN: "valueN"
}`

- The base type for all non-primitive data types.
- It can store collections of data and more complex entities.

- Memory
    
    変数を管理する入れ物のようなもの。変数宣言では変数ごとに値の場所（アドレス）を管理していた。オブジェクトでは複数の値を一つのまとまり（構造体）として管理できる。
    
    ![Screenshot 2024-09-01 at 18.13.16.png](Object%5BCollection%5D%20df1ac27007f84c68be6cac12b06e8f0a/Screenshot_2024-09-01_at_18.13.16.png)
    

### Object

- **Initialize(Define)**
    
    To use object, we need to initialize(enable function available) object.
    
    ```jsx
    let myObject = {
    	myKey1: "myValue1",
    	myKey2: "myValue2",
    	myKey3: "myValue3",
    };
    
    console.log(myObject);
    console.log(myObject.myKey1);
    console.log(myObject["myKey1"]);
    ```
    
    ![Screenshot 2024-09-01 at 17.56.01.png](Object%5BCollection%5D%20df1ac27007f84c68be6cac12b06e8f0a/Screenshot_2024-09-01_at_17.56.01.png)
    
    As for key name, we don’t necessarily encompass with quotes as long as it conforms to valid identifier naming rules
    
    ```jsx
    let person = {
      "full name": "Alice Smith", // Spaces require quotes
      "age#": 25, // Special characters require quotes
      "1stLanguage": "English" // Starting with a number requires quotes
    };
    ```
    
- **Obtain(Display)**
    
    ```jsx
    console.log(myObject.myKey1);
    console.log(myObject["myKey1"]);
    ```
    
    ![Screenshot 2024-09-01 at 18.26.14.png](Object%5BCollection%5D%20df1ac27007f84c68be6cac12b06e8f0a/Screenshot_2024-09-01_at_18.26.14.png)
    
    - Notation
        
        Property names (keys) are typically treated as strings, even though they are not explicitly written with quotes in this object literal syntax.
        
        変数・定数をオブジェクトの中のキーに組み込む、或いはプロパティの指定に変数を使用する場合は**Bracket notation**を、他の場合は簡潔に書ける**Dot notation**で書ける。
        
        ES6から
        
- **Edit(Change)**
    
    オブジェクト名・キー名を編集（`=`の機能を使っているだけ。）
    
    ```jsx
    myObject.newKey = myObject.myKey1;
    myObject[newKey] = myObject.myKey1;
    
    // `=` takes right operand and assigns it to left operand.
    ```
    
    値を編集
    
    ```jsx
    myObject.myKey1 = "newValue1";
    myObject["myKey1"] = "newValue1";
    
    console.log(myObject);
    console.log(myObject.myKey1);
    console.log(myObject["myKey1"]);
    ```
    
    ![Screenshot 2024-09-01 at 18.06.24.png](Object%5BCollection%5D%20df1ac27007f84c68be6cac12b06e8f0a/Screenshot_2024-09-01_at_18.06.24.png)
    
- **Add**
    
    ```jsx
    myObject.newKey = "newValue";
    myObject["newKey"] = "newValue";
    
    console.log(myObject);
    console.log(myObject.myKey1);
    console.log(myObject["myKey1"]);
    ```
    
    ![Screenshot 2024-09-01 at 18.07.29.png](Object%5BCollection%5D%20df1ac27007f84c68be6cac12b06e8f0a/Screenshot_2024-09-01_at_18.07.29.png)
    
- **Delete**
    
    ```jsx
    delete myObject.myKey1;
    delete myObject["myKey1"];
    
    console.log(myObject);
    console.log(myObject.myKey1);
    console.log(myObject["myKey1"]);
    ```
    
    ![Screenshot 2024-09-01 at 18.39.31.png](Object%5BCollection%5D%20df1ac27007f84c68be6cac12b06e8f0a/Screenshot_2024-09-01_at_18.39.31.png)
    
    ![Screenshot 2024-09-01 at 18.38.55.png](Object%5BCollection%5D%20df1ac27007f84c68be6cac12b06e8f0a/Screenshot_2024-09-01_at_18.38.55.png)
    

### **Method(Subset of Object)**

- **Initialize(Define)**
    
    ```jsx
    let myObject = {
    	myFunction: function([parameter]){
    		// Processing
    	}
    };
    ```
    
- **Execute**
    
    ```jsx
    myObject.myFunction("parameter");
    ```
    
- **Edit(Change)**
    
    ```jsx
    myObject.myFunction = function(){};
    ```
    
- **Add**
    
    ```jsx
    myObject.newFunction = function(){};
    ```
    
- **Delete**
    
    ```jsx
    delete myObject.myFunction;
    delete myObject["myFunction"];
    ```
    

---

- Omitted Syntax(Although available from ES6, it is rarely used)
    1. You can omit operator `function`
    
    ```jsx
    // Instead of writing this
    let myObject = {
    	myFunction: function([parameter]){
    		// Processing
    	}
    };
    
    // You can write
    let myObject = {
    	myFunction(){
    		// Processing
    	}
    };
    
    let myVariable = "myValue";
    function myFunction(){
    	// Processing
    };
    ```
    
    1. Use identifiers (variable names or constant names) directly as property names.
    
    ```jsx
    // Instead of writing this
    const obj = { val: val, fn: fn };
    
    // You can write
    const obj = { val, fn };
    ```
    

[Built-in object](Object%5BCollection%5D%20df1ac27007f84c68be6cac12b06e8f0a/Built-in%20object%2071526c5d4bc3489fa7515f14d1ae7378.md)