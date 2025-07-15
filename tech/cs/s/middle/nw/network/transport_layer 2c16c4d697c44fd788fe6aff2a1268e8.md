# transport_layer

- TCP(transmission_control_protocol)
    
    communication前に3-way_handshakeでTCP_connectionを確立し、segment(data_unit in TCP)をやり取り。
    
    - 3-way_handshake
        
        In each packet, there are 2 signs(syn, ack)
        
        syn: syn=1なら「送っていい？」
        
        ack: ack=1なら「いいよ！」
        
        PC_a “syn=1, ack=0”(今からパケットを)送っていい？
        
        PC_b “syn=1, ack=1”いいよ！(私からも)送っていい？
        
        PC_a “syn=0, ack=1”いいよ！
        
    - resend
        - sequence_numberの管理によるsegmentが欠落しているとわかった時
        - 時間内に確認応答が帰ってこなかった時
        
        →再送
        
    - window_control
        
        確認応答待たず先送りでsegmentを送信できる
        
    
    ### TCP_header
    
- UDP(

[Port Number](transport_layer%202c16c4d697c44fd788fe6aff2a1268e8/Port%20Number%20d24295c14fab4f24b1afd26de8cc7d32.md)

- source_port_numbers(16bits) and destination_port_numbers(16bits)
    
    2^16(=65536)patterns
    
    - well-known_ports
        
        0-1023
        
        Port 20 and 21: FTP data and FTP control, respectively
        ■Port 22: Remote login protocol secure shell (SSH)
        ■Port 23: Telnet, used for accessing system remotely but is not very secure
        ■Port 25: Simple Mail Transfer Protocol (SMTP) used by e-mail servers
        ■Port 53: DNS protocol
        ■Port 80: Used for accessing Web servers
        ■Port 110: The POP service or Post Office Protocol used by local e-mail clients to retrieve mail from servers
        ■Port 123: NTP to synchronize time with remote time servers
        ■Port 143: E-mail clients can use the Internet Message Access Protocol (IMAP) to retrieve mail from servers
        ■Port 443: This is the Hypertext Transfer Protocol (HTTP) Secure that combines the HTTP with a cryptographic protocol, which can be used for payment transactions and other secure transmission of data from Web pages.
        ■Port 631: The Internet Printing Protocol (IPP) used to print to printers located remotely on the network
        ■Port 3306: The standard port for MySQL
        These ports are defined in the /etc/services file on Linux systems.
        
    - registered_ports
        
        1024-49151
        
    - dynamic_ports(private_ports)
        
        49152-65535
        
- sequence_number
    
    そのsegmentの位置を表すnumber。順番管理、抜けチェック。
    
    ### UDP_header
    
- acknowledgement_number
    
    次に貰う予定のsegmentのsequence_bomber.
    
    ack = sequence_number+1
    
    として返送する。
    
- window_size

**connectionless**

SDN

- **link-state_routing_protocol**
    
    
    [IS-IS](transport_layer%202c16c4d697c44fd788fe6aff2a1268e8/IS-IS%208a40a8814e284ae2ab69d9de365d8595.md)
    
    [OSPF](transport_layer%202c16c4d697c44fd788fe6aff2a1268e8/OSPF%20e921e395a1104798aa3376daf1774f03.md)
    
- **distance-vector_routing_protocol**
    
    隣接するルータ間で[**ルーティングテーブル**](https://e-words.jp/w/%E3%83%AB%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB.html)（経路表）を交換し合い、どの隣接ルータを経由すれば最短の[**ホップ数**](https://e-words.jp/w/%E3%83%9B%E3%83%83%E3%83%97%E6%95%B0.html)で宛先に届くかを基準に経路を指定する方式
    

**dynamic_routing**

TCP/UDP以外のトランスポート層のプロトコル

[QUIC(+UDP)](transport_layer%202c16c4d697c44fd788fe6aff2a1268e8/QUIC(+UDP)%20e656b8b96418440797259d539908def4.md)

[SCTP](transport_layer%202c16c4d697c44fd788fe6aff2a1268e8/SCTP%2061c64e096fe6475bb4df6fb1865d5ddc.md)

[DCCP](transport_layer%202c16c4d697c44fd788fe6aff2a1268e8/DCCP%20938f2788f5f949c78ed67a0723efa5d6.md)

[UDP-Lite](transport_layer%202c16c4d697c44fd788fe6aff2a1268e8/UDP-Lite%2073680e1654f94eef91c35dfc53bd270a.md)

DCP(user_datagram_protocol)

- **transport_layer以上**
    
    gateway
    
    異なるnetwork同士を接続する装置。全階層の中継を行う。例えば、プロトコル変換するのはgateway。
    

信頼性の高いデータ伝送を実現。

Yes, there are other Internet protocols used in the transport layer besides TCP (Transmission Control Protocol) and UDP (User Datagram Protocol). Here are some notable examples:
1. SCTP (Stream Control Transmission Protocol): SCTP is designed for message-oriented communication, unlike TCP, which is stream-oriented. It offers features such as multi-streaming and multi-homing, making it useful in applications like Voice over IP (VoIP) and telephony signaling.

2. DCCP (Datagram Congestion Control Protocol): DCCP provides a connection-oriented service, like TCP, but with congestion control mechanisms while maintaining the datagram nature of UDP. It's used for real-time applications like media streaming where loss of data is preferable to delays caused by retransmission.

3. RTP (Real-Time Transport Protocol): RTP is widely used in real-time applications, such as video conferencing and streaming media. It runs on top of UDP and provides end-to-end delivery services for data with real-time characteristics.

4. QUIC (Quick UDP Internet Connections): QUIC is a transport layer protocol developed by Google that aims to reduce latency and improve connection security by combining features of both UDP and TCP. It’s especially used in modern web applications like HTTP/3.

These protocols serve different purposes and are chosen based on the specific needs of the application, such as real-time performance, reliability, or low latency.