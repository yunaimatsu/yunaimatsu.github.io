# Initialization

```jsx
class MyClass {
	constructor(myInput1, myInput2, myInput3){
		this.myKey1 = myInput1;
		this.mykey2 = myInput2;
		this.mykey3 = myInput3;
	}
	myMethod(myParam1, myParam2, myParam3){
		// Processing
	}
}
```

### Without class

```jsx
const John = {
	name: "John",
	password: "John-pwd", 
	age: 19, 
	login(){
		console.log(`Login[${this.username}/${this.password}]`);
	}
}

const Alice = {
	name: "Alice",
	password: "Alice-pwd", 
	age: 22,
	login(){
		console.log(`Login[${this.username}/${this.password}]`);
	}
}
```

### With class

```jsx
class User {
	constructor(username, password){
		this.username = username;
		this.password = password;
		this.age = age;
	}
	
	login(){
		console.log(`Login[${this.username}/${this.password}`]);
	}
}

const John = new User("John", "John-pwd", 19);
const Alice = new User("Alice", "Alice=pwd", 22);
```

The duplicate parts of the code are eliminated, making it easier to maintain.

Make it easier to create objects.

# Instantiation

```jsx
// With inputs
const myInstanceObject = new MyClass(input1, input2, input3, ..., inputN);

// No inputs
const myInstanceObject = new MyClass;
```

1. By adding `new`, `constructor` is executed.
2. After executing `constructor` function, `this` would be returned as an output of `new` operator.
3. Constructor
    1. `this.prop`
    2. console.log(obj.prop);