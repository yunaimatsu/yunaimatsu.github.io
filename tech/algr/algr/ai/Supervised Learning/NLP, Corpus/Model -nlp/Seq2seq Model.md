# Seq2seq Model

(Conditional Language Model)

## Encoder

入力文を読み込んで出力文を生成するのに必要な情報を作成する

入力文の各単語の単語ベクトルを受け取り、ネットワークにより合成する

Encoderの出力は$h_{i}$である。

$i$番目の単語に対応するベクトル$h_{i}$を並べたもの$H$

## Decoder

1. Get $\boldsymbol{H}$
2. Generate a sentence

## Attention mechanism