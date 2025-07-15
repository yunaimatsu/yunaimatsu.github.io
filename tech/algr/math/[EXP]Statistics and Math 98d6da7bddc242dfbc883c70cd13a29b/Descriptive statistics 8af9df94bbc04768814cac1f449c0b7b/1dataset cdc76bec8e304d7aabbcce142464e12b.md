# 1dataset

# 1. Size of data

沢山のデータがあると一目では何も考察を得ることができません。

そのため、データを一つの数字で表すことを試みます。

## Average

|  | Excel | Python | Definition | Pros | Cons | Examples |
| --- | --- | --- | --- | --- | --- | --- |
| Arithmatic Mean | `AVERAGE()`
`AVERAGEA()`
`AVERAGEIF()`
`AVERAGEIFS()` | `st.mean()`
 |  |  |  |  |
| Trim Mean | `TRIMMEAN()` |  |  |  |  |  |
| Geometric Mean | `GEOMEAN()` | `st.geometric_mean()` |  |  |  |  |
| Harmonic Mean | `HARMEAN()` | `st.harmonic_mean()` |  |  |  |  |
- Excelに関する補足
    
    `AVERAGEA()`
    
    数字以外のものを0とみなす。
    
    論理値は `TRUE` を1と、 `FALSE` を0とみなす。
    
    `AVERAGEIF()` 
    
    AUG1: Range, AUG2: Condition, AUG3: Value Range
    
    `AVERAGEIFS()`
    
    AUG1: Range, AUG2: Condition, AUG3: Value Range, …
    
- Pythonに関する補足
    
    

### 算術平均（相加平均）

$$
A=\frac{1}{n}\sum_{i=1}^{n}k_{i}
$$

### 三点平均

$$
A=\frac{Q_{1}+2Q_{2}+Q_{3}}{4}
$$

### 加重平均

$$
A=\sum_{i=1}^{n}w_{i}x_{i}\quad(\sum_{i=1}^{n}w_{i}=1)
$$

### 幾何平均

$$
A=\sqrt[n]{x_{1}\times x_{2}\times x_{3}\times ... \times ...x_{n}}
$$

### 調和平均

$$
A=\frac{1}{\frac{1}{n}\sum_{i=1}^{n}\frac{1}{x_{i}}}
$$

![Captura de pantalla 2024-05-26 a la(s) 22.28.48.png](1dataset%20cdc76bec8e304d7aabbcce142464e12b/Captura_de_pantalla_2024-05-26_a_la(s)_22.28.48.png)

## Median

データを小さい順・大きい順に並べた時の、中心の値。もし中心の値が2個ある場合はその平均値。

|  | Excel | Python | 定義 | メリット | デメリット | 例 |
| --- | --- | --- | --- | --- | --- | --- |
| 中央値 | `MEDIAN()` | `st.median()`
`st.median_low()`
`st.median_high()` |  | 平均値に比べ、外れ値に影響を受けづらい。 |  |  |
- Python
    
    `st.median_low()`は、中央値が二つの数字にまたがる際、二数の平均ではなく小さい方の数字を中央値として返すコマンド。
    
    `st.median_high()`は、中央値が二つの数字にまたがる際、二数の平均ではなく大きい方の数字を中央値として返すコマンド。
    

## Mode

最も頻繁に現れる値。

|  | Excel |  | 定義 | メリット | デメリット | 例 |
| --- | --- | --- | --- | --- | --- | --- |
| 最頻値 | `MODE.SNGL()`
`MODE.MULT()` |  |  |  |  |  |

## Max & Min

|  | Excel | 定義 | メリット | デメリット | 例 |
| --- | --- | --- | --- | --- | --- |
| 最小値 | `MIN()`
`MINA()`
`MINIFS()` | データの中で最も小さい値 |  | 外れ値に影響を受けやすいこと。 |  |
| 最大値 | `MAX()`
`MAXA()`
`MAXIFS()` | データの中で最も大きい値。 |  |  |  |

## Order

|  | Excel | 定義 | メリット | デメリット | 例 |
| --- | --- | --- | --- | --- | --- |
| 最大値からカウントしてn番目の値を返す | `LARGE()` | 全てのデータの合計を、データの個数で割る。 |  | 外れ値に影響を受けやすいこと。 |  |
| 最小値からカウントしてn番目の値を返す | `SMALL()` | 最小値と最大値とその周辺の観測値を除いて算術平均をとる。あらかじめ「外れ値」は定義しておく。 |  |  |  |
| 順位を返す | `RANK.EQ()`
※1
`RANK.AVG()`
※2 |  |  |  |  |

# 2. Deviance

## 2.1. 変動

|  | Excel | 定義 | メリット | デメリット | 例 |
| --- | --- | --- | --- | --- | --- |
| 変動 | `DEVSQ()` | 各データの偏差の2乗、の合計。 |  |  |  |

## 2.2. 分散

`赤字の関数`では

- 空のセル
- 文字列
- 論理値

のセルは無視される。

`青字の関数`では

- 空のセルは無視される。
- 文字列は0と見做される。
    
    <aside>
    ❗
    
    この機能のために正しい結果を得られなくなる可能性がある。
    
    </aside>
    
- 論理値は以下のように見做される。
    - `TRUE` が1
    - `FALSE` が0

|  | Excel | 定義 | メリット | デメリット | 例 |
| --- | --- | --- | --- | --- | --- |
| 分散（標本分散？） | `VAR.P()`
`VARP()`
`VARPA()` | 変動をデータの数で割ったもの。
各データの偏差の2乗、の平均。 |  |  |  |
| 不偏分散（標本分散？） | `VAR.S()`
`VAR()`
`VARA()` | 引数の数値を正規母集団と見做して**不偏分散**（母集団の分散の推定値）を求める。 |  |  |  |

<aside>
💡 The `.P` in `VAR.P()` stands for "Population", which means the function calculates the variance for the entire population.

The `.S` in `VAR.S()` stands for "Sample", which means the function calculates the variance for a sample of the population.

</aside>

## 2.3. 標準偏差

`赤字の関数`では

- 空のセル
- 文字列
- 論理値

のセルは無視される。

`青字の関数`では

- 空のセルは無視される。
- 文字列は0と見做される。
    
    <aside>
    ❗ この機能のために正しい結果を得られなくなる可能性がある。
    
    </aside>
    
- 論理値は以下のように見做される。
    - `TRUE` が1
    - `FALSE` が0

|  | Excel | 定義 | メリット | デメリット | 例 |
| --- | --- | --- | --- | --- | --- |
| 標準偏差（標本標準偏差？） | `STDEV.P()`
`STDEVP()`
`STDEVPA()` | 分散の平方根。標本の標準偏差を求める。 |  |  |  |
| 不偏標準偏差（標本標準偏差？） | `STDEV.S()`
`STDEV()`
`STDEVA()` | 引数の数値を正規母集団の標本とみなして、**不偏標準偏差**（母集団の標準偏差の推定値）を求める。 |  |  |  |

## 2.4平均偏差

|  | Excel | 定義 | メリット | デメリット | 例 |
| --- | --- | --- | --- | --- | --- |
| 標準偏差 | `AVEDEV()` | データの散らばり具合を表す値。平均偏差が大きいほど散らばり具合が大きい。 |  |  |  |

## 2.5. 四分位数

中央値と同様に、ちょうど良い値がない場合は補間（境界にある2つの値の平均をとること）が行われる。

**Excel**

- 文字列
- 論理値
- 空のセル

は無視される。

`QUARTILE()`と `QUARTILE.INC()`は互換可能。

`.INC`は “Include”の略で、0と100を含むことを表す。

`.EXC`は “Exclude”の略で、0と100を含まないことを表す。第二引数で0や4を指定すると `[#NUM!]`を返す。

|  | Excel | 定義 | メリット | デメリット | 例 |
| --- | --- | --- | --- | --- | --- |
| 第0四分位数=最小値 | `QUARTILE(_, 0)`
`QUARTILE.INC(_, 0)` |  |  |  |  |
| 第1四分位数 | `QUARTILE(_, 1)`
`QUARTILE.INC(_, 1)`

`QUARTILE.EXC(_, 1)` |  |  |  |  |
| 第2四分位数=中央値 | `QUARTILE(_, 2)`
`QUARTILE.INC(_, 2)`

`QUARTILE.EXC(_, 2)` |  |  |  |  |
| 第3四分位数 | `QUARTILE(_, 3)`
`QUARTILE.INC(_, 3)`

`QUARTILE.EXC(_, 3)` |  |  |  |  |
| 第4四分位数=最大値 | `QUARTILE(_, 4)`
`QUARTILE.INC(_, 4)` |  |  |  |  |

Both average deviation (or mean absolute deviation) and standard deviation are zzmeasures of dispersion in a dataset, meaning they describe the spread of the data points.

The average deviation is calculated by taking the average of absolute differences between each data point and the mean of the dataset.

The 'absolute difference' is the absolute value of the difference between two numbers. It is the positive value of the subtraction of two values, regardless of which number is larger. It's a measure of the distance between these two values on the number line.

On the other hand, the standard deviation is calculated by taking the square root of the average of the squared differences from the mean.

The primary difference between the two lies in how they handle outliers. The standard deviation is more sensitive to outliers because it squares the differences. This means that a large outlier could significantly affect the standard deviation. The average deviation, by using absolute differences instead of squares, is less influenced by outliers.

# 3. Misc.

## 歪度・尖度

|  | Excel | 定義 | メリット | デメリット | 例 |
| --- | --- | --- | --- | --- | --- |
| 歪度 | `SKEW()`
`SKEW.P()` |  |  |  |  |
| 尖度 | `KURT()`
 |  |  |  |  |

$$
\frac{n(n+1)}{(n-1)(n-2)(n-3)}\sum(\frac{x_{i}-\bar{x}}{s})^{4}-\frac{3(n-1)^{2}}{(n-2)(n-3)}\\{}\\n:標本の数\\x_{i}:各データの値\\\bar{x}:算術平均\\s: 標準偏差
$$