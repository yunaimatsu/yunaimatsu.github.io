Operator,Description,Precedence,Associativity,Type
(...),Grouping,21,None,
new ... ( ... ),new (with argument list),20,None,
... . ...,Member Access,20,Left to Right,Data Type
?.,Optional Chaining,20,Left to Right,"After ES6, Data Type"
... [ ... ],Computed Member Access,20,Left to Right,Data Type
... ( ... ),Function Call,20,Left to Right,
new ...,new (without argument list),19,Right to Left,
... ++,Postfix Increment,18,None,Arithmetic
... --,,18,None,Arithmetic
await ...,await,17,Right to Left,
++ ...,Prefix Increment,17,Right to Left,Arithmetic
! ...,Logical NOT,17,Right to Left,Unary
delete ...,Delete propety of object,17,Right to Left,Unary
typeof ...,Check the data type of value,17,Right to Left,Unary
- ...,"Converts data of any type into a numeric data type
Then changes the sign to negative",17,Right to Left,Unary
~ ...,Bitwise NOT,17,Right to Left,Bitwise Operation
void ...,void,17,Right to Left,
-- ...,Prefix Decrement,17,Right to Left,Arithmetic
+ ...,Converts data of any type into a numeric data type,17,Right to Left,Unary
... ** ...,,16,Right to Left,Arithmetic
... % ...,Modulo,15,Left to Right,Arithmetic
... * ...,,15,Left to Right,Arithmetic
... / ...,,15,Left to Right,Arithmetic
... - ...,,14,Left to Right,Arithmetic
... + ...,,14,Left to Right,Arithmetic
... >> ...,Right Bitwise Shift,13,Left to Right,Bitwise Operation
... << ...,Left Bitwise Shift,13,Left to Right,Bitwise Operation
... >>> ...,Unsigned Right Bitwise Shift,13,Left to Right,Bitwise Operation
... instanceof ...,instanceof,12,Left to Right,
... in ...,あるプロパティがあるオブジェクトのsubsetであることの確認,12,Left to Right,Relational
... >= ...,Greater Than or Equal,12,Left to Right,Relational
... > ...,Greater Than,12,Left to Right,Relational
... < ...,Less Than,12,Left to Right,Relational
... <= ...,Less Than or Equal,12,Left to Right,Relational
... === ...,Strict Equality,11,Left to Right,Equality
... !== ...,Strict Inequality,11,Left to Right,Equality
... == ...,Equality,11,Left to Right,Equality
... != ...,Inequality,11,Left to Right,Equality
... & ...,Bitwise AND,10,Left to Right,Bitwise Operation
... ^ ...,Bitwise XOR,9,Left to Right,Bitwise Operation
|...,Bitwise OR,8,Left to Right,Bitwise Operation
... && ...,Logical AND,7,Left to Right,Logic
… || ...,Logical OR,6,Left to Right,Logic
"... ?? ... ",Nullish Coalescing,5,Left to Right,After ES6
... ? ... : ...,Conditional,4,Right to Left,Ternary
…??=…,Self-assignment,3,Right to Left,"After ES6, Assignment"
…||=…,Assignment,3,Right to Left,"Assignment, Logic"
…&&=…,Assignment,3,Right to Left,"Assignment, Logic"
…|=…,Assignment,3,Right to Left,"Assignment, Bitwise Operation"
... ^= ...,Assignment,3,Right to Left,"Assignment, Bitwise Operation"
... &= ...,Assignment,3,Right to Left,"Assignment, Bitwise Operation"
... >>>= ...,Assignment,3,Right to Left,"Assignment, Bitwise Operation"
... >>= ...,Assignment,3,Right to Left,"Assignment, Bitwise Operation"
... <<= ...,Assignment,3,Right to Left,"Assignment, Bitwise Operation"
... %= ...,Assignment,3,Right to Left,Assignment
... /= ...,Assignment,3,Right to Left,Assignment
... *= ...,Assignment,3,Right to Left,Assignment
... **= ...,Assignment,3,Right to Left,Assignment
... -= ...,Assignment,3,Right to Left,Assignment
... += ...,Assignment,3,Right to Left,Assignment
... = ...,Assignment,3,Right to Left,Assignment
yield ...,yield,2,Right to Left,
yield* ...,yield*,2,Right to Left,
"... , ...",Comma/Sequence,1,Left to Right,Comma