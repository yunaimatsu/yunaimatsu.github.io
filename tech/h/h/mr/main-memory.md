## Main memory `DRAM`

- Acceleration of memory
    
    メモリインターリーブ
    
    主記憶装置の中を複数の区画に（バンク）に分割する。
    
    主記憶装置内の番地は分割した区画を横断するように割り当てられている。そのため、複数バンクを同時にアクセスすることで、連続した番地のデータを一気に読み出すことができる。
    
    ### memory_interleave
    
    主記憶装置そのものを高速化する技術。
    
    メモリを分割して、連続したデータを一気に取得する。キャッシュいらん。
    
    一連のアクセスを複数のbankに分割し、並列的に処理することで高速化を図る。
    
    ![DE96DF76-9A18-41DC-BD8D-4C39886FE52A.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d36be01f-c315-4c3e-890b-9b2043984cc4/1f43e828-42af-4afb-8baa-d0575175e8e6/DE96DF76-9A18-41DC-BD8D-4C39886FE52A.png)
    
    memory_bank0: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, …
    
    ↓ bank0にアクセスしたそれに続くbankもできるだけ並行に連続的にアクセスする。
    
    | memory_bank0 | 0, 4, 8, 12, 16, 20, 24, 28, … |
    | --- | --- |
    | memory_bank1 | 1, 5, 9, 13, 17, 21, 25, 29, … |
    | memory_bank2 | 2, 6, 10, 14, 18, 22, 26, 30, … |
    | memory_bank3 | 3, 7, 11, 15, 19, 23, 27, 31, … |
    
    [メモリバンクとは - IT用語辞典](https://e-words.jp/w/メモリバンク.html#:~:text=メモリバンクとは、コンピュータ,されることが多い%E3%80%82)
    
- バイトオーダ
    
    Jonathan Swift's *Gulliver's Travels*.
    
    In this satirical novel, the terms refer to two opposing groups that argue over the correct way to crack an egg, metaphorically representing trivial disputes.
    
    The computer science community later adopted [these terms] to describe different ways computers store data, specifically the order in which bytes are arranged in **memory**.
    
    - For a more detailed explanation and historical context, you can refer to sources like:
        1. Tanenbaum, Andrew S., and Herbert Bos. *Modern Operating Systems.* 4th ed., Pearson, 2014.
        2. “Big Endian vs. Little Endian.” *The Art of Assembly Language*, Randall Hyde, No Starch Press, 2010.
    
    特に様々な機種が混在してデータをやり取りするネットワークの世界では、プロトコルごとにネットワークバイトオーダを規定して、データの送り手が相互に変換しながらデータを送り合う。
    
- CPUがメモリを参照する具体的な流れ
    
    CPUからメモリにアドレスバスを送る（データの番地）。
    
    ↓
    
    メモリからCPUにデータバスを送る（実際のデータoperandを呼び出す）。
    

1度で読み取れるデータの大きさには限界がある。それがnビットCPUということ。

CPUが必要な命令・データ（オペランド）を取り出しやすいような物置き場。料理で喩えるなら、よく使う包丁やすぐ調理する材料を置いておく場所ってかんじ。冷蔵庫はSSD。

**主記憶装置(半導体メモリ)**

一定の領域ごとに目盛りで区切られている。その領域の中に命令・データが保存される。領域ごとにadressがasignされている。adressはnumberであるため、それをdesignateすることで命令やデータの読み書きができる。データの読み書き→アドレスの指定