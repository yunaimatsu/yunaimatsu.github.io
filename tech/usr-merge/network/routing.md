---
layout: '@layout/Layout.astro'
---
IPは、routing_tableある前提のprotocolです。
IP_addressは住所です。
手紙(IP_datagram)は運ぶために、
[地図(routing_table)](/b/cs/nw/routing-table)
[運び方のルール(routing_protocol(not IP))](/b/cs/nw/)

hop_by_hop_routing
1hop: datalink_layer以下の機能のみを使って(source_mac/destination_macのみで)frameが伝送される1区間。つまり、あるhost/routerのNICからrouterの中継を経ずに到達できる隣接したhost/routerのNICまでの区間のこと。repeater/bridgeで繋げられることはあれど、router/gatewayで繋げられることはない。

AD HŌCな通信

---


IP_addressのnetwork_bitを利用してrouting

- Static_routing
    
    管理者が事前に設定
    
- Dynamic_routing
    
    Router同士が動的に設定
    
- IP_addressとの関係
    - Default_routing(ラストリゾート / last resort) `0.0.0.0/0` or `“default”`
        
        `0.0.0.0/0`Computer内部ではこのアドレスで処理される。
        
        `“default”`IP_adressと勘違いされないようにこのように書くこともある。
        
        すべてのネットワークを表しています。デフォルトルートをルーティングテーブルに登録しているルータには、未知のネットワークはありません。ただ、非常に大雑把な形で登録しています。
        
        そして、他に使えるルート情報がないときに最後にデフォルトルートを使ってパケットをルーティングします。
        
    - Host_route `IP_adress/32`
        
        
    - Loopback_adress`127.0.0.1`
        
        “localhost”
        
        同じComputer内Program間の通信
        
    - Link_local_adress`169.254/16`
        
        Routerを超えない同一Link内の通信のため
        
        或いはDHCP(**d**ynamic **h**ost **c**onfiguration **p**rotocol)が割り当てられなかったりした時に。
        

IP_packet(IP_datagram)を適切なtargeted_nodeまで転送するために最適な経路を選択して転送すること。routingでは、経路選択や経路制御を行う。

IPの経路制御では

[Aggregation of Routing table](https://www.notion.so/Aggregation-of-Routing-table-8a38210fad5542b98550425b16d4dd8d?pvs=21)

[RIP](https://www.notion.so/RIP-a9fd1b11340b4e9885b5172865511b14?pvs=21)

[OSPF](https://www.notion.so/OSPF-7c333123b62e4f6598a4e15891c62e6f?pvs=21)

[BGP](https://www.notion.so/BGP-5617127f4b53483d9edf21b6b49ae5da?pvs=21)

[MPLS](https://www.notion.so/MPLS-960c0b0152504dc0bd035880f28e42e3?pvs=21)

[GARP(Gratuitous ARP)](https://www.notion.so/GARP-Gratuitous-ARP-0610cb81cb2747e58c1aff6ff67f6301?pvs=21)

[Proxy ARP](https://www.notion.so/Proxy-ARP-7eef476f35534306bd6389b2beb90790?pvs=21)