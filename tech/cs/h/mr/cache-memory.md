## Cache memory `SRAM`

- データをMemoryからCPUへ送る
    
    メモリのデータ、すぐにCPUに使えないかも。
    
    - 局所参照性
        - 時間的局所性：最近使われたデータほど再度アクセスされる可能性が高い。
        - 空間的局所性：使われたデータの近くにあるデータは、再度アクセスされる可能性が高い。
        - 逐次的局所性：使われたデータの隣は、逐次アクセス（シーケンシャルアクセス）される可能性が高い。
    - **ヒット率**
        
        目的とするデータがキャッシュメモリに入ってる確率
        
        実行アクセス時間
        
        Here's the KaTeX code for the mathematical formula representing the execution access time of cache memory:
        
        $$
        T_{\text{exec}} = p \cdot T_{\text{cache}} + (1-p) \cdot (T_{\text{cache}} + T_{\text{main}})
        \\
        \begin{array}{l}\\
        \text{Where: }\\
        T_{\text{exec}}\text{ is the execution access time}\\
        p \text{ is the hit rate}\\
        T_{\text{cache}} \text{ is the access time for cache memory}\\
        T_{\text{main}}\text{ is the access time for main memory}
        \end{array}
        $$
        
        $$
        
        $$
        
        ヒット率を$x\%$とすると、キャッシュメモリに目的データがある確率：$x\%$
        
        キャッシュメモリではなく主記憶装置にある確率$(1-x/100)\%$
        
    - Cache Memory Allocation Methods
        
        ブロックという一定長の単位ごとにキャッシュメモリへの割り当てを行う。
        
        この時、ブロおくをどの場所に格納するか管理する方式として、次の3つがある。
        
        - Direct mapping cache
            
            main_memoryのblock(data)をcache_memoryの特定のblock(data)に対応させる方式。
            
            ハッシュ演算と呼ばれる一定の計算式のよって主記憶のブロック番号からキャッシュ内のロケーションを求め、データの割り当てを行う。
            
            $$
            あるmain\_memoryのblock\longmapsto{あるcache\_memoryのblock}
            $$
            
        - Fully associative cache
            
            main_memoryのaddressとは無関係にblock(data)がcache_memoryの空いてるどのblockの位置を決める。キャッシュメモリの空いてる場所を任意に使用することができる。しかし、そのための管理が複雑。読み出すたびに全体を検索する必要があり、遅い。
            
        - Set-associative cache
            
            cache_memoryの内部の$n$個のblockを特定のsetとmain_memoryのblockを対応させる。
            
            キャッシュメモリとメモリブロックを対応づけされた複数のセットに分けて、そのセット内ならどこへでも空いてる場所をしようすることができる。前述した2方式の折衷案的な割り当て方法。
            
            $n$-way set-associative cache
            
            [セットアソシアティブ方式とは](https://medium-company.com/セットアソシアティブ方式/)
            
- データをCPUからMemoryへ送る
    
    書いた結果、すぐにメモリに移せないかも。
    
    ただし、読み出しと違って書き込みの場合は「書いて終わり」とはいかない。更新した内容をどこかのタイミングで主記憶装置にも反映する必要がある。
    
    - ライトスルー方式
        
        キャッシュメモリへの書き込みを行う際に、主記憶装置へも同意に書き込みを行う。
        
        メモリとキャッシュのcoherenceがあって安心
        
    - ライトバック方式
        
        普段はキャッシュメモリにしか書き込みを行わない。キャッシュメモリから追い出されるデータが発生した際に、その内容を主記憶装置へと書き戻す。
        
        高速だが、制御が難しい。
        
- **伝送単位**
    
    **word**(CPU —— cache_memory): fast
    
    **block**(cache_memory —— main_memory): slow
    

Installing chache_memory is speed-up method of main_memory

但し、主記憶全体をランダムにアクセスするプログラムではhit_ratioが低く、chache_memoryの効果は期待できず

- アクセスされたdataが近い将来に再びアクセスされる可能性が高い場合
- 連続領域にあるdataをaccessするlocality_of_referenceがある場合

### **reading** and **writing** cache memory

**`reading`**

- **effective_access_time**: average access time for processors
    
    ヒット率をもとに重み付けをして出す、データを取得する時間の平均。
    
    - **hit**: that the required data is in cache_memory
        
        hit_ratio: ratio of hit, ratio of access to cache_memory
        
    - **mishit**: that the required data is **not** in cache_memory
        
        NFP(not_found_prbability): ratio of mishit, ratio of access to main_memory
        
    - AP試験では、cache memoryやmain memoryの容量というeffective access timeの計算に全く関係ない数値が紛れたりするらしいので、試験対策としては一応、注意。
    
    $$
    \text{run access time\\=[access time TO cache memory(ns)]*[H.R]\\+[access time TO main memory(ns)]*[1-H.R]\\H.R:hit ratio(ratio that necesarry data is in cache memory)}
    $$
    

**`writing-out`**

書き込み命令が実行される

→registerに実行結果を格納。

→まず、cache_memoryのdataを書き換える。

→だが、いずれmain_memoryに描き戻されなければならない。

いつ戻るか、でwrite_throughとwrite_backで分かれる。

- **`write_through`**: キャッシュとメモリ、どちらにもデータを書き込む。
    
    遅いが制御しやすい(cache_memoryとmain_memoryのdataのcoherenceが保たれる)。
    
- **`write_back`**: まずはcache_memoryに全て入れる。入り切らなくなったらmain_memoryに入れる。
    
    main_memoryへの書き込み頻度が減流ので速いが、(溢れはじめたら/mishitが発生し、cache_memoryのdataが追い出されたら)制御しづらくなる。