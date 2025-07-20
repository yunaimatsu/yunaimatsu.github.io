---
title: "エンジニアなら文章はnanoで書こう"
emoji: "📑"
type: "tech" # tech: 技術記事 / idea: アイデア
topics: ['nano', 'vi', 'vim', 'emacs']
published: false
---
# 元々こっちが正統派！
「文書エディタ」と聞くと、多くの人はMicrosoft Wordやデバイスに元から入っているメモアプリを想像するかもしれません。しかし、これらはごく最近にできたものです。
元々は**CLI**(真っ黒な画面に白い文字でコードを書くソフト)で文章を書いたり編集したりしていました。それらは、[ビル・ゲイツ](https://en.wikipedia.org/wiki/Bill_Gates)が**GUI**を広めたことであまり使われなくなってしまいました。
:::message
### **GUI**とは...
マウスでアイコンをクリックするだけでコンピュータを使えるようにしたもの。これによって誰でも直感的にコンピュータを操作できるようになり、PCが世界中に広まるきっかけとなった。
:::
# マウスでは高速化に限界がある
**GUI**は、僕が撲滅運動を行なっている**マウスの使用を前提としています😡**。
それに対し、**CLIは全てキーボードだけで全てが完結**します。
つまり、慣れてしまえば**CLIエディタが最も高速化を実現できる**のです。

# nanoより始めよ
CLIエディタには様々な種類があります。どれを勉強したらいいでしょうか。
どれも非常に便利なツールなだけあって、多くは一朝一夕でマスターできる易度ではありません。

そこで、まずはnanoをマスターすることを強くお勧めします。理由は以下の通りです。
1. トップクラスにわかりやすいから
2. GNUが開発しており、Gitなど現在でも頻繁に使用機会があるから
### トップクラスにわかりやすい
最短**1時間でフルキーボード操作を実現可能**です。

### GNUが開発しており、様々なところで使われている
GNUとは、LinuxというOSを作っている、いわばソフトウェアエンジニアリング界の権威であり覇王です。

# 見よ！この美しきショートカットキー達を！
### ファイル関連
|ショートカット|機能|由来・覚え方|
|---|---|---|
|Ctrl+S|「上書き保存」|'**S**ave'の略|
|Ctrl+O|「名前をつけて保存」|'**O**ffer a new file'の略|
|Ctrl+R|Insert a file into current one|
|Ctrl+X|nanoを出る|'**Ex**it'の略|

### テキストの編集
|ショートカット|機能|由来・覚え方|
|---|---|---|
|Ctrl+K|Cut current line into cutbuffer
|Alt+6|Copy current line into cutbuffer
|`Ctrl`+`U`|Paste contents of cutbuffer

|Ctrl+]|Complete current word|
|Alt+3|Comment/uncomment line/region|
### 操作の取り消し・取り消しのやり直し
|ショートカット|機能|由来・覚え方|
|---|---|---|
|Alt+U|取り消し|'**U**ndo'の略|
|Alt+E|取り消しのやり直し|'R**e**do'の略？|

### 検索と置換
|ショートカット|機能|由来・覚え方|
|---|---|---|
|Ctrl+F|前方向に検索する|
|Ctrl+B|後ろ方向に検索する|
|Alt+B|Find next occurrence backward
|Alt+F|Find next occurrence forward|
|Alt+R|Start a replacing session|

### 削除
Ctrl+H	Delete character before cursor      
Ctrl+D	Delete character under cursor
Alt+Bsp	Delete word to the left
Ctrl+Del   	Delete word to the right
Alt+Del	Delete current line

Operations
Ctrl+T   	Execute some command
Ctrl+T Ctrl+S	Run a spell check
Ctrl+T Ctrl+Y	Run a syntax check
Ctrl+T Ctrl+O  	Run a formatter
Tab	Indent marked region
Shift+Tab   	Unindent marked region
Ctrl+J	Justify paragraph or region
Alt+J	Justify entire buffer
Alt+:	Start/stop recording of macro      
Alt+;	Replay macro

### カーソル移動
|ショートカット|機能|由来・覚え方|
|---|---|---|
|←|One character backward
|→|One character forward
|Ctrl+←|One word backward
|Ctrl+→|One word forward
|Ctrl+A|To start of line
|Ctrl+E|To end of line

|Ctrl+P|One line up
|Ctrl+N|One line down

|Ctrl+↑|To previous block
|Ctrl+↓|To next block

|Ctrl+Y|One page up
|Ctrl+V|One page down

|Alt+\ |To top of buffer|
|Alt+/|To end of buffer

Special movement
Alt+G    	Go to specified line
Alt+]	Go to complementary bracket
Alt+↑	Scroll viewport up
Alt+↓	Scroll viewport down
Alt+<	Switch to preceding buffer
Alt+>	Switch to succeeding buffer

Information
Ctrl+C   	Report cursor position
Alt+D	Report line/word/character counts
Ctrl+G	Display help text

Various
Alt+A	Turn the mark on/off
Alt+T     	Cut until end of buffer
Alt+V	Enter next keystroke verbatim
Alt+C	Turn constant position info on/off
Alt+N	Turn line numbers on/off
Alt+P	Turn visible whitespace on/off
Alt+S	Turn softwrapping on/off
Alt+X	Hide/unhide the help lines
Alt+Z	Hide/unhide the info bars
Ctrl+L	Refresh the screen

# 参考文献
https://www.nano-editor.org/
