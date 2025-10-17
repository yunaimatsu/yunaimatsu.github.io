# Synchronous and Asynchronous processing

# Thread

フローチャートにおいて、ある試行において実際にたどった処理のこと。
Here are the transcriptions of the three images:

ブラウザ上で JavaScript のコードが実行されるスレッドは、メインスレッドと呼びます。メインスレッドは、あくまで1つのスレッド（シングルスレッド）のため、並列してコードを実行することはありません。
そのため、メインスレッド上で JavaScript のコードが実行される場合には、必ず実行中の処理の完了を待ってから次の処理が実行されるという決まりがあります（図13.2）。また、1つの処理を複数のスレッドに分けて実行することをマルチスレッドと呼びます。マルチスレッドは並列処理とも呼ばれ、C/C++ や Java などのプログラミング言語で記述できます。

スレッドとは、プログラムの開始から終了までの一連の処理の流れのことです。JavaScript のコードは JavaScript エンジンによって1行ずつ実行されていきますが、その処理の開始から終了までを一本の糸のように表すことができることを「1つのスレッドでコードが実行されている」と表現します（図13.1）。

[The image also contains a flowchart diagram showing:]
- プログラム (Program) section with code:
  ```
  console.log( "処理A" );
  
  if( true ) {
      console.log( "処理B" );
  } else {
      console.log( "処理C" );
  }
  
  console.log( "処理D" );
  ```

- A flowchart showing the execution flow from 開始 (start) through 処理A, 処理B, 処理C, 処理D to 終了 (end), with an if文 (if statement) decision diamond and a note box stating "スレッド：プログラムの実行の流れは一本の糸のように表すことができる" (Thread: The execution flow of a program can be represented like a single thread)

# Synchrouns

# Asynchrouns
