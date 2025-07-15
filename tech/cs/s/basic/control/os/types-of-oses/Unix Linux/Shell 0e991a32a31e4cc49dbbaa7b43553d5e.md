# Shell

- アップロードでファイルを作る

# Meta

# Execution

execution arg

`"${@}"` represents all the arguments passed to the script or functions as separate quoted strings.

`"${*:1}"` behaves similarly but is more common for working with arrays, where `*`  treats the arguments as a single string.

`"$

# Control

## Loop

```bash
for [VARIABLE] in [LIST]; do
    # processing
done
```

```bash
while [CONDITION]; do
    # processing
done
```

# Content

## Noun

### variable

```bash
declare -a 
```

```bash
declare
```

## Verb

- log-in method
    - local
    - SSH
        - v1(fragile)
            - Rsa
        - v2
            - rsa
            - dsa
    
    `ssh-keygen`
    
    を実行すると、~/.sshディレクトリが作成される。
    
    rsaにはidentify id_rsa
    
    dsaにはid_dsa
    
    こうかいかぎ .pub というファイル
    
    - ftp, sftp
    - rdp
    - vnc
    - web-based
    - kerberos

シェルは， OS の機能を呼び出したり別のアプリケーションを呼び出したりするためのコマンド言語インタプリタです。

**#!/bin/sh**

sh(Bourne Shell)

>bash(we use most frequently) ksそh

csh今は無き

tcsh

fish

zsh: mac defalut

ssh