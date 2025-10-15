```sh
go mod init example/user/hello
```

```sh
go mod init github.com/spf13/cobra-example
```

```go
module example/user/hello
```

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, world.")
}
```

モジュールをインストールする。
`go instal`などのコマンドは、カレントディレクトリを含むモジュールの範囲内でしか適用されない。
外からやると、コマンドはエラーを吐くかも。

```sh
go install example/user/hello
```
1. builds the hello command
2. produces an executable binary
3. installs that binary as $HOME/go/bin/hello (or, under Windows, %USERPROFILE%\go\bin\hello.exe).

### 環境変数
```shell
go env -w GOBIN=/somewhere/else/bin
```

```shell
go env -u GOBIN
```


```shell
export PATH=$PATH:$(dirname $(go list -f '{{.Target}}' .))
hello
```

- `dirname <filename>`はそのファイルが存在するディレクトリのパスを返す。
- `$(<cmd>)`はコマンドの実行結果を返す。
- go list -f '{{.Target}}' .