# sequent command -CMD

- echo
- pype
    
    `*<command1>* **|** *<command2>*`
    
    **[MS-DOS のみ]**
     パイプを使う場合[環境変数「TEMP」](https://www.pg-fl.jp/program/dos/doscmd/env_temp.htm)
    が指定されている必要があります。
    
    **[Windows NT系]**
     **[拡張構文]**
     [Call](https://www.pg-fl.jp/program/dos/doscmd/call.htm)
    でバッチファイル内のラベルを呼び出す場合、そのCallの出力をパイプで送ることはできません([出力リダイレクト](https://www.pg-fl.jp/program/dos/doscmd/pr_3.htm)
    でファイルに出力することは可能です)。
    
- if first one has succeeded
    
    コマンド1 && コマンド2
    
    コマンド1が成功した場合だけコマンド2が実行されます。
    
- if first one has failed
    
    コマンド1 || コマンド2