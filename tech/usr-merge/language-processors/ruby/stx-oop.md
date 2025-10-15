---
layout: '@layout/Layout.astro'
---

1. クラス自体をどのように定義するか
2. インスタンスの作り方
3. インスタンス自体

## 1. 導入
<!-- これまでの例を見て、Rubyがオブジェクト指向言語だという主張について疑問に思っているかもしれません。さて、この章ではその主張をどのように証明するかについて説明します。Rubyでクラスとオブジェクトを作成する方法や、Rubyが多くのオブジェクト指向言語よりも強力である点について見ていきます。その過程で、次の億ドル製品「インターネット対応ジャズ＆ブルーグラスジュークボックス」の一部を実装していきます。 -->

<!-- 数ヶ月にわたる作業の結果、我々の高給取りの研究開発チームは、ジュークボックスには曲が必要だと結論しました。そこで、まずは「曲」を表すRubyのクラスを作成するのが良い考えだとわかりました。実際の曲には名前、アーティスト、再生時間があるので、プログラム内の曲オブジェクトにもそれらを持たせる必要があります。 -->

まずは基本的なクラスSongを作成し、単一のメソッドinitializeだけを含めてみます。
```ruby
class Song
  def initialize(name, artist, duration)
    @name     = name
    @artist   = artist
    @duration = duration
  end
end
```
`initialize`はRubyプログラムで特別なメソッドです。
1. Song.newを呼び出して新しいSongオブジェクトを作成
2. Rubyは初期化されていないオブジェクトを作成
3. そのオブジェクトの`initialize`メソッドを呼び出し
4. `new`に渡された引数がinitializeメソッドに渡されます。

これにより、オブジェクト(インスタンス)の状態(ステート, 変数などのこと)を設定するためのコードを書くことができます。

<!-- Songクラスの場合、`initializ`eメソッドは3つのパラメータを受け取ります。 -->

`.new()`の引数はメソッド内でローカル変数のように扱われ、ローカル変数の命名規則(小文字で始まる)に従う

各オブジェクトはそれぞれ独自の曲を表しているので、Songオブジェクトごとに名前、アーティスト、再生時間を保持する必要があります。これには、オブジェクト内でインスタンス変数としてこれらの値を保存します。Rubyではインスタンス変数は名前の前に「@」を付けるだけで表現できます。
<!-- 例えば、パラメータnameはインスタンス変数@nameに、artistは@artistに、durationは@durationにそれぞれ割り当てられます。 -->

<!-- では、この新しいクラスをテストしてみましょう。 -->
クラスの中身を見る方法
```ruby
aSong = Song.new("Bicylops", "Fleck", 260)
aSong.inspect  # => "#<Song:0x401b4924 @duration=260, @artist=\"Fleck\", @name=\"Bicylops\">"
```

<!-- うまくいったようです。 -->
デフォルトで、`inspect`メッセージは任意のオブジェクトに送信でき, オブジェクトのIDとインスタンス変数が表示されます。
インスタンス変数が正しく設定されていることがわかります。

私たちの経験から、開発中にSongオブジェクトの内容を何度も印刷することになるでしょうが、inspectのデフォルトフォーマットはあまり便利ではありません。
幸い、Rubyにはすべてのオブジェクトに対して文字列として表示される`to_s`という標準メソッドがあります。これを曲に試してみましょう。
```ruby
aSong = Song.new("Bicylops", "Fleck", 260)
aSong.to_s  # => "#<Song:0x401b499c>"
```
あまり役に立ちませんでしたね—オブジェクトIDだけが表示されました。

そこで、`to_s`メソッドをクラス内でオーバーライドしてみましょう。この機会に、私たちがこの本でどのようにクラス定義を示しているかについても触れておきましょう。

Rubyでは、クラスは決して閉じられることはありません。既存のクラスに新しいメソッドを追加することができます

これには、自分で作成したクラスだけでなく、標準の組み込みクラスも含まれます。

既存のクラス定義を開くことで、新しい内容がそのクラスに追加されます。

これは私たちにとって非常に便利です。この章を通して、クラスに機能を追加していく過程で、新しいメソッドだけをクラス定義として示し、古いものはそのままにしておきます。これにより、各例で冗長なコードを繰り返す必要がなくなります。もちろん、もしこのコードを最初から作成するのであれば、すべてのメソッドを一つのクラス定義内に書くことになるでしょう。

さて、詳細はここまでにして、Songクラスにto_sメソッドを追加しましょう。
```ruby
class Song
  def to_s
    "Song: #{@name}--#{@artist} (#{@duration})"
  end
end

aSong = Song.new("Bicylops", "Fleck", 260)
aSong.to_s  # => "Song: Bicylops--Fleck (260)"
```
素晴らしい、進展があります。

<!-- しかし、ここで少し微妙な点を見落としました。 -->

<!-- Rubyがすべてのオブジェクトにto_sをサポートしていると述べましたが、その仕組みについては説明していませんでした。 -->
その答えは、継承、サブクラス化、そしてRubyがオブジェクトにメッセージを送る際にどのメソッドを実行するかをどのように決定するかに関係しています。
<!-- これは次のセクションで扱う内容です。 -->

## 2. 継承とメッセージ
継承を使うと、別のクラスを基にして、新しいクラスを作成することができます。
<!-- 例えば、私たちのジュークボックスには「曲」という概念があり、これをSongクラスで表現しています。 -->
<!-- そこにマーケティング担当者がやってきて、カラオケ機能を追加するように言われました。 -->
<!-- カラオケの曲は、他の曲とほとんどp同じですが（歌声は入っていませんが、それは問題ではありません）、歌詞とタイミング情報を持っています。 -->
<!-- ジュークボックスがカラオケ曲を再生するとき、歌詞は曲の進行に合わせてジュークボックスの画面に流れる必要があります。 -->
<!-- この問題に対処するためには、新しいクラスKaraokeSongを定義します。KaraokeSongはSongとほとんど同じですが、歌詞トラックを追加します。 -->
`Song`クラスから派生して`KaraokeSong`というサブクラスを作る例
```ruby
class KaraokeSong < Song
  def initialize(name, artist, duration, lyrics)
    super(name, artist, duration)
    @lyrics = lyrics
  end
end
```
`< Song`というクラス定義の行は、KaraokeSongがSongのサブクラスであることをRubyに伝えます。（予想通り、これによりSongはKaraokeSongの親クラスになります。人々はこれを親子関係と呼ぶこともあります。）
今のところ、`initialize`メソッドについては心配しないでください。`super`の使い方については後で説明します。

それでは、`KaraokeSong`を作成して、コードが動作するか確認してみましょう。（最終システムでは、歌詞はテキストとタイミング情報を含むオブジェクトに格納されますが、ここでは単に文字列を使ってテストします。これは型がない言語のもう一つの利点です---コードを実行し始める前にすべてを定義する必要はありません。）
```ruby
aSong = KaraokeSong.new("My Way", "Sinatra", 225, "And now, the...")
aSong.to_s  # => "Song: My Way--Sinatra (225)"
```
実行はできましたが、なぜ`to_s`メソッドに歌詞が表示されないのでしょうか？
Rubyが
メッセージがオブジェクトに送られたときに、どのメソッドを呼び出すべきかをどのように決定するかに関係しています。
Rubyが`aSong.to_s`というメソッド呼び出しをコンパイルするとき、実際にはto_sメソッドがどこにあるかはわかりません。そのため、プログラムが実行されるまで決定を遅延させます。そのとき、RubyはaSongのクラスを見て、そのクラスがメッセージと同じ名前のメソッドを実装していれば、そのメソッドを実行します。もし見つからなければ、Rubyは親クラス、さらに親クラスを遡って探します。もし適切なメソッドが見つからなければ、特別な処理が行われ、通常はエラーが発生します。

では、私たちの例に戻りましょう。to_sメソッドをaSongというKaraokeSongクラスのオブジェクトに送ったところ、RubyはKaraokeSongクラス内でto_sメソッドを見つけられませんでした。そのため、RubyはKaraokeSongの親であるSongクラスを調べ、そこに私たちがページ18で定義したto_sメソッドを見つけたのです。だから、歌詞が表示されないのです。Songクラスは歌詞について何も知りません。
```ruby
class KaraokeSong
  # ...
  def to_s
    "KS: #{@name}--#{@artist} (#{@duration}) [#{@lyrics}]"
  end
end
```
再度テストしてみましょう。
```ruby
aSong = KaraokeSong.new("My Way", "Sinatra", 225, "And now, the...")
aSong.to_s  # => "KS: My Way--Sinatra (225) [And now, the...]"
```
これで、@lyricsインスタンス変数の値が正しく表示されるようになりました。しかし、この実装には問題があります。なぜなら、親クラスの内部状態に直接アクセスしているからです。これにより、親クラスの実装に強く依存することになります。例えば、もしSongクラスを変更して曲の長さをミリ秒単位で保存するようにした場合、KaraokeSongは突飛な値を表示することになってしまいます。たとえば、「『My Way』のカラオケバージョンが3750分も続く」というのはあまりにも怖すぎます。

この問題を回避するために、各クラスは自分の内部状態を管理します。KaraokeSong#to_sが呼ばれると、まず親のto_sメソッドを呼び出して曲の詳細を取得し、それに歌詞情報を追加して結果を返すようにします。ここで使うのがRubyのsuperキーワードです。superを引数なしで呼び出すと、Rubyは現在のオブジェクトの親にメッセージを送り、親の同名のメソッドを呼び出します。その際、現在のメソッドに渡された引数も親に渡されます。

それでは、新しいto_sメソッドを実装してみましょう。
```ruby
class KaraokeSong < Song
  # 自分を文字列としてフォーマットするために
  # 親の#to_sの値に歌詞を追加します。
  def to_s
    super + " [#{@lyrics}]"
  end
end
```
再度テストしてみます。
```ruby
aSong = KaraokeSong.new("My Way", "Sinatra", 225, "And now, the...")
aSong.to_s  # => "Song: My Way--Sinatra (225) [And now, the...]"
```
これで、歌詞が正しく表示されるようになりました。また、Songクラスに親クラスが明示的に指定されていませんが、Songクラスは暗黙のうちにObjectクラスを親として持っています。これにより、すべてのオブジェクトはObjectクラスを祖先として持ち、そのインスタンスメソッドはすべてのオブジェクトで利用可能です。to_sもその一例で、Objectクラスに35以上のインスタンスメソッドが定義されています。

## 3. 継承とミックスイン

一部のオブジェクト指向プログラミング言語（特にC++）では、複数の親を持つことができる「多重継承」がサポートされています。この技法は強力ですが、継承の階層が曖昧になる可能性があるため、危険な場合もあります。

Javaのような言語では、単一継承がサポートされています。ここでは、クラスは1つの親クラスしか持つことができません。単一継承はよりクリーンで実装が簡単ですが、現実世界では物事が複数のソースから属性を引き継ぐことが多いため（例えば、ボールは「バウンスするもの」でも「球形のもの」でもあります）、その欠点もあります。

Rubyは、単一継承のシンプルさと多重継承の力を兼ね備えた面白くて強力な妥協策を提供します。Rubyクラスは1つの直接の親クラスしか持つことができません。したがって、Rubyは単一継承の言語です。しかし、Rubyクラスは任意の数のミックスインを含むことができ、これが多重継承のような能力を提供します。この方法には多重継承の欠点がないため、制御された多重継承のような機能を提供します。ミックスインについては、98ページから詳しく説明します。

これまでの章ではクラスとそのメソッドを見てきましたが、ここでは実際のオブジェクト、例えば Song クラスのインスタンスについて見ていきます。

## 4. オブジェクトと属性

これまでに作成した Song オブジェクトには、内部状態（例えば、曲のタイトルやアーティスト）が含まれています。その状態はオブジェクトに対してプライベートであり、他のオブジェクトはオブジェクトのインスタンス変数にアクセスできません。一般的に、これは良いことです。なぜなら、それによってオブジェクト自身がその整合性を保つ責任を持つからです。

しかし、完全に秘密主義なオブジェクトはあまり役に立ちません。オブジェクトを作成できても、その後何もできないからです。通常、オブジェクトの状態にアクセスしたり操作したりするためのメソッドを定義します。これにより、外部の世界がオブジェクトとやり取りできるようになります。これらの外部から見えるオブジェクトの側面は、その「属性」と呼ばれます。

私たちの Song オブジェクトの場合、最初に必要なのは、曲名やアーティストを取得する機能（再生中に表示できるように）と、曲の長さを取得する機能（進行バーを表示できるように）です。
```ruby
class Song
  def name
    @name
  end
  def artist
    @artist
  end
  def duration
    @duration
  end
end

aSong = Song.new("Bicylops", "Fleck", 260)
aSong.artist  # => "Fleck"
aSong.name    # => "Bicylops"
aSong.duration  # => 260
```
ここでは、3つのアクセサーメソッドを定義して、3つのインスタンス属性の値を返しています。これは非常に一般的な手法なので、Rubyでは便利なショートカットを提供しています：attr_reader は、これらのアクセサーメソッドを自動的に作成してくれます。
```ruby
class Song
  attr_reader :name, :artist, :duration
end

aSong = Song.new("Bicylops", "Fleck", 260)
aSong.artist  # => "Fleck"
aSong.name    # => "Bicylops"
aSong.duration  # => 260
```
この例では新しいものが登場しています。:artist という構文は、artist に対応する Symbol オブジェクトを返す式です。:artist は変数 artist の名前を意味し、artist はその変数の値を意味します。この例では、アクセサーメソッドを name、artist、duration と名付けました。対応するインスタンス変数 @name、@artist、@duration は自動的に作成されます。これらのアクセサーメソッドは、先に手動で書いたものと全く同じです。

## 5. 書き込み可能な属性

時には、オブジェクトの外部から属性を設定できるようにする必要があります。例えば、曲に最初に関連付けられた再生時間が予測値であると仮定しましょう（例えば、CD情報やMP3データから取得したもの）。曲を初めて再生するときに実際の再生時間を知り、その新しい値をSongオブジェクトに保存します。

C++やJavaなどの言語では、これをセッター関数で行います。
```java
class JavaSong {                     // Javaのコード
  private Duration myDuration;
  public void setDuration(Duration newDuration) {
    myDuration = newDuration;
  }
}
s = new Song(....)
s.setDuration(length)
```
Rubyでは、オブジェクトの属性は他の変数のようにアクセスできます。先ほど見たように、aSong.name というフレーズがその例です。したがって、属性の値を設定したいときにこれらの変数に代入できるのは自然なことです。Rubyでは、これはその通りに動作します（予期しない挙動を避ける原則に従っています）。
```ruby
class Song
  def duration=(newDuration)
    @duration = newDuration
  end
end
aSong = Song.new("Bicylops", "Fleck", 260)
aSong.duration  # => 260
aSong.duration = 257   # 属性に新しい値を設定
aSong.duration  # => 257
```
aSong.duration = 257 という代入は、aSong オブジェクト内の duration= メソッドを呼び出し、257を引数として渡しています。実際、= で終わるメソッド名を定義することで、そのメソッド名が代入の左辺に現れることができるようになります。

再び、Rubyではこれらのシンプルな属性設定メソッドを作成するためのショートカットを提供しています。
```ruby
class Song
  attr_writer :duration
end
aSong = Song.new("Bicylops", "Fleck", 260)
aSong.duration = 257
```

## 6. 仮想属性

これらの属性アクセサメソッドは、単にオブジェクトのインスタンス変数をラップするだけのものではありません。例えば、これまで秒単位で扱っていた再生時間を、分単位や分の小数点部分でアクセスしたい場合があります。
```ruby
class Song
  def durationInMinutes
    @duration / 60.0   # 浮動小数点に強制変換
  end

  def durationInMinutes=(value)
    @duration = (value * 60).to_i
  end
end

aSong = Song.new("Bicylops", "Fleck", 260)
aSong.durationInMinutes  # => 4.333333333
aSong.durationInMinutes = 4.2
aSong.duration  # => 252
```
ここでは、属性メソッドを使って仮想的なインスタンス変数を作成しています。外部から見ると、durationInMinutes は他の属性と同じように見えます。しかし、内部的にはそれに対応するインスタンス変数は存在しません。

これは単なる好奇心からの例ではありません。ベルナール・メイヤーの著書『オブジェクト指向ソフトウェア構築』において、彼はこれを「均一アクセス原則（Uniform Access Principle）」と呼んでいます。インスタンス変数と計算された値の違いを隠すことで、クラスの実装を他の世界から隔離できます。これにより、将来的に実装を変更しても、そのクラスを使用している何百万行ものコードに影響を与えることなく、クラスの使い方に変更を加えることができます。これは大きな利点です。

## 7. クラス変数とクラスメソッド

これまで作成したクラスはすべてインスタンス変数とインスタンスメソッドを含んでいました。インスタンス変数はクラスの特定のインスタンスに関連付けられた変数で、インスタンスメソッドはそれらの変数に対して動作します。しかし、時にはクラス自体が独自の状態を持つ必要があることがあります。これがクラス変数の出番です。


## 8. クラス変数

クラス変数は、クラスのすべてのオブジェクトで共有され、後で説明するクラスメソッドからもアクセスできます。特定のクラスに対してクラス変数は一つだけ存在します。クラス変数の名前は、@@countのように「@」を二つ並べて始まります。グローバル変数やインスタンス変数とは異なり、クラス変数は使用する前に初期化する必要があります。この初期化は、クラス定義の本体で単純な代入として行われることがよくあります。

例えば、私たちのジュークボックスが、各曲が再生された回数を記録したい場合を考えます。このカウントは、おそらくSongオブジェクトのインスタンス変数になります。曲が再生されるたびに、そのインスタンスの値が増加します。しかし、もし全曲の再生回数の合計を知りたい場合、すべてのSongオブジェクトを検索してそのカウントを合計するか、グローバル変数を使ってしまうリスクを冒すことになります。その代わりに、クラス変数を使うことができます。
```ruby
class Song
  @@plays = 0
  def initialize(name, artist, duration)
    @name     = name
    @artist   = artist
    @duration = duration
    @plays    = 0
  end
  def play
    @plays += 1
    @@plays += 1
    "This song: #@plays plays. Total #@@plays plays."
  end
end

デバッグのために、Song#playがこの曲が再生された回数と、すべての曲の合計再生回数を含む文字列を返すようにしています。簡単にテストできます。

s1 = Song.new("Song1", "Artist1", 234)  # test songs..
s2 = Song.new("Song2", "Artist2", 345)
s1.play	# => "This song: 1 plays. Total 1 plays."
s2.play	# => "This song: 1 plays. Total 2 plays."
s1.play	# => "This song: 2 plays. Total 3 plays."
s1.play	# => "This song: 3 plays. Total 4 plays."
```
クラス変数はクラスとそのインスタンスに対してプライベートです。外部からアクセスできるようにしたい場合は、アクセサメソッドを作成する必要があります。このメソッドはインスタンスメソッドであっても、次のセクションに進むためにクラスメソッドであっても構いません。

## 9. クラスメソッド

時には、クラスが特定のオブジェクトに結びつかずに動作するメソッドを提供する必要があります。これまでに、newメソッドがその一例です。このメソッドは新しいSongオブジェクトを作成しますが、特定の曲に関連付けられているわけではありません。
```ruby
aSong = Song.new(....)
```
Rubyのライブラリには、クラスメソッドが数多く存在します。例えば、Fileクラスのオブジェクトは、基盤となるファイルシステムで開かれているファイルを表します。しかし、Fileクラス自体には開かれていないファイルを操作するためのクラスメソッドもいくつかあります。ファイルを削除したい場合は、File.deleteというクラスメソッドを呼び出し、ファイル名を渡します。
```ruby
File.delete("doomedFile")
```
クラスメソッドは、インスタンスメソッドとは定義方法が異なります。クラスメソッドは、メソッド名の前にクラス名とピリオドを置くことで定義されます。
```ruby
class Example
  def instMeth              # インスタンスメソッド
  end

  def Example.classMeth     # クラスメソッド
  end
end
```
ジュークボックスは、曲ごとに料金を請求しますが、分単位ではなく曲単位で料金を設定します。これにより、短い曲の方が長い曲よりも収益性が高くなります。そこで、特定の曲が長すぎてSongListに追加できないようにするためのクラスメソッドをSongListに定義することができます。この制限を設定するために、クラス定数（大文字で始まる定数）をクラス内で初期化します。
```ruby
class SongList
  MaxTime = 5*60           # 5分
  def SongList.isTooLong(aSong)
    return aSong.duration > MaxTime
  end
end
```
以下のように、Songオブジェクトを作成し、SongListクラスのクラスメソッドisTooLongを呼び出すことができます。
```ruby
song1 = Song.new("Bicylops", "Fleck", 260)
SongList.isTooLong(song1)  # => false

song2 = Song.new("The Calling", "Santana", 468)
SongList.isTooLong(song2)
```
## 9. シングルトンとその他のコンストラクタ

時には、Rubyがオブジェクトを作成するデフォルトの方法をオーバーライドしたい場合があります。例えば、私たちのジュークボックスを見てみましょう。ジュークボックスは全国に広がっているため、メンテナンスをできるだけ簡単にしたいと考えています。その要件の一部は、ジュークボックスで起こるすべてのことを記録することです。再生された曲や受け取ったお金、ジュークボックスに注がれた奇妙な液体などです。音楽のためにネットワーク帯域を確保したいため、これらのログファイルはローカルに保存することにします。このため、ログを管理するクラスが必要ですが、ジュークボックスごとに1つのログオブジェクトだけが必要で、すべての他のオブジェクトでそのオブジェクトを共有したいと考えています。

ここで登場するのがシングルトンパターンです。シングルトンパターンを使うことで、ログオブジェクトを作成する唯一の方法はLogger.createを呼び出すことになり、ログオブジェクトが1つだけ作成されることが保証されます。
```ruby
class Logger
  private_class_method :new
  @@logger = nil
  def Logger.create
    @@logger = new unless @@logger
    @@logger
  end
end
```
Loggerのnewメソッドをプライベートにすることで、従来のコンストラクタを使用してログオブジェクトを作成することを防ぎます。その代わりに、Logger.createというクラスメソッドを提供します。このメソッドはクラス変数@@loggerを使用して、ログのインスタンスへの参照を保持し、呼び出すたびにそのインスタンスを返します。

[ここで紹介するシングルトンの実装はスレッドセーフではありません。複数のスレッドが動作している場合、複数のログオブジェクトが作成される可能性があります。スレッドセーフを追加する代わりに、Rubyが提供するシングルトンミックスインを使用するのが一般的です。詳細はページ468に記載されています。] 実際に、メソッドが返すオブジェクト識別子を見て確認することができます。
```ruby
Logger.create.id   # => 537766930
Logger.create.id   # => 537766930
```
クラスメソッドを擬似コンストラクタとして使用することは、クラスのユーザーにとっても便利です。簡単な例として、正多角形を表すShapeクラスを見てみましょう。Shapeのインスタンスは、必要な辺の数と周囲長を指定することで作成されます。
```ruby
class Shape
  def initialize(numSides, perimeter)
    # ...
  end
end
```
しかし、数年後、このクラスが別のアプリケーションで使用され、プログラマーたちは形状を名前で作成し、周囲長ではなく辺の長さを指定することに慣れているとします。この場合、クラスメソッドを追加するだけで対応できます。
```ruby
class Shape
  def Shape.triangle(sideLength)
    Shape.new(3, sideLength*3)
  end

  def Shape.square(sideLength)
    Shape.new(4, sideLength*4)
  end
end
```
クラスメソッドには興味深く強力な使い方がたくさんありますが、それを探ることがジュークボックスを完成させるのを早くするわけではないので、ここで話は終わりにしましょう。

## 10. アクセス制御

クラスインターフェースを設計する際には、クラスが外部に対してどれくらいのアクセスを許可するかを慎重に考慮することが重要です。クラスへのアクセスを過剰に許可すると、アプリケーションの結合度が高くなり、クラスのユーザーがクラスの論理的インターフェースではなく、実装の詳細に依存することになりかねません。良いニュースは、Rubyではオブジェクトの状態を変更する唯一の方法は、そのメソッドの1つを呼び出すことだという点です。メソッドへのアクセスを制御することで、オブジェクトへのアクセスも制御できます。良い指針として、オブジェクトを無効な状態にする可能性のあるメソッドは公開しないことです。Rubyには3つのアクセスレベルがあります。

公開メソッド (sPublic methods): 誰でも呼び出すことができます。アクセス制御はありません。メソッドはデフォルトで公開されており（initializeを除く）、initializeは常にプライベートです。

保護メソッド (Protected methods): 定義したクラスとそのサブクラスのオブジェクトからのみ呼び出すことができます。アクセスは「家族内」で管理されます。

プライベートメソッド (Private methods): 明示的な受け手を指定して呼び出すことはできません。プライベートメソッドは、定義したクラス内およびそのオブジェクト内の直接の子孫クラスからのみ呼び出すことができます。


「protected」と「private」の違いはかなり微妙で、Rubyは他の多くのオブジェクト指向言語とは異なります。もしメソッドが保護されている場合、そのメソッドは定義したクラスの任意のインスタンスまたはそのサブクラスから呼び出すことができます。一方、プライベートメソッドは、呼び出し元オブジェクトの文脈内でのみ呼び出すことができ、他のオブジェクトのプライベートメソッドには直接アクセスできません（たとえそのオブジェクトが呼び出し元と同じクラスであっても）。

Rubyは、他のオブジェクト指向言語とは別の重要な点でも異なります。アクセス制御は静的ではなく、プログラムが実行される際に動的に決定されます。制限されたメソッドを実行しようとした時にのみ、アクセス違反が発生します。

## 11. アクセス制御の指定

クラスやモジュールの定義内で、public、protected、private の3つの関数を使って、メソッドのアクセスレベルを指定します。これらの関数は、2通りの使い方があります。

引数なしで使う場合、3つの関数はその後に定義されたメソッドのデフォルトのアクセス制御を設定します。この動作は、C++ や Java のプログラマーには馴染み深いもので、同様の効果を得るために public などのキーワードを使用します。
```ruby
class MyClass

  def method1    # デフォルトは 'public'
    #...
  end

  protected      # 次のメソッドは 'protected'

  def method2    # 'protected' になります
    #...
  end

  private        # 次のメソッドは 'private'

  def method3    # 'private' になります
    #...
  end

  public         # 次のメソッドは 'public'

  def method4    # 'public' になります
    #...
  end
end
```
また、アクセスレベルを指定する関数にメソッド名を引数として渡すことによって、特定のメソッドのアクセスレベルを設定することもできます。
```ruby
class MyClass

  def method1
  end

  # ... そして続きます

  public    :method1, :method4
  protected :method2
  private   :method3
end
```
クラスの `initialize` メソッドは自動的に `private` として宣言されます。

次にいくつかの例を見てみましょう。例えば、会計システムをモデル化している場合、各デビットに対応するクレジットがあります。このルールを破らないように、デビットとクレジットのメソッドをプライベートにし、外部インターフェースをトランザクションに基づいて定義することができます。
```ruby
class Accounts

  private

    def debit(account, amount)
      account.balance -= amount
    end
    def credit(account, amount)
      account.balance += amount
    end

  public

    #...
    def transferToSavings(amount)
      debit(@checking, amount)
      credit(@savings, amount)
    end
    #...
end
```
`protected` アクセスは、オブジェクトが同じクラスの他のオブジェクトの内部状態にアクセスする必要がある場合に使用されます。例えば、Account オブジェクトが自身の生の残高を比較できるようにしたい場合、他のクラスからはその残高を隠したいときに使います。
```ruby
class Account
  attr_reader :balance       # アクセサーメソッド 'balance'

  protected :balance         # これを保護されたメソッドにします

  def greaterBalanceThan(other)
    return @balance > other.balance
  end
end
```
balance 属性は `protected` であるため、`Account` オブジェクト内でのみアクセス可能です。

## 12. 変数

これまで作成したすべてのオブジェクトを失わないようにするためには、変数を使用してオブジェクトを管理します。変数はオブジェクトへの参照を保持します。

まず、コードで確認してみましょう。
```ruby
person = "Tim"
person.id    # 537771100
person.type  # String
person       # "Tim"
```
最初の行で、Rubyは「Tim」という値を持つ新しいStringオブジェクトを作成します。このオブジェクトへの参照がローカル変数personに格納されます。クイックチェックを行うと、変数は確かに文字列の性質を持ち、オブジェクトID、タイプ、値を持っていることが確認できます。

では、変数はオブジェクトなのでしょうか？

Rubyでは、答えは「いいえ」です。変数は単なるオブジェクトへの参照です。オブジェクトはどこかの大きなプール（ほとんどの場合はヒープ）に浮かんでおり、変数はそのオブジェクトを指し示します。

次に、少し複雑な例を見てみましょう。
```ruby
person1 = "Tim"
person2 = person1
person1[0] = 'J'
person1    # "Jim"
person2    # "Jim"
```
ここで何が起こったのでしょうか？ person1 の最初の文字を変更しましたが、person1 と person2 の両方が「Tim」から「Jim」に変わっています。

これは、変数がオブジェクトへの参照を保持しているという事実に戻ります。person1 を person2 に代入しても、新しいオブジェクトは作成されません。単に person1 のオブジェクト参照を person2 にコピーするだけなので、person1 と person2 は同じオブジェクトを参照していることになります。この点は、図3.1（31ページ）に示されています。

代入はオブジェクトをエイリアス化し、複数の変数が同じオブジェクトを参照する可能性があります。しかし、これがコードに問題を引き起こすことはあるのでしょうか？ それほど頻繁にはないですが（例えば、Javaのオブジェクトも全く同じように動作します）。例えば、図3.1の例では、dup メソッドを使用して String の新しいオブジェクトを作成し、エイリアスを避けることができます。
```ruby
person1 = "Tim"
person2 = person1.dup
person1[0] = "J"
person1    # "Jim"
person2    # "Tim"
```
また、オブジェクトを変更できないようにするためには、freeze メソッドを使用することができます（オブジェクトの凍結については251ページで説明します）。凍結されたオブジェクトを変更しようとすると、Rubyは TypeError の例外を発生させます。
```ruby
person1 = "Tim"
person2 = person1
person1.freeze       # オブジェクトの変更を防止
person2[0] = "J"     # 変更しようとするとエラーが発生
```
出力:
```ruby
prog.rb:4:in `=': can't modify frozen string (TypeError)
	from prog.rb:4
```







オブジェクト志向プログラミングにおいて、扱うものは全て**オブジェクト**で、そこから生み出されるものも全て**オブジェクト**です。
**オブジェクト志向プログラミング**(**OOP**)とは、現実世界をそのまま抽象化してプログラミングに落としていくという思想のプログラミング方法です。
カテゴリーにはそれを**クラス**としてコードに落とし込むことができます。
カテゴリーとは、例えば「料理」「掃除」などだと考えてください。

## 1.1. クラスの構造
**クラス**の中には**ステート**と**メソッド**があります。<br>料理で喩えます。**ステート**は「野菜」「肉」などの食材で、**メソッド**は「焼く」「茹でる」などの具体的な調理方法のことです。<br>掃除で喩えます。**ステート**は「壁」「床」などの対象で、**メソッド**は「雑巾掛け」「掃除機をかける」などの掃除方法のことです。

ステートは名詞、メソッドは動詞

例えば、「**野菜**を**焼く**」と言った時、「**〇〇を**」に来るのは**ステート**で、**〇〇する**に来るのは**メソッド**です。

## 1.2. クラスからインスタンス
**クラス**から**コンストラクタ**を呼び出し、**オブジェクト**(**クラスインスタンス**)を作ります。
```ruby
song1 = Song.new("Ruby Tuesday")
song2 = Song.new("Enveloped in Python")
# and so on
```

## 1.3. インスタンスについて
メソッドは、以下の書き方で呼び出すことができます。
メソッド呼び出しの例
他の言語(Java, C)との、メソッド呼び出しの違いを説明しています。関数に数値を入れてアウトプットを求める他の言語と比べ、Rubyでは常にオブジェクトを中心にメソッドが呼び出されていることが分かります。

# クラスの定義の仕方
* クラス名は大文字から始める。
* メソッド名は小文字から始める
* インスタンス変数は`@`から始める
* `initialize`というインスタンスメソッドは特別。
```ruby
class MyClass
  def initialize(param1, param2, param2)
    @instanceValue1 = ____
    @instanceValue2 = ____
    @instanceValue3 = ____
  end
end
```

* `[クラス名].new`メソッドを実行したらそれに付随して`initialize`メソッドが実行される。
* `.new()`の引数で渡されてた値が，`initialize()`の引数として使われる．
```ruby
classInstanceA = MyClass.new(paramA_1, paramA_2, paramA_3)
classInstanceB = MyClass.new(paramB_1, paramB_2, paramB_3)
classInstanceC = MyClass.new(paramC_1, paramC_2, paramC_3)
```

* クラスの内容を確かめる時は，インスタンスに`inspect`メソッドか`to_s`メソッドをつける．

# オブジェクトと属性(アトリビュート)
## 外部からインスタンス内部の情報にアクセスする方法
* Sole responsibility
  * オブジェクトの内部状況は，インスタンスからしかアクセスできないこと．
  * 

```ruby
class KaraokeSong < Song
  def initialize(name, artist, duration, lyrics)
    super(name, artist, duration)
    @lyrics = lyrics
  end
end
```
> From the examples we've shown so far, you might be wondering about our earlier assertion that Ruby is an object-oriented language. Well, this chapter is where we justify that claim. We're going to be looking at how you create classes and objects in Ruby, and at some of the ways in which Ruby is more powerful than most object-oriented languages. Along the way, we'll be implementing part of our next billion-dollar product, the Internet Enabled Jazz and Blue Grass jukebox.

(この章では、オブジェクト指向特有の「クラス」について説明する)

> After months of work, our highly paid Research and Development folks have determined that our jukebox needs songs. So it seems like a good idea to start off by setting up a Ruby class that represents things that are songs. We know that a real song has a name, an artist, and a duration, so we'll want to make sure that the song objects in our program do, too.
> We'll start off by creating a basic class Song,[As we mentioned on page 9, class names start with an uppercase letter, while method names start with a lowercase letter.] which contains just a single method, `initialize`.
```ruby
class Song
  def initialize(name, artist, duration)
    @name     = name
    @artist   = artist
    @duration = duration
  end
end
```
> `initialize` is a special method in Ruby programs. When you call `Song.new` to create a new `Song` object, Ruby creates an uninitialized object and then calls that object's `initialize` method, passing in any parameters that were passed to `new`. This gives you a chance to write code that sets up your object's state.
> For class `Song`, the `initialize` method takes three parameters. These parameters act just like local variables within the method, so they follow the local variable naming convention of starting with a lowercase letter.
> Each object represents its own song, so we need each of our `Song` objects to carry around its own song name, artist, and duration. This means we need to store these values as instance variables within the object. In Ruby, an instance variable is simply a name preceded by an ``at'' sign (``@''). In our example, the parameter name is assigned to the instance variable @name, artist is assigned to @artist, and duration (the length of the song in seconds) is assigned to @duration.
> Let's test our spiffy new class.
```ruby
aSong = Song.new("Bicylops", "Fleck", 260)
aSong.inspect	»	"#<Song:0x401b4924 @duration=260, @artist=\"Fleck\", @name=\"Bicylops\">"
```
> Well, it seems to work. By default, the inspect message, which can be sent to any object, dumps out the object's id and instance variables. It looks as though we have them set up correctly.
> Our experience tells us that during development we'll be printing out the contents of a Song object many times, and inspect's default formatting leaves something to be desired. Fortunately, Ruby has a standard message, to_s, which it sends to any object it wants to render as a string. Let's try it on our song.
```ruby
aSong = Song.new("Bicylops", "Fleck", 260)
aSong.to_s	»	"#<Song:0x401b499c>"
```
> That wasn't too useful---it just reported the object id. So, let's override to_s in our class. As we do this, we should also take a moment to talk about how we're showing the class definitions in this book.
> In Ruby, classes are never closed: you can always add methods to an existing class. This applies to the classes you write as well as the standard, built-in classes. All you have to do is open up a class definition for an existing class, and the new contents you specify will be added to whatever's there.
> This is great for our purposes. As we go through this chapter, adding features to our classes, we'll show just the class definitions for the new methods; the old ones will still be there. It saves us having to repeat redundant stuff in each example. Obviously, though, if you were creating this code from scratch, you'd probably just throw all the methods into a single class definition.


## Inheritance and Messages

> Inheritance allows you to create a class that is a refinement or specialization of another class. For example, our jukebox has the concept of songs, which we encapsulate in class `Song`. Then marketing comes along and tells us that we need to provide karaoke support. A karaoke song is just like any other (there's no vocal on it, but that doesn't concern us). However, it also has an associated set of lyrics, along with timing information. When our jukebox plays a karaoke song, the lyrics should flow across the screen on the front of the jukebox in time with the music.

> An approach to this problem is to define a new class, `KaraokeSong`, which is just like `Song`, but with a lyric track.

```ruby
class KaraokeSong < Song
  def initialize(name, artist, duration, lyrics)
    super(name, artist, duration)
    @lyrics = lyrics
  end
end
```

---

> The "`< Song`" on the class definition line tells Ruby that a `KaraokeSong` is a *subclass* of `Song`. (Not surprisingly, this means that `Song` is a *superclass* of `KaraokeSong`. People also talk about parent-child relationships, so `KaraokeSong`'s parent would be `Song`.) For now, don't worry too much about the `initialize` method; we'll talk about that `super` call later.
Let's create a `KaraokeSong` and check that our code worked. (In the final system, the lyrics will be held in an object that includes the text and timing information. To test out our class, though, we'll just use a string. This is another benefit of untyped languages---we don't have to define everything before we start running code.

| `aSong = KaraokeSong.new("My Way", "Sinatra", 225, "And now, the...")` |  |  |
| --- | --- | --- |
| `aSong.to_s` | » | `"Song: My Way--Sinatra (225)"` |

> Well, it ran, but why doesn't the `to_s` method show the lyric?
> The answer has to do with the way Ruby determines which method should be called when you send a message to an object. When Ruby compiles the method invocation `aSong.to_s`, it doesn't actually know where to find the method `to_s`. Instead, it defers the decision until the program is run. At that time, it looks at the class of `aSong`. If that class implements a method with the same name as the message, that method is run. Otherwise, Ruby looks for a method in the parent class, and then in the grandparent, and so on up the ancestor chain. If it runs out of ancestors without finding the appropriate method, it takes a special action that normally results in an error being raised.

*[In fact, you can intercept this error, which allows you to fake out methods at runtime. This is described under [`Object#method_missing`](https://ruby-doc.com/docs/ProgrammingRuby/html/ref_c_object.html#Object.method_missing) on page 355.]*

> So, back to our example. We sent the message `to_s` to `aSong`, an object of class `KaraokeSong`. Ruby looks in `KaraokeSong` for a method called `to_s`, but doesn't find it. The interpreter then looks in `KaraokeSong`'s parent, class `Song`, and there it finds the `to_s` method that we defined on page 18. That's why it prints out the song details but not the lyrics---class `Song`doesn't know anything about lyrics.

> Let's fix this by implementing `KaraokeSong#to_s`. There are a number of ways to do this. Let's start with a bad way. We'll copy the `to_s` method from `Song` and add on the lyric.

| `class KaraokeSong` |  |  |
| --- | --- | --- |
| `# ...` |  |  |
| `def to_s` |  |  |
| `"KS: #{@name}--#{@artist} (#{@duration}) [#{@lyrics}]"` |  |  |
| `end` |  |  |
| `end` |  |  |
| `aSong = KaraokeSong.new("My Way", "Sinatra", 225, "And now, the...")` |  |  |
| `aSong.to_s` | » | `"KS: My Way--Sinatra (225) [And now, the...]"` |

> We're correctly displaying the value of the `@lyrics` instance variable. To do this, the subclass directly accesses the instance variables of its ancestors. So why is this a bad way to implement `to_s`? The answer has to do with good programming style (and something called *decoupling*). By poking around in our parent's internal state, we're tying ourselves tightly to its implementation. Say we decided to change `Song` to store the duration in milliseconds. Suddenly, `KaraokeSong` would start reporting ridiculous values. The idea of a karaoke version of ``My Way'' that lasts for 3750 minutes is just too frightening to consider.
> We get around this problem by having each class handle its own internal state. When `KaraokeSong#to_s` is called, we'll have it call its parent's `to_s` method to get the song details. It will then append to this the lyric information and return the result. The trick here is the Ruby keyword `super`". When you invoke `super` with no arguments, Ruby sends a message to the current object's parent, asking it to invoke a method of the same name as the current method, and passing it the parameters that were passed to the current method. Now we can implement our new and improved `to_s`.

| `class KaraokeSong < Song` |  |  |
| --- | --- | --- |
| `# Format ourselves as a string by appending` |  |  |
| `# our lyrics to our parent's #to_s value.` |  |  |
| `def to_s` |  |  |
| `super + " [#{@lyrics}]"` |  |  |
| `end` |  |  |
| `end` |  |  |
| `aSong = KaraokeSong.new("My Way", "Sinatra", 225, "And now, the...")` |  |  |
| `aSong.to_s` | » | `"Song: My Way--Sinatra (225) [And now, the...]"` |

> We explicitly told Ruby that `KaraokeSong` was a subclass of `Song`, but we didn't specify a parent class for `Song` itself. If you don't specify a parent when defining a class, Ruby supplies class `Object` as a default. This means that all objects have `Object` as an ancestor, and that `Object`'s instance methods are available to every object in Ruby. Back on page 18 we said that `to_s` is available to all objects. Now we know why; `to_s` is one of more than 35 instance methods in class `Object`. The complete list begins on page 351.

> ### **Inheritance and Mixins**
> Some object-oriented languages (notably C++) support multiple inheritance, where a class can have more than one immediate parent, inheriting functionality from each. Although powerful, this technique can be dangerous, as the inheritance hierarchy can become ambiguous.
Other languages, such as Java, support single inheritance. Here, a class can have only one immediate parent. Although cleaner (and easier to implement), single inheritance also has drawbacks---in the real world things often inherit attributes from multiple sources (a ball is both a *bouncing thing* and a *spherical thing* , for example).
Ruby offers an interesting and powerful compromise, giving you the simplicity of single inheritance and the power of multiple inheritance. A Ruby class can have only one direct parent, and so Ruby is a single-inheritance language. However, Ruby classes can include the functionality of any number of mixins (a mixin is like a partial class definition). This provides a controlled multiple-inheritance-like capability with none of the drawbacks. We'll explore mixins more beginning on page 98.
So far in this chapter we've been looking at classes and their methods. Now it's time to move on to the objects, such as the instances of class `Song`.

## **Objects and Attributes**
The `Song` objects we've created so far have an internal state (such as the song title and artist). That state is private to those objects---no other object can access an object's instance variables. In general, this is a Good Thing. It means that the object is solely responsible for maintaining its own consistency.

However, an object that is totally secretive is pretty useless---you can create it, but then you can't do anything with it. You'll normally define methods that let you access and manipulate the state of an object, allowing the outside world to interact with the object. These externally visible facets of an object are called its *attributes*. For our `Song` objects, the first thing we may need is the ability to find out the title and artist (so we can display them while the song is playing) and the duration (so we can display some kind of progress bar).

| `class Song` |  |  |
| --- | --- | --- |
| `def name` |  |  |
| `@name` |  |  |
| `end` |  |  |
| `def artist` |  |  |
| `@artist` |  |  |
| `end` |  |  |
| `def duration` |  |  |
| `@duration` |  |  |
| `end` |  |  |
| `end` |  |  |
| `aSong = Song.new("Bicylops", "Fleck", 260)` |  |  |
| `aSong.artist` | » | `"Fleck"` |
| `aSong.name` | » | `"Bicylops"` |
| `aSong.duration` | » | `260` |

Here we've defined three accessor methods to return the values of the three instance attributes. Because this is such a common idiom, Ruby provides a convenient shortcut: `attr_reader` creates these accessor methods for you.

| `class Song` |  |  |
| --- | --- | --- |
| `attr_reader :name, :artist, :duration` |  |  |
| `end` |  |  |
| `aSong = Song.new("Bicylops", "Fleck", 260)` |  |  |
| `aSong.artist` | » | `"Fleck"` |
| `aSong.name` | » | `"Bicylops"` |
| `aSong.duration` | » | `260` |

This example has introduced something new. The construct `:artist` is an expression that returns a `Symbol` object corresponding to `artist`. You can think of `:artist` as meaning the *name* of the variable `artist`, while plain `artist` is the *value* of the variable. In this example, we named the accessor methods `name`, `artist`, and `duration`. The corresponding instance variables, `@name`, `@artist`, and `@duration`, will be created automatically. These accessor methods are identical to the ones we wrote by hand earlier.

### **Writable Attributes**

Sometimes you need to be able to set an attribute from outside the object. For example, let's assume that the duration that is initially associated with a song is an estimate (perhaps gathered from information on a CD or in the MP3 data). The first time we play the song, we get to find out how long it actually is, and we store this new value back in the `Song` object.
In languages such as C++ and Java, you'd do this with *setter functions*.

```java
class JavaSong {                     // Java code
  private Duration myDuration;
  public void setDuration(Duration newDuration) {
    myDuration = newDuration;
  }
}
s = new Song(....)
s.setDuration(length)
```

---

In Ruby, the attributes of an object can be accessed as if they were any other variable. We've seen this above with phrases such as `aSong.name`. So, it seems natural to be able to assign to these variables when you want to set the value of an attribute. In keeping with the Principle of Least Surprise, that's just what you do in Ruby.

| `class Song` |  |  |
| --- | --- | --- |
| `def duration=(newDuration)` |  |  |
| `@duration = newDuration` |  |  |
| `end` |  |  |
| `end` |  |  |
| `aSong = Song.new("Bicylops", "Fleck", 260)` |  |  |
| `aSong.duration` | » | `260` |
| `aSong.duration = 257   # set attribute with updated value` |  |  |
| `aSong.duration` | » | `257` |

The assignment "`aSong.duration = 257`" invokes the method `duration=` in the `aSong` object, passing it `257` as an argument. In fact, defining a method name ending in an equals sign makes that name eligible to appear on the left-hand side of an assignment.

Again, Ruby provides a shortcut for creating these simple attribute setting methods.
```ruby
class Song
  attr_writer :duration
end
aSong = Song.new("Bicylops", "Fleck", 260)
aSong.duration = 257
```

---

### **Virtual Attributes**

These attribute accessing methods do not have to be just simple wrappers around an object's instance variables. For example, you might want to access the duration in minutes and fractions of a minute, rather than in seconds as we've been doing.

| `class Song` |  |  |
| --- | --- | --- |
| `def durationInMinutes` |  |  |
| `@duration/60.0   # force floating point` |  |  |
| `end` |  |  |
| `def durationInMinutes=(value)` |  |  |
| `@duration = (value*60).to_i` |  |  |
| `end` |  |  |
| `end` |  |  |
| `aSong = Song.new("Bicylops", "Fleck", 260)` |  |  |
| `aSong.durationInMinutes` | » | `4.333333333` |
| `aSong.durationInMinutes = 4.2` |  |  |
| `aSong.duration` | » | `252` |

Here we've used attribute methods to create a virtual instance variable. To the outside world, `durationInMinutes` seems to be an attribute like any other. Internally, though, there is no corresponding instance variable.

This is more than a curiosity. In his landmark book *Object-Oriented Software Construction*, Bertrand Meyer calls this the *Uniform Access Principle*. By hiding the difference between instance variables and calculated values, you are shielding the rest of the world from the implementation of your class. You're free to change how things work in the future without impacting the millions of lines of code that use your class. This is a big win.