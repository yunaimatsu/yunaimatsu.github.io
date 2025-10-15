# TELNET

## client

```bash
telnet host_name tcp_port_number
```

## host

[https://youtu.be/AdKBl5mQK_M?si=VWIgX-V3cL8AxhYb](https://youtu.be/AdKBl5mQK_M?si=VWIgX-V3cL8AxhYb)

TCP connection1つ使う

コマンドが相手のcomputerに文字列として送信され、相手のcomputerで実行される。

自分のcomputerのI/Oが相手のシェルに繋がっているイメージ

オプション機能

ネットワーク仮想端末

Router、高機能スイッチなどのネットワーク機器にログインしてその機器の設定を行う時にもよく使われます。TELNETでComputerやRouter等の機器にログインするには、自分のログイン名とパスワードがその機器に登録されている必要がある。

ルーター 屋 高機能 スイッチには キーボードがない。設定を行う時には…

- シリアルケーブルでコンピュータと繋ぐ。

または

- TELNET, HTTP, SNMPなどの方法によりネットワーク経由で接続する。

![image-1697012693713.jpg7183418476363577755.jpg](TELNET%20a89abf70df8246378b4fd8e0d4dd8067/image-1697012693713.jpg7183418476363577755.jpg)

1. [I/O]キーボードから文字列input
2. モード処理（行モード、透過モード）
3. telnetdへ文字列送信
4. シェルに（OS経由して）command文字列送信(ポート間通信)
5. **OS：**シェルからのコマンド解釈、プログラ厶実行し、結果を得る
6. シェルから、コマンドの出力受け取る
7. モード処理（行モード、透過モード）
8. TELNET clientへ送信
9. [I/O]NVT設定に従い、画面へ出力する。

I/Oで入力した文字以外にも オプションをやり取りする機能が用意されている。

- NVT(network virtual terminal)を実現するための制御情報
    
    このオプションの機能を利用して送信される。
    
- Mode processing(オプション機能で設定変更)
    
    **行モード**:改行キー押す毎に送信
    
    **透過モード**:1文字入力毎に送信
