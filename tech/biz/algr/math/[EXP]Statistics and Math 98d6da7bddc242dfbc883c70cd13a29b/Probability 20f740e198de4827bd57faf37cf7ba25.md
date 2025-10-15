# Probability

# Combinatorics

Combinatorics is a branch of mathematics dealing with the study of finite or countable discrete structures. It encompasses a variety of topics and techniques used to solve problems related to counting, arrangement, and combination of objects. Here are some key concepts and areas within combinatorics:

### Counting Principles

1. **Basic Counting Principle**: If one event can occur in $m$ ways and a second event can occur independently of the first in $n$ ways, then the two events can occur in $m \times n$ ways.
2. **Permutations**: Arrangements of objects where order matters. For \(n\) distinct objects, the number of permutations is $n!$ (n factorial).
3. **Combinations**: Selections of objects where order does not matter. The number of ways to choose \(k\) objects from \(n\) without regard to order is given by the binomial coefficient $(\binom{n}{k} = \frac{n!}{k!(n-k)!})$.

### Advanced Counting Techniques

1. **Pigeonhole Principle**: If \(n\) items are put into \(m\) containers, with \(n > m\), then at least one container must contain more than one item.
2. **Inclusion-Exclusion Principle**: A method to calculate the cardinality of the union of multiple sets by including the sizes of the sets and excluding the sizes of the intersections.
3. **Generating Functions**: Algebraic expressions (often power series) used to encode sequences and solve recurrence relations.

### Graph Theory

1. **Graphs**: Structures used to model pairwise relations between objects. A graph consists of vertices (nodes) and edges (lines connecting the nodes).
2. **Trees**: A special type of graph that is connected and acyclic. Used in data structures and algorithms.
3. **Planar Graphs**: Graphs that can be drawn on a plane without any edges crossing.

### Combinatorial Designs

1. **Block Designs**: Arrangements of elements into subsets (blocks) such that certain balance properties are satisfied.
2. **Latin Squares**: An \(n \times n\) array filled with \(n\) different symbols, each occurring exactly once in each row and column.

### Applications of Combinatorics

1. **Coding Theory**: Designing error-correcting codes to ensure data integrity in digital communications.
2. **Cryptography**: Creating secure communication protocols.
3. **Optimization**: Solving problems in operations research, such as the traveling salesman problem and network flow problems.

### Famous Problems in Combinatorics

1. **The Four Color Theorem**: Every planar map can be colored with at most four colors such that no two adjacent regions share the same color.
2. **Ramsey Theory**: Studies conditions under which order must appear in large enough structures.
3. **Erdős–Ko–Rado Theorem**: Concerns the maximum size of a family of subsets of a finite set such that every two subsets intersect.

Combinatorics is a vast and rich field with connections to many other areas of mathematics and science. It provides powerful tools and techniques for solving a wide range of problems.

つまり$E(X)$と$V(X)$は並列ではなく、E(X)の方が重要なデータである。実際に$V(X)$には$E(X)$を2つの意味で用いる（）。

$E(X)$の例

$V(X)$の例

# Two fundamental concepts of probability

以下のどちらの解釈でも、確率の値を一意に定めることはできない。

## Frequentism

繰り返しが可能な試行の結果。無限回試行する必要がある（不可能）

## Bayesian

- 全ての確率分布関数において、分散・期待値・関数を出せるように！
    
    **分散の導出の大枠**
    
    **期待値の導出の大枠**
    
    **関数の導出の大枠**
    
    x-axisとy-axisが何を表すかは押さえておく。そこからどういう関数か考えたら導出できる。
    

### 1. Bernoulli Distribution

The PMF (Probability Mass Function) represents the probability of an event occurring in a single trial.

### 2. Binomial Distribution

The PMF (Probability Mass Function) represents the probability of an event occurring $k$ times in $n$ trials.

$$
f(x) = {1 \over \sqrt{2\pi}} \exp\left( -{x^2 \over 2} \right)
$$

# Probability=f(Probability distribution, random variable)

確率論は、この関係と、このequationの構成要素3つで成り立っている。

どちらも、「確率は0以上である」「確率は全てを足すと1になる」という意味。

1. Graph
    1. X-axis
    2. Y-axis
2. Expectation(Mean)
3. Variance, Standard deviation $\sigma$

|  | **Discrete** | **Continuous** |
| --- | --- | --- |
| Probability | $p_{k}$ | $P(a\leq X \leq b)=\int _{a}^{b}f(x)dx$ |
| PDF | 確率変数と確率の対応表として与えられる
PMF(Probability mass ) | 関数によって与えられる
PDF/PCF |
| Probability value | とりうるvariableひとつひとつに確率が対応しているvariable
$x_{k}$ | 0.0000…から1.0000…の間の全ての実数から選択した範囲$X$
$a\leq X \leq b$ |

|  | **Discrete** | **Continuous** |
| --- | --- | --- |
| X-axis | $x_{k}$ | $x$ |
| Y-axis | $p_{k}$ | $f(x)$ |

|  | **Discrete** | **Continuous** |
| --- | --- | --- |
| Expected value $E(X)$ | $\sum\limits^{n}_{1} x_{k}\times p_{k}$ | $\int^{\infty}_{\infty}xf(x)dx$ |
| Media $\mu$ | $\frac{1}{n}\sum\limits_{1}^{n}p_{k}$ | $\mu = E(X)$ |
| Variance $V(X)$  | $\sum\limits_{i=1}^{N}(x_{i}-\mu)^{2}\times p_{k}$ | $\int^{\infty}_{-\infty}(x-\mu)^{2}f(x)dx$ |
| 標準偏差 $\sigma$ | $\sqrt{V(X)}$ | $\sqrt{V(X)}$ |

## Discrete

1. $p_{k}\geq0$ 
2. $\sum ^{n}_{1}p_{k}=1$(This indicates that this is a PMF(Probability Mass Function))

<aside>
<img src="https://www.notion.so/icons/sun_lightgray.svg" alt="https://www.notion.so/icons/sun_lightgray.svg" width="40px" /> 全ての$k$に関して、$p_{k}\leq 1$

</aside>

## Continuous

1. $f(x) \geq 0$
2. $\int ^{\infty}_{-\infty}f(x)dx=1$
    - 但し、以下を満たす。
        
        
        $f(x)=\begin{cases}
        1 & (0 \leq x \leq 1) \\
        0 & (-\infty<x<0,1<x<+\infty) \\
        \end{cases}$
        

<aside>
<img src="https://www.notion.so/icons/sun_lightgray.svg" alt="https://www.notion.so/icons/sun_lightgray.svg" width="40px" /> 全ての$a, b$に関して、$\int\limits_{a}^{b}$$f(x)dx\leq1$

</aside>

- CDF(Cumulative Distribution Function)
    
    DEF: CDFは、関数$F$である。 $F(x)=P(X\geq x)=\int ^{x}_{-\infty}f(t)dt$
    
    - Theorem
        1. $a \leq b$ の時、$F(a)\leq F(b)$
        2. $F(–\infty)=0, F(+\infty)=1$
        3. $P(a\leq X \leq b)=F(b)-F(a)$
        4. CDF(Cumulative Density Function)を微分したらPDF(Probability Density Function)が出る。

![Screenshot 2024-08-06 at 7.50.19.png](Probability%2020f740e198de4827bd57faf37cf7ba25/Screenshot_2024-08-06_at_7.50.19.png)

|  | Discrete | Continuous |
| --- | --- | --- |
|  | Binomial | Normal |
|  | Geometric | Exponential |
|  | Negative binomial | Gamma |
- Bernoulli distribution
- Binomial distribution
- Normal distribution
- Standard normal distribution
- Chi-squared distribution
- t-distribution
- F-distribution
- 

また、まずは定性的な記述を簡潔に行い、後に数式とその変形を用いた厳密な記述を行う。

## 定性的記述

**Bernoulli分布**

1回のtrialである事象が現れる確率を表すPMF(確率質量関数)である。

**二項分布**

$n$回のtrialである事象がk回現れる確率を表すPMF(確率質量関数)である。

正規分布

## Quantitive distribution (mathematical explanation and equation derivation)

説明の一貫性を持たせるため、Bernoulli分布と二項分布から説明を始める。その二つを含め、以下の順で確率分布が拡張・制約の追加をされるという体で議論を展開する。

The Probability Density Function (PDF) is used in continuous probability distributions, describing the likelihood of a random variable to take on a given value. On the other hand, the Probability Mass Function (PMF) is used in discrete probability distributions, giving the probability that a discrete random variable is exactly equal to some value.

Probability mass function

the Bernoulli distribution deals with the probability of success in a single trial, whereas the binomial distribution deals with the number of successes in multiple independent trials

Bernoulli distribution → Binomial distribution → Nomial distro → $\chi^{2}$distro → $t$distro → $F$distro

[poisson_distribution ](Probability%2020f740e198de4827bd57faf37cf7ba25/poisson_distribution%2077384cd83c684121bea1718c3409c14b.md)

[binomial_distribution](Probability%2020f740e198de4827bd57faf37cf7ba25/binomial_distribution%20da7d25e7d559435a9b6bc3421aa13307.md)

[Binomial to Normal](Probability%2020f740e198de4827bd57faf37cf7ba25/Binomial%20to%20Normal%202d2dd1d1a41840de8742c2034335557a.md)

[Chi-square to t and F](Probability%2020f740e198de4827bd57faf37cf7ba25/Chi-square%20to%20t%20and%20F%206e683aec45ca48488663e1649d5f4528.md)

[Normal to Chi-square](Probability%2020f740e198de4827bd57faf37cf7ba25/Normal%20to%20Chi-square%20760b0f1af8c44e58a3e3c57654919f32.md)

[Geometric to Negative binomial](Probability%2020f740e198de4827bd57faf37cf7ba25/Geometric%20to%20Negative%20binomial%20cd21651f4dea408da7e5eb8dce78f9b7.md)

[geometric_distribution](Probability%2020f740e198de4827bd57faf37cf7ba25/geometric_distribution%20c8a727c778024e36a4d4dcf2116e6077.md)

random variable:起こり得る事象に変数を割り当てたもの

Bernoulli_結果が2つしかない(失敗or成功)

[Normal Distribution(Gaussian Distribution)](Probability%2020f740e198de4827bd57faf37cf7ba25/Normal%20Distribution(Gaussian%20Distribution)%20568fd12a166c46fda1d8efac0a3d7426.md)

$$
n回のBernoulli試行をしてx回(x\in\mathbb{N},0\leqq x\leqq n)\\ 成功率p\\ とすると\\ 確率関数f(x)は\\ f(x)=\left\{\begin{matrix}{}_nC_x\cdot p^x(1-p)^{n-x}&(x\in\mathbb{Z},x\geqq0)\\0&(x\ne0,1,...,n)\end{matrix}\right.\\確率分布(確率変数と確率の対応)は、nとpによって一意に決まる。\\二項分布B(n,p)という。
$$