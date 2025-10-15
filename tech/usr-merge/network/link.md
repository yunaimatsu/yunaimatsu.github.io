機器とその規格

電装単位

プロトコルはイーサネットが大半。他にもあるにはあるけど、99%イーサネットだと思って間違いない。

1. Physical
2. Data_link

[USB-C](https://en.wikipedia.org/wiki/USB-C)

- MAC_adress
    
    先頭24bitがOUI(**o**rganizationally_**u**nique_**i**dentifier, vbender_id)
    後半24bitがunique_serial_number
    
    ネットワーク上におけるノードのデバイスに割り当てられた番号。
    
    メデイアアクセスコントロール
    
    6B(48b)
    
    先頭24b OUI vender ID
    
    後続24b 固有製造番号
    
    隣接ノード(ケーブルで直結されている・routerを経由しない)間の伝送制御（誤り制御・再送制御）を行う。
    MAC_adress: ネットワーク上の機器を識別するため、各機器に付けられている6byte(48bit)のid_number. datelink_layerのaddressにあたる。
    

無線LAN
スイッチ
VLAN
スパニングツリープロトコル
remote_access_VPN(virtual_private_network)

1. Physical layer 

In the context of the OSI (Open Systems Interconnection) model, the physical layer is responsible for the transmission and reception of raw bitstreams over a physical medium. While the physical layer primarily deals with hardware components and physical media, several protocols and standards are associated with this layer to define how data is transmitted. Here is a list of some of the key protocols and standards relevant to the physical layer:

### 1. **Ethernet (IEEE 802.3)**   - Defines a variety of wired networking standards, such as 10Base-T, 100Base-TX, 1000Base-T (Gigabit Ethernet), etc. It specifies the physical media, signaling, and media access control methods.
### 2. **Wi-Fi (IEEE 802.11)**   - Covers a range of wireless networking protocols for local area networking, including Wi-Fi standards such as 802.11a, 802.11b, 802.11g, 802.11n, 802.11ac, and 802.11ax (Wi-Fi 6).
### 3. **Bluetooth (IEEE 802.15.1)**   - A short-range wireless communication protocol for personal area networks (PANs). It specifies how devices communicate over short distances.
### 4. **SONET/SDH (Synchronous Optical Networking / Synchronous Digital Hierarchy)**   - Used in fiber optic communication for high-speed data transmission. SONET is mainly used in North America, while SDH is used internationally.
### 5. **DSL (Digital Subscriber Line)**   - A family of technologies (such as ADSL, VDSL) that provide internet access by transmitting digital data over telephone lines.
### 6. **PON (Passive Optical Network)**   - A fiber-optic telecommunications technology used for delivering broadband network access to end-users.
### 7. **ISDN (Integrated Services Digital Network)**   - A set of communication standards for simultaneous digital transmission of voice, video, data, and other network services over traditional circuits of the public switched telephone network.
### 8. **DOCSIS (Data Over Cable Service Interface Specification)**   - A standard for high-speed data transfer over cable TV (CATV) systems.
### 9. **Infrared (IrDA)**   - A protocol used for short-range communication between devices using infrared light waves.
### 10. **Fiber Channel**   - A high-speed network technology primarily used for storage area networks (SANs). It provides standards for connecting data storage to servers.
### 11. **Zigbee (IEEE 802.15.4)**   - A low-power, low-data-rate wireless communication protocol used for IoT (Internet of Things) devices, smart home automation, and industrial control systems.
### 12. **USB (Universal Serial Bus)**   - A standard for communication between computers and peripheral devices, such as keyboards, mice, printers, and external storage devices.
### 13. **RS-232/RS-485**   - Standards for serial communication, often used in industrial control systems and legacy equipment.
### 14. **Power Line Communication (PLC)**   - A communication technology that uses electrical wiring to carry both data and electric power simultaneously.
### 15. **NRZ (Non-Return to Zero) / RZ (Return to Zero) / Manchester Encoding**   - Encoding schemes used to represent binary data over physical media by manipulating voltage levels.
These protocols and standards help define how physical connections are made, how data is transmitted, and how devices interpret the signals received at the physical layer of the OSI model.

**repeater**

**hub(repeater hub)**

伝送中に減衰した電気信号を再生・増幅する機能を持つ装置。単に伝送距離を延長する時に用いられる。複数の接続口(port)を持つものはリピータハブ。

![Repeater](/b/cs/repeater.jpeg)

![Repeater](/b/cs/repeater-animation.gif)

![Repeater](/b/cs/hub.jpeg)

![Repeater](/b/cs/hub-animation.gif)

repeater_hubは全てのportにframeを流す(2.datalink_layerではMAC_adressをもとに送信先のnodeがつながっているportだけにframeを送信する).

[イーサーネット機器の種類（物理層とデータリンク層の機器）](http://manabu.quu.cc/up/6/e62480.htm)

- **datelink_layer(node-to-node_communication)**
- **bridge**

OSI基本参照モデルのdatalink_layerのframe(network_layerではpacket)を中継する装置.

MAC_address_tableをもっている。

1. フレーム内のあて先MACアドレス(datalink_layerにおけるaddress)をチェック、そのフレームを他のセグメントに渡すかの判断(中継/フィルタリング)を行う。
2. 接続ノードのMACアドレスを学習して、MACアドレステーブルに記憶し、転送の必要が無いフレームをせき止ることで実現されます。

初期ブロードキャスト時に、応答したフレームからMACアドレスをMACアドレステーブルに追加記憶していきます。

フレームのヘッダ情報を読み取るので、リピータHUBに比べるとすこし通信速度が落ちることになります。しかし、不要な情報を遮断するので、フレームの衝突を軽減し、結果的に通信効率が上がることになります。

![Bridge](/b/cs/bridge-animation.gif)

- **switching hub(L2 switch)**

リピータハブ（従来のハブ）と対比するとよい。

ネットワークの中継、集線機器の一種。

- 従来のハブつまりリピータハブの機能(受信したframe)を全て
- ブリッジとして働きます。
- ポート接続される機器のMACアドレスを記憶し、送るべきポートにだけフレームを送出します。
- 内部的にはこの送出切り替えのスイッチがあり、フレームの衝突を無くすことができます。そのため、ネットワーク全体の負荷が軽減し、セキュリティが向上します。なお、あて先を解析するために一時的にデータを蓄える機能があり、速度の違うネットワーク同士の接続にも使えます。

![Switching-hub](/b/cs/switching-hub.gif)

同じ種類のデータリンクだけで接続されているノード間のpacket伝送を

**manner -physical**

- wire: Ethernet
    
    CSMA/CD(**c**arrier **s**ense **m**ultiple **a**ccess/**c**ollision **d**etection)
    
    回線を監視、空いている時を狙う。データのコリジョンが起きたらその後ランダムのタイミングで再送する。
    

**manner -process of data**

non-wire: Wi-Fi
security measure essential
    

電気信号を扱う。

物理的な通信媒体の特性の差を吸収し、上位層に透過的な伝送路を提供。

- ツイストペアケーブル        カテゴリ        構造

- 光ファイバ    - 種類                シングル                マルチ            - 構造
