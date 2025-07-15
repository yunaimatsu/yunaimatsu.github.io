# Set

[Axiomatic set theory](Set%20a8786b8a826c4e83ab165ccc2bbd70fb/Axiomatic%20set%20theory%20f9432156e6164ce8ac38af8d3e9b7f9d.md)

### Definition

$$
\alpha \stackrel{\mathrm{def}}{\Leftrightarrow} \beta
$$

$$
\alpha \stackrel{\mathrm{def}}{=} \beta
$$

### Set $\supset$ Element

$$
x\in S \\ x\notin S
$$

- 伝統的によく使われる集合
    
    $\mathbb{N}$ = the set of natural numbers
    
    $\mathbb{Z}$ = the set of integers
    
    $\mathbb{Q}$ = the set of rational numbers
    
    $\mathbb{R}$ = the set of real numbers
    
    $\mathbb{C}$ = the set of complex numbers
    
    > 右肩に、正の集合なら+を、ふの集合なら-を添える。
    > 
    > 
    > 右下に、$0$を含むなら0を添える。含まないなら何も添えない。
    > 
    > ※自然数に0を含むかどうかは流儀や国によって差異がある。
    > 

部分集合、真部分集合、空集合、

和集合

共通集合

差集合

### 

- 記法
    
    内包的
    
    外延的
    
    # 外延的記法
    
    すべての要素を列挙して集合をあらわす表記法
    
    # 内包的記法
    
    要素の性質を書いて集合を書きあらわす表記法
    
    P(x) を述語とし，述語 P(x) を真にするようなすべての x 全体の集合を{x | P(x)}であらわす方法
    

Redefinition of the basic premise and self-evident items before the foundation of set theory

数学で「集合」 と呼ぶ「ものの集まり」は「どんなものをとってきても，それがその集まりのなかにある かないかがはっきり定まっている」というもの。

A の中に入っている個々の「もの」を A の元, 要素(EN: element)という。

aが集合Aの元であることを$a\in A, または A\ni a$と表す。LaTeX: `\in, \ni`

その否定は$a\notin A,またはa\notni A$と表す。LaTeX:`\notin, \notni`

# 同値、合同

$$
集合の濃度（元の数）|A|,|B|と表すとすると,\\ A×B の要素の個数は ∣A×B∣=∣A∣×∣B∣
$$

一つでも空集合があると，順序対が作れなくなってしまうので，直積は空集合になります。

- Direct Product
    - Ordered pair: 順序対の集合として。
        - 2個の集合の直積集合
            - EX1
                
                $$
                A={a,b,c},B={1,2}とすると,\\A×B={(a,1),(a,2),(b,1),(b,2),(c,1),(c,2)}
                $$
                
            - EX2
                
                $$
                A=\lbrace{a,b}\rbrace とすると,\\A^{2}={(a,a),(a,b),(b,a),(b,b)}
                $$
                
            - EX3
                
                $$
                実数全体の集合に対して，\\R^{2}={(x,y)∣x∈R,y∈R}\\は座標平面上の全ての点の集合を指す.
                $$
                
        - n個の集合の直積集合
            - EX5
                
                $$
                例5.A={1,2}\quad B={a,b}\quad C={α,β}とすると\\{}\\A×B×C=\\(1,a,α),(1,a,β)\\(1,b,α),(1,b,β)\\(2,a,α),(2,a,β)\\(2,b,α),(2,b,β)
                $$
                
            - EX6
                
                $$
                例6.実数全体の集合\mathbb{R}に対して，\\\mathbb{R}^{3}={(x,y,z)∣x,y,z∈\mathbb{R}}
                \\は，座標空間上の全ての点の集合を指す.
                $$
                
    - Mapping: こうすると、無限個の集合の直積集合を考えられる。
        
        $$
        ∏_{k=1}^{n}A_{k} =\\\bigg( f: \lbrace 1, 2, 3, ..., n\rbrace \rightarrow \bigcup_{k=1}^{n}a_{k}|f(k) \in A_{k},({1}\leq{k}\leq{n})\bigg)
        $$
        
        - EX
            
            [【直積集合】集合の直積について詳しく～具体例10個～](https://mathlandscape.com/product-set/)
            
- Binary relation
    
    $$
    xRy
    $$
    

## Correspondence

### Direct product

<aside>
💡 2つの集合のdirect productは、互いの集合同士を全て結んだその矢印たちの集合。

</aside>

$$
A \times B \stackrel{\rm{def}}{=} \{ (a, b) \mid a \in A \text{ and } b \in B \}
$$

そして、そのDirect productのsubsetがCorresponedenceである。

$$
R:A \rightarrow B
$$

逆対応の表し方

$$
R^{-1}:B\rightarrow A
$$

逆対応の定義

$$
R^{-1}\stackrel{\rm{def}}{=}\{(b,a)|(a,b)\in R\}
$$

合成対応の表し方

合成対応の定義

## Mapping

## 

- Archive
    
    [集合論
    花木 章秀
    2011 年度後期 (2011/07/03)](Set%20a8786b8a826c4e83ab165ccc2bbd70fb/%E9%9B%86%E5%90%88%E8%AB%96%20%E8%8A%B1%E6%9C%A8%20%E7%AB%A0%E7%A7%80%202011%20%E5%B9%B4%E5%BA%A6%E5%BE%8C%E6%9C%9F%20(2011%2007%2003)%20e4751e30cf504e33aacee72b2878c205.md)
    

[距離空間](Set%20a8786b8a826c4e83ab165ccc2bbd70fb/%E8%B7%9D%E9%9B%A2%E7%A9%BA%E9%96%93%20cbd008a500d64fc49f389050381ac36f.md)

# 空集合

すべての x について述語 P(x) が偽ということもおこりうる．このような場合も {x | P(x)}
を集合として扱えた方が便利である．そこで元を一つも含まないものも集合と考え，これ
を空集合 (empty set) とよび，記号 ∅ であらわす。

# 部分集合

集合 A, B において A の元がすべて B の元であるとき

すなわち
∀x x ∈ A =⇒ x ∈ B (1.1)
が成り立つならば

A は B の部分集合 (subset) であるという。

A ⊂ B または B ⊃ A。

A は B に含まれる，または B は A を含む。

構造のないただの集合が、実数の連続性を持たせる。

位相という構造を持たせる。

位相空間となり、

![スクリーンショット 2023-08-10 11.58.10.png](Set%20a8786b8a826c4e83ab165ccc2bbd70fb/%25E3%2582%25B9%25E3%2582%25AF%25E3%2583%25AA%25E3%2583%25BC%25E3%2583%25B3%25E3%2582%25B7%25E3%2583%25A7%25E3%2583%2583%25E3%2583%2588_2023-08-10_11.58.10.png)

これを抽象化すると、距離のある空間**距離空間**の概念が得られる。

<aside>
💡 空間→集合と関数 ということ？？

</aside>

Def. 

[](http://www.rimath.saitama-u.ac.jp/lab.jp/Fukui/lectures/Set_Topsp.pdf)

General topology

Phase and Topological space

[集合](https://ja.wikipedia.org/wiki/%E9%9B%86%E5%90%88) *X* とその開集合系とも呼ばれる[部分集合](https://ja.wikipedia.org/wiki/%E9%83%A8%E5%88%86%E9%9B%86%E5%90%88)の[族](https://ja.wikipedia.org/wiki/%E6%97%8F_(%E6%95%B0%E5%AD%A6)) Σ の組 (*X*, Σ) として与えられる。ここで、Σ の元は *X* の[開集合](https://ja.wikipedia.org/wiki/%E9%96%8B%E9%9B%86%E5%90%88)と呼ばれ、三つの[公理](https://ja.wikipedia.org/wiki/%E5%85%AC%E7%90%86)

1. 開集合の（任意濃度の）[合併](https://ja.wikipedia.org/wiki/%E5%90%88%E4%BD%B5_(%E9%9B%86%E5%90%88%E8%AB%96))もまた開集合である。
2. 開集合の有限個の[交叉](https://ja.wikipedia.org/wiki/%E5%85%B1%E9%80%9A%E9%83%A8%E5%88%86_(%E6%95%B0%E5%AD%A6))もまた開集合である。
3. *X* および[空集合](https://ja.wikipedia.org/wiki/%E7%A9%BA%E9%9B%86%E5%90%88) ∅ は開集合である。

を満足する。

Open set/Closed set

関数の連続性（や極限）、最大値・最小値を持つかといった性質を考えるときに、開区間や閉区間の考え方がいる。

[Examples of Distance Space](Set%20a8786b8a826c4e83ab165ccc2bbd70fb/Examples%20of%20Distance%20Space%203310913ca8464a99a2e50897230ca5dc.md)