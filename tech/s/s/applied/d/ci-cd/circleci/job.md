# ジョブとは、ステップを集めたもの。
ジョブをいくつか集めてワークフローになる。

# ジョブは主に「(1)実行環境」と「(2)ステップ」でできている！
ジョブの構成要素は以下の通りです。

## 1. 「実行環境」とは、「パソコンの種類」のこと！
「**実行環境**」とは、「**パソコンの種類**」のことだと思ってください。
「**実行環境**」の具体的には、以下のようなものがります。
* **Docker** (`docker`)
* **Mac** (`macos`)
* **Linux** (`machine`)

### Docker
Dockerをジョブの**実行環境**として使用する場合、以下の情報を登録できます。
#### 必須
|キー|データ型|選択肢|記述|
|---|---|---|---|
|`image`|文字列||実行環境として使用したいDockerイメージ|
#### オプション
|キー|データ型|選択肢|記述|
|---|---|---|---|
|`name`|文字列||他のコンテナからアクセスする際のDockerの名前(ホスト名)。|
|`user`|文字列||コンテナ内でコマンドを実行するユーザを指定|
|`entrypoint`|文字列, リスト||コンテナの起動時に実行されるコマンド|
|`command`|文字列, リスト||エントリーポイントの引数を指定する。エントリーポイントが定義されていなければコンテナ起動時にPID1となるコマンドになる|
|`environment`|マップ||環境変数|
|`auth`|マップ|||Docker loginで使用する認証情報を指定する|
|`aws_auth`|マップ||ECRにホストされているイメージを使用するための認証情報に指定する|

```yaml
jobs:
  my-job:
    docker:
      image: # 必須
      name:
      entrypoint:
      command:
      user:
      environment:
      auth:
      aws_auth:
```
### Dockerの例
```yaml
jobs:
  my-example-job:
    docker:
      image: node:14
      name: my-docker-container # 初期値はlocalhost経由でアクセス可能
      entrypoint: ["/bin/sh", "-c"] # 文字列/リスト。Dockerコンテナの起動時に実行されるコマンドで指定。Dockerfileのエントリーポイントを上書き。
      command: ["echo", "Hello World"] # 文字列/リスト。エントリーポイントの引数を指定。エントリーポイントがない場合はコンテナ起動時にPID1となるコマンドになる。
      user: "1001:1001" # 文字列。コンテナ内でコマンドを実行するユーザを指定。
      environment: # マップ。環境変数。
        NODE_ENV: production
        API_KEY: abcdef12345
      auth: # マップ。`docker login`で使用する認証情報を指定する。
        username: my-username
        password: my-password
        aws_auth: # ECRにホストされているイメージを使用するための認証情報を指定する。
          access_key_id: YOUR_AWS_ACESS_KEY
          secret_access_key: YOUR_AWS_SECRET_KEY
          region: us-west-1
```
### Mac
```yaml
jobs:
  my-job:
    macos:
      xcode: # 文字列、必須。VMにインストールするバージョンを指定する。
```
### MacOSの例
```yaml

```

### Machine
# Machine Key Settings
#### 必須
|**キー**|**データ型**|**記述**|
|---|---|---|
|`image`|文字列|Specifies the image to use. For available images, refer to "Available machine images".|

#### オプション
|**キー**|**データ型**|**記述**|
|---|---|---|
|`docker_layer_caching`|ブーリアン|使うイメージを指定するSpecify `true` to enable Docker layer caching. A paid account is required to use this feature.                        |

```yaml
jobs:
  my-job:
    image: # 文字列 使用するイメージをAvailable machine imagesから指定する。
    docker_layer_caching: # ブーリアン Dockerレイヤキャッシングを有効にする。有償アカウントが必要。
```
### Machineの例
```yaml
jobs:
  my-job:
    あああ
```
## 2. 「ステップ」とは
ジョブより小さい単位の処理。
```yaml

```

# ワークフローは、ファイルを処理することができる
```yaml
persist_to_workspace
```

## 3. その他のキー
(1)「**実行環境**」
(2)「**ステップ**j」を定義したら、**ジョブ**は完成も同然です。
`shell`
`environment`
`parallelism`
`working_directory`
`resource_class`
```yaml
jobs:
  my-job:
    # ↓↓↓必須
    docker:
      - image: circleci/node:14.17-browsers
    # ↑↑↑必須
    
    # ↓↓↓ここから任意
    shell: /bin/bash --login
    environment:
      NODE_ENV: production
      APP_VERSION: 1.0.0
    parallelism: 3
    working_directory: ~/my-app
    resource_class: medium
    # ↑↑↑ここまで任意

    # ↓↓↓必須
    steps:
      - checkout
      - run:
          name: Print Environment and Working Directory
          command: |
            echo "Running in environment $NODE_ENV"
            echo "Working directory is $(pwd)"
            echo "Parallel instance: $CIRCLE_NODE_INDEX"
    # ↑↑↑必須
```
