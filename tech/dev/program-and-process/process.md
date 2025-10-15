# Process(Job/Task) management
## Program & Process
* Generate **process**
* Check the state of **process**
* Kill the **process**

Process Scheduler

ジョブ（人間から見た処理）管理はカーネルの機能の一つ。
    
    <aside>
    💡 ジョブ管理は、概念の問題なので、簡単。
    </aside>
    
    - バッチ処理（至極当然の話）
        
        複数のジョブを登録しておく。空き時間をつくらず次々と働かせる
        
    
    ファイルの中にコマンドを列挙しておき、そこに書かれた内容を順番に実行する。バッチファイルをたくさん追加しておいて、自動実行させていける仕組みがジョブ管理。
    
    スプーリング
    
    - マスタスケジューラ
        
        マスタスケジューラは、ジョブの実行をジョブスケジューラに依頼する。自身は実行状態の監視に努め、必要に応じて各種メッセージを利用者に届ける。
        
    - ジョブスケジューラ
        
        依頼を受け取ったジョブスケジューラは、以下の流れでジョブを実行していく。
        
        - リーダ
            
            依頼されたジョブを入力して、ジョブ待ち列に登録する。
            
        - イニシエータ
            
            優先度の高いジョブを持ってきて、ジョブステップに分解する。CPUや主記憶装置など、ハードウェア資源が空くのを待って、ジョブステップを割り当て、その実行をタスク管理に依頼する。
            
        - ターミネータ
            
            実行を終えたジョブに割り当てられたハードウェア資源を解放する。
            
        - ライタ
            
            優先度の高いものから順に、ジブ結果を出力する。
            
        - スプーリング
            
            CPUとI/Oは、処理速度の差が大きい。よって、I/Oデータを一旦高速な磁気ディスクに蓄えるようにし、CPUが入出力装置を待たなくていいようにする。
            
            入力時：入力データを磁気diskに留めておいて、必要になったらCPUが取ってくる。
            
            出力時：出力データを一時的に磁気diskに蓄えておいて、後で出力させる
            
            - 磁気ディスクはどこに？
                
                　スプーリング（Spooling）において、情報を一時的に書いておく磁気ディスクは、**補助記憶装置**にあります。
                
                解説:
                
                - **スプーリング**は、ジョブやタスクを実行するために、データを一時的に保存しておく仕組みです。例えば、印刷ジョブを処理する際に、データが一度補助記憶装置（通常は磁気ディスク）に保存され、その後、プリンターがデータを処理できるときに取り出されます。
                - **補助記憶装置**は、主記憶装置（RAM）とは異なり、データを長期間保存するための記憶装置です。磁気ディスクやSSDなどが補助記憶装置に該当します。
                
                したがって、スプーリングで使用される磁気ディスクは補助記憶装置にあります。
                

↓分解

- タスク（OS/プロセッサからみた処理）処理
    
    <aside>
    💡 コンピュータ周りなので、専門的でやや複雑。
    
    </aside>
    
    - Task state transition
        - RUN
        - READY
            - 
        
        ```mermaid
        graph TD
            CreateTask[Task Creation] --> ReadyState[Ready State: READY]
            ReadyState -- "Get CPU usage rights!" --> RunState[Run State: RUN]
            RunState -- "Lose CPU usage rights!" --> ReadyState
            RunState -- "I/O processing occurs!" --> WaitState[Wait State: WAIT]
            WaitState -- "I/O processing ends!" --> ReadyState
            RunState -- "Task termination" --> End[Task Termination]
        ```
        
        ![IMG_3724.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d36be01f-c315-4c3e-890b-9b2043984cc4/78776d71-5ba9-4239-a41a-fd34b0318358/IMG_3724.jpeg)
        
        - なぜ？
            
            生成されたタスクは即座に実行されるわけではない。
            
            プログラムの処理が実行されるためには、CPUの使用権が必要です。この使用権をタスク間で効率よく回すことができるように書く状態を行ったり来たりすることになる。
            
        - READY
            - いつでも実行が可能
            - CPUの使用権が回ってくるのを待っている
            - 生成直後のタスクはこの状態になってCPUの待ち行列
        - RUN
            - CPUの使用権が与えらる
            - 実行中
        - WAIT
            - I/O処理が発生したので、その終了を待っている状態
    - OS and memory
    - Dispatcher
        
        READYのタスクに、CPUの使用権を割り当てるプログラム
        
    - Task scheduling
        
        どのタスクに使用権を割り当てるかを決めるために、タスクの実行順序を定める必要あり
        
        - 到着順方式
        - 優先度順方式
        - 動的優先順位方式
        - ラウンドロビン方式
        - 多重待ち行列方式
        - 処理時間順方式
        - イベントドリブン方式
    - Multi-programming
        
        遊休時間をなくして、CPUの有効活用をする。
        
        I/O処理時間はCPUは何もできないため、
        
    - 割り込み処理
        
        実行中のタスクを中断して、別の処理に切り替え、そちらが終わるとまた元のタスクに復帰するという処理。
        
        Classification of interrupt handling
        
        ### Internal Interrupts
        
        - **Program Interrupt**
            - Generated when exceptions such as division by zero, overflow, or memory protection errors occur when writing to main memory.
        - **SVC (Super Visor Call) Interrupt**
            - Occurs when an input/output processing request or a kernel call (supervisor call) is issued.
        - **Page Fault**
            - Occurs when there is an access to a non-existent page in virtual memory (Page Fault).
        
        ### External Interrupts
        
        - **Input/Output Interrupt**
            - Occurs when input/output device operations are completed or interrupted.
        - **Machine Check Interrupt**
            - Triggered during hardware abnormalities, such as power failure or memory failure.
        - **Console Interrupt**
            - Occurs when input from the operator (user) is detected.
        
        ### Timer Interrupt
        
        - **Timer Interrupt**
            - Occurs when a predetermined time has elapsed.
        - Situation1
            
            
        - Situation2
- プロセス
    - 排他制御
        - 必要な理由
            
            
        - クリティカルセクション
            
            2つのタスクが同じ理由を奪い合って処理が滞る**箇所**のこと。
            
        - セマフォ
            
            Dijkstra によって発明された、排他制御のメカニズム。
            
            ![1000011342.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d36be01f-c315-4c3e-890b-9b2043984cc4/22d84c18-ebb9-47d7-9901-4d98791d003a/1000011342.png)
            
            - セマフォ変数
                
                資源を使用できる残り数（資源の共有状態を記録するため）を記録する。
                
                セマフォ変数がゼロ、つまり空いてなければその資源を使いたいタスクは待ち行列に。
                
                Initial value is often 1. Of the resource can be accessed by more tasks, the number would differ.
                
                Binary semaphore (0 or 1)
                
                General semaphore(more numbers)
                
            - P操作
                
                資源を使う時。
                
                セマフォ変数$S$が1以上の時、$S$を1減らす。つまり、ロックする。
                
            - V操作
                
                資源を使い終わった時。
                
                Sを1増やす。つまり、アンロックする。
                
            
            クリティカルセクションの処理群に差し掛かる前にロック、クリティカルセクションが終わったらアンロック。
            
        - デッドロックと資源ロックの順番
            
            2つのタスク(A, B)がある。
            
            - Aのタスク
                1. リソース1をロック
                2. リソース2をロック
            - Bのタスク
                1. リソース2をロック
                2. リソース1をロック
            
            この場合、両タスクが同時に開始すると、デッドロックが起こる。つまり、2つのタスクがどちらもお互いのV操作を待つことになる。
            
            デッドロックを防ぐため、全てのタスクにおいて、P操作をする順序は一致させる必要がある。
            
    - 同期制御
        
        依存し合うタスクの管理方法。タスクどうしを協調して実行させるための制御方法。
        
        - イベントフラグ
            
            カーネル監視下のビット列において（具体的にはどういうこと？）、ある状態のON/OFFを表す。
            
            ![1000011356.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d36be01f-c315-4c3e-890b-9b2043984cc4/07b3bff5-f028-45e1-b47d-86d7518b1b7e/1000011356.png)
            
    - タスク間通信
        
        タスク同士で、協力して動作する際、タスク同士でデータを共有する方式。
        
        ### Task Communication Methods
        
        There are several representative methods used for communication between tasks:
        
        ### 1. Shared Memory
        
        Shared memory sets up a memory area that can be used by multiple tasks, allowing for data exchange.
        
        ```mermaid
        graph LR
            TaskA[Task A] --> Data[Shared Memory]
            TaskB[Task B] --> Data
        
        ```
        
        *Text*:
        
        - Input from Task A
        - Output from Task B
        - Data exchange occurs via shared memory.
        
        ---
        
        ### 2. Message Queue
        
        A queue, in simple terms, is a waiting line. The message processing task sends data as a message to the queue, and the receiving task takes the data from the queue.
        
        ```mermaid
        graph LR
            TaskA[Task A] -- Send Message --> Queue[Queue]
            Queue -- Receive Message --> TaskB[Task B]
        
        ```
        
        *Text*:
        
        - Task A sends a message
        - Task B receives a message
        
        ---
        
        ### 3. Pipe
        
        You can think of this as a virtual pipe for data exchange. The output of one task is connected to the input of another, and data flows through the pipe.
        
        ```mermaid
        graph LR
            TaskA[Task A] -- Output --> Pipe -- Input --> TaskB[Task B]
        ```
        
        *Text*:
        
        - Data flows from Task A's output to Task B's input through the pipe.
        
        ---
        
        You can directly paste this into Notion. The diagrams are rendered using `mermaid.js` notation, and the explanations are translated into English from the original image.
        
        共有メモリ
        
        メッセージキュー
        
        パイプ
        
    - プロセス管理基礎編
    - プロセス管理応用編
- OSの仕事の内容
    
    どのジョブ/タスクをいつCPUにさせるか
    
    dipatcher: dispatchするprogram
    
    - scheduling
        
        non-emptive: 実行中のtaskを途中で止めず、OS自身は管理せず(介入せず/中断せず)、プログラム自身に処理を任せる。
        
        pre-emptive(現在の主流): OSがCPUを管理し、遊休時間をなくし、効率的に使うため。→複数のタスクをマルチプログラミング/マルチタスクする
        
        - 割り込み処理
            
            内部割り込み(プログラム内の要因)
            
            - プログラミング割り込み
                
                0で割れ、など
                
            - SVC()割り込み(supervisor call)
                
                プログラムが入出力要求するとき
                
            
            外部割り込み(プログラム外の要因)
            
            - 機械チェック割り込み
                
                ハードウェアの問題
                
            - タイマ割り込み
                
                設定された時間が経過すること
                
            - コンソール割り込み
                
                コンピュータ使用者の介入
                
            - 入出力割り込み
                
                入出力操作の動作完了時、中断時
                
        
        - 到着順方式non-emptive
            
            実行可能状態になった順番にCPUの使用権を割り当てる。
            
        - 優先順方式preemptive
            
            優先度高いtaskからCPU使用権dipatchする。
            
        - ラウンドロビン方式preemptive
            
            一定時間ごとにCPU使用権をswitch
            
    
    ジョブ
    
    →OSが細かいジョブに分解して順番待ち行列に並べる
    
    - 3つの状態を遷移しながら処理
        
        ![CFCD6625-A276-4635-BE87-CFCAE6E4330D.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d36be01f-c315-4c3e-890b-9b2043984cc4/182e3677-4d0a-4604-a143-7a7931e6489a/CFCD6625-A276-4635-BE87-CFCAE6E4330D.jpeg)
        
        - 実行可能状態
            
            CPUの処理を待っている状態。
            
            CPUの使用権さえ割り当てられれば、実行できるタスク。
            
        - 実行状態
            
            タスクが処理されている状態
            
            CPUで処理されている状態。途中で
            
        - 待機状態(I/O), I/Oが競合しない→同時に複数のI/Oが行われうる。
            
            入出力を待つ状態
            
    
    →順番がきたものからタスクに分解して実行させる
    
    →終わったものを出力待ち行列に並べる
    
- スプーリング
    
    スループットを向上させる
    

タスク（ジョブを分割したもの）管理
