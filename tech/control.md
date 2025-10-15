---
layout: '@layout/Layout.astro'
---
# 入出力制御方式
コンピュータは様々な機器とデータのやり取りを行う。この時の入出力を制御する方法のこと。基本的にはCPUが中心となってデータの転送する。

### 1. プログラム制御方式
(I/O装置からメモリへのデータ転送を)CPUが直接制御する方式。
データの転送は**随時CPUのレジスタを経由**して行われる。
デメリット: 低速な入出力処理にCPUが掛かりっ切りだと処理効率が悪い。

### 2. DMA制御方式
Direct Memory Access制御方式
1. CPUでDMA controlerに命令を送る。
2. DMAが記憶装置を操作し、CPUが求めていたデータを取得する。
3. CPUに返す。
4. 転送が終わったら割り込みを発生させて終了をCPUに通知
#### DMA controlerとは？
Direct Memory Access: 直接メモリにアクセスするためのコントローラ
専用の制御回路DMA controlerがメモリとI/O device間のデータ転送
1. CPUはDMA controlerに対して制御信号を送る
2. 以後のデータ転送はDMA controlerが代行して管理

↓拡張

### 3. チャネル制御方式
I/O制御用のCPUを備えた**チャネル**という専用装置が、Memory-I/O device間のデータ転送を自律的に行う
チャネル接続という専用のバスを使って転送を行う
その間にCPUがバスを使用しても競合が起きない。
### What is the difference between DMA and Channel control?
**DMA** focuses on reducing CPU load for high-speed transfers
**Channel control** handles more complex I/O operations across multiple devices with dedicated control hardware
CPU・DMA controler・HDD・メモリの関係を頭に入れておく。