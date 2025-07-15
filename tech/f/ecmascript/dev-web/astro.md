---
layout: '@layout/Layout.astro'
---
# 1. Astro
## 1.1. プロジェクトを開始する
```shell:Terminal
bun create astro@latest
```
![](https://storage.googleapis.com/zenn-user-upload/761c68f2f4c8-20240618.png =400x)
## 1.2. `second-series`ディレクトリに移動する
```shell:Terminal
cd second-series
```
## 1.3. サーバを起動する
```shell:Terminal
bun run dev
```
## 1.4. ブラウザで開く
Astroでは、以下のURLで開くと現段階のサイトの様子を見ることができる。
http://localhost:4321/
![](https://storage.googleapis.com/zenn-user-upload/018b25dc8d48-20240618.png)

# Flask
## .1. インストール
```sh:Terminal
pip3 install flask
pip3 install jinja2
```
## .2. ディレクトリのセットアップ
次に、以下のコマンドをターミナルにコピペする。
```sh:Terminal
mkdir flaskr && mkdir flaskr/templates && touch flaskr/__init__.py flaskr/main.py
```
すると、以下のようなディレクトリ構成ができたはずだ。
```
flaskr
├── __init__.py
├── main.py
└── templates
```
## .3. `__init__.py`の中身を書く
```python:__init__.py
from flask import Flask
app = Flask(__name__)
```
## .4. `main.py`の中身を書く
```python:main.py
from flaskr import app

@app.route('/')
def index():
    pass
```