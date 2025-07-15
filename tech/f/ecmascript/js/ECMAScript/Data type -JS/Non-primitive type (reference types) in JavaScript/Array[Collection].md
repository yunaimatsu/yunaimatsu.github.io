# Array[Collection]

Executable: No

1. A special type of object used for storing ordered collections of values.
2. 値のみ。オブジェクトはプロパティ（キーとバリュー）で格納する。
3. 値に対応した添え字（インデックス）が0から順に振られる。 
4. You can add any type of data inside `Array`

# Initialization

`[ 1, 2, 3, 4, 5 ]`

## Literal

```jsx
const myArray = [ "value1", "value2", "value3", ...];

// 空の配列を作ることも可能
const myEmptyArray = [];

// 配列の中に配列を入れることも可能
const myComplexArray = [
	[ "value00", "value01", "value02", ...],
	[ "value10", "value11", "value12", ...],
	[ "value20", "value21", "value22", ...],
	...
	[ "valueN0", "valueN1", "valueN2", ...] // No comma (`,`) is needed after the last array element.
]
```

## `new Array();`

### 1 parameter

```jsx
const myArray = new Array(arrayLength);
```

### Multiple parameters

```jsx
const myArray = new Array("value0", "value1", "value2", ...);
```

# Manipulation

## Obtain

多層階層を成した場合

### Dot notation

```jsx
myArray.property1
```

### Bracket notation

```jsx
myArray["property1"]
```

### Obtain an element of array

```jsx
console.log(myArray[indexNumber]);
console.log(myEmptyArray);
console.log(myComplexArray[indexNumber][indexNumber]);
```

- Example
    
    ```jsx
    const fruits = ["banana", "orange", "grape"];
    
    console.log(fruits[0]);
    // "banana"
    
    console.log(fruits[1]);
    // "orange"
    
    console.log(fruits[2]);
    // "grape"
    ```
    

### Obtain all elements of array

```jsx
console.log(myArray);
```

- Example
    
    ```jsx
    const fruits = ["banana", "orange", "grape"];
    
    console.log(fruits);
    // 0: "banana"
    // 1: "orange"
    // 2: "grape"
    ```
    

## Edit(Change)

```jsx
console[indexNumber] = "newValue";
```

## Add

```jsx
const myArray = [ "value0", "value1", "value2", ...];
myArray.push("newValue");
```

## Delete

# Methods