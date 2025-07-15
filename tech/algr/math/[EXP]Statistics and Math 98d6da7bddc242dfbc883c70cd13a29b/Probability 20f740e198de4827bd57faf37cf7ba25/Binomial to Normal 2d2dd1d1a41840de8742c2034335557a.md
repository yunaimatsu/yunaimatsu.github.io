# Binomial to Normal

# Binomial

## 0. Let $Bin(2n, \frac{1}{2})$.

- How to write TeX of matrix
    
    $\text{Matrix of } m \times n
    \begin{pmatrix}
    a_{11} & a_{12} & \cdots & a_{1n} \\
    a_{21} & a_{22} & \cdots & a_{2n} \\
    \vdots & \vdots & \ddots & \vdots \\
    a_{m1} & a_{m2} & \cdots & a_{mn}
    \end{pmatrix}$
    

### Function

- Why $(\frac{1}{2})^{2n}$?
    
    この式において、確率 $\frac{1}{2}$の累乗が2n乗になっている理由は、二項分布 $Bin(2n, \frac{1}{2})$ の一般的な形を理解することで説明できます。
    
    二項分布 $Bin(2n, \frac{1}{2})$ は、独立した \(2n\) 回の試行でそれぞれの成功確率が \(\frac{1}{2}\) の場合の成功の回数 \(k\) の分布です。
    
    この分布の確率質量関数（PMF）は次のように表されます：
    $P(X = k) = \binom{2n}{k} \left(\frac{1}{2}\right)^k \left(\frac{1}{2}\right)^{2n-k}$
    
    これを簡略化すると：
    
    $P(X = k) = \binom{2n}{k} \left(\frac{1}{2}\right)^{2n}$
    
    ここで、 $\left(\frac{1}{2}\right)^{2n}$は2n回の試行すべてが考慮されているため、すべての試行に対する成功と失敗の確率が含まれていることを表しています。従って、 $\left(\frac{1}{2}\right)$の累乗が $2n$乗になっているのです。
    

$$
P(X=k)=\begin{pmatrix}2n\\k\end{pmatrix}(\frac{1}{2})^{2n}\\ \text{where }k=0,1,2,\cdots,2n
$$

## 1. Make it continuous

$$
f(x)=\begin{pmatrix}2n\\n+k\end{pmatrix}\begin{pmatrix}\frac{1}{2}\end{pmatrix}^{2n}
\\{}\\
\text{when }\\{}k-\frac{1}{2}<x\le k+\frac{1}{2}\\k=-n,-n+1,\cdots,n-1,n
$$

ここで、$x$を標準化する。

## 2. Standardization(わる、ひく)

$$
V(X)=\frac{n}{2}\\{}\\ \sigma=\sqrt{\frac{n}{2}}
$$

### $V(X)$が1となるように変数を標準偏差で割る

### とはいえ合計面積1はキープする

$$
-\frac{\sqrt{2}}{\sqrt{n}}\begin{pmatrix}n+\frac{1}{2}\end{pmatrix}<x\le\frac{\sqrt{2}}{\sqrt{n}}\begin{pmatrix}n+\frac{1}{2}\end{pmatrix}
$$

$$
x = \frac{X - n}{\sqrt{\frac{n}{2}}}
$$

$x$の値が特定の範囲内にあるとき、その範囲に対応する$k$ の値が必ず存在します。

$$
-\frac{\sqrt{2}}{\sqrt{n}}\begin{pmatrix}n+\frac{1}{2}\end{pmatrix}<x\le\frac{\sqrt{2}}{\sqrt{n}}\begin{pmatrix}n+\frac{1}{2}\end{pmatrix}
$$

<aside>
<img src="https://www.notion.so/icons/language_lightgray.svg" alt="https://www.notion.so/icons/language_lightgray.svg" width="40px" /> **Standardization**

$x$軸に関して、平均を引いて標準偏差で割ることで、データを標準正規分布に従わせる操作。

これにより、二項分布の平均が0、分散が1となるように変換され、正規分布と比較しやすくなります。

</aside>

## $E(X)$$k$の全ての値から$n$を引く

左にnだけずらして、真ん中に向かって$\sqrt{\frac{n}{2}}$狭める

(0を中心に取り直す)

$$
P(X=k)=\begin{pmatrix}2n\\k\end{pmatrix}(\frac{1}{2})^{2n}\\ \text{where }k=-n,-n+1,\cdots,-1,0,1,\cdots,n-1,n
$$

## 3. $\lim\limits_{n\to \infty}$

# Standardized binomial

なぜ標準化？$n→\infty$しても、最大値が$0$になるから。

階段上の連続関数（微分不可能）

# Normal