学生対抗アドベントカレンダー1日目としての投稿です！
**自己紹介** (興味ある方だけ)
阪大外語のyunaiと申します。
とあるSaaSスタートアップで開発インターンを行う傍ら、
**NLPや確率統計で言語学の通説を再評価する**という卒業研究を行っています。
[ **Twitter** ](https://x.com/yunaimatsu)では外国語/言語学/コンピュータサイエンスなどについてネタ投稿をしてるのでご覧ください🥰

# Wordも、Excelも、PowerPointも、正体はZIPファイル
多くの人が一度はMicrosoft社のWord、Excel、PowerPointを利用したことがあると思います。
そして、そこで使われているのは以下のような拡張子です。
|アプリ名|拡張子|
|---|---|
|Word|`.docx`|
|Excel|`.xlsx`|
|PowerPoint|`.pptx`|

しかし、実は、コンピュータの世界には **`.docx`** **`.pptx`** **`.xlsx`** というファイル形式は**存在しません**。実は全て、単なる **`.zip`** ファイルなんです🤔

<img src="https://i.imgflip.com/9auqb2.jpg" title="made at imgflip.com"/ width=50%>


# 拡張子詐欺に見るSaaSビジネスの本質
SaaSビジネスの目的は**1人でも多くの人/1社でも多くの企業を依存させる**ことです。

> あなたの会社のプロダクトがなければ私たちはやっていけません!
> 重要なデータは、あなた方の会社のプロダクトに全て保管しています!

という状態が実現できれば、ユーザは少々高くても代金を払ってくれます。
実際僕は **GitHub** や **Notion**、**Google Drive** がなくなってしまったら非常に不便な人生が待っていると思いますし、全てのデータが消えようものなら**ここ6年の人生が無に帰してしまいます**(もちろん、定期的にデータをレンタルサーバやローカルにバックアップしてはいます)。

**拡張子詐欺の目的もこれと同じです。** 
Word, PowerPoint, Excelのファイルが送られてきても、デバイスにWord, PowerPoint, Excelのソフトがインストールされていなかったら開けません。
技術が専門ではないビジネスマンからしたら、
**ソフトをインストールしないと開けない**というのは当然の認識です。

多くの企業にとって、もはやこれらのMicrosoft Office Suiteはなくてはならない存在になっています。
拡張子によってしています。

# 化の皮を剥がそう
まず、編集したいファイルがあるディレクトリに入っておいてください。
`.docx` `.xlsx` `.pptx`ファイルの名前を `.zip`ファイルに変えます。
```shell
mv ms_sucks.docx ms_sucks.zip # docxファイルをzipファイルに変更
```
これをエラーなく実行できることが、二つのファイル形式が同じということを証明しています。

## いざ、中身を覗こう
まず、以下のように **`.docx`** **`.pptx`** **`.xlsx`** ファイルを1つずつ作成しました。
```shell
$ ls
ms_sucks.docx ms_sucks.pptx ms_sucks.xlsx
```

次に、それぞれの形式のZIPファイルを解凍し、新しいフォルダに中身を移す。
```shell
# ZIPファイルを解凍し、docxフォルダに入れる
$ mv ms_sucks.docx ms_sucks.zip && unzip ms_sucks.zip -d docx 

# ZIPファイルを解凍し　pptxフォルダに入れる
$ mv ms_sucks.pptx ms_sucks.zip && unzip ms_sucks.zip -d pptx 

# ZIPファイルを解凍し、xlsxフォルダに入れる
$ mv ms_sucks.xlsx ms_sucks.zip && unzip ms_sucks.zip -d xlsx 
```

### Wordファイルの中身

### 全てのZIPファイルに共通して入っているもの
以上3つのファイルの種類を見てみると、どのファイルにも
`[Content_Types].xml` や `_rels`
```shell
├── [Content_Types].xml
├── _rels
```
`_rels`: ZIPファイル内の関係を定義しています。
`[Content_Types].xml`: MIME設定という、ファイルを処理する方法が書かれています。


```shell
docx $ tree
.
├── [Content_Types].xml
├── _rels
└── word
    ├── _rels
    │   └── document.xml.rels
    ├── document.xml
    ├── fontTable.xml
    ├── numbering.xml
    ├── settings.xml
    ├── styles.xml
    └── theme
        └── theme1.xml
```

### PowerPointファイルの中身
```shellpptx tree
.
├── [Content_Types].xml
├── _rels
└── ppt
    ├── _rels
    │   └── presentation.xml.rels
    ├── notesMasters
    │   ├── _rels
    │   │   └── notesMaster1.xml.rels
    │   └── notesMaster1.xml
    ├── notesSlides
    │   ├── _rels
    │   │   └── notesSlide1.xml.rels
    │   └── notesSlide1.xml
    ├── presProps.xml
    ├── presentation.xml
    ├── slideLayouts
    │   ├── _rels
    │   │   ├── slideLayout1.xml.rels
    │   │   ├── slideLayout10.xml.rels
    │   │   ├── slideLayout11.xml.rels
    │   │   ├── slideLayout2.xml.rels
    │   │   ├── slideLayout3.xml.rels
    │   │   ├── slideLayout4.xml.rels
    │   │   ├── slideLayout5.xml.rels
    │   │   ├── slideLayout6.xml.rels
    │   │   ├── slideLayout7.xml.rels
    │   │   ├── slideLayout8.xml.rels
    │   │   └── slideLayout9.xml.rels
    │   ├── slideLayout1.xml
    │   ├── slideLayout10.xml
    │   ├── slideLayout11.xml
    │   ├── slideLayout2.xml
    │   ├── slideLayout3.xml
    │   ├── slideLayout4.xml
    │   ├── slideLayout5.xml
    │   ├── slideLayout6.xml
    │   ├── slideLayout7.xml
    │   ├── slideLayout8.xml
    │   └── slideLayout9.xml
    ├── slideMasters
    │   ├── _rels
    │   │   └── slideMaster1.xml.rels
    │   └── slideMaster1.xml
    ├── slides
    │   ├── _rels
    │   │   └── slide1.xml.rels
    │   └── slide1.xml
    ├── theme
    │   ├── theme1.xml
    │   └── theme2.xml
    └── viewProps.xml
```

### Excelファイルの中身
```shell
xlsx tree
.
├── [Content_Types].xml
├── _rels
└── xl
    ├── _rels
    │   └── workbook.xml.rels
    ├── drawings
    │   └── drawing1.xml
    ├── sharedStrings.xml
    ├── styles.xml
    ├── theme
    │   └── theme1.xml
    ├── workbook.xml
    └── worksheets
        ├── _rels
        │   └── sheet1.xml.rels
        └── sheet1.xml
```

## ZIPに戻して拡張子を変えれば使える
```shell
zip
```