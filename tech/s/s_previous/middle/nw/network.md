# network

IETF

RFC

プロトコルには様々な規模のものがあるが、階層化して人間にとって理解しやすすく整理している。

[Tailscale · Best VPN Service for Secure Networks](https://tailscale.com/)

[application_layer](network%20b5ec9e90bcbf4ca8b9607f4aaf29490e/application_layer%20363f29007cce4131815735d86e2d9797.md)

[transport_layer](network%20b5ec9e90bcbf4ca8b9607f4aaf29490e/transport_layer%202c16c4d697c44fd788fe6aff2a1268e8.md)

[network_layer [一番重い]](network%20b5ec9e90bcbf4ca8b9607f4aaf29490e/network_layer%20%5B%E4%B8%80%E7%95%AA%E9%87%8D%E3%81%84%5D%20d1824ab53ef147ef8f9b3d0f5afcfd5d.md)

[Blockchain](network%20b5ec9e90bcbf4ca8b9607f4aaf29490e/Blockchain%2003c629f847674554927a0774280b590f.md)

[Clasificaron of communication](network%20b5ec9e90bcbf4ca8b9607f4aaf29490e/Clasificaron%20of%20communication%20f40300c4a0b04eb199ec292a5b2322f9.md)

![A6352BD1-66D4-4B48-9641-06027DDC9346.png](network%20b5ec9e90bcbf4ca8b9607f4aaf29490e/A6352BD1-66D4-4B48-9641-06027DDC9346.png)

![1000006141.jpg](network%20b5ec9e90bcbf4ca8b9607f4aaf29490e/1000006141.jpg)

---

local~wide area-network: Lan~Wan(no clear definition)

$$
line\_speed*[transmission\_efficiency\_OR\_line\_utilization]\\= data\_capacity / transmission\_time
$$

- 無線LAN内の情報をPSKで暗号化する方法
    - 事前共有キー
        
        パスワードを事前に設定しておく方法
        
        事前に設定された暗号鍵
        
    - WEP(しょぼい)
    - WPA(WEPの代わり)
    - WPA2(WPAの進化版)
    - WPA3
    
    “WPA”, “WPA2”, “WPA3”は規格。
    
    “WPA personal”, “WPA2 personal”, “WPA3 personal”は「方法」
    
- classification of computers
    - classifiation_by_role
        - client
        - server
            - Web server
            - mail server
            - FTP server
            - database server
            - DNS server
            
            [サーバーとは？特徴やパソコンとの違いを解説](https://office-otasuke.com/archives/254)
            
            ローカルサーバ/レンタルサーバ
            

## Protocol

**internet_protocol_suite > OSI_reference_model**

node = host(IP_adressが付けられているが経路制御を行わない、end_nodeになる機器や機械・装置のこと) + router(IP_adressをつけられていて経路制御を行う機器)

conceptual framework for understanding networking

ISOが統一した。あくまで概念的なもの。

practical protocol suite for implementing networks