# 結論: 名詞的なものを記述するのがオブジェクト指向、動詞的なものを記述するのが手続型
## 日本人テックブロガーは説明が下手くそすぎる
プログラミングは、実際に手を動かしてみないと分からない要素が多いのは事実だ。とはいえ、「インタプリタ」と「コンパイラ」の用語の説明は、全く難しい話ではない。なのに、日本人テックブロガーは「もっと厳密にはこういう仕組みで動いてて...」という初心者が全く欲していない情報まで付け加えてしまう。簡潔に「インタプリタはこう！」「コンパイラはこう！」と言い切った文献は見つけられなかった。

## ズバリ結論
インタプリタ→翻訳と実行を**同時に**行う。
コンパイラ→翻訳と実行を**分けて**行う。
これだけだ。
#### インタプリタ言語
例えばPythonは、Visual Studio Codeの実行ボタンを押したり、ターミナルで`python3 main.py`と打つだけで実行される。実はこの時、Pythonから機械が理解できる「機械語」への**翻訳**と、**実行**を同時に行ってくれているのだ。
#### コンパイラ言語
例えばJavaは、コードを書き終わってすぐはまだ実行できない。
* まず「機械語」への**翻訳**を行う。`javac Main.java`を実行すると、機械語に翻訳された`Main.class`というファイルが作られる。
* 次に「機械語」に翻訳されたコードを**実行**を行う。`java Main`で、翻訳された`Main.class`が実行される。

## インタプリタ言語とコンパイラ言語で"Hello World!"を表示させてみよう
これを実感してもらうために、インタプリタ言語であるShellと、コンパイラ言語であるC言語で"Hello World!"を表示させてみる。この二つにした理由は、ほとんど環境構築をせずに実行できるからだ。

#### 0. ターミナルを開く
ターミナルの開き方が分からない人は、以下の記事でできるようになっておいてほしい。
https://qiita.com/yunaimatsu/items/ef407e1325e0f537d0a0

#### 1. 必要なファイル等を作る。
* Bash（インタプリタ言語）用のフォルダを作る。
* そのフォルダの中に`hello_world.sh`というファイルを作る（Windowsは`hello_world.bat`というファイルを作る）。
* C言語（コンパイラ言語）用のフォルダを作る。
* そのフォルダの中に`hello_world.c`というファイルを作る。

これらの作業を一発でするためには、↓このコマンドをターミナルにコピペして`Enter`。

↓**Mac, Linux**用
```
mkdir bash c && touch bash/hello_world.sh c/hello_world.c
```
↓**Windows**用
```
mkdir bash; mkdir c; New-Item -ItemType file -Path bash/hello_world.bat; New-Item -ItemType file -Path c/hello_world.c
```
### 2. インタプリタ言語で"Hello World!"
まず、**翻訳**と**実行**を同時にやってくれるインタプリタ言語で"Hello World!"を表示させよう。
* ①`bash`フォルダの中の、`hello_world.sh`（Windowsの人は`hello_world.bat`）を開く。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3629535/8090f51b-1fed-1a8a-22fe-fef3778e2690.png)
* ➁Hello World!を表示させるコードをコピペ

↓**Mac, Linux**用コード
```

```
↓**Windows**用コード
```
@echo off
echo Hello World!
```

### 3. コンパイル言語で"Hello World!"
* `bash`フォルダの中の、`hello_world.c`を開く。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3629535/8090f51b-1fed-1a8a-22fe-fef3778e2690.png)
* Hello World!を表示させるコードをコピペ
```
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

## Linuxを使おう、英語のテックブログやGithub CopilotなどのAIでプログラミングを学ぶようにしよう。
