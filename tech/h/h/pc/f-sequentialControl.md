---
layout: '@layout/Layout.astro'
---
# Execution of instruction
命令実行の4つのstage(**命令取り出し**/**解読**/**オペランド読み出し**/**命令実行**)からなる。
以下の1つ1つをステージと呼ぶ。
## **Instruction fetch**(命令とオペランドをフェッチ)
プログラムカウンタ-命令を取り出して命令レジスタに. MemoryからCPUへ命令とオペランドをとってくる
1. プログラムカウンタに格納されたアドレスの命令をfetch
2. 命令にinstruction fieldとoperand fieldがあるが、それぞれinstruction registerに格納   
3. program counter値を1増
メモリ(主記憶装置)とやりとりをする。主記憶に格納された命令を順番に取り出して実行する方式。ノイマン型。Von Nemann Bottleneck

<details>
    <summary style="font-weight: bold;">
        CPUと主記憶のやり取り多すぎ
    </summary>
    <p>
        CPUと主記憶の間でやりとりが頻繁に行われるので両者間のデータ転送能力がコンピュータの性能向上を妨げる。キャッシュメモリで解決。
    </p>
</details>

## **Decode**
(命令を処理)命令をデコーダで解読し、ALUに処理内容を伝える信号を飛ばす
1. instruction register instruction fieldに格納された命令コードをdecoderで解読
2. 演算装置に信号を飛ばすなどする

## **Operand fetch**
(オペランドを処理/:命令部がデコーダで解読されて演算処理へ信号)
オペランド部にデータを指定してもらって汎用レジスタにデータを送る、
Operand部にadressが格納されているので、そのメモリのデータを演算装置の汎用レジスタに格納する。

命令デコーダのオペランド（対象データ）フィールドでは、（データ量が多いから）様々な方法で工夫してアドレスを指定してある。

* effective address
* addressing mode

オペランド部は、色々な方法で対象データ指定する

https://youtu.be/qCYXgbMzhLA?si=Xq-Wb3xOplSk5gXy

- immediate addressing

オペランド部に対象データそのもの自体を格納する

- direct addressing

operand部に、メモリadressを格納する                    

- indirect addressing

operand部に入ってるのはadress
そのadressにもadressが格納されている
データの変更の自由度がより高くなる。                                      

- indexed addressing

<aside>
💡 computing deviceにindex registerがある場合

</aside>

operand部の値 + index registerの値 = この値はadress。                                index registerは等間隔で増えていく。                                プログラミングで多い、連続したデータを扱う時に便利。                           

- base addressing

computing deviceにbase registerがある場合

プログラムが補助記憶装置から主記憶装置に移された時の先頭adressを記憶しているので、メモリのどこに来ても、プログラムのデータ自体が連続してくっついていれば、base adress + operand部のnumberのadressに格納されているデータは常に同じになる。                                相対的に同じで便利。                           


ベースレジスタがない場合、プログラミングカウンタで代用する。

- relative addressing

<aside>
💡 computing deviceにbase registerがない場合
</aside>

operand + program counter
ベースレジスタを持たないCPUのベースアドレス指定方式の代わり。
実行する命令を一時的に記憶