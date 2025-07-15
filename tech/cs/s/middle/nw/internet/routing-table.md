---
layout: '@layout/Layout.astro'
---

Routing_protocol(IPとは違う)が作る。

そのためnode(router & host)がrouting_tableを保持し、参照する。

受信したpacketをどこへ転送すべきか判断するための経路情報

それぞれのhostやrouterが経路選択を行う時に利用する経路情報の一覧のこと。

routing_tableに含まれる情報や形式はvenderによって異なるが、一般的には以下のようなものが含まれる。

- 宛先network_adress
- subnet_mask(or prefix_length)
- next_hop(中継を依頼するrouter)
- IP_datagramを送出するinterface(NICなど)
- metric(距離または経路の重み(?))

routerは送信先IP_adressとrouting_tableの宛先networkとを比較して転送先のrouter(next_hop)を決定してpacket送信。この時、IP_headerの生存時間(TTL)を一つ減らす。

Adressのbit_patternを考え、hierarchical_structureでdeployすると、
内部で複数のsubnetがあっても外部的には代表する1つのnetwork_adressでroutingできる。
Adressのbit_patternを考え、hierarchical_structureでdeployすると、
内部で複数のsubnetがあっても外部的には代表する1つのnetwork_adressでroutingできる。

↑In the above-mentioned manner, each router only has to consult with the information of adjacent router.

To make routing table smaller is the major benefit.

- To alleviate the pressure on memory space & CPU power
- To increase transmission capacity of IP packets