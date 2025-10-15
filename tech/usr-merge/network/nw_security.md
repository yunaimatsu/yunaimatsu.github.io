# Security in network

- アクセス管理とそのためのユーザ認証
    - ユーザ認証(ログインとログアウト)
        - ID and password
        - biometrics
        - one time password
        - call back
    - Access permission
    - 不正アクセス
        - social engineering
        
        ![1000011708.png](/blog/cs/security/Security in network 106496eb7c90808c8adbd066fb9eeb77/1000011708.png)
        
        ![1000011709.png](/blog/cs/security/Security in network 106496eb7c90808c8adbd066fb9eeb77/1000011709.png)
        
        ![1000011710.png](/blog/cs/security/Security in network 106496eb7c90808c8adbd066fb9eeb77/1000011710.png)
        
    - 不正アクセスへの対策
        
        ![1000011711.png](/blog/cs/security/Security in network 106496eb7c90808c8adbd066fb9eeb77/1000011711.png)
        
        ![1000011712.png](/blog/cs/security/Security in network 106496eb7c90808c8adbd066fb9eeb77/1000011712.png)
        

3 threats in network

- Eavesdropping /ˈiːvzˌdrɒpɪŋ/
    
    盗聴
    
    データのやり取りを盗み読まれること
    
- Tampering /ˈtæmpərɪŋ/ or Data falsification /ˈdeɪtə ˌfɔːlsɪfɪˈkeɪʃən/
    
    改竄
    
    データをやり取り中に改ざんされること
    
- Impersonation /ɪmˌpɜːrsəˈneɪʃən/
    
    成りすまし
    
    第三者が正当な人物になりすまして データをやり取りすること
    
1. そもそもネットワークの仕組みを変える
    - ネットワークの内外を仕切る
        
        この機能のことをファイヤウォールという。
        
        ファイヤウォールを実現する仕組み
        
        パケットフィルタリング
        
        アプリケーションゲートウェイ(プロキシ)
        
        - ファイアウォールには、主に以下のような種類があります。
            
            それぞれ異なるレベルのセキュリティと監視機能を提供します.
            
            - 1. パケットフィルタリング型ファイアウォール
                
                概要: ネットワーク層で動作し、IPアドレスやポート番号に基づいて通信を許可または拒否します。
                特徴: シンプルかつ高速で、特定のパケットだけをブロック可能。
                欠点: 通信の内容までは確認できないため、高度な攻撃を防ぐことが難しい。
                
            - 2. ステートフルインスペクション型ファイアウォール
                
                概要: 各接続の状態を追跡し、許可された通信のみを許容するファイアウォール。
                特徴: 接続の状態（開始、進行中、終了など）を管理し、より詳細なセキュリティを提供。
                欠点: リソース消費が大きく、パフォーマンスに影響を与えることがある。
                
            - 3. アプリケーション層ゲートウェイ（プロキシ型ファイアウォール）
                
                概要: アプリケーション層で動作し、特定のアプリケーション通信を仲介する。
                特徴: アプリケーションレベルでのセキュリティを強化し、通信内容を詳細に検査可能。
                欠点: パフォーマンスが低下しやすい。また、設定が複雑。
                
            - 4. 次世代ファイアウォール（NGFW）
                
                概要: 従来のファイアウォール機能に加え、侵入防止システム（IPS）やアプリケーションレベルの制御など、高度な機能を備えたファイアウォール。
                特徴: トラフィックを詳細に分析し、高度な脅威を検出・防止可能。
                欠点: 高価で、運用に高度な知識が必要。
                
            - 5. クラウドベースファイアウォール
                
                概要: クラウド上で提供されるファイアウォールで、複数の拠点やデバイスに対応する。
                特徴: 物理的な制約がなく、スケーラブルで柔軟な管理が可能。
                欠点: クラウド環境に依存するため、インターネット接続の問題が影響を及ぼす可能性がある。
                
            - 6. ホストベースファイアウォール
                
                概要: 各デバイスにインストールされるファイアウォールで、個々のコンピュータの通信を監視・制御する。
                特徴: 端末ごとに細かい制御が可能。
                欠点: 大規模なネットワークでは管理が複雑になる。
                
2. データ自体を加工する
    - 暗号化(against eavesdropping)
        
        データを暗号化する
        
        ![1000011704.png](/blog/cs/security/Security in network 106496eb7c90808c8adbd066fb9eeb77/1000011704.png)
        
        ![1000008250.png](/blog/cs/security/Security in network 106496eb7c90808c8adbd066fb9eeb77/1000008250.png)
        
        - 共通鍵暗号方式
            
            [https://youtu.be/vmRkn5JNqa0?si=g17i39aL6dxkWz2j](https://youtu.be/vmRkn5JNqa0?si=g17i39aL6dxkWz2j)
            
            1. Encrypt plain text
            2. 
            
            ![1000008248.png](/blog/cs/security/Security in network 106496eb7c90808c8adbd066fb9eeb77/1000008248.png)
            
        - 公開鍵暗号方式
            
            [https://youtu.be/1jbQTIuDW8g?si=hCc01AENibbL785Y](https://youtu.be/1jbQTIuDW8g?si=hCc01AENibbL785Y)
            
            ![1000008249.png](/blog/cs/security/Security in network 106496eb7c90808c8adbd066fb9eeb77/1000008249.png)
            
        - key pair
        - passphrase protection
    - ハッシュ関数(against tampering)
    - CA(Certification Authority)(against impersonation)

要は防災訓練

ペネトレーションテスト

ファジング