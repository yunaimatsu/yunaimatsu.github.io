人間がコンピュータに理解してもらうために、例外のない言語である形式言語を定義する。字句(Token)となり、それが集まって文を構成、文の集まりが言語を構成する。言語プロセッサでは、これをバラして解析する。オートマトンや文脈自由文法を用いて形式言語を分解して機械語に翻訳する。
## 文脈自由文法
$$
a \to b
$$
という関係にあるとき、aが一つの非終端記号になるもの。
### 終端記号
左辺の<主語>は、右辺にある語で置き換えることができる。
右辺にあるこれらの語は、それ以上何かに置き換えることはできない。
* **非終端記号N**←まだ(参照が)終わりじゃない語←まだ置き換えられる語
* **終端記号T**←もう(参照が)終わりの語←もう置き換えられない語
* **生成規則P**何を何で置き換えるかというルール
* **開始記号S**最初に置き換える記号の指定

$$
G=\{N,T,P,S\}
$$
$$
N={非終端記号の集合}\\
$$
$$
T={終端記号の集合}\\
$$
$$
P={生成記号の一覧}\\
$$

### 非終端記号

正規言語
文脈依存言語
句構造げんご(無制限言語)
文脈自由文法以外の形式言語には、以下のようなものがあります:

## 正規言語

正規言語は、形式言語理論におけるChomsky階層の中で最も単純な言語クラスです[3]。正規言語は以下の特徴を持ちます:

- 有限オートマトンで認識できる
- 正規表現で表現できる
- 正則文法（正規文法）で生成できる

正規言語は、文脈自由言語の真部分集合となっています。

## 文脈依存言語

文脈依存言語は、文脈自由言語よりも表現力が高い言語クラスです[3]。主な特徴は:

- 文脈依存文法（CSG: Context-Sensitive Grammar）で生成される
- 線形有界オートマトンで認識できる
- εを生成しない（空文字列を含まない）

文脈依存文法の生成規則は以下の形式を持ちます:

αAβ → αγβ (α, β, γ ∈ (N ∪ Σ)*, γ ≠ ε, A ∈ N)[3]

## 句構造言語（無制限言語）

句構造言語は、Chomsky階層の中で最も表現力が高い言語クラスです[3]。特徴として:

- 句構造文法（無制限文法）で生成される
- チューリングマシンで認識できる
- あらゆる再帰的可算言語を含む

句構造文法の生成規則は、α → β の形式を持ち、αは少なくとも1つの非終端記号を含みます[3]。

これらの言語クラスは、以下の包含関係を持っています:

正規言語 ⊂ 文脈自由言語 ⊂ 文脈依存言語 ⊂ 句構造言語

この階層構造は、Chomsky階層として知られており、各言語クラスの表現力と計算複雑性を表しています。


* [BNF記法](/b/lang/f)
* [JavaScript DOM](/b/lang/f/js-dom)
* [JavaScript](/b/lang/f/js)
* [Python](/b/lang/py)

<details>
    <summary>例題</summary>
    <p>Here's the translated content from the image and the Mermaid.js syntax to represent the diagrams:
    ### Translated Content for Notion
    **Practice Problem**
    In a certain programming language, an identifier starts with an English letter and is followed by any sequence of alphanumeric characters. When defined using BNF (Backus-Naur Form), which of the following can be included in "a"?
    ```bnf
    <digit> ::= 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
    <letter> ::= A | B | C | ... | X | Y | Z | a | b | c | ... | x | y | z
    <identifier> ::= a
    ```
    Options:
    - アイ (A) `<letter> <digit> | <identifier><letter> | <identifier><digit>`
    - イ (I) `<letter> <digit> | <letter><identifier> | <identifier><digit>`
    - ウ (U) `<letter> <identifier><digit> | <identifier><letter>`
    - エ (E) `<letter> <identifier><digit> | <identifier><letter>`
    Source: Information Technology Examination (Spring 2017, Question 4)
    **Explanation:**
    Let's go through the options step-by-step to confirm the conditions. 
    First, as "It starts with an English letter," any options that have `<digit>` alone as a replacement rule can be eliminated. So, option アイ (A) is excluded.
    - Invalid options:
    - `<letter> <digit> | <identifier><letter> | <identifier><digit>`
    - `<letter> <digit> | <letter><identifier> | <identifier><digit>`
    Second, the condition is "followed by any sequence of alphanumeric characters." In the options, there is no `<digit>` following `<identifier>`. This means it does not fulfill the "followed by any sequence of alphanumeric characters" condition and is therefore invalid.
    - Invalid option:
    - `<letter> | <identifier><digit>`
    Looking at option エ (E), it starts with an English letter and is defined to allow either digits or letters to follow. Therefore, this option is correct.
    - Correct option:
    - `<letter> <identifier><digit> | <identifier><letter>`
    **Diagram in Mermaid.js Syntax**
    For the diagram representation:
    ```mermaid
graph TD
A[<letter>] --> B[<digit>]
A --> C[<identifier><letter>]
A --> D[<identifier><digit>]
E[Correct Answer] --> F[<letter> <identifier><digit> | <identifier><letter>]
```
</p>
</details>

<details>
    <summary>
    </summary>
    <p>
    To make a computer execute tasks, we write commands in programming languages (for more details, see p.348). As stated above, formal languages can be represented in this way. Let’s look at a simple example to see how formal languages are constructed. Suppose there is a rule that sentences are composed of the following structure:
    <Sentence> → <Subject> <Object> <Verb>
    Then, let's assume that the subject, object, and verb are defined as shown below. The "|" symbol means "or".
    ```
    <Subject> → I | You | He | She
    <Object> → Luggage | Money | Whales | Computer
    <Verb> → Buy | Transport | Eat | Use
    ```
    By combining the defined <Subject>, <Object>, and <Verb> elements in a structure, we can create various sentences, much like a montage. This is a simple example of a formal language. By designing rules like these in detail, you can create a specific language.
    </p>
    $$
    N=\{Sentence, Subject, Object, Predicate\}
    $$
    $$
    T=\{私は、あなたは、彼は、彼女は、荷物を、鯨を、PCを、買う、運ぶ、食べる、使う \}
    $$
    $$
    P={
        S→<Sentence>, <Sentence>, <Predicate>
        <Subject>
        <Object>
        <Object>
        <Predicate>
    }
    $$
</details>
