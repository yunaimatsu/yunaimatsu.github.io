# Excel

これらの関数を丸暗記する必要がある。中には、「それよりこうこうした方がいい」と難癖をつけてくる人も多いだろう。しかし、Excelとは、超大衆向けしたノーコードツールとしては圧倒的に豊富な機能を持っており、プログラミングスクールに騙されてプログラミングを始めた人間がねちねちやってる作業はほぼ全てExcelでできるのだ。もっと言えば、Pandasを使えると良い。

そして、ある企業のDX化などにはより低水準の言語がいいのは言うまでもない。

- sum
    
    ```
    =sum(value, value, value, value, ...)
    =sumif(key, condition<boolean expression>, range of value)
    =sumifs(key, condition1(), condition1)
    ```
    
- lookup
    
    `v↔h`
    
    - vlookup1
    - hlookup
    
    `x`
    
    - xlookup
- getTextInformation
    
    ### What is “-B”?
    
    ```
    zenkaku wo 1moji count: -
    zenkaku wo 2moji count: -b
    ```
    
    文字列を参照する方法plain text -> ("___")
    
    In follows,  “amount” means number of desired texts.
    
    ### Count number of text
    
    ```
    =len()
    =lenb()
    ```
    
    ### Get some characters
    
    ```
    =left("text", number)
    =leftb("text", number)
    
    =right("text", number)
    =rightb("text", number)
    
    =mid("text", a, b)
    =midb("text", a, b)
    a文字目からb文字取り出す
    
    =find("@", "yunaimatsu@gmail.com", "1")
    =findb("@", "yunaimatsu@gmail.com", "1")
    *"yunaimatsu@gmail.com"というテキストから"1"bit目から検索したら"@"が何bit目？このbit目を返す。
    ```
    
    ```
    
    =textbefore("yunaimatsu@gmail.com", "@", 1)
    *get text before "1"st "@" from "yunaimatsu@gmail.com"
    
    =textafter("yunaimatsu@gmail.com", "@", 1)
    *get text after "1"st "@" from "yunaimatsu@gmail.com"
    
    =textsplit("yunaimatsu@gmail.com", "@", ".")
    *1-cell text into square array
    ```
    
- 文字関連
    - ja
        
        ```
        =phonetic()
        ```
        
    - roman_script
        
        capital↔small
        
        ```
        =upper()
        =lower()
        ```
        
    - script_code
        
        ```
        =code()
        =unicode()
        =char()
        =unichar()
        ```
        

| データの個数 | [COUNT／COUNTA　数値や日付、時刻またはデータの個数を求める](https://dekiru.net/article/4511/) |
| --- | --- |
|  | [COUNTBLANK　空白セルの個数を求める](https://dekiru.net/article/4512/) |
|  | [COUNTIF　条件に一致するデータの個数を求める](https://dekiru.net/article/4513/) |
|  | [COUNTIFS　複数の条件に一致するデータの個数を求める](https://dekiru.net/article/4514/) |
| 平均値 | [AVERAGE／AVERAGEA　数値またはデータの平均値を求める](https://dekiru.net/article/4517/) |
|  | [AVERAGEIF　条件を指定して数値の平均を求める](https://dekiru.net/article/4518/) |
|  | [AVERAGEIFS　複数の条件を指定して数値の平均を求める](https://dekiru.net/article/4519/) |
|  | [TRIMMEAN　極端なデータを除外して平均値を求める](https://dekiru.net/article/4521/) |
|  | [GEOMEAN　相乗平均（幾何平均）を求める](https://dekiru.net/article/4522/) |
|  | [HARMEAN　調和平均を求める](https://dekiru.net/article/4523/) |
| 最大値と最小値 | [MAX／MAXA　数値またはデータの最大値を求める](https://dekiru.net/article/4529/) |
|  | [MAXIFS　複数の条件を指定して最大値を求める](https://dekiru.net/article/14598/) 2019 |
|  | [MIN／MINA　数値またはデータの最小値を求める](https://dekiru.net/article/4530/) |
|  | [MINIFS　複数の条件を指定して最小値を求める](https://dekiru.net/article/14599/) 2019 |
| 度数分布 | [FREQUENCY　区間に含まれる値の個数を求める](https://dekiru.net/article/4531/) |
| 中央値と最頻値 | [MEDIAN　数値の中央値を求める](https://dekiru.net/article/4532/) |
|  | [MODE.SNGL／MODE　数値の最頻値を求める](https://dekiru.net/article/4533/) |
|  | [MODE.MULT　複数の最頻値を求める](https://dekiru.net/article/4534/) |
| 順位 | [LARGE　大きいほうから何番目かの値を求める](https://dekiru.net/article/4536/) |
|  | [SMALL　小さいほうから何番目かの値を求める](https://dekiru.net/article/4537/) |
|  | [RANK.EQ／RANK　順位を求める（同じ値のときは最上位の順位を返す）](https://dekiru.net/article/4538/) |
|  | [RANK.AVG　順位を求める（同じ値のときは平均値の順位を返す）](https://dekiru.net/article/4539/) |
| 百分位数 | [PERCENTILE.INC／PERCENTILE　百分位数を求める（0%と100%を含めた範囲）](https://dekiru.net/article/4540/) |
|  | [PERCENTILE.EXC　百分位数を求める（0%と100%を除いた範囲）](https://dekiru.net/article/4541/) |
|  | [PERCENTRANK.INC／PERCENTRANK　百分率での順位を求める（0%と100%を含めた範囲）](https://dekiru.net/article/4542/) |
|  | [PERCENTRANK.EXC　百分率での順位を求める（0%と100%を除いた範囲）](https://dekiru.net/article/4543/) |
| 四分位数 | [QUARTILE.INC／QUARTILE　四分位数を求める（0%と100%を含めた範囲）](https://dekiru.net/article/4547/) |
|  | [QUARTILE.EXC　四分位数を求める（0%と100%を除いた範囲）](https://dekiru.net/article/4548/) |
| 分散 | [VAR.P／VARP　数値をもとに分散を求める](https://dekiru.net/article/4549/) |
|  | [VARPA　データをもとに分散を求める](https://dekiru.net/article/4550/) |
|  | [VAR.S／VAR　数値をもとに不偏分散を求める](https://dekiru.net/article/4551/) |
|  | [VARA　データをもとに不偏分散を求める](https://dekiru.net/article/4552/) |
| 標準偏差 | [STDEV.P／STDEVP　数値をもとに標準偏差を求める](https://dekiru.net/article/4553/) |
|  | [STDEVPA　データをもとに標準偏差を求める](https://dekiru.net/article/4554/) |
|  | [STDEV.S／STDEV　数値をもとに不偏標準偏差を求める](https://dekiru.net/article/4555/) |
|  | [STDEVA　データをもとに不偏標準偏差を求める](https://dekiru.net/article/4556/) |
| 平均偏差 | [AVEDEV　数値をもとに平均偏差を求める](https://dekiru.net/article/4967/) |
| 変動 | [DEVSQ　数値をもとに変動を求める](https://dekiru.net/article/4970/) |
| 標準化変量 | [STANDARDIZE　数値データをもとに標準化変量を求める](https://dekiru.net/article/4557/) |
| 尖度と歪度 | [SKEW　歪度を求める（SPSS方式）](https://dekiru.net/article/4563/) |
|  | [SKEW.P　歪度を求める](https://dekiru.net/article/4564/) |
|  | [KURT　尖度を求める（SPSS方式）](https://dekiru.net/article/4565/) |
| 回帰直線による予測 | [FORECAST　回帰直線を使って予測する](https://dekiru.net/article/4566/) |
|  | [FORECAST.LINEAR　回帰直線を利用して将来の値を予測する](https://dekiru.net/article/14785/) 2019 |
|  | [TREND　重回帰分析を使って予測する](https://dekiru.net/article/4567/) |
|  | [SLOPE　回帰直線の傾きを求める](https://dekiru.net/article/4568/) |
|  | [INTERCEPT　回帰直線の切片を求める](https://dekiru.net/article/4569/) |
|  | [LINEST　重回帰分析により係数や定数項を求める](https://dekiru.net/article/4570/) |
|  | [STEYX　回帰直線の標準誤差を求める](https://dekiru.net/article/4571/) |
|  | [RSQ　回帰直線の当てはまりのよさを求める](https://dekiru.net/article/4971/) |
| 指数平滑法による予測 | [FORECAST.ETS　指数平滑法を利用して将来の値を予測する](https://dekiru.net/article/14639/) 2019 |
|  | [FORECAST.ETS.CONFINT　指数平滑法を利用して予測された値の信頼区間を求める](https://dekiru.net/article/14761/) 2019 |
|  | [FORECAST.ETS.SEASONALITY　指数平滑法を利用して予測を行うときの季節変動の長さを求める](https://dekiru.net/article/14783/) 2019 |
|  | [FORECAST.ETS.STAT　指数平滑法を利用して予測を行うときの各種の統計量を求める](https://dekiru.net/article/14784/) 2019 |
| 指数回帰曲線による予測 | [GROWTH　指数回帰曲線を使って予測する](https://dekiru.net/article/4968/) |
|  | [LOGEST　指数回帰曲線の定数や底などを求める](https://dekiru.net/article/4969/) |
| 相関係数 | [CORREL／PEARSON　相関係数を求める](https://dekiru.net/article/4576/) |
| 共分散 | [COVARIANCE.P／COVAR　共分散を求める](https://dekiru.net/article/4577/) |
|  | [COVARIANCE.S　不偏共分散を求める](https://dekiru.net/article/4578/) |
| 母集団に対する信頼区間 | [CONFIDENCE.NORM／CONFIDENCE　母集団に対する信頼区間を求める（正規分布を利用）](https://dekiru.net/article/5005/) |
|  | [CONFIDENCE.T　母集団に対する信頼区間を求める（t分布を利用）](https://dekiru.net/article/5004/) |
| 下限値～上限値の確率 | [PROB　下限値から上限値までの確率を求める](https://dekiru.net/article/5003/) |
| 二項分布 | [BINOM.DIST／BINOMDIST　二項分布の確率や累積確率を求める](https://dekiru.net/article/5007/) |
|  | [BINOM.DIST.RANGE　二項分布の一定区間の累積確率を求める](https://dekiru.net/article/5006/) |
|  | [BINOM.INV／CRITBINOM　二項分布の累積確率が基準値以下になる最大値を求める](https://dekiru.net/article/5008/) |
|  | [NEGBINOM.DIST　負の二項分布の確率を求める](https://dekiru.net/article/5012/) |
|  | [NEGBINOMDIST　負の二項分布の確率を求める](https://dekiru.net/article/5011/) |
| 超幾何分布 | [HYPGEOM.DIST　超幾何分布の確率を求める](https://dekiru.net/article/5010/) |
|  | [HYPGEOMDIST　超幾何分布の確率を求める](https://dekiru.net/article/5009/) |
| ポアソン分布 | [POISSON.DIST／POISSON　ポアソン分布の確率や累積確率を求める](https://dekiru.net/article/4579/) |
| 正規分布 | [NORM.DIST／NORMDIST　正規分布の確率や累積確率を求める](https://dekiru.net/article/4583/) |
|  | [NORM.INV／NORMINV　累積正規分布の逆関数の値を求める](https://dekiru.net/article/4584/) |
|  | [NORM.S.DIST　標準正規分布の累積確率を求める](https://dekiru.net/article/4585/) |
|  | [NORMSDIST　標準正規分布の累積確率を求める](https://dekiru.net/article/5019/) |
|  | [NORM.S.INV／NORMSINV　累積標準正規分布の逆関数の値を求める](https://dekiru.net/article/4586/) |
|  | [PHI　標準正規分布の確率を求める](https://dekiru.net/article/5015/) |
|  | [GAUSS　標準正規分布で平均から累積確率を求める](https://dekiru.net/article/5013/) |
| 対数正規分布 | [LOGNORM.DIST／LOGNORMDIST　対数正規分布の確率や累計確率を求める](https://dekiru.net/article/5016/) |
|  | [LOGNORM.INV／LOGINV　累積対数正規分布の逆関数の値を求める](https://dekiru.net/article/5014/) |
| カイ二乗分布 | [CHISQ.DIST　カイ二乗分布の確率や累積確率を求める](https://dekiru.net/article/4587/) |
|  | [CHISQ.DIST.RT／CHIDIST　カイ二乗分布の右側確率を求める](https://dekiru.net/article/5018/) |
|  | [CHISQ.INV　カイ二乗分布の左側確率から逆関数の値を求める](https://dekiru.net/article/5017/) |
|  | [CHISQ.INV.RT／CHIINV　カイ二乗分布の右側確率から逆関数の値を求める](https://dekiru.net/article/5020/) |
| カイ二乗検定 | [CHISQ.TEST／CHITEST　カイ二乗検定を行う](https://dekiru.net/article/4588/) |
| t分布 | [T.DIST　t分布の確率や累積確率を求める](https://dekiru.net/article/4591/) |
|  | [T.DIST.RT　t分布の右側確率を求める](https://dekiru.net/article/4592/) |
|  | [T.DIST.2T　t分布の両側確率を求める](https://dekiru.net/article/4593/) |
|  | [TDIST　t分布の右側確率や両側確率を求める](https://dekiru.net/article/4594/) |
|  | [T.INV　t分布の左側確率から逆関数の値を求める](https://dekiru.net/article/4595/) |
|  | [T.INV.2T／TINV　t分布の両側確率から逆関数の値を求める](https://dekiru.net/article/4596/) |
| t検定 | [T.TEST／TTEST　t検定を行う](https://dekiru.net/article/4597/) |
| Z検定 | [Z.TEST／ZTEST　正規母集団の平均を検定する](https://dekiru.net/article/4602/) |
| F分布 | [F.DIST　F分布の確率や累積確率を求める](https://dekiru.net/article/4603/) |
|  | [F.DIST.RT／FDIST　F分布の右側確率を求める](https://dekiru.net/article/4604/) |
|  | [F.INV　F分布の左側確率から逆関数の値を求める](https://dekiru.net/article/4605/) |
|  | [F.INV.RT／FINV　F分布の右側確率から逆関数の値を求める](https://dekiru.net/article/4606/) |
| F検定 | [F.TEST／FTEST　F検定を行う](https://dekiru.net/article/4607/) |
| フィッシャー変換 | [FISHER　フィッシャー変換を行う](https://dekiru.net/article/5084/) |
|  | [FISHERINV　フィッシャー変換の逆関数を求める](https://dekiru.net/article/5086/) |
| 指数分布関数 | [EXPON.DIST／EXPONDIST　指数分布の確率や累積確率を求める](https://dekiru.net/article/5085/) |
| ガンマ分布 | [GAMMA　ガンマ関数の値を求める](https://dekiru.net/article/5087/) |
|  | [GAMMA.DIST／GAMMADIST　ガンマ分布の確率や累積確率を求める](https://dekiru.net/article/5088/) |
|  | [GAMMA.INV／GAMMAINV　ガンマ分布の逆関数の値を求める](https://dekiru.net/article/5089/) |
|  | [GAMMALN.PRECISE／GAMMALN　ガンマ関数の自然対数を求める](https://dekiru.net/article/5090/) |
| ベータ分布 | [BETA.DIST　ベータ分布の確率や累積確率を求める](https://dekiru.net/article/4610/) |
|  | [BETADIST　ベータ分布の累積分布関数の値を求める](https://dekiru.net/article/4611/) |
|  | [BETA.INV／BETAINV　ベータ分布の累積分布関数の逆関数の値を求める](https://dekiru.net/article/4612/) |
| ワイブル分布 | [WEIBULL.DIST／WEIBULL　ワイブル分布の値を求める](https://dekiru.net/article/4613/) |
- シリアル値
    
    1日: 1.0
    
    1h: 1/24
    
    1min: 1h/60 → [1h = 1/24]/60