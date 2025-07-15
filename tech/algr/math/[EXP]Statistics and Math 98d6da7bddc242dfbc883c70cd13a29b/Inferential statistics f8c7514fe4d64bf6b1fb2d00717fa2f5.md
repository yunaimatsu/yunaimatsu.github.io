# Inferential statistics

**`推定`**：標本（を確率変数として統計量の従う確率分布を用いて）から母数 $\theta$ を求めようとする

**`検定`**：母数 $\theta$ の仮説はあるが、その真偽を判断する

# Sample survey

全ての対象を調査するのが非現実的な時は、いくつかの標本sampleをとってそれらで統計値を出す。

- 具体例
    - テレビの視聴率
    - 投票調査
    - 世論調査
    - パソコン普及率
    - 人口統計
    - 市場調査
    - 顧客満足度調査
    - 薬品検査

## 手順

1. 抽出
2. サンプルの特徴・特性を見つける
3. 母集団の特徴・特性を推定
4. 推定の真偽を検定

## 1. 抽出

- 抽出の方法
    1. 復元抽出
    2. 非復元抽出

母集団の要素の個数が

1. 無限
    1. 復元抽出と非復元抽出でも結果は同じ
2. 有限
    1. ある程度以上
        1. 近似的に復元・非復元抽出の結果は等しいとみなせる。
        2. 抽出法の違いによる影響を考慮しないで済む。
        3. 確率・統計の方法を用いることができる。
            1. 各要素に確率を付随させる
            2. 母集団の確率分布・要素と確率変数
    2. ある程度以下
        1. 復元抽出と非復元抽出では結果は異なりうる
            1. 母集団の要素の個数が少ないほど取り出された要素1個の存在価値が大きくなる（情報量が大きくなる）

## 2. サンプルの統計量から母集団の統計量を推定する

標本の代表値から、母集団の代表値を推測する。

## Estimation

<aside>
<img src="https://www.notion.so/icons/light-bulb_lightgray.svg" alt="https://www.notion.so/icons/light-bulb_lightgray.svg" width="40px" /> Population parameter $\theta$

- population mean $\mu$
- population variance $\sigma^{2}$
- population proportion $p$
</aside>

を求める方法は以下2通り。

| 推定方法 | イメージ |
| --- | --- |
| 点推定 | $\theta$ はズバリ **$\hat{\theta}$** である |
| 線推定 | $\theta$ は(95%か99%の確率で) $a$ と $b$ の間である |

## Point estimation

$$
\hat{\theta}=T(x_{1},x_{2},x_{3},...,x_{n})
$$

以上の計算をし、 $\hat{\theta}$ を $\theta$ とみなす。

| **Key** | **Value** |
| --- | --- |
| Input | $x_{1},x_{2},x_{3},...,x_{n}$ |
| Function | $T$ |
| Output | $\hat{\theta}$ |

$$
\theta = E[T(X_{1},X_{2},X_{3},...,X_{n})]
$$

が成り立つなら、この $T(X_{1},X_{2},X_{3},...,X_{n})$を$\theta$を普遍推定量という

### 不偏推定量

実際の標本の大きさは無限に大きいものではない（=中心極限定理が適用できない）ため、母平均の推定値は、実際の値と完全には一致しない。

Standard error 

推定量がどのくらい正しいものかを表す。standard deviation of sample data

## Interval estimation

$$
P(a\le\theta\le b)=1-\alpha
$$

| **Key** | **Value** |
| --- | --- |
| Input | $x_{1},x_{2},x_{3},...,x_{n}$ |
| Function | $T$ |
| Output | $a, b$ |

- Inferential
    
    [Basic theory](Inferential%20statistics%20f8c7514fe4d64bf6b1fb2d00717fa2f5/Basic%20theory%20252c5eb5ad3f4bd3a395e400324b617e.md)
    
    ### 全てを対象でデータを集めるのは非現実的である。
    そのため、
    母集団から標本を取り出す
    標本調査をして、その特性となる値を全体(母集団)を特徴付ける値(母数)と考える。
    
    [english termology in statistics](Inferential%20statistics%20f8c7514fe4d64bf6b1fb2d00717fa2f5/english%20termology%20in%20statistics%202ea7ec80e2bc4fdcbcf70a574646d1de.md)
    
    - 母集団universe/population
        - 有限個の要素からなる
        - 無限個の要素からなる
    - 要素を取り出す
        - 復元抽出sampling with replacing
            
            一度取り出した要素を再び母集団に戻してまた抽出する
            
        - 非復元抽出sampling without replacing
            
            一度取り出した要素を二度と母集団に戻さないで抽出していく
            
    - 母集団は、多いほど良い。、
        
        確率pで起こる事象において、試行回数を増やすほど、その事象が実際に起こる確率はpに近づく
        
        大数の法則を元にすると、母集団から抽出された標本から母平均を推測する場合には、サンプルサイズが大きくなるほどより正確に母平均を推測できるということが分かります
        
    
    [抽出方法](Inferential%20statistics%20f8c7514fe4d64bf6b1fb2d00717fa2f5/%E6%8A%BD%E5%87%BA%E6%96%B9%E6%B3%95%2042912416a86b4244a8c1ce7c35c30da6.md)
    
    抽出方法の組成構造
    
    [[state of universe], [manner of sampling]]
    
    [[finite], [with replacing]]
    
    要は、取り出した集団の中でとったデータが母集団とあってるのか確かめるのがこの作業。
    
    確率変量
    ↓
    
    [確率分布（統計学の最たる道具）](Inferential%20statistics%20f8c7514fe4d64bf6b1fb2d00717fa2f5/%E7%A2%BA%E7%8E%87%E5%88%86%E5%B8%83%EF%BC%88%E7%B5%B1%E8%A8%88%E5%AD%A6%E3%81%AE%E6%9C%80%E3%81%9F%E3%82%8B%E9%81%93%E5%85%B7%EF%BC%89%20277337a37630467a811e5701cb4f297d.md)
    
    ↓
    
    [推定](Inferential%20statistics%20f8c7514fe4d64bf6b1fb2d00717fa2f5/%E6%8E%A8%E5%AE%9A%20f030a1d2b2f14e718a9ab08e8f39463a.md)
    
    ↓
    
    [検定](Inferential%20statistics%20f8c7514fe4d64bf6b1fb2d00717fa2f5/%E6%A4%9C%E5%AE%9A%20f6ed6e96daa14717bc695139e70cb9a2.md)
    
    母集団の特徴となる値母数θを
    母集団から取り出した標本=確率変数
    とみなして統計量の従う確率分布を用いて推測する
    初めから母数θ関する情報を与えられているが、その情報が果たして本当なのかを統計をした確率分布を用いて判断する作業を統計学で、
    
    最も重要な道具=確率分布（これ、今では納得できる）を使うという共通項。
    
    ![image.jpg](Inferential%20statistics%20f8c7514fe4d64bf6b1fb2d00717fa2f5/image.jpg)
    

# Hypothesis testing

## 1. 仮説 $H_{0}$ と $H_{1}$を立てる

否定（棄却）したいが綺麗に計算できる仮説を帰無仮説 $H_{0}$ とする。

証明（採択）したいが綺麗に計算できない仮説を対立仮説 $H_{1}$ とする。

## 2. 確率変数 $T$ の実現値 $t$ がthreshold(有意水準 $\alpha$ 或いは危険率 $\alpha$ )以上になるかどうか調べる。

To elaborate on each type of test:

1. Right-tailed test (右側検定): This is a one-sided test where the alternative hypothesis states that the true value of the parameter is greater than what is specified in the null hypothesis. The critical region is in the right tail of the distribution[1].
2. Left-tailed test (左側検定): This is also a one-sided test, but the alternative hypothesis states that the true value of the parameter is less than what is claimed in the null hypothesis. The critical region is in the left tail of the distribution[1].
3. Two-tailed test (両側検定): In this case, the alternative hypothesis does not specify a direction. It simply states that the null hypothesis is incorrect. The critical regions are in both tails of the distribution[1][2].

The main difference between one-tailed (right or left) and two-tailed tests is that one-tailed tests have only one critical region, while two-tailed tests have two. This affects how we interpret the results and calculate p-values[1][4].

Citations:
[1] [https://www.ncl.ac.uk/webtemplate/ask-assets/external/maths-resources/statistics/hypothesis-testing/one-tailed-and-two-tailed-tests.html](https://www.ncl.ac.uk/webtemplate/ask-assets/external/maths-resources/statistics/hypothesis-testing/one-tailed-and-two-tailed-tests.html)
[2] [https://bookdown.org/content/50a3178d-5432-44a3-bb5c-1718ca3e1fe2/3-2-one-sided-vs-two-sided-tests.html](https://bookdown.org/content/50a3178d-5432-44a3-bb5c-1718ca3e1fe2/3-2-one-sided-vs-two-sided-tests.html)
[3] [https://stats.stackexchange.com/questions/601928/p-value-in-one-vs-two-sided-tests](https://stats.stackexchange.com/questions/601928/p-value-in-one-vs-two-sided-tests)
[4] [https://en.wikipedia.org/wiki/One-_and_two-tailed_tests](https://en.wikipedia.org/wiki/One-_and_two-tailed_tests)
[5] [https://stats-stackexchange-com.translate.goog/questions/452296/two-one-sided-hypothesis-tests-instead-of-a-two-sided-test?_x_tr_hl=es&_x_tr_pto=rq&_x_tr_sl=en&_x_tr_tl=es](https://stats-stackexchange-com.translate.goog/questions/452296/two-one-sided-hypothesis-tests-instead-of-a-two-sided-test?_x_tr_hl=es&_x_tr_pto=rq&_x_tr_sl=en&_x_tr_tl=es)

### Left-tailed test

![image-1722172507187.jpg4303862667082641540.jpg](Inferential%20statistics%20f8c7514fe4d64bf6b1fb2d00717fa2f5/936a410e-d73a-4dc0-a8d1-5cbb2d2c2ec8.png)

![image-1722172515386.jpg9069314523439227365.jpg](Inferential%20statistics%20f8c7514fe4d64bf6b1fb2d00717fa2f5/48504573-a60a-4316-9994-434de0917f73.png)

![image-1722173125511.jpg3253473728257746506.jpg](Inferential%20statistics%20f8c7514fe4d64bf6b1fb2d00717fa2f5/image-1722173125511.jpg3253473728257746506.jpg)

### Right-tailed test

![image-1722172478623.jpg987496447901277382.jpg](Inferential%20statistics%20f8c7514fe4d64bf6b1fb2d00717fa2f5/286df7c6-d0cd-4b4d-959a-5a16302feedb.png)

![image-1722172492770.jpg8715241842332047314.jpg](Inferential%20statistics%20f8c7514fe4d64bf6b1fb2d00717fa2f5/ded26b14-963c-459a-9fe6-89535ff1f2f1.png)

![image-1722173153823.jpg8637805806235736784.jpg](Inferential%20statistics%20f8c7514fe4d64bf6b1fb2d00717fa2f5/image-1722173153823.jpg8637805806235736784.jpg)

### Two-tailed test

![image-1722172405167.jpg5795221742640795289.jpg](Inferential%20statistics%20f8c7514fe4d64bf6b1fb2d00717fa2f5/8e9def95-a4cc-4ce7-90fb-737c60bc2f45.png)

![image-1722172466712.jpg8148427225701638235.jpg](Inferential%20statistics%20f8c7514fe4d64bf6b1fb2d00717fa2f5/3be2388e-1bc6-4fa6-97cb-75ad654f41ba.png)

![image-1722173171354.jpg4612772565458577062.jpg](Inferential%20statistics%20f8c7514fe4d64bf6b1fb2d00717fa2f5/image-1722173171354.jpg4612772565458577062.jpg)

![Screenshot 2024-07-28 at 21.39.52.png](Inferential%20statistics%20f8c7514fe4d64bf6b1fb2d00717fa2f5/Screenshot_2024-07-28_at_21.39.52.png)

![Screenshot 2024-07-28 at 21.40.03.png](Inferential%20statistics%20f8c7514fe4d64bf6b1fb2d00717fa2f5/Screenshot_2024-07-28_at_21.40.03.png)

![Screenshot 2024-07-28 at 21.40.13.png](Inferential%20statistics%20f8c7514fe4d64bf6b1fb2d00717fa2f5/Screenshot_2024-07-28_at_21.40.13.png)

![Screenshot 2024-07-28 at 21.40.41.png](Inferential%20statistics%20f8c7514fe4d64bf6b1fb2d00717fa2f5/Screenshot_2024-07-28_at_21.40.41.png)

![Screenshot 2024-07-28 at 21.40.55.png](Inferential%20statistics%20f8c7514fe4d64bf6b1fb2d00717fa2f5/Screenshot_2024-07-28_at_21.40.55.png)

![Screenshot 2024-07-28 at 21.41.17.png](Inferential%20statistics%20f8c7514fe4d64bf6b1fb2d00717fa2f5/Screenshot_2024-07-28_at_21.41.17.png)