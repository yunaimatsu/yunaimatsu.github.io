# ECMAScript

[Documentation -JS](ECMAScript%20b78cfa33c7654aacbc4adac25b312872/Documentation%20-JS%20120496eb7c9080e3bde9ec6008e9a771.md)

# Execution Environment

[Browser](Browser%208e0b390f39294b76a38d3c65956d6c47.md)

[Node.js](ECMAScript%20b78cfa33c7654aacbc4adac25b312872/Node%20js%20e33a305ff9374888ae898195a7565a17.md)

# Structure

1. Importion, Exportion
2. Declaration
3. Essence

[Operator -JS](ECMAScript%20b78cfa33c7654aacbc4adac25b312872/Operator%20-JS%20a1a88ba237a54b0b9d4be396649950d8.md)

**Noun**

[Data type -JS](ECMAScript%20b78cfa33c7654aacbc4adac25b312872/Data%20type%20-JS%20e3e7bcf9752a4eb58f079adc2827809e.md)

## Essence (control structure)

### Discipline

[[Thread] Synchronous and Asynchronous processing -JS](ECMAScript%20b78cfa33c7654aacbc4adac25b312872/%5BThread%5D%20Synchronous%20and%20Asynchronous%20processing%20-%2011b496eb7c9080babab7f9c4ebd00dbc.md)

[Sequential](ECMAScript%20b78cfa33c7654aacbc4adac25b312872/Sequential%20120496eb7c908061b5cbfb71638591db.md)

[Conditional branch](ECMAScript%20b78cfa33c7654aacbc4adac25b312872/Conditional%20branch%20120496eb7c9080128730d43232b7cdf6.md)

### Functionalities which violate the discipline but are necessary

[Exception handling](ECMAScript%20b78cfa33c7654aacbc4adac25b312872/Exception%20handling%20120496eb7c90801fba3beac4024b3939.md)

[Iteration](ECMAScript%20b78cfa33c7654aacbc4adac25b312872/Iteration%2011e496eb7c9080cd9423cfee7fbc56bd.md)

---

> Orthography
> 

[Orthographic rules -JS](ECMAScript%20b78cfa33c7654aacbc4adac25b312872/Orthographic%20rules%20-JS%208f25c20ee59946388665693737178f68.md)

Declaration and call

declaration: static

とにかく、基本はフローチャート。**フローチャートをどのようにコードに落とし込むのか。**これを意識してどんな言語も勉強する。

本当に簡単、基本は全て順次。

全てのプロセスは一つの矢印を受け取って一つの矢印を生やす。

しかし！！

それに反するものこそがconditional branch。一つの矢印を受け取っての二つの矢印を生やすのが条件分岐ブロック。

ただし、ここまでは「上から下に」という

非同期でできるはず

- Forward
    
    It must always proceed only in the direction from `Start` to `End`, and going in the reverse direction is never allowed.
    
- However, in reality, there are several examples where this rule is not followed.
    
    [Call of function](ECMAScript%20b78cfa33c7654aacbc4adac25b312872/Call%20of%20function%2011f496eb7c9080caa17afa86c7f3185f.md)
    
    [Break/Continue](ECMAScript%20b78cfa33c7654aacbc4adac25b312872/Break%20Continue%2011f496eb7c9080b990aeff3a240ad8ee.md)
    
    - Goto-sentence: `Strictly prohibited`
    
    [ChatGPT](https://chatgpt.com/share/670ba355-6598-8013-be22-199b79e09627)
    
- `Start` and `End` blocks
    1. Program must start and finish.
        
        **Stuck program**: Program never **start**s.
        
        **Program in infinite loop**: Program never **end**s.
        
    2. There mustn’t be no program before `Start` and after `End`
    3. Start直後は必ず一本の線。
    4. Endは複数の線が入ってきても良い。

---

[External history of JavaScript](ECMAScript%20b78cfa33c7654aacbc4adac25b312872/External%20history%20of%20JavaScript%200e12fdd92bf343c4bda3425f9a43643f.md)