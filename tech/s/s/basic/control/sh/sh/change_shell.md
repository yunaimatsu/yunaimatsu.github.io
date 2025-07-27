---
layout: '@layout/Layout.astro'
---
# 本稿の前提
使用OS: Unix/Linux, Unix-/Linux-like distro(Ubuntu, CentOSなど)
# 現在使ってるシェルを確認しよう
```shell
echo $SHELL
```
これで、現在自分が使っているシェルが表示されます。
僕は以下のように帰ってきました。
```shell
echo $SHELL
/bin/sh
```

# 使用できるシェルの一覧を表示させよう
下のコマンドを実行すると、
```shell
cat /etc/shells
```
`cat`: ファイルの内容を表示するためのコマンドです。
`/`: ルートディレクトリを表します。
`etc/`: ET CETERAの略で、OSやソフトに関する設定ファイルが保管されているフォルダです。
`shells`: システム上で利用可能なシェルのリストが含まれているファイルです。

僕は以下のように表示されました。
```shell
$ cat /etc/shells
# List of acceptable shells for chpass(1).
# Ftpd will not allow users to connect who are not using
# one of these shells.

/bin/bash
/bin/csh
/bin/dash
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
# chsh `-s`
```

# Shellを変更する
`cat /etc/shells`の表示結果の中から任意のシェルを選択します。僕は`/bin/zsh`にします。
```shell
chsh -s /bin/zsh
```
`chsh`: *Ch*ange *sh*ellの略です。
`-s`: *S*hellの略です。この後にシェルのパス（住所）が来ることを表します。
`/`: ルートディレクトリを表します。
`bin/`: `bin`ディレクトリという、バイナリ（ゼロイチ）のファイルが保管されたフォルダを表します。
`zsh`: Z Shellというシェルの一種です。
# ターミナルの再起動
さて、これで無事に変更できたでしょうか。一度、冒頭で紹介したコマンドを実行してみましょう。
```shell
echo $SHELL
```
僕は、変更前の`/bin/sh`と表示されました。実は、シェルの変更を反映させるためには、一度ターミナルからログアウトする必要があります。下のどちらかのコマンドでログアウトできます。ログアウトした後は、普通にターミナルのウィンドウないしタブを閉じましょう。
```shell
logout
```
```shell
exit
```
そして再びターミナルを開きます。
```shell
echo $SHELL
```
僕のターミナルには`/bin/zsh`が返ってきました。
これで、無事にシェルを変えることが出来ました。