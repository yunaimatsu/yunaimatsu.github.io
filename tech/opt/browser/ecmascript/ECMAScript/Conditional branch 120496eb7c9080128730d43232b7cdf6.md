# Conditional branch

# **1. Define processing only for true condition**

Even if the condition is false, it will not result in an exception.

```mermaid
graph LR
    Start((Start))
    Condition{"if (condition)"}
    TrueBranch["Execute if block"]
    NoAction["Proceed to the next process without executing anything"]
    End((End))

    Start --> Condition
    Condition -- truthy --> TrueBranch
    Condition -- falsy --> NoAction
    TrueBranch --> End
    NoAction --> End
```

```jsx
if(){
	// Execute
}
```

# 2. Define processing for both true and false conditions

```mermaid
graph LR
    Start((Start))
    Condition{"if (condition)"}
    TrueBranch["Execute <code>if</code> block"]
    FalseBranch["Execute <code>else</code> block"]
    End((End))

    Start --> Condition
    Condition -- truthy --> TrueBranch
    Condition -- falsy --> FalseBranch
    TrueBranch --> End
    FalseBranch --> End
```

notations

## **2.1. Block notation (standard `if-else`)**

```jsx
if(){
	// Process for `true`
} else {
	// Process for `false`
}
```

- Ex
    
    ```jsx
    let perfectLang = "TypeScript";
    if(perfectLang === "TypeScript"){
    	console.log("You're correct.")
    } else {
    	console.log("You're wrong.")
    }
    ```
    

## **2.2. Inline notation (shorthand `if-else`)**

```jsx
if()
	// Process for `true` (only 1 line)
else
	// Process for `false` (only 1 line)
	// Process executed always (Lines from the second onward are always executed regardless of the condition's boolean value.)
```

- Ex
    
    ```jsx
    let perfectLang = "TypeScript";
    
    if(perfectLang === "TypeScript")
    	console.log("You're correct.");
    else
    	console.log("You're wrong.");
    ```
    

## **2.3. Ternary operator**

[`... ? ... : ...`](Operator%20-JS%20a1a88ba237a54b0b9d4be396649950d8/%5BExported%5DJavaScript%20Operator%20eb8d7ea1b75c4645ababc6409b9ff190%20ddbe88b54fd543b29afb32ba04a23724.md)

```jsx
let greeting = (perfectLang === "TypeScript") ? console.log("You're correct") : console.log("You're wrong");
```

- Ex
    
    ```jsx
    let myFavoriteLanguage = "JavaScript";
    let useHotLanguage = myFavoriteLanguage === "JavaScript"?console.log("You're stupid."):console.log("You're correct.");
    console.log(useHotLanguage);
    
    // You're stupid.
    // undefined
    ```
    
- **1.2.4. if-sentence without operators**
    
    check wether the conditional sentence is truthy or faulsy
    
    ```jsx
    let (condition){
      console.log("Truthy!");
    } else {
      console.log("Faulsy!");
    }
    ```
    

# 3. Conditional branching with more than two options

```mermaid
graph LR
	s((Start))
	c1{"c1: Is it p1?"}
	c2{"c2: Is it p2?"}
	c3{"c3: Is it p3?"}
	c4{"c4: Is it p4?"}
	c5{"c5: Is it p5?"}
	e((End))
	
	s --> c1
	c1 -->|Yes| p1
	c1 -->|No| c2

	c2 -->|Yes| p2
	c2 -->|No| c3
	
	c3 -->|Yes| p3
	c3 -->|No| c4
	
	c4 -->|Yes| p4
	c4 -->|No| c5
	
	c5 -->|Yes| p5
	c5 -->|No| e
	
	p1 --> e
	p2 --> e
	p3 --> e
	p4 --> e
	p5 --> e
```

```mermaid
graph LR
    Start((Start))
    Condition1{"if (condition)"}
    Condition2{"else if (condition)"}
    TrueBranch1["Execute if block"]
    TrueBranch2["Execute else if block"]
    NoAction["Proceed to the next process without executing anything"]
    End((End))

    Start --> Condition1
    Condition1 -- truthy --> TrueBranch1
    Condition1 -- falsy --> Condition2
    Condition2 -- truthy --> TrueBranch2
    Condition2 -- falsy --> NoAction
    TrueBranch1 --> End
    TrueBranch2 --> End
    NoAction --> End

```

## 3.1. Nested `if-else`

```jsx
if(firstCondition){
	// Process for true
} else if(secondCondition) {
	// Process for true
}
```

We can nest more `else` tags at the end

```jsx
if(firstCondition){
	// Process for true
} else if(secondCondition) {
	// Process for true
} else {
	// Process for both false
}
```

and more conditions

さまざまな条件が並列になっているように見えるが、実際はfaulsyだった処理のブロックの入れ子が続いていつのだ。

```jsx
if(firstCondition){
	// Process for true
} else if(secondCondition) {
	// Process for true
} else if(thirdCondition) {
	// Process for true
} else if(fourthCondition) {
	// Process for true
} else if(fifthCondition) {
	// Process for true
} else if(sixthCondition) {
	// Process for true
} else if(seventhCondition) {
	// Process for true
} else if(eighthCondition) {
	// Process for true
} else if(ninthCondition) {
	// Process for true	
} 
```

## 3.2. `switch`

### 3.2.1. strict `break`

```mermaid
graph LR
    S((Start))
    C1{"case1"}
    C2{"case2"}
    E1["Execute case1 block"]
    E2["Execute case2 block"]
    ED["Execute default block"]
    E((End))

    S --> C1
    C1 -- true --> E1
    C1 -- false --> C2
    E1 -- break --> E
    C2 -- true --> E2
    C2 -- false --> ED
    E2 -- break --> E
    ED --> E
```

```jsx
switch(myVariable){
  case "myValue1": // if(myVariable === "myValue1")
    // Process1
    break;
  case "myValue2": // if(myVariable === "myValue2")
    // Process2
    break;
  case "myValue3": // if(myVariable === "myValue3")
    // Process3
    break;
  
  ...
  
  case "myValueK": // if(myVariable === "myValueK")
    // ProcessK
    break;
  
  ...
  
  default "myValueN": // if(myVariable === "myValueN")
    // ProcessN
}
```

### 3.2.2. no `break` (not recommended/fall-through)

```mermaid
graph LR
    S((Start))
    C1{"case1"}
    C2{"case2"}
    E1["Execute case1 block"]
    E2["Execute case2 block"]
    ED["Execute default block"]
    E((End))

    S --> C1
    C1 -- true --> E1
    C1 -- false --> C2
    E1 -- no break --> E2
    C2 -- true --> E2
    C2 -- false --> ED
    E2 -- no break --> ED
    ED --> E
```

```jsx
switch(myVariable){
  case "myValue1": // if(myVariable === "myValue1")
    // Process1
  case "myValue2": // if(myVariable === "myValue2")
    // Process2
  case "myValue3": // if(myVariable === "myValue3")
    // Process3
  
  ...
  
  case "myValueK": // if(myVariable === "myValueK")
    // ProcessK
  
  ...
  
  default "myValueN": // if(myVariable === "myValueN")
    // ProcessN
}
```