# Code of WebSocket

**onopen()」：通信が接続された時に実行される・「onerror()」：通信中にエラーが発生した時に実行される・「onmessage()」：サーバーからデータを受信した時に実行される・「onclose()」：通信が切断された時に実行される**

```
//データを送信するメソッド
connection.send();

//通信を切断するメソッド
connection.close();
```

**データを受信するには「onmessage()」、データを送信するには「send()」を使う**

**「ws」と「wss」の違いは「http」「https」の違いとほとんど同じ**