# 0から作っても、テンプレを使ってもいい！
1. オリジナルのステップを作る
1. 元々用意されてるステップを使う
# オリジナルのステップを作る
## runキーの設定内容

|**キー**|**型**|**説明**|**初期値**|
|---|---|---|---|
| `command` (必須) |文字列|シェルが実行するコマンドを設定する|-|
|`name`|文字列| UIに表示するためのステップのタイトルを設定する。初期値はcommandの文字列 |
|`shell`| 文字列   | コマンド実行に用いるシェルを設定する。初期値は/bin/sh -eo pipefail。 詳しくはコラム「シェルオプションの初期値」を参照 |
|`environment`|文字列|commandのローカルスコープとなる環境変数を設定する|
|`background`|真偽値|バックグラウンドで実行するかどうかを設定する。初期値は`false`|
|`working_directory`| 文字列   | 実行ディレクトリを設定する。ジョブのworking_directoryからの相対パス。初期値は`/` |
|`no_output_timeout`| 文字列   |`"20m"`, `"1.25h"`, `"5s"`のように単位付き数値で、出力のないコマンドの実行可能時間を設定する。何も指定しない場合はタイムアウトする |
|`when`|文字列|ステップをいつ実行するかを設定する。`always`、`on_success`、`on_fail`の中から1つを指定する。初期値は`on_success`|
```yaml
jobs:
  my-job:
    docker:
      - image: my-docker-image
    steps:
      - checkout
      - run:
          name: Print Environment and Working Directory
          command: echo Hello World!
          shell:
          environment:
          background:
          working_directory:
          mo_output_timeout:
          when:
```

```yaml
jobs:
  my-job:
    docker:
      - image: my-docker-image
    steps:
      - checkout
      - run:
          name: Print Environment and Working Directory
          command: echo Hello World!
```
# 元々用意されてるステップを使う

## 条件によって事項するステップを変える
### 
```yaml
jobs:
  my-job:
    docker:
      - iamge: my-docker-image
    steps:
      - when:
          condition: 
          steps:
            run: echo "Hello World!"
      - unless:
          condition:
            - run: echo "Fxxk u World!"
```
`and`
`or`
`equal`
`not`

## 
- setup_remote_docker
- save_cache/restore_cache
- deploy (非推奨)
- store_artifacts
- store_test_results
- persist_to_workspace/attach_workspace
- add_ssh_keys