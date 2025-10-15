---
layout: '@layout/Layout.astro'
---
# M.J.Flynnによる分類
|  | **Single Instruction** | **Multiple Instructions** |
| --- | --- | --- |
| **Single Data-stream** | SISD | MISD |
| **Multiple Data-stream** | SIMD 同一命令を複数のデータに適用し、同一の処理を並列の実行 | MIMD 複数のprocesserを結び、それぞれのprocesserに異なる命令を振り分け、それぞれで異なるデータを並行して扱う方式

### アダムールの法則

$$
\text{Speedup} = \frac{1}{(1 - P) + \frac{P}{N}}
$$

### **If memory is combined or not**

**Loosely-coupled**: sharing memory (and the OS that operates it)

many-to-many

**Tightly-coupled**: not sharing memory (and the OS that operates it)

one-to-many

![Multiprocessor_1](/b/cs/multiprocessors_1.png)
![Multiprocessor_2](/b/cs/multiprocessors_2.jpg)


- Multiple processors(**Parallel processing, Multi-processor system**)
    
    **whether** 
    
    ```mermaid
    graph TD
      q{"How roles are asigned"}
      smp["Symmetrical Multiple Processor"]
      amp["Asymmetrical Multiple Processor"]
      q -->|それぞれのプロセッサに対して役割を決める| smp
      q -->|全てのプロセッサを同等に扱う| amp
    ```
    
    多対多は、数が多いほど性能が良い。
    
    一対多は、メモリへのアクセスが競合してしまうので多くても性能の良さに比例はしない。
    
    **それぞれのprocesser**