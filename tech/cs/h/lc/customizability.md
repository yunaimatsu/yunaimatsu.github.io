---
layout: '@layout/Layout.astro'
---
# カスタムIC
通常、ICは市販のものを組み合わせて欲しい機能を備えたICを作っていきます。しかし、ある目的を達成するICを自分自身で設計してオーダメードICを作ることもあります。これを**カスタムIC**(**Custom IC**)と言います。
## ASIC(この中で、特定の用途に絞ったもの)
カスタムICの中で、ある特定の目的に絞って作ったものを**ASIC**(Application Specific Integrated Circuit)と言います。

とはいえ、オーダーメイドのICを作るのは非常に高度な技術が必要で、莫大なコストが必要です。そこで、電気を使って自由に回路を書き込むことができるPLDというものが開発されました。
# セミカスタムIC
Semi-custom IC
PLD (Programmable Logic Device)
1. PLD(Programmable Logic Device)
    1. 設計した回路を電気的に書き込むことができるIC。リーズナブル(自由にオリジナルの回路を作ることができる。再度書き換えを行うだけ)
    2. FPGA(Field Programmable Gate Array)
    3. PLD typically stands for "Programmable Logic Device," which refers to a type of electronic component used to build reconfigurable digital circuits. Here’s an enumeration of some common types of PLDs:
    4. **Simple Programmable Logic Devices (SPLD)**   - Includes Programmable Array Logic (PAL), Generic Array Logic (GAL), and Programmable Logic Array (PLA).
    5. **Complex Programmable Logic Devices (CPLD)**   - Combines multiple SPLDs on a single chip and offers a larger capacity and more complex logic functions.
    6. **Field-Programmable Gate Arrays (FPGA)**   - Contains an array of programmable logic blocks and a hierarchy of reconfigurable interconnects, allowing complex designs.
    7. **Field-Programmable Interconnect (FPI)**   - Provides programmable interconnections to customize the configuration of a circuit.
    8. **Field-Programmable System-on-Chip (FPSoC)**   - Integrates FPGA fabric with a processor core, allowing software and hardware to be designed concurrently.
    9. These devices are widely used in applications that require flexibility, such as embedded systems, digital signal processing, and telecommunications.
- SPLD (Simple Programmable Logic Device)
- CPLD (Complex Programmable Logic Device)
- FPGA (Field-Programmable Gate Array)
# 市販のICgeneral-purpose, off-the-shelf ICs.