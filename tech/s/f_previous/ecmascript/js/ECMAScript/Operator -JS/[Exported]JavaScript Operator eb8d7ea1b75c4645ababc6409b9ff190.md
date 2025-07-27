Operator,Precedence,Associativity,Type
(...),21,None,
new ... ( ... ),20,None,
... . ...,20,Left to Right,Data Type
?.,20,Left to Right,"After ES6, Data Type"
... [ ... ],20,Left to Right,Data Type
... ( ... ),20,Left to Right,
new ...,19,Right to Left,
... ++,18,None,Arithmetic
... --,18,None,Arithmetic
await ...,17,Right to Left,
++ ...,17,Right to Left,Arithmetic
! ...,17,Right to Left,Unary
delete ...,17,Right to Left,Unary
typeof ...,17,Right to Left,Unary
- ...,17,Right to Left,Unary
~ ...,17,Right to Left,Bitwise Operation
void ...,17,Right to Left,
-- ...,17,Right to Left,Arithmetic
+ ...,17,Right to Left,Unary
... ** ...,16,Right to Left,Arithmetic
... % ...,15,Left to Right,Arithmetic
... * ...,15,Left to Right,Arithmetic
... / ...,15,Left to Right,Arithmetic
... - ...,14,Left to Right,Arithmetic
... + ...,14,Left to Right,Arithmetic
... >> ...,13,Left to Right,Bitwise Operation
... << ...,13,Left to Right,Bitwise Operation
... >>> ...,13,Left to Right,Bitwise Operation
... instanceof ...,12,Left to Right,
... in ...,12,Left to Right,Relational
... >= ...,12,Left to Right,Relational
... > ...,12,Left to Right,Relational
... < ...,12,Left to Right,Relational
... <= ...,12,Left to Right,Relational
... === ...,11,Left to Right,Equality
... !== ...,11,Left to Right,Equality
... == ...,11,Left to Right,Equality
... != ...,11,Left to Right,Equality
... & ...,10,Left to Right,Bitwise Operation
... ^ ...,9,Left to Right,Bitwise Operation
|...,8,Left to Right,Bitwise Operation
... && ...,7,Left to Right,Logic
… || ...,6,Left to Right,Logic
"... ?? ... ",5,Left to Right,After ES6
... ? ... : ...,4,Right to Left,Ternary
…??=…,3,Right to Left,"After ES6, Assignment"
…||=…,3,Right to Left,"Assignment, Logic"
…&&=…,3,Right to Left,"Assignment, Logic"
…|=…,3,Right to Left,"Assignment, Bitwise Operation"
... ^= ...,3,Right to Left,"Assignment, Bitwise Operation"
... &= ...,3,Right to Left,"Assignment, Bitwise Operation"
... >>>= ...,3,Right to Left,"Assignment, Bitwise Operation"
... >>= ...,3,Right to Left,"Assignment, Bitwise Operation"
... <<= ...,3,Right to Left,"Assignment, Bitwise Operation"
... %= ...,3,Right to Left,Assignment
... /= ...,3,Right to Left,Assignment
... *= ...,3,Right to Left,Assignment
... **= ...,3,Right to Left,Assignment
... -= ...,3,Right to Left,Assignment
... += ...,3,Right to Left,Assignment
... = ...,3,Right to Left,Assignment
yield ...,2,Right to Left,
yield* ...,2,Right to Left,
"... , ...",1,Left to Right,Comma