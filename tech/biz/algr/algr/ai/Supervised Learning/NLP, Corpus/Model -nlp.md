# Model -nlp

<aside>
💡 言語モデル（系列変換モデル）は兎に角、生成確率を計算するだけ！

言語モデルはLM(N-gram LMとNeural LM)やSeq2seqに大分され、その中でも沢山ある。しかし結局は全て、$P(y_{t}|Y_{0:t-1})$をどうモデル化するかの違いである。

</aside>

# Formulation

$$
P(\boldsymbol{Y})=P(y_{0})\prod ^{T+1}_{t=1}P(y_{t}|\boldsymbol{Y}_{0:t-1})\\{}\\P(y_{t}|Y_{0:t-1})
$$

$P(\boldsymbol{Y})=P(y_{0})\prod ^{T+1}_{t=1}P(y_{t}|\boldsymbol{Y}_{0:t-1})\\P(y_{t}|Y_{0:t-1})$の計算方法とモデル化の方法によってLMの特徴が決まる。

$\boldsymbol{Y}=(y_{1}, y_{2},..., y_{T})$

→精度が良い言語モデルは、$P(y_{t}|Y_{0:t-1})$を精度よくモデル化したもの。

1. N-gram LM

$P(y_{t}|Y_{0:t-1})\approx P(y_{t}|\boldsymbol{Y}_{t-n+1:t-1})$

1. 
- evaluation
    
    [Perplexity](Model%20-nlp%2097baa8a9de9f4aabaa7eeecd134c67d5/Perplexity%205b20e44ce3fe43679c67fcf6a0307875.md)
    
- the usage
    
    [自然さ判定](Model%20-nlp%2097baa8a9de9f4aabaa7eeecd134c67d5/%E8%87%AA%E7%84%B6%E3%81%95%E5%88%A4%E5%AE%9A%20604a342a2b8d44aa901acb565a1c8244.md)
    
    [テキスト生成](Model%20-nlp%2097baa8a9de9f4aabaa7eeecd134c67d5/%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E7%94%9F%E6%88%90%2080c38ef10fd24e4a9de82859a487721a.md)
    
    [汎用特徴抽出器（事前学習済みモデル）](Model%20-nlp%2097baa8a9de9f4aabaa7eeecd134c67d5/%E6%B1%8E%E7%94%A8%E7%89%B9%E5%BE%B4%E6%8A%BD%E5%87%BA%E5%99%A8%EF%BC%88%E4%BA%8B%E5%89%8D%E5%AD%A6%E7%BF%92%E6%B8%88%E3%81%BF%E3%83%A2%E3%83%86%E3%82%99%E3%83%AB%EF%BC%89%20c9b1fb15c9094941bcc743d19a1667bf.md)
    

## List of language model

- 1. Language Model
    
    <aside>
    💡 Model the probability of generating text or words
    
    </aside>
    
    [N-gram LM](Model%20-nlp%2097baa8a9de9f4aabaa7eeecd134c67d5/N-gram%20LM%202f4dfd9fb1ff49788f8b4a99f4ba626b.md)
    
    ### Neural LM
    
    [FFNN LM](Model%20-nlp%2097baa8a9de9f4aabaa7eeecd134c67d5/FFNN%20LM%20604bc0b3d8d34512a12a468e885a3abe.md)
    
    [RNN LM](Model%20-nlp%2097baa8a9de9f4aabaa7eeecd134c67d5/RNN%20LM%20fac10f973a9d4740b1dd67b05242e8ef.md)
    
    [Transformer](Model%20-nlp%2097baa8a9de9f4aabaa7eeecd134c67d5/Transformer%20b2d7c53dd3a1449eaa4529aca4b57296.md)
    
    ### Sequence
    
    <aside>
    💡 系列変換モデルは、言語モデルに「入力文」という条件が付いた条件付き言語モデルといえる。つまり、系列変換モデルは言語モデルから独立した何か特別なものではなく、言語モデルの延長線上にある。
    
    </aside>
    

[Seq2seq Model](Model%20-nlp%2097baa8a9de9f4aabaa7eeecd134c67d5/Seq2seq%20Model%207f8d09e1b50c4c61ba192e753ee2811e.md)