# Break/Continue

例外が発生した時点で、実行が停止される。

# break, continue

## break

文を使うことでbreak文を含むブロックの処理を抜けて後続の処理を行う。

while, for, switchの中で使える。

## continue

繰り返し処理の中で呼び出された場合…

1. 現在のループ中の処理を中断する。
2. 次のループをブロックの最初から実行する。

## label

```jsx
labelName: {break labelName;}
labelNmae: if(...){break labelName;}
labelName: switch(...){case ...: break labelName;}
labelName: for(...){continue labelName;}
labelName: for(...){break labelName;}
labelName: while(...){continue labelName;}
labelName: while(...){break labelName;}
```

ブロック`{}`に対して名前を与えることができる。

continue文やbreak文でラベルを指定することで、そのブロックに対してcontinueやbreakの操作を行う。

continueと組み合わせて使う場合

繰り返し処理(for文, while文)のブロックに付与したラベルのみ指定可能

break文と組み合わせて使う場合

繰り返し処理以外のブロックも指定可能

- 非推奨：goto文擬
    
    ![Screenshot 2024-09-04 at 6.01.27.png](Break%20Continue%2011f496eb7c9080b990aeff3a240ad8ee/Screenshot_2024-09-04_at_6.01.27.png)