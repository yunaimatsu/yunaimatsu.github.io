# How to check port number

- Command Line
    
    Windowsの場合、コマンドプロンプトで「netstat -a」と入力すると、現在の接続先やリッスン中のポート番号を確認できます。
    
    MacやLinuxの場合、ターミナルで「sudo lsof -i -P -n」と入力すると、現在の接続先やリッスン中のポート番号を確認できます。
    
- 現在使われているポート番号の確かめ方
    
    コマンドプロンプトまたはターミナルを開きます。
    
    netstat -an または netstat -anp などのコマンドを入力して、ポート番号を表示します。
    
    これにより、現在オープンされているすべてのポートが一覧表示されます。
    
    lsof -i :ポート番号 コマンドを入力して、特定のポートが使用されているプロセスを特定します。
    
    このコマンドは、Mac OS XおよびLinuxベースのシステムで使用できます。
    
    また、オンラインでポート番号を確認することもできます。
    
    たとえば、IANA（Internet Assigned Numbers Authority）が公開しているポート番号リストを確認することができます。
    
- [**https://www.portcheckers.com/**](https://www.portcheckers.com/)
- use the tools
    
    Windowsでは「TCPView」というツールがあり、Macでは「PortsMonitor」というツールがあります。