GPGの基本的な使い方をご説明します。

## 1. GPG鍵の作成

```bash
gpg --full-generate-key
```

対話形式で以下を選択します：
- 鍵の種類（通常は RSA を選択）
- 鍵のサイズ（2048以上、推奨は4096ビット）
- 有効期限（0 = 無期限、または期間を指定）
- 名前とメールアドレス
- パスフレーズ（鍵を保護するパスワード）

作成後、鍵のIDを確認：
```bash
gpg --list-keys
```

## 2. ファイルを暗号化（鍵をかける）

```bash
# 特定の受信者用に暗号化
gpg --encrypt --recipient メールアドレスまたは鍵ID ファイル名

# 自分用に暗号化（対称暗号化）
gpg --symmetric ファイル名
```

例：
```bash
gpg --encrypt --recipient user@example.com document.txt
# → document.txt.gpg が作成されます

gpg --symmetric secret.txt
# → パスワードを入力して secret.txt.gpg が作成されます
```

## 3. 暗号化を解除（復号化）

```bash
gpg --decrypt 暗号化ファイル名 > 出力ファイル名

# または、元のファイル名で自動的に復号化
gpg --decrypt 暗号化ファイル名.gpg
```

例：
```bash
gpg --decrypt document.txt.gpg > document.txt
# または
gpg document.txt.gpg  # 自動的に document.txt が作成されます
```

パスフレーズの入力を求められるので、鍵作成時に設定したパスワードを入力してください。

---

**よく使うオプション：**
- `--armor` または `-a`：テキスト形式（ASCII armor）で出力
- `--output` または `-o`：出力ファイル名を指定

何か具体的な用途があれば、より詳しくご説明できます！
