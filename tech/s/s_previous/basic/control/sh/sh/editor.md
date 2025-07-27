# そもそも`cat`すら使いこなせていない!?

|コマンド|意味|
|---|---|
|`cat -n`|数字をふる|
|`cat -b`|空行以外に数字を振る|
|`cat -s`|連続した空行を1行の空白にする|
|`cat -E`|行末を`$`で表す|
|`cat -T`|`Tab`キーを`^\|`に|


## `cat -n` せめて数字は振ろう
数字を振ることで、ChatGPTに投げるときに "○行目を修正して"などとコミュニケーションがしやすくなる。
また、エラーコードには大抵、
> 何行目の何列目(何列目)で起きてます

という
```
$ cat -n example.txt

1 Hello World!
2 ¡Hola mundo!
3 Bonjour monde!
```
## 空欄が目立つファイルなら `cat -b`で
```
$ cat -n example.txt

1 Hello World!
2 ¡Hola mundo!


3 Bonjour monde!

4 こんにちは世界！
```

# 列番号の表示方法をカスタマイズする`nl` 

# チラ見コマンド3つ
## 最初の方をチラ見する`head`
## 最後の方をチラ見する`tail`(`tailf`)
