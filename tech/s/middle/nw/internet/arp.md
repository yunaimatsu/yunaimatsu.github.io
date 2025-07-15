---
layout: '@layout/Layout.astro'
---
MAC=ARP(IP)
# ARP(address_resolution_protocol)
TCP/IPネットワークでイーサネットフレームを送信するには、あて先のMACアドレスを指定する必要がある。ARPは、MACアドレスをあて先のIPアドレスから求めるためのプロトコル。

あて先MACアドレスが分からない場合、送信元はIPアドレスのMACアドレスを問い合わせるARPリクエストをブロードキャストで送信する。このリクエストに対して、指定されたIPアドレスを持っていないマシンは応答しないが、持っているマシンはMACアドレスを通知するARPリプライを返す。これにより、送信元はMACアドレスを入手でき、イーサネットフレームを作成できるようになる。

取得したMACアドレスは、IPアドレスとひも付けされてARPテーブルに保存される。以降のデータ通信は、ARPテーブルを参照して送信される。ただし、MACアドレスに割り振られたIPアドレスは変更されることがある。そこで、ARPテーブルでは保存する期間をARPキャッシュとして指定し、一定時間が経つとクリアして再度ARPリクエストを求める。ARPキャッシュのクリア時間はOSなどによって異なる。
　なお、ARPキャッシュの内容を表示するには、「arp -a」または「arp -e」のコマンドを、ARPキャッシュを強制的にクリアする場合は「arping -U IPアドレス」をWindowsのコマンドプロンプトなどで実行する。

IPv4ではARP

IPv6ではICMP.

Not only IP_adressMAC_adress is also necessay.

Destination_hostが同じdatalinkにないときはnext hopのrouterのmac_adressを調べることができる。

## System of ARP

How can MAC_adress be obtained?

**ARP_request**

1. Broadcast(to all hosts in that datalink) request_packet(知りたいhostのIP_adress) to destination 
2. If
    1. 送られたIP_adressと一致する
    →自分のMAC_adressを埋め込んでresponse_packet送信
    2. 送られたIP_adressと一致しない
    →無視？
3. request_packet送った側もresponce_packet送った側も、お互いのMAC_adressはcacheする(毎回ARP通信しないで良くなる)。しばらくしてcacheを捨てる(MAC_adressが変わっても通信障害起こさないようになる)。

**ARP_responce**