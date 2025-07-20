# Server

```go
package main
import (    "fmt"    "net/http")
func handler(w http.ResponseWriter, r *http.Request) {    fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])}
func main() {    http.HandleFunc("/", handler)    http.ListenAndServe(":8080", nil)}
```

HTTPリクエストを受け取って、HTTPレスポンスを返すサーバを簡単に実装することができます。

上記のコードは、http.HandleFunc関数でルートパス"/"に対するリクエストをhandler関数で処理するように設定しています。

handler関数では、fmt.Fprintf関数を使ってHTTPレスポンスのボディに"Hello, [リクエストURL]"というメッセージを返しています。

最後に、http.ListenAndServe関数でポート番号8080でサーバを起動しています

上記のコードを実行すると、ターミナルでgo run main.goなどとコマンドを実行し、ブラウザでhttp://localhost:8080/[名前]にアクセスすると、"Hello, [名前]!"というメッセージが表示されます。