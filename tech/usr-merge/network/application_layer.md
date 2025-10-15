めっちゃきれい。この階層は全てのプロトコルが並列。
その理由は、TCP/IPレイヤーで抽象化してくれているから。

サーバ側から能動的に情報を送信する通信方式をプッシュ型という。
一方、クライアントからの要求に基づいてサーバが応答する方式はプル型という。

アプリケーションソフトが個別の具体的な目的のために利用するプロトコル群
アプリケーション間で交換するメッセージのデータ形式や、相手方への処理の依頼や応答の返送などの手順を定める。

### URI scheme
インターネット上の資源の所在を表すURI/URLの先頭部分。
資源に到達するための手段を表したもの。
これに続けてコロン記号を挟んで資源の位置を続けて記述する。
資源の位置の表記法はスキームの種類ごとに個別に定められている。

URIおよびURLはネット上に存在する様々な対象（データ、サービス、機器など）の識別名や所在を書き表すための統一された書式。

`http:` : 資源の種類やアクセス方法などを表しており、HTTPでWeb上の資源にアクセスするためにある
`https:` : SSL/TLSで暗号化されたWebアクセス
`ftp:` : FTPでファイルを送受信する
`file:` : コンピュータ内のファイルシステムにアクセスする
`mailto:` : 電子メールの送信先を指定する
    


電子メール送信のためのSMTP（Simple Mail Transfer Protocol）
メール受信のためのpop（post office protocol）
IMAP（Internet Mail Access Protocol）

時刻同期を行うNTP（Network Time Protocol）

ネットワーク管理のためのSNMP（Simple Network Management Protocol）

上位の[**アプリケーション層**](https://e-words.jp/w/%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E5%B1%A4.html)（第7層/レイヤ7）からデータを受け取り、適切な形式のデータに変換して下位の[**セッション層**](https://e-words.jp/w/%E3%82%BB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E5%B1%A4.html)（第5層/L5）へ渡す。また、セッション層から受け取ったデータを解釈し、適切な形式でアプリケーション層へ渡す。通信に用いられるデータの[**暗号化**](https://e-words.jp/w/%E6%9A%97%E5%8F%B7%E5%8C%96.html)や[**圧縮**](https://e-words.jp/w/%E3%83%87%E3%83%BC%E3%82%BF%E5%9C%A7%E7%B8%AE.html#Section_%E5%8F%AF%E9%80%86%E5%9C%A7%E7%B8%AE%E3%81%A8%E9%9D%9E%E5%8F%AF%E9%80%86%E5%9C%A7%E7%B8%AE)、[**ファイル形式**](https://e-words.jp/w/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E5%BD%A2%E5%BC%8F.html)やデータ形式、[**文字コード**](https://e-words.jp/w/%E6%96%87%E5%AD%97%E3%82%B3%E3%83%BC%E3%83%89.html)の定義や形式間の変換などの役割を果たす。データ形式の規定や変換方法などを定義している

[**SSL**](https://e-words.jp/w/SSL.html)/[**TLS**](https://e-words.jp/w/TLS.html)のように[**トランスポート層**](https://e-words.jp/w/%E3%83%88%E3%83%A9%E3%83%B3%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%88%E5%B1%A4.html)や[**ネットワーク層**](https://e-words.jp/w/%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF%E5%B1%A4.html)のプロトコルがアプリケーション層に対して透過的に暗号化や圧縮などの機能を提供する場合もある。

- session and connection
    
    session: link between applications
    
    connection: link between nodes.
    

[**認証**](https://e-words.jp/w/%E8%AA%8D%E8%A8%BC.html)や[**ログイン**](https://e-words.jp/w/%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3.html)などセッションの開始・確立、[**ログアウト**](https://e-words.jp/w/%E3%83%AD%E3%82%B0%E3%82%A2%E3%82%A6%E3%83%88.html)などの終了、また、中断されたセッションの再確立などの手続きやデータ形式を定めている。
