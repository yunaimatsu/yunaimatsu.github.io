---
layout: '@layout/Layout.astro'
---
# CIDR(classless_inter_domain_routing)
IPv4のaddress_asignmentを効率的に行う方式。subnet_maskを使ってどこまでがnetwork_adressなのかを示すことで、任意の長さの(1_bit単位での)network_adressを指定することができる。
CIDR記法では、IP_adressの後ろにnetwork_adressの長さのbit数を/で区切って記述。
1. ネットワークアドレス部の桁数(ビット数)を
```js
10101010.10101010.10101010.10101010/26
```
プレフィックス(prefix): IPアドレスの後ろに付け足すネットワークアドレス部の桁数のこと
## メリット
CIDRの場合は縮小もできるためネットワークを集約するなどの柔軟な構成が可能。IPv6でも可能。