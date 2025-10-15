## 文字列操作の基本
### Rubyにおける文字列の取り扱い
例えば、インターネットからもローカルハードドライブからも曲を再生できるジュークボックスを考えてみましょう。インターネット接続が切れても音楽を再生できるようにします。  曲は以下のような形式で保存されています。  
- ファイルパス  
- 再生時間  
- アーティスト  
- タイトル  

**データ例:**
```
/jazz/j00132.mp3  | 3:45 | Fats Waller     | Ain't Misbehavin'
/jazz/j00319.mp3  | 2:58 | Louis Armstrong | Wonderful World
/bgrass/bg0732.mp3| 4:09 | Strength in Numbers | Texas Red
```

### **1. 行をフィールドに分割する**
`String#split`メソッドを使用して、行を区切り文字で分割します。この例では、正規表現 `/\s*\|\s*/` を使い、縦線（`|`）で区切られたトークンに分割しています。  
また、行末の改行を削除するために `String#chomp` を使用します。

**コード例:**
```ruby
songs = SongList.new
songFile.each do |line|
  file, length, name, title = line.chomp.split(/\s*\|\s*/)
  songs.append Song.new(title, name, length)
end
puts songs[1]
```

**出力:**
```text
Song: Wonderful World--Louis Armstrong (2:58)
```

### **2. 不要な空白の削除**
ファイルのカラム形式では、アーティスト名に不要な空白が含まれます。これを `String#squeeze` メソッドで削除します。`squeeze!`を使うことで、文字列を直接変更できます。

**更新後のコード:**
```ruby
songs = SongList.new
songFile.each do |line|
  file, length, name, title = line.chomp.split(/\s*\|\s*/)
  name.squeeze!(" ")
  songs.append Song.new(title, name, length)
end
puts songs[1]
```

**出力:**
```
Song: Wonderful World--Louis Armstrong (2:58)
```

### **3. 時間を秒に変換する**
`2:58` のような時間を秒に変換するために、`String#scan` メソッドを使用します。正規表現 `/\d+/` を使って、数字のシーケンスを抽出します。

**最終コード:**
```ruby
songs = SongList.new
songFile.each do |line|
  file, length, name, title = line.chomp.split(/\s*\|\s*/)
  name.squeeze!(" ")
  mins, secs = length.scan(/\d+/)
  songs.append Song.new(title, name, mins.to_i * 60 + secs.to_i)
end
puts songs[1]
```

**出力:**
```
Song: Wonderful World--Louis Armstrong (178)
```

### **4. キーワード検索によるインデックス作成**

#### **インデックスの作成**
ジュークボックスでは、曲名やアーティスト名で検索できる機能をサポートしています。これを実現するために、`WordIndex` クラスを使い、文字列内のすべての単語（2文字以上）をインデックスします。

**コード例:**
```ruby
class WordIndex
  def initialize
    @index = Hash.new(nil)
  end

  def index(anObject, *phrases)
    phrases.each do |aPhrase|
      aPhrase.scan(/\w[-\w']*/) do |aWord|
        aWord.downcase!
        @index[aWord] ||= []
        @index[aWord].push(anObject)
      end
    end
  end

  def lookup(aWord)
    @index[aWord.downcase]
  end
end
```

#### **SongListクラスの拡張**
`SongList` クラスを `WordIndex` クラスと統合し、曲が追加されると自動的にインデックスされるようにします。

**更新後のクラス:**

```ruby
class SongList
  def initialize
    @songs = Array.new
    @index = WordIndex.new
  end

  def append(aSong)
    @songs.push(aSong)
    @index.index(aSong, aSong.name, aSong.artist)
    self
  end

  def lookup(aWord)
    @index.lookup(aWord)
  end
end
```

#### **実装のテスト**

**テストコード:**
```ruby
songs = SongList.new
songFile.each do |line|
  file, length, name, title = line.chomp.split(/\s*\|\s*/)
  name.squeeze!(" ")
  mins, secs = length.scan(/\d+/)
  songs.append Song.new(title, name, mins.to_i * 60 + secs.to_i)
end

puts songs.lookup("Fats")
puts songs.lookup("ain't")
puts songs.lookup("RED")
puts songs.lookup("WoRlD")
```

**出力:**
```
Song: Ain't Misbehavin'--Fats Waller (225)
Song: Ain't Misbehavin'--Fats Waller (225)
Song: Texas Red--Strength in Numbers (249)
Song: Wonderful World--Louis Armstrong (178)
```