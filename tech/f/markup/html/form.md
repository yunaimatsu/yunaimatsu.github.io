# フォームをコンパクトにまとめる
![](https://storage.googleapis.com/zenn-user-upload/2687178f8266-20240517.png)
```html:index.html
<form>
    <fieldset>
        <legend></legend>
    </fieldset>
</form>
```
## 入力
### ボタン
```html:index.html
<form>
    <button></button>
    <label></label>
</form>
```
### 短文入力
```html:index.html
<form>
    <input></input>
    <input type="hidden"></input> <!-- ユーザには表示しないデータ -->
    <input type="text"></input> <!-- 1行のテキスト入力欄 -->
    <input type="search"></input> <!-- 検索ワードの入力欄 -->
    <input type="url"></input> <!-- URLの入力欄 -->
</form>
```
### 個人情報
```html:index.html
<form>
    <input type="tel"></input> <!-- 電話番号の入力欄 -->
    <input type="email"></input> <!-- メールアドレスの入力欄 -->
    <input type="password"></input> <!-- パスワードの入力欄 -->
</form>
```
### 時間軸
```html:index.html
<form>
    <input type="data"></input> <!-- 日付の入力欄 -->
    <input type="datetime-local"></input> <!-- 日時の入力欄 -->
    <input type="month"></input> <!-- 月の入力欄 -->
    <input type="week"></input> <!-- 週の入力欄 -->
    <input type="time"></input> <!-- 時刻の入力欄 -->
</form>
```
### 数値
```html:index.html
<form>
    <input type="number"></input> <!-- 数値の入力欄 -->
    <input type="range"></input> <!-- 大まかな数値の入力欄 -->
    <input type="color"></input> <!-- カラーコード -->
</form>
```
### リスト
```html:index.html
<form>
    <input type="checkbox"></input> <!-- チェックボックス -->
    <input type="radio"></input> <!-- -->
</form>
```
### 送信
```html:index.html
<form>
    <input type="submit"></input> <!-- -->
    <input type="image"></input> <!-- -->
</form>
```
### ファイル
```html:index.html
    <input type="file"></input> <!--  -->
```
    <input type="reset"></input> <!-- -->
    <input type="button"></input> <!-- -->
    <input type="hidden"></input> <!-- -->
</form>
```

### 長文入力
```html:index.html
<textarea></textarea>
```
### CSS
```css:style.css
input {
    caret-color: ;
}
```
```css:style.css

```

### 選択肢
```html:index.html
<form>
    <select>
        <optgroup>
            <option></option>
            <option></option>
            <option></option>
        </optgroup>
    </select>
</form>
```
### データリスト(入力もできる選択)

## 出力
```html:index.html
<output></output>
```
### メーター
```html:index.html
<progress>
<meter></meter>
```