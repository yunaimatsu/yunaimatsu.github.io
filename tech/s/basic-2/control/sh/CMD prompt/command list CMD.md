# command list CMD

- echo
    
    文字を出力します。また、バッチファイルにおいて実行するコマンドを画面に出力するかどうかを切り替えます。
    
    Echoコマンドは文字列の画面への出力の他、「ON」または「OFF」を指定することでエコーバックを切り替えることができます。エコーバックはバッチファイルなどにおいて実行コマンドを画面に出力するものを指します。
    
    バッチファイルにおいて@文字を用いて「@echo off」と記述されることが多くあります。
    
    これは、「echo off」だけだと「echo off」というコマンドそのものが画面に出力されてしまうため、1コマンドの出力を抑える効果のある「@」を併用して「@echo off」と記述しているということになります。
    
- 
- **attrib**
    
    **ファイル属性を管理する**
    
    ファイルの属性を設定・解除する。フォルダに対しても処理することができる。
    
    フォルダ内の全ファイルの属性を表示する(=attrib *.*)
    
- attrib *.txt
    
    テキストファイルの属性を表示する
    
- attrib +R *.txt
    
    全てのテキストファイルに読み取り属性を追加する
    
- attrib -H -R
    
    全てのファイルの隠し属性と読み取り属性を解除する
    
- md ◯◯
    
    make directory
    
- mkdir ◯◯
    
    カレントディレクトリの直下に◯◯というディレクトリを作成する。
    
- mkdir c:\◯◯
    
    cドライブ直下にディレクトリを作成
    
- mkdir c:\new_directory\sub_directory
    
    2つのディレクトリを作成（有効時）
    

# del ◯◯

attention!

the deleted files cant be restored

`del test`
 とだけ入力し、Tab キーを押すと、コマンドプロンプトが自動的に `del "Test File.txt"`
 と入力してくれます。

# 

ディレクトリを削除する、ディレクトリは絶対パス・相対パスどちらでも指定できる。

ディレクトリ◯◯を削除する

the deleted files cant be restored

# rd /s directory

# rd /s directory

| rd directory |  |
| --- | --- |
|  | ファイルやサブディレクトリも含めて削除する（確認メッセージを表示） |
| rd /s /q directory | ファイルやサブディレクトリも含めて削除する（確認メッセージは非表示） |

ネストされたファイルとサブディレクトリを含め、ディレクトリ全体を削除するには、`/s`
 フラグを使用します。

ネストされたファイル・システムとは、**別のファイル・システム内に含まれたファイル・システムのマウント・ポイント**
です。

- tree
    
    現ディレクトリ以下のフォルダ構造を表示する
    2023/03/22:めちゃ面白い
    
    2023/03/31not so
    
    - just display upper 2 hierarchies
        
        `tree | findstr /R /C:"^├" /C:"^│  ├" /C:"^│  └" /C:"^└"`
        
        `^├`
        
        `^│  ├`
        
        `^│  └`
        
        `^└`
        
- tree /A
    
    ASCII文字で表示する
    
- tree /A /F
    
    ASCII文字を使って、全てのファイル名も表示する
    
- tree /f
    
    ファイルとフォルダーをツリー表示
    
    ◯◯というファイル・フォルダを強制的に消去する
    
- move [対象ファイル名] [移動先フォルダ名]
- **findstr [オプション] [探す文字列] [探す対象の[ファイル名](https://wa3.i-3-i.info/word14398.html)]**
    
    **＜検索文字列＞**に基本的には、記号や空白文字といった英数字以外の文字を使用する場合は、全て囲むようにした方がよい。特に正規表現では、コマンドプロンプトで利用する特殊文字と機能がバッティングするものも少なくないので、囲む方が無難
    
    [**ファイル](https://wa3.i-3-i.info/word1100.html)の中にある[文字列](https://wa3.i-3-i.info/word1436.html)を[検索](https://wa3.i-3-i.info/word1197.html)するときに使うコマンド**
    
    [Regex of findstr](command%20list%20CMD%205dfbfa0385814391ae4d640cc6d95bcf/Regex%20of%20findstr%20c092a7c5982c465bbf2d0b4ebbe5eda5.md)
    
    [findstrのオプション](command%20list%20CMD%205dfbfa0385814391ae4d640cc6d95bcf/findstr%E3%81%AE%E3%82%AA%E3%83%95%E3%82%9A%E3%82%B7%E3%83%A7%E3%83%B3%2025dd977b06b649c6b4e2cfeb7cd8fedc.md)
    
- dir
    
    その[フォルダ](https://wa3.i-3-i.info/word198.html)の中に入っている[ファイル](https://wa3.i-3-i.info/word1100.html)の一覧を表示してくれます