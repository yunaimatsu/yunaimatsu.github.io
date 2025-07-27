---
layout: '@layout/Layout.astro'
---

- designating IP address
- network_adress_part(LAN_id)
- host_adress_part(host_id)
- cf. datalink layer

designating Mac address

connecting one pair of node
# [IPアドレス](/b/cs/nw/internet/ip-address)

AS(**a**utonomous_**s**ystem)
同じ運用ポリシーのもとで動作するnetworkの集合

routing_inside_AS

IGP(**i**nterior_**g**ateway_**p**rotocol)
RIP(**r**outing_**i**nformation_**p**rotocol)

one of the simplest and oldest routing protocol.

classful[IP has 3(or5)casses](version1,2)

https://youtu.be/aNV4rVLa_sc?si=J4M6-qq9X6fCcUnV

- OSPF(**o**pen_**s**hortest_**p**ath_**f**irst)

OSPF （Open Shortest Path First）はリンクステート型ルーティングプロトコル。リンクステート型の　ルーティングプロトコルの特徴は、先に解説したリンクステート型ルーティングプロトコルの通りですが　この解説にOSPFを当てはめて詳細に解説します。OSPFには、IPv4対応の

OSPFv2

（ バージョン2 ）と　IPv6対応の

OSPFv3

（ バージョン3 ）の2種類ありますが、一般的にOSPFといえばOSPFv2を指します。

- EGP(**e**xterior_**g**ateway_**p**rotocol)



assign IP adress
DHCP


global IP address ↔ private IP address
NAT

domain → IP_adress

### DNS
- Why is domain necessary?

Just for human to facilitate memorizing.


IPv4, IPv6どちらでも使われる。

## Hierarchical structure of DNS

Domainは後ろに行くほどDNS server内の階層は高くなる。

## Name server

Host, software which management domain names. Root name server - zone

```
host_name.organization_name.ac.jp
```

[DNS CNAMEレコードとは？  | Cloudflare](https://www.cloudflare.com/ja-jp/learning/dns/dns-records/dns-cname-record/)

![image.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d36be01f-c315-4c3e-890b-9b2043984cc4/11910402-a20d-4a0d-a4a3-3492f8cd10d7/image.jpg)

A(1)MX(15)x

### Records

- rule on the name of record

When setting DNS records on Cloudflare or any other DNS management platform, there are specific rules and considerations for naming records. Here are some general rules and guidelines:

1. **Valid Characters:**
- Use letters (a-z, A-Z), numbers (0-9), hyphens (-), and underscores (_) in domain names.
- Avoid using spaces and special characters like !, @, #, $, %, ^, &, *, (, ), etc.
2. **Length Limitations:**
- Keep the total length of the record within reasonable limits. While DNS itself allows longer labels, some systems or applications may have limitations.
3. **Subdomain Hierarchy:**
- If you're creating subdomains, maintain a hierarchical structure. For example, "[subdomain.example.com](http://subdomain.example.com/)" should follow the structure "subdomain" as a subdomain of "[example.com](http://example.com/)."
4. **Starting and Ending Characters:**
- Avoid starting or ending a label with a hyphen (-) to prevent confusion and potential issues.
5. **Case Insensitivity:**
- DNS is generally case-insensitive, but it's a good practice to use lowercase letters for DNS records. Some systems may display domain names in lowercase by default.
6. **Record Types:**
- Different record types (A, CNAME, MX, etc.) have specific naming conventions. For example, an A record typically points to an IP address, while a CNAME record is an alias for another domain.
7. **Wildcard Records:**
- Cloudflare supports wildcard DNS records, which use an asterisk (*) to match any subdomain. For example, "*.example.com" would match "[sub1.example.com](http://sub1.example.com/)" and "[sub2.example.com](http://sub2.example.com/)."
8. **Zone Apex (Root) Record:**
- The zone apex record represents the bare domain (e.g., [example.com](http://example.com/)). Some DNS providers require it to be specified as "@" or may automatically handle it.

Always refer to the specific documentation provided by Cloudflare or your DNS provider for any additional rules or features specific to their platform. Additionally, consider DNS propagation time after making changes, as it may take some time for DNS records to be updated globally.


IPv4 ↔ IPv6
tunneling

monitoring & troubleshooting of network
ICMP
ICMPv6


ヘッダの構築・情報

VRRP
VRRP(**v**irtual_**r**outer_edundancy_**p**rotocol)

ネットワーク上で複数のルーターを束ね、一体的に運用するための制御情報を伝送するプロトコルの1つ。 複数のルーターを1台の仮想的なルーターとして利用する、予備のルーターにバックアップルーターの機能を持たせることが可能になる。万が一、マスタールーターが機能を停止しても、バックアップルーターが数秒以内に処理を引き継いでくれる。その間、マスタールーターを復帰させれば停止時間なく常時運用できる。

IETFが1998年、RFC2338として標準化（その後RFC5798で置き換え）した規格 

シスコシステムズ社が開発したHSRP（Hot Standby Routing Protocol）は、同社のルーター同士の組み合わせを対象としたものだった。それに対し、異なるメーカーの機器を組み合わせて使用できるのがVRRPの最大の利点。
HSRP
IETF


IP単体では相手に届いたかどうかわからない。

経路選択(routing)機能也中継機能を持つ。通信を行うnode(end-system)に相手nodeの物理的な距離を意識させない透過的なデータ転送を行う。

node refers to any device that is connected to a network.

- **etwork_layer**        router, L3_switch        - LAN同士    - LANとWAN        を中継/ルーティング。パケットの宛先IPを元にrouterが持つrouting_tableから転送先のrouter(next_hop)を決定。packetをtransfer.

routerおけるrouting動作。最適経路を動的に決定する、そして経路に関する情報を他のrouterと交換し合うことによって動的に作成・更新されたrouting_tableを使用するrouting。

routing_outside_AS

L3-switch

**d**ynamic_**r**outing_**p**rotocol

下位層のサービス品質の差異を吸収・補完し、上位層に高品質なデータを提供。

送る時にデータを分割してパケットにする

IP: end_nodeどうしの通信の全体を決める

🙅datalink_layerのlink-to-link_communication
(datalink(ノード間)毎に異なるprotocolで運営されている。)

🙆end-to-end_communication
(end_node同士の通信)

datalinkを超えた通信。通信経路となっているdatalinkの違いを覆い隠し、異なる種類のdatalinkであったとしても、その間の連携をとりながらpacketを配送することによって、別のdatalinkに接続されているcomputer間での通信を可能とする。


# **routing**

topology_map各ホストの状態と親子関係を確認できるマップ。

管理対象のネットワークがそれほど大規模でない場合でも、ネットワーク全体をカバーするマップを作ることは十分に役立ちます。例えばそこにノードを追加してネットワークを拡張する場合にも、そのマップはネットワーク全体を把握するために大いに役立ちます。ましてやエンタープライズ規模のネットワークでは、トポロジーマップは完全に必須項目になっています。なぜなら、マップ上のどのノードが動作していないかを示してくれるおかげでネットワークに起きた問題をトラブルシュートする時間と手間が大幅に削減されるのです。

**ネットワークのボトルネックを簡単に見つける**

トポロジーマップに、各ノードやリンクの状況をリアルタイムで表示する高度な機能がある場合（必ずしも世の中にある全ての監視製品にそれがあるとは限りませんが）、ネットワーク管理者は問題発生時にネットワークのボトルネックを簡単に見つけることができます。さらに、トポロジーマップがネットワーク監視ツールと統合されている場合は、アラートが届くよりも前に問題の根本原因を突き止めることができます。もちろんSolarWindsの監視製品なら、こうしたトラブルシュートが可能です。

**ネットワークの実体を理解しやすくする**

ネットワークトポロジマップにより、ネットワーク管理者は「ネットワークの実体」をより具体的に把握することが出来るようになります。ネットワークの実体は、なかなか目には見えにくいものですが、トポロジーマップでネットワーク内のデバイスの関係を視覚化することで、ネットワーク管理者はその実体を把握・理解しやすくなります。また、多数のデバイスやリンクを1つのマップ上に表示することは、それら多数のデバイスを個別に表示するよりも、視認性は明らかに良くなります。

**ネットワーク変更の影響が分かる**

ネットワーク管理者がユーザーの要件に基づいて新しいデバイスを追加したり、ネットワークの構造を変更するのはよくあることです。そして、これらの変更によって悪影響が出てしまうことも、（残念ながら）起こりうることです。それでもネットワークトポロジマップがあれば、デバイスの接続状況を正しく把握することで、間違った変更を避けやすくなりますし、さらに変更がどのような影響を及ぼしうるのかも把握できます。つまり、プロアクティブでいられると言うことです。

**より強力なネットワーク監視システム**

ネットワークトポロジマップとネットワーク監視ツールと組み合わせは、大規模なネットワークを管理する管理者にとって最強のツールとなります。利用可能なすべてのネットワークデバイスでデータを収集し、それをグラフィカル情報として表示することは、ネットワークトポロジマップを持つことの最大の利点です。ネットワークの経路と接続されているデバイスの状況を簡単に確認できます。例えば下記のマップからは、リンクがどんな状態にあるのか簡単に監視できます。遠方にあるサイトのネットワークを管理すること自体は、現代ではたいして難しいことではありませんが、リモートサイトへのリンクがダウンしていると、リモートサイトからデータを収集できなくなります。それでも、そのような問題がマップに反映され、管理者は問題発生場所を特定できます。