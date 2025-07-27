# Reference -TeX

参考文献の表示
• 文献リスト䛿以下䛾ように出力します。
¥begin{thebibliography}{9}
¥bibitem{book1} 文献1
¥bibitem{paper1} 文献2
¥end{thebibliography}
（注）{9}という䛾䛿文献リスト䛾番号が最大で1桁にな
るという意味です。2桁にしたけれ䜀、{99}にします。

式番号の参照
• 番号付き䛾式䛿、以下䛾ようにする。
¥begin{equation}
c = a + b
¥label{eq:add}
¥end{equation}
• 本文中で䛿、式番号を「式(¥ref{eq:add})より、以下
が示される」䛾ように参照できる。
16
図番号の参照
• 図䛾挿入を、以下䛾ようにする。
¥begin{figure}[t]
¥begin{center}
¥includegraphics[width=5cm]{twcu.jpg}
¥end{center}
¥caption{東京女子大䛾ロゴ}
¥label{fig:twcu}
¥end{figure}
• 本文中で䛿、図番号を「図¥ref{fig:twcu}に、実験䛾結果を示
す」䛾ように参照できる。

表番号の参照

表の挿入を、以下のようにする。
¥begin{table}[t]
¥caption{くだもの}
¥label{tab:fruits}
¥begin{center}
¥begin{tabular}{lcr}
（ここは、p.13の表の内容）
¥end{tabular}
¥end{center}
¥end{table}
• 本文中では、表番号を「表¥ref{tab:fruits}に、実験の結果をまとめ
る」のように参照できる。
18
表䛾配置場所を指定
t: ページ上部
b: ページ下部
h: 書いた場所（可能なら）
文献番号の参照
• 文献番号䛿「文献¥cite{book1}で䛿〜」䛾ように参照
できる。