---
layout: '@layout/Layout.astro'
---
## **Execution**
(命令とオペランドを実行)
演算装置の汎用レジスタ内の対象データを演算装置ALUで演算し、結果を汎用レジスタに格納。

1. プログラム（命令列）はバイナリデータとしてメインメモリ（主記憶装置/RAM）に格納されている。
2. フェッチ動作: Adress(現在の実行位置であるメモリ上の番地)から、次に実行する命令コードをCPU内部の高速な記憶装置であるregisterに読み出す
3. その内容を実行するにはどの回路にどのような動作をさせれば良いかを決定する（デコード）。これに基づいてデコーダは様々な回路に制御信号を発し、メモリから必要なデータを取り寄せたり、レジスタや演算器（ALU）などに必要な操作を指示する。最後に処理結果をメモリに格納して一回の命令実行サイクルは終了となり、次の命令の実行に取り掛かる
- decode in general

decode: encodingによりcompressed filesの解凍や、暗号化されたデータを復号すること

decoder: hardware or software

- Clock generator

Coordinates the CPU's activities and determines its operating speed

- **control device**
- Control Unit (CU)

Coordinates the CPU's activities by sending control signals to other parts, executing program instructions, and managing the fetch-decode-execute cycle

命令を解釈し、コンピュータの動作を制御。

- **memory inside processer**

command and data wo temporalily preserve suru basho.

- Program counter

(プログラムカウンタ・プログラムレジスタ・命令アドレスレジスタ・命令カウンタ)

次に実行する命令のアドレスを格納する

- instruction register(IR)

次の命令が入ってるメモリのアドレスを格納する

- Instruction field

命令を格納

- Operand field

対象データのadressを格納

- Index register

address修飾

連続したデータの取り出しを使うために増分を格納

[in index adress style]        基準adressを記憶

- Base register

address修飾

[in base adress style]        基準adressを記憶

先頭アドレスを保持する

- Accumulator (oblete)

演算対象や演算結果を記憶

- General-purpose register

用途を限定せず、一時的な価の保持・アキュムレータの代わりに使用

- Registers

Small, fast memory units within the CPU that hold specific information[1]. Key registers include

- Program Counter (PC)

Holds the address of the next instruction

- Accumulator (ACC)

Stores calculation results

- Memory Address Register (MAR)

Holds memory addresses

- Memory Data Register (MDR)

Holds data to be stored or retrieved

- Current Instruction Register (CIR)

Stores the current instruction

- **instruction decoder**

命令解読器
汎用レジスタのデータをALUで実行
命令レジスタの命令の中身解読

- **computing device**

データの計算や演算処理。

- ALU(Arithmetic Logic Unit)

arithmetic(四則演算) and logical operations(comparison)

- 汎用レジスタ
- (base register)
- (index register)