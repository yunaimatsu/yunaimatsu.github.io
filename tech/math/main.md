# Math

# Basic Arithmetic, Digital Mathematics

## The base

The following page describes representations from unary to base-109. However, in the world of computer science, bases of $2^{n} (n \in \mathbb{Z})$ are used.

In particular, **binary**, **octal**, and **hexadecimal** are used. Here, we will deal with these three bases plus **decimal**, which many of us have used since birth.

[[Appendix] Base](Math%20da08a65024bb4d569d979fe5c13ffcd8/%5BAppendix%5D%20Base%20e680b6977f844b2aacadd3c051ca10a2.md)

### Basic concepts

**Base**: The radix of the number system (for example, 10 for the decimal system, 2 for the binary system).

- Radix in Japanese
    
    基数
    
- ‘Radix’ and ‘Base’
    
    The terms "radix" and "base" refer to the same concept in the context of numeral systems. Both indicate the number of unique digits, including zero, used to represent numbers in a positional numeral system. For example, in the decimal system, the base (or radix) is 10, while in the binary system, the base (or radix) is 2.
    

**Exponent**: The exponent representing the position of the digit. The rightmost digit has an exponent of 0, and it increases by 1 as you move to the left.

**Weight**: The specific value corresponding to that digit. It is the result of raising the base to the exponent.

### Base conversion

**Decimal**

**Binary**

<aside>
<img src="https://www.notion.so/icons/calculator_lightgray.svg" alt="https://www.notion.so/icons/calculator_lightgray.svg" width="40px" /> Arithmetic operations in an **$m$-bit** **$n$-base** number system

Determine the number of **bits** and **the base**.

</aside>

![Screenshot 2024-08-19 at 6.07.46.png](Math%20da08a65024bb4d569d979fe5c13ffcd8/Screenshot_2024-08-19_at_6.07.46.png)

Binary operation

## **Complement**

<aside>
<img src="https://www.notion.so/icons/calculator_lightgray.svg" alt="https://www.notion.so/icons/calculator_lightgray.svg" width="40px" /> Represents negative numbers

</aside>

ある数Aがある時、そのAに足して(1)0000…00000になる数字を補数という。

その桁数で最大値を得るために補う数

次の桁に繰り上がるために補う数

- **Calculation method**
    1. Create a number sequence with all bits set to 1
        1. Invert all bits (reverse 0 and 1)
    2. Create a number sequence with all bits set to 0
        1. Overflow the most significant bit (add 1)

## Point number

<aside>
<img src="https://www.notion.so/icons/calculator_lightgray.svg" alt="https://www.notion.so/icons/calculator_lightgray.svg" width="40px" /> Represents numbers containing a decimal point

</aside>

### **Floating-point number**

- Exponential notation in decimal
    
    $$
    \text{Sign}(\pm) \text{Mantissa} \times \text{Base} ^{\text{Exponent}}
    $$
    
    A method of representing numbers using exponential notation with an exponent(指数部) and a mantissa(仮数部)
    
    - Etymology of mantissa unknown
        
        Borrowed from Latin *mantissa*, *mantīsa*, of unknown origin (said by Festus to be a loanword from Etruscan, but it may actually be from Celtic,[1] possibly through Etruscan mediation).
        
- Normalization in decimal notation
    
    Normalization (the process of adjusting the position of the decimal point to increase the number of significant digits and ensure the highest digit in the mantissa is a non-zero value)
    
    There are various patterns in exponential notation. 
    
    $$
    \begin{array}{r}
    0.25\times10^{-3}\\
    0.025\times10^{-2}\\
    0.0025\times10^{-1}\\
    0.00025\times10^{\pm0}\\
    \end{array}\\
    \vdots
    $$
    
    All of them are numerically correct. However, if the highest digit in the mantissa is a non-zero value, it eliminates unnecessary parts.
    
- Exponential notation in binary
    
    $$
    \pm m\times2^{e}
    $$
    
- Normalization in binary notation
    
    Sign: `0` for positive numbers, `1` for negative numbers
    
    Bias: A value that allows the representation of negative numbers using only positive values.
    
    - Japanese translation of "bias"
        
        Translated as "補正値".
        
    
    | **TYPES** | **SIGN**
     | **BIASED EXPONENT** | **NORMALISED MANTISA** | **BIAS** |
    | --- | --- | --- | --- | --- |
    | Single precision | 1(31st bit) | 8(30-23) | 23(22-0) | 127 |
    | Double precision | 1(63rd bit) | 11(62-52) | 52(51-0) | 1023 |
    
    **32bits**
    
    ![image.png](Math%20da08a65024bb4d569d979fe5c13ffcd8/image.png)
    
    **64bits**
    
    ![image.png](Math%20da08a65024bb4d569d979fe5c13ffcd8/image%201.png)
    
    Whether it's memory or a CPU, it doesn't matter. In any case, to represent a real number, a 32-bit floating-point format is required. If the exponent part is a negative number, it is represented using two's complement. The mantissa part includes $0.M$ with the normalized M part.
    
    正規化したMの部分が入る。
    

### **Fixed-point number**

A representation method that implicitly assumes the position of the decimal point in the bit sequence.

## Shift operations

### Logical Shift

1. **Left Logical Shift ($2^n$ times)**
    - Shifting all bits to the left is called a left logical shift. If you shift by `n` bits, the resulting number is multiplied by $2n$.
    - **Example:**
        - Start with the number 44 (binary: `00101100`).
        - Shift left by 2 bits:
            - Original number: `00101100`
            - After shift: `10110000`
        - Result: 176 (binary: `10110000`).
2. **Right Logical Shift ($1/2^n$ times)**
    - Shifting all bits to the right is called a right logical shift. If you shift by `n` bits, the resulting number is divided by $2n$.
    - **Example:**
        - Start with the number 44 (binary: `00101100`).
        - Shift right by 2 bits:
            - Original number: `00101100`
            - After shift: `00001011`
        - Result: 11 (binary: `00001011`).

### Arithmetic Shift

1. **Left Arithmetic Shift ($2^n$ times with Sign)**
    - For arithmetic operations, a left shift by `n` bits still multiplies the number by 2n but retains the sign bit (the leftmost bit).
        
        2n2^n
        
    - **Example:**
        - Start with the number -28 (binary with sign: `11100100`).
        - Shift left by 2 bits:
            - Original number: `11100100`
            - After shift: `10010000`
        - Result: -112 (binary: `10010000`).
2. **Right Arithmetic Shift ($1/2^n$ times with Sign)**
    - Similarly, a right shift by `n` bits divides the number by $2n$ while retaining the sign bit.
    - **Example:**
        - Start with the number -28 (binary with sign: `11100100`).
        - Shift right by 2 bits:
            - Original number: `11100100`
            - After shift: `11111001`
        - Result: -7 (binary: `11111001`).

### Overflow

### Error

**Overflow error**

An overflow error occurs when the result of a computation exceeds the maximum or minimum value that the computer (CPU or memory) can handle.

**Rounding error**

It occurs because the number of digits that can be represented is exceeded, leading to rounding, ceiling, or truncation of the parts smaller than the smallest digit.

**Truncation error**

The error that occurs by stopping the calculation process before it is completed.

**Digit drop**

When calculating the difference between numbers that are almost equal in magnitude, the number of significant digits decreases significantly.

- Issues with digit drop
    
    Let's explain why loss of significance, also known as catastrophic cancellation, is problematic, using a specific example.
    
    ### Example: Subtraction of Floating-Point Numbers
    
    Consider the following calculation:
    
    $$
    x = 1.0000001\\
    y = 1.0000000
    $$
    
    We want to calculate $x - y$.
    
    ### Calculation Details
    
    - $x = 1.0000001$
    - $y = 1.0000000$
    
    If we perform this subtraction manually, the result is \(0.0000001\). However, when a computer performs this calculation, the result may differ. This is because floating-point numbers have a limited number of digits, and the very small difference may be lost.
    
    ### Occurrence of Loss of Significance
    
    When calculating with floating-point numbers, the computer internally processes the values as follows:
    
    1. **$1.0000001$** is represented in floating-point as $1.0000001 \times 10^0$.
    2. **$1.0000000$** is also represented in floating-point as $1.0000000 \times 10^0$.
    
    Subtracting these yields \(0.0000001 \times 10^0\), but due to the limited number of digits, the small difference may disappear, leading to a final result of \(0\). Thus, the limited precision of the floating-point representation can cause the meaningful difference to be lost.
    
    ### Impact of Loss of Significance
    
    - **Loss of Important Values**: Even though the true difference is \(0.0000001\), the result may incorrectly be \(0\). This can lead to incorrect decisions or calculations based on this difference.
    - **Accumulated Error**: When small errors like this accumulate over multiple calculations, they can result in significant errors in the final result. For example, in simulations or numerical analyses that involve many steps, the impact of loss of significance cannot be ignored.
    
    ### Mitigation Strategies
    
    To avoid loss of significance, the following strategies can be considered:
    
    - **Rearranging the Calculation Order**: Avoid subtraction and calculate using an alternative method.
    - **Using Data Types with Sufficient Digits**: Use data types that can retain more digits, such as double-precision floating-point numbers or extended precision.
    - **Normalizing Values**: If the values being compared are vastly different in magnitude, normalize them before calculation to prevent loss of significance.
    
    ### Conclusion
    
    Loss of significance directly affects the accuracy of numerical calculations, so special attention is required, especially in situations where precision is critical. Without proper measures, the calculation results may be incorrect, leading to flawed decisions based on those results.
    

**Information loss**

### Multiplication and Division using shift operations

When considering simple operations, in shift arithmetic, only numbers corresponding to powers of $2$ (like $2, 4, 8, 16,\cdots$) can be easily multiplied or divided. It feels like multiplying or dividing non-power-of-2 numbers such as 3 or 7 might be difficult.

- **Multiplication**
    
    To handle multiplication, you can replace the calculation with the addition of powers of 2.
    
    - **Example:** Multiplication by 7
        - 7 can be represented as (4 + 2 + 1), which corresponds to (2² + 2¹ + 2⁰).
        - Therefore, ?×7=(?×22)+(?×21)+(?×20).
            
            ?×7=(?×22)+(?×21)+(?×20)? \times 7 = ( ? \times 2² ) + ( ? \times 2¹ ) + ( ? \times 2⁰ )
            
        - Each part involves a left bit shift corresponding to the power of 2, followed by the original value.
- **Division**
    
    In division, the process is reversed, using subtraction of powers of 2 to perform the calculation.
    
    - **Example:** Dividing 15 by 3
        - First, convert 15 and 3 to binary: 15÷3=1111÷11.
            
            15÷3=1111÷1115 \div 3 = 1111 \div 11
            
        - Calculate how many times 3 fits into 15 by subtracting powers of 2:
            - 1111−1100=111111 - 1100 = 111111−1100=11 (3 fits once when shifted left by 2 bits)
            - 11−11=011 - 11 = 011−11=0 (3 fits once when shifted left by 0 bits)
        - The sum of the powers gives the quotient:
            - 22+20=4+1=52² + 2⁰ = 4 + 1 = 522+20=4+1=5.

## Set operations

| Description | Symbol |
| --- | --- |
| **Intersection (AND)** | $A\cap B$ |
| The set containing elements common to both A and B. |  |
| **Union (OR)** | $A\cup B$ |
| The set containing elements that are in A, or B, or both. |  |
| **Complement (NOT A)** | $A^{c}$ |
| The set containing all elements not in A. |  |
| **Difference (A minus B)** | $A-B$ |
| The set containing elements that are in A but not in B. |  |
| **Symmetric Difference (XOR)** | $A\bigtriangleup B$ |
| The set containing elements that are in either A or B, but not in both. |  |

### De Morgan's Laws, Equation Transformation

### De Morgan's Laws

- $\overline{A\cup B}=\bar{A}\cap \bar{B}$
- $\overline{A\cap B}=\bar{A} \cup \bar{B}$

### Distributive Laws

- $A\cap (B\cup C)=(A\cap B)\cup (A\cap C)$
- $A \cup (B\cap C)=(A\cup B)\cap(A\cup B)$

### Associative Laws

- $(A\cap B)\cap C=A\cap(B\cap C)$
- $(A\cup B)\cup C=A\cup (B\cup C)$

## Logical operations(Boolean operations)

### 命題

主張のこと。主張は主張でも、真か偽かのどちらかにはっきりと分けることができる主張のこと。

### 真理値表

### AND

| $A$ | $B$ | $A\cdot B$ |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

### OR

| $A$ | B | $A+B$ |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

### NOT

| $A$ | $\bar{A}$ |
| --- | --- |
| 0 | 1 |
| 1 | 0 |

### NAND

| $A$ | $B$ | $\overline{A \cdot B}$ |
| --- | --- | --- |
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

### NOR

| $A$ | $B$ | $\overline{A + B}$ |
| --- | --- | --- |
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 0 |

### XOR

| $A$ | $B$ | $A\oplus B$ |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

### Karnaugh map

1. Create a table that covers the truth values of the logical variables using the vertical and horizontal axes.
2. Consider the conditions under which each term of the logical expression is true.
3. Derive the logical expression from the Karnaugh map.
4. 以下のようなルールに基づいてグループ化する
    
    ![Screenshot 2024-08-19 at 21.25.33.png](Math%20da08a65024bb4d569d979fe5c13ffcd8/Screenshot_2024-08-19_at_21.25.33.png)
    
5. それぞれのグループに含まれる1の条件を全て洗い出す。その共通項を論理積の塊として取り出す。
6. グループごとに生成した論理積を論理和でくっつける。

$$
\begin{array}{r}
&&A_{6}&A_{5}&A_{4}&A_{3}&A_{2}&A_{1}\\
+&&B_{6}&B_{5}&B_{4}&B_{3}&B_{2}&B_{1}\\
+&C_{6}&C_{5}&C_{4}&C_{1}&C_{1}&C_{1}\\
\hline
  &&S_{6}&S_{5}&S_{4}&S_{3}&S_{2}&S_{1}  \\  % 結果
\end{array}
$$

# Data

- データの単位
    
    ビット(b)
    
    バイト(B): アルファベット1文字を表すのにちょうど8ビット、ということで
    
- 補助単位
    
    Units for Expressing Large Values (e.g., Memory Capacity)
    
    | **Prefix** | **Meaning** | **Explanation** | **Etymology** |
    | --- | --- | --- | --- |
    | **Kilo (k)** | 10³ | Basic unit × 1,000 | From Greek "χίλιοι" (khílioi) /ˈkʰi.li.oi̯/, meaning "thousand." |
    | **Mega (M)** | 10⁶ | Basic unit × 1,000,000 | From Greek "μέγας" (mégas) /ˈme.ɣas/, meaning "great." |
    | **Giga (G)** | 10⁹ | Basic unit × 1,000,000,000 | From Greek "γίγας" (gígas) /ˈɣi.ɣas/, meaning "giant." |
    | **Tera (T)** | 10¹² | Basic unit × 1,000,000,000,000 | From Greek "τέρας" (téras) /ˈte.ras/, meaning "monster." |
    
    Units for Expressing Small Values (e.g., Processing Speed)
    
    | **Prefix** | **Meaning** | **Explanation** | **Etymology** |
    | --- | --- | --- | --- |
    | **Milli (m)** | 10⁻³ | Basic unit × 1/1,000 | From Latin "mille," meaning "thousand." |
    | **Micro (μ)** | 10⁻⁶ | Basic unit × 1/1,000,000 | From Greek "μικρός" (mikrós) /miˈkros/, meaning "small." |
    | **Nano (n)** | 10⁻⁹ | Basic unit × 1/1,000,000,000 | From Greek "νάνος" (nános) /ˈna.nos/, meaning "dwarf." |
    | **Pico (p)** | 10⁻¹² | Basic unit × 1/1,000,000,000,000 | From Spanish "pico," meaning "small quantity" or "bit." |

## Information amount and Entropy

[https://youtu.be/T8VziGkB70g?si=gfCZE13Q3TyRc9kC](https://youtu.be/T8VziGkB70g?si=gfCZE13Q3TyRc9kC)

### Information amount

The unit is bits.

$$
I(x)=-\log_{2}P
$$

### Entropy

**Average information amount (Entropy)**

The unit is bits.

$$
\text{Entropy}=\sum\limits^{n}_{k=1} \{P(A_{k})\times I(A_{k})\}
$$

## Data Compression

### Theoretical value of data

出現率を元に情報量の目処が立つ。

エンコーディングする時、なるべく少ないビット数でデジタルデータ化する必要が求められる。

### Huffman coding

データの出現頻度に着目した圧縮方法

ハフマン木と呼ばれる木構造

各データを出現確率順で並べる。そして、以下のようなグラフを作成する

![Screenshot 2024-08-20 at 17.46.30.png](Math%20da08a65024bb4d569d979fe5c13ffcd8/Screenshot_2024-08-20_at_17.46.30.png)

### Run-length encoding

同じデータが繰り返されるとき、そのデータを「データと繰り返し回数の組」に置き換えることで、データ長を短くする圧縮方法

- 例
    
    FAXみたいな白黒画像では高い圧縮率が期待できるね
    

### Automaton

- What Automaton is
    
    An **automaton** (plural: automata) is a self-operating machine or mechanism, often designed to follow a predetermined sequence of operations or respond to specific inputs.
    
    The concept of automata spans both mechanical devices and theoretical models in computer science and mathematics.
    
    1. **Mechanical Automaton:** Historically, automata referred to mechanical devices designed to mimic human or animal actions. For example, in the 18th century, intricate clockwork automata were built that could write, play instruments, or perform other complex tasks without human intervention.
    2. **Theoretical Automaton:** In computer science, an automaton is an abstract machine used to model computation. The most well-known types are:
        - **Finite Automaton (Finite State Machine):** A simple model of computation used to design and analyze digital circuits, parsers, and other systems that require a sequence of operations based on specific conditions.
        - **Turing Machine:** A more powerful theoretical model capable of simulating any computer algorithm, representing the foundation of modern computation theory.
    
    Automata are central to understanding the principles of computation, algorithm design, and the development of modern computers.
    
    Representation of digital data
    
    The connection between automata and graph theory is closely intertwined. Here is an explanation of their relationship.
    
    1. **Graph as the Structure of Automata**:
        - **Finite automata** (such as DFA and NFA) can be interpreted through graph theory. Each state of an automaton corresponds to a vertex in a graph, and the transition relationships correspond to edges. For instance, if there is a transition from one state to another, it is represented as an edge connecting the two vertices in the graph.
        - The initial state and the accepting states (acceptance set) are also represented as special vertices in the graph. Therefore, a finite automaton can essentially be expressed as a labeled directed graph.
    2. **Graph Traversal and Automata**:
        - The process of checking whether a string is accepted by an automaton or verifying state transitions is similar to graph traversal algorithms (such as Depth-First Search (DFS) or Breadth-First Search (BFS)) in graph theory. Determining whether an automaton accepts a given string corresponds to following the edges in the graph according to that string.
    3. **Language Recognition and Paths**:
        - In graph theory, paths from a starting point to an endpoint are considered. In an automaton, all paths from the initial state to the accepting states correspond to the words in the language it accepts. Thus, the language accepted by an automaton can be viewed as the set of all accepting paths in the corresponding graph.
    4. **Graph Theory for Analyzing Automata**:
        - Graph theory is applied in the minimization of automata, checking for equivalence, analyzing state reachability, and more. This facilitates the efficient design and transformation of automata.
    
    In summary, automata and graph theory have a strong connection from both mathematical and computer science perspectives. By modeling automata as graphs, methods and insights from graph theory can be utilized to analyze and design automata. This relationship is particularly crucial in the fields of computational theory and formal language theory.
    

![Screenshot 2024-08-20 at 22.02.58.png](Math%20da08a65024bb4d569d979fe5c13ffcd8/Screenshot_2024-08-20_at_22.02.58.png)

![Screenshot 2024-08-20 at 22.02.41.png](Math%20da08a65024bb4d569d979fe5c13ffcd8/Screenshot_2024-08-20_at_22.02.41.png)

![Screenshot 2024-08-20 at 22.02.33.png](Math%20da08a65024bb4d569d979fe5c13ffcd8/Screenshot_2024-08-20_at_22.02.33.png)

![Screenshot 2024-08-20 at 22.04.04.png](Math%20da08a65024bb4d569d979fe5c13ffcd8/Screenshot_2024-08-20_at_22.04.04.png)

### Regex

![Screenshot 2024-08-20 at 22.03.43.png](Math%20da08a65024bb4d569d979fe5c13ffcd8/Screenshot_2024-08-20_at_22.03.43.png)

Meta character

- Example
    - **[]**: Represents any single character inside the brackets.
        - Example: `[abc]` matches either `a`, `b`, or `c`.
        - `[a-q]` matches any letter from `a` to `q`.
        - You can also combine ranges like `[abcw-z]`.
    - ****: Indicates zero or more repetitions of the preceding regular expression or character.
        - Example: `[abc]*` matches `"a"`, `"aa"`, `"abc"`, etc.
    - **+**: Indicates one or more repetitions of the preceding regular expression or character.
        - Example: `[abc]+` matches `"a"`, `"aa"`, `"abc"`, etc.

## Multimedia

### Image

ビットマップ方式。画像を細かいドットの集まりで表現する。

$$
\text{Data size = Number of dots × Number of colors}
$$

### Music, Voice

PCM(Pulse Code Modulation)方式

音声を微小な時間単位に区切り（標本化）、その単位ごとに音程を数値化（量子化）

**標本化**：連続データを離散データへ

サンプリング周波数

量子化：

量子化ビット数

$$
\text{Data size = Sampling frequency} \times \text{ Quantization bit depth}
$$

## Encoding

### Character code

[UCS-2](Math%20da08a65024bb4d569d979fe5c13ffcd8/UCS-2%20be968cbcf0844815a62c8a3639590b8f.md)

[UCS-4](Math%20da08a65024bb4d569d979fe5c13ffcd8/UCS-4%20a474705ee2544b2e84eba51f2f28bdd3.md)

[UTF-8](Math%20da08a65024bb4d569d979fe5c13ffcd8/UTF-8%20d18447b2758d4b4d9c9d82094bcaac38.md)

[UTF-16](Math%20da08a65024bb4d569d979fe5c13ffcd8/UTF-16%2002fab7e3c80349fd96c7fcdcca728945.md)

[Unicode](Math%20da08a65024bb4d569d979fe5c13ffcd8/Unicode%202f1d49f99e6b46f5b27aa15c8954c4fa.md)

[EUC](Math%20da08a65024bb4d569d979fe5c13ffcd8/EUC%20215a1b0e32cd403ba33be5a56cf6f5a6.md)

[S-JIS](Math%20da08a65024bb4d569d979fe5c13ffcd8/S-JIS%20ee1f41c3b0334e7193cf0f1600ae4afb.md)

[EBCDIC](Math%20da08a65024bb4d569d979fe5c13ffcd8/EBCDIC%20c39888d4e1e74b6daa89f2b384acf7af.md)

[ASCII](Math%20da08a65024bb4d569d979fe5c13ffcd8/ASCII%20032fd3556ebb4732af14e04cfb610be5.md)

Representation of multimedia
