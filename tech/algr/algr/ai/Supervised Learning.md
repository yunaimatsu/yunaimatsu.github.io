# Supervised Learning

- コンテンツの種類による分類
    
    音声
    
    音楽
    
    言語
    
    画像
    

# Basis

- Terminology
    
    <aside>
    💡
    
    There are many ways how `input` and `output` are called
    
    </aside>
    
    |  | Input | Output |
    | --- | --- | --- |
    | Input or Output | Input variable | Output variable |
    | explanation | Explanatory variable | Explained variable |
    | dependency | Independent variable | Dependent variable |
    | Example/Instance | Training data | Supervision data |
- 機械学習一般で、各入力データが持つfeatureに着目し、それらをVectorの各次元に対応させる方法。

Input data are used in the form of vector $\boldsymbol{x}=\mathbb{R}^{d}(d\textrm{ is size of the vector})$ whose elements are real-number value.

The features of the input data correspond to each dimension of the vector.

- Weight vector (Mapping)
    
    

<aside>
💡 教師あり学習では、回帰と分類が行われる。

</aside>

# Regression

> Output is quantitive
> 

# Classification

> Output is qualificative i.g. class, category, label
> 
> 
> Learn the relation$f:x\longmapsto y$
> 

### Non-structured prediction

Inputを、実数が要素のベクトルで表現する。特徴量表現

1. binary
    
    特徴ベクトルと重みベクトルの積の正例(Positive example, y=1と分類される)・負例(Negative example, y=0と分類される)で二つに分ける。
    
    [Perceptron](Supervised%20Learning%20956457ebb2b54179920238f73d9e9758/Perceptron%200dc1281e02fe4c6893af3947b46e76e4.md)
    
2. multiclass

### Structured prediction

## Training data(Supervision data): collection of case.

$$
\textrm{MSE}=\frac{1}{n}\sum^{n}_{1}(y_{i}-\hat{y_{i}})^{2}=\frac{1}{n}
$$

Case: A pair of Input and Output

$x^{(n)}$ is input while $y^{(n)}$ is output

$$
\mathbb{D}=\{(x^{(1)},y^{(1)}),(x^{(2)},y^{(2)}),...,(x^{(n)},y^{(n)})\}
$$

# Process of  learning

1. Train, Validation, Testの三つにデータを分ける。
2. Model building
3. Hyperparameter setting
4. Model learning
    1. Forward propagation
    2. Backward propagation

[【2022 年版】自然言語処理・NLP おすすめ書籍 10 選](https://blog.kikagaku.co.jp/book-nlp)

[自然言語処理とチャットボット: AIによる文章生成と会話エンジン開発](https://youtube.com/playlist?list=PLcd5jOpoEDGDFoGndHM1EMYYjQdwDM-JN)

[『音声言語処理と自然言語処理』](Supervised%20Learning%20956457ebb2b54179920238f73d9e9758/%E3%80%8E%E9%9F%B3%E5%A3%B0%E8%A8%80%E8%AA%9E%E5%87%A6%E7%90%86%E3%81%A8%E8%87%AA%E7%84%B6%E8%A8%80%E8%AA%9E%E5%87%A6%E7%90%86%E3%80%8F%2017acf6bb4260477bb839fca95e53619f.md)

[NLPと言語コーパス](Supervised%20Learning%20956457ebb2b54179920238f73d9e9758/NLP%E3%81%A8%E8%A8%80%E8%AA%9E%E3%82%B3%E3%83%BC%E3%83%8F%E3%82%9A%E3%82%B9%20ccebe74694fd468985433f88bb375c33.md)

[NLPで使うソフト一覧](Supervised%20Learning%20956457ebb2b54179920238f73d9e9758/NLP%E3%81%A6%E3%82%99%E4%BD%BF%E3%81%86%E3%82%BD%E3%83%95%E3%83%88%E4%B8%80%E8%A6%A7%209465aef09f654a9ba58847e0a749e2c2.md)

[NLP, Corpus](Supervised%20Learning%20956457ebb2b54179920238f73d9e9758/NLP,%20Corpus%20c05466bf6c9e40b5adbf7656bcf7ab85.md)

- ロジスティック回帰
    - ロジスティック回帰モデル
        
        $\bm{x}$が$\hat{y}=1$として分類される確率を求める関数。
        
        パラメータは