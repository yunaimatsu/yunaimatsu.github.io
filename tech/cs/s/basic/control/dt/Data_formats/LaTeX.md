# LaTeX

コマンドはバックスラッシュからはじまる。日本語設定でバックスラッシュを打つと\になるが、コンパイル(実行)の段階でコンピュータにはバックスラッシュとして認識されるので\のままで良い。

Aの右上にB → A^BAの左上にB → A_B改行は\\塊を表すときは{ }で囲む。

# Fraction

[【LaTeX】分数のかき方とテクニック](https://mathlandscape.com/latex-frac/)

### `\frac{a}{b}`

### `\cfrac{\frac{a}{b}}{\frac{c}{d}}`

### \\frac{1}{1+\frac{1}{\sqrt{2}}}

$$
\frac{a}{b}
\\{}
\\\dfrac{\frac{a}{b}}{\frac{c}{d}}
\\{}
\\\frac{1}{1+\frac{1}{\sqrt{2}}}
$$

[Cf. -TeX](LaTeX%208f50f3cc341e4ad1b696d9453771d2cd/Cf%20-TeX%20c594e99b76534821989098d2d0e86d60.md)

[長さ一般 -TeX](LaTeX%208f50f3cc341e4ad1b696d9453771d2cd/%E9%95%B7%E3%81%95%E4%B8%80%E8%88%AC%20-TeX%20f623be67cc524f12ad48275c1d7860ea.md)

[Enzan](LaTeX%208f50f3cc341e4ad1b696d9453771d2cd/Enzan%20e113ae41f91e46fc9706a4c1daf630d8.md)

[Basis of LaTeX](LaTeX%208f50f3cc341e4ad1b696d9453771d2cd/Basis%20of%20LaTeX%20ddce578623dc4491808198dacbcab129.md)

[矢印コマンド](LaTeX%208f50f3cc341e4ad1b696d9453771d2cd/%E7%9F%A2%E5%8D%B0%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%88%E3%82%99%2071e8a20bffc24a67844948916470ca70.md)

[**自然数、整数、有理数、実数、複素数の集合**](LaTeX%208f50f3cc341e4ad1b696d9453771d2cd/%E8%87%AA%E7%84%B6%E6%95%B0%E3%80%81%E6%95%B4%E6%95%B0%E3%80%81%E6%9C%89%E7%90%86%E6%95%B0%E3%80%81%E5%AE%9F%E6%95%B0%E3%80%81%E8%A4%87%E7%B4%A0%E6%95%B0%E3%81%AE%E9%9B%86%E5%90%88%202b5be03313ee480fa06bb467f9c28beb.md)

[上付き字・下付き字](LaTeX%208f50f3cc341e4ad1b696d9453771d2cd/%E4%B8%8A%E4%BB%98%E3%81%8D%E5%AD%97%E3%83%BB%E4%B8%8B%E4%BB%98%E3%81%8D%E5%AD%97%2089c57810b42f40488f71c8500022e78b.md)

[Square Root](LaTeX%208f50f3cc341e4ad1b696d9453771d2cd/Square%20Root%208819863cb4904bc89cee4c1a82e0f8d4.md)

[Chapter -TeX](LaTeX%208f50f3cc341e4ad1b696d9453771d2cd/Chapter%20-TeX%205f97025f70294b82900cb11d161c8104.md)

[Reference -TeX](LaTeX%208f50f3cc341e4ad1b696d9453771d2cd/Reference%20-TeX%20a7c9a0ec194c4e50b49fa2727cbb07e0.md)

[chart -TeX](LaTeX%208f50f3cc341e4ad1b696d9453771d2cd/chart%20-TeX%2098afc34e9aee4b1c8eb933a532aea8e8.md)

[シグマΣ -TeX](LaTeX%208f50f3cc341e4ad1b696d9453771d2cd/%E3%82%B7%E3%82%AF%E3%82%99%E3%83%9E%CE%A3%20-TeX%2093c3686307994b0da12640d99d4840e5.md)

![E20396E6-8A36-4318-BFD5-E844AD6765A1.jpeg](LaTeX%208f50f3cc341e4ad1b696d9453771d2cd/E20396E6-8A36-4318-BFD5-E844AD6765A1.jpeg)

> Basic strucure of LaTeX document
> 
> - **`\documentclass[option1, option2, …, optionN]{document class}`**
>     - option, this is complement
>         
>         
>         | **オプション** | **概要** |
>         | --- | --- |
>         | 10pt11pt12pt | 文字サイズを10ポイントに（デフォルト）†文字サイズを11ポイントに文字サイズを12ポイントに |
>         | a4paper
>         a5paper
>         b4paper
>         b5paper | 用紙サイズを A4 サイズに（デフォルト）††用紙サイズを A5 サイズに用紙サイズを B4 サイズに用紙サイズを B5 サイズに |
>         | onecolumn
>         twocolumn | 文章を1段組に（デフォルト）文章を2段組に |
>         | oneside
>         twoside | 奇数/偶数ページを同じレイアウトに（articleとreportでのデフォルト）奇数/偶数ページを異なるレイアウトに（bookでのデフォルト） |
>         | fleqn | 数式を左寄せ出力に（デフォルトは中央寄せ) |
>         | leqno | 数式番号を左寄せ出力に（デフォルトは右寄せ) |
>         | landscape | 用紙の向きを横長に |
>         
>         †jsarticle、jsbookでは9pt、10pt、11pt、12pt、14pt、17pt、21pt、25pt、30pt、36pt、43ptを指定することができます。
>         
>     - document class, this is main
>         
>         
>         |  | **欧文(ø-)** | **和文(j-)** | **和文（新）(js-)** | **和文（縦書き）(t-)** |
>         | --- | --- | --- | --- | --- |
>         | **論文** | article | **j**article | **j**sarticle | **t**article |
>         | **本** | book | **j**book | **j**sbook | **t**book |
>         | **報告書** | report | **j**report | - | **t**report |
> - **プリアンブル。**
>     
>     文章内で使用するパッケージの読み込みなど。Cの#includeを指定するのと似ている。
>     
>     - `\topmargin = 10mm`
>     - `\usepackage{amsmath}`
> 
> **`\begin{document}`**
> 
> **本文**
> 
> LaTeX本文内での一つの改行は無視される。
> 
> 1-line break: half-widths(和文は内。)
> 
> 2-lines breaks: paragraph
> 
> **`\end{document}`**
> 

- brackets -TeX
    - style
        
        ![3C4E540C-66E2-4D06-B6F6-BE52F7986542.jpeg](LaTeX%208f50f3cc341e4ad1b696d9453771d2cd/3C4E540C-66E2-4D06-B6F6-BE52F7986542.jpeg)
        
    - size
        
        
        | 場所の指定なし | 左 | 中央 | 右 |
        | --- | --- | --- | --- |
        | `\big` | `\bigl` | `\bigm` | `\bigr` |
        | `\Big` | `\Bigl` | `\Bigm` | `\Bigr` |
        | `\bigg` | `\biggl` | `\biggm` | `\biggr` |
        | `\Bigg` | `\Biggl` | `\Biggm` | `\Biggr` |
        - example
            
            ![26CF1407-69A9-4AC4-8B9F-A08021C431C2.jpeg](LaTeX%208f50f3cc341e4ad1b696d9453771d2cd/26CF1407-69A9-4AC4-8B9F-A08021C431C2.jpeg)
            

[LaTeXの特殊文字・特別記号](LaTeX%208f50f3cc341e4ad1b696d9453771d2cd/LaTeX%E3%81%AE%E7%89%B9%E6%AE%8A%E6%96%87%E5%AD%97%E3%83%BB%E7%89%B9%E5%88%A5%E8%A8%98%E5%8F%B7%2023644c7c4bf54d91935af463831f690f.md)

^◯なら◯が上付きに

_◯なら◯が下付きに

- equality, inequality
    
    $$
    \\1.1【=】 [=] をそのまま打つ
    \\1.2【\ne】ne/neq\\{}
    \\1.3【\equiv】 バックスラッシュ+equiv
    \\1.4【\not\equiv】\equivの前に[バックスラッシュ+not]
    \\{}
    \\2.1【<,>,\nless,\ngtr】バックスラッシュ+<,>
    \\2.2【\leq,\geq,\nleq,\ngeq,\lneq,\gneq】back\_slash+leq(le),geq(ge),nleq,ngeq
    \\2.2'【\leqq,\geqq,\nleqq,\ngeqq,\lneqq,\gneqq】2.2+q
    \\2.2''【\leqslant,\geqslant,\nleqslant,\ngeqslant】2.2+slant
    $$
    
    `eq`は`-`か`=`かはっきり決まらないので、避けるべき。
    
    実は以下のコマンドは全て、コンピュータで打つことができる。ただ、$\LaTeX$を使った文章の中でコードを「コマンド」と「地の文」に峻別することで視認性が上がるというメリットはある。
    
    |  | `colon` | `Colon` |
    | --- | --- | --- |
    | `dash` ”-” | **:−**
    `\colondash`**,** `(\coloneq)`
    **−:**
    `\dashcolon`**,** `(\eqcolon)` | **::−**
    `\Colondash`
    **−::**
    `\dashColon` |
    | `eqq` ”=” | **:=**
    `\coloneqq`, `(\coloneq)`
    **:=**
    `\coloneqq`, `(\coloneq)` | **::=**
    `\Colondash`
    **=::**
    `\dashColon` |
    | `sim` ”~” | **:∼**
    `\colonsim` | **::∼**
    `\Colonsim` |
    | `approx` ”**≈**” | **:≈**
    `\colonapprox` | **::≈**
    `\Colonapprox` |
    
    |  |  |  |
    | --- | --- | --- |
    |  | \stackrel{\mathrm{def}}{=} | 定義する |
    |  | =d=d | \stackrel{\mathrm{d}}{=} |
    
    ### 記号の上にテキストを載せる
    
    ### フォントを変える。
    
    | Command | Explication |
    | --- | --- |
    | `\rm` | 非推奨。`\textrm`と`\mathrm`を区別しないバージョン。 |
    | `\textrm` | 数式モード内で。
    ローマン体にする。 |
    | `\mathrm` | 普通の文章中で。
    ローマン体にする。 |
    | `\text` | 数式モード内で。
    普通の文章を書きたいときに使う。
    フォントはデフォルト。
    ちなみに、
    数式モード内では
    \textコマンドの中でも数式が使えて便利らしい。ローマン体にこだわらなければこれが推奨される。 |