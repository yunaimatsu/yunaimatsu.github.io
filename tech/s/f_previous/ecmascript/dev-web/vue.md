### 1

- [x] 1

- [x] 2

- [x] 3

- [x] 4

- [x] 5

- [x] 6

- [x] 7

### 2

- [x] 1
 
- [x] 2

- [x] 3

- [x] 4

- [x] 5

- [x] 6

- [x] 7

- [x] 8

- [x] 9

- [x] 10

- [x] 11

### 3

1

2

3

4

### 4

1

2

3

4

5

### 5

1

2

3

4

5

### 6


1

2

3

4

5

6

### 7

1

2

3

4

5

6

7

8

### 8

- [x] 1

- [x] 2

- [x] 3

- [x] 4

- [x] 5

- [x] 6

- [x] 7

- [x] 8

### 9

- [x] 1

- [x] 2

- [x] 3

- [x] 4

### 10

- [x] 1

- [x] 2

- [x] 3

- [x] 4

- [x] 5

- [x] 6

- [x] 7

- [x] 8

- [x] 9

# I 仕組み
## (勝手に)JavaScriptとNode.jsについて
- JSはブラウザの上でのみ動く
- Node.jsはインタプリタの上で動く

## Vue.jsを支える技術(1.5)
Component
**Reactive System**
状態の変化をVue.jsが検知（監視）して、自動的にDOM側に反映できるようにする仕組み
**Rendering System**

## Ecosystem(Plugins)(1.6)
```
Official Plugins
```
### Vue Router
### Vuex
状態管理のコストを下げるために導入する。
#### 7.1 複雑な状態管理
データを処理するためのロジックを置く場所を一つに定める。
コンポーネントにインポートしてしようする。
同じような処理がある場合はまとめる。
#### 7.2 データフロー
アプリケーションの状態
#### 7.4 Vuexの思想
- Store 
状態を保持する
<br>常の
```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  }, 
  mutations: {
    increment(state, amount){
      state.count += amount
    }
  },
})
```
- State
- Getter
- Mutation
- Action
### Vue Loader
### Vue CLI
### Vue DevTools
### MozillaFirefox/Electron
```
3rd Party Plugins
```
- Nuxt.js
- Weex
- Onsen UI
- Awesome Vue
- Vue Curated

1. Vueインスタンスを生成する
2. VueインスタンスをDOM要素にマウントする

## 2.3 Vueオブジェクト
ここからはVue.jsのAPIや基本機能を紹介していきます。 script要素でVue.jsのファイルを読み込んだことで、グローバル変数Vue＊3が定義されます。 グローバル変数Vueは、複数の役割を持ったオブジェクトです。 役割の1つはコンストラクタ、もう1つはVue.jsのAPIを束ねる名前空間（モジュール）です＊4。 変数Vueは、Vue.jsの動作の根幹となる重要な変数です。実際にコードを書いて試していきましょう。
このインスタンスをDOM要素にマウント（適用）することで、Vue.jsの機能がその要素内で使えるようになります。

コンストラクタの引数として、オプションオブジェクトを渡します。オプションオブジェクトでは、UIの状態（データ）、状態とDOMのマッピングの定義（テンプレート）、マウントさせるDOM要素、イベントが発生した際に呼び出す振る舞い（メソッド）を指定します。 このオプションオブジェクトの内容によって、Vueインスタンス・UIの挙動が決まります。 この章では、以下の主要なオプションについて取り上げます。

プログラミングで関数やメソッドを適切な粒度・役割で分割するように、Vue.jsでもインスタンスを分割できます。 この分割の単位をコンポーネントと呼びます。今回のサンプルアプリケーションでは用いないので、コンポーネントについての詳しい説明は次章に譲ります。 Vueオブジェクトのcomponentメソッドでアプリケーション全体で使うコンポーネントを登録可能です。また、Vueインスタンスを生成する際のオプションのcomponentsプロパティで、そのVueインスタンスのスコープ（テンプレート）だけで利用できるコンポーネントを登録できます。

- `Vue`オブジェクトが作られる。
## コンストラクタ
```js
var vm = new Vue({
  // ... 
})
```

### 2.4 Mounting of Vue instance
既存のDOM要素をVue.jsが生成するDOM要素で置き換えることです。このDOM要素はインスタンス生成時のオプションオブジェクトで与えたり、メソッドを呼び出して後から指定したりできます
- インスタンス適用
- `$mount` method
var vm = new Vue({  // ... }) // UI操作や通信の後、要素が生成されてからマウントを行う vm.$mount(el)
```js
var vm = new Vue({
    el: '#app',
        // ...
    // 2.5 data
    data: {
        // key: "value"
    },
    // 2.7 filters
    filters: {
    },
    // 2.8 computed
    computed: {
        算出プロパティ名: function(){
            // return ...
        }
    },
    // 2.10 ライフサイクル(よく分からない)
    // 2.11 method
    method: {
        myMethod1: function(){
            // Process1
        },
        myMethod2: function(){
            // Process2
        }
    }
})
```
## Vue.jsのAPIを束ねるnamespace(module)

# II Setup
## 1.7 Vue.jsの初めの一歩
```html
<!DOCTYPE html>
<title>はじめてのVue.js</title>
<script src="https://unpkg.com/vue@2.5.17"></script>

<div id="app"></div>

<script>
new Vue({
  template: '<p>{{msg}}</p>',
  data: { msg: 'hello world!' }
}).$mount('#app')
</script>
```
## 2.2 Vue.jsの導入
```html
<!DOCTYPE html>
<title>はじめてのVue.js</title>
<script src="https://unpkg.com/vue@2.5.17"></script>

<div id="app">
</div>
<script>
  // ロードされ、Vueがグローバル変数として定義されているか確認
  console.assert(typeof Vue !== 'undefined');
</script>
```
(8.1 特徴)
(8.2 アプリケーション)
## 8.3 環境構築

## 8.4 VueCLI
## 8.5 Build
## 8.6 Test Env
## 8.7 Frontend/Backend
## 8.8 環境構築の強化

# III 設計
## 2.1 Vue.jsのUI構築する際の考え方
DOM操作・jQueryは複雑。
Vue.jsは、間に `status`を挟むことによってUI設計を容易にした。
## 2.6 テンプレート構
## 2.9 ディレクティブ
## 2.10 ライフサイクル
## 2.12 

## 3 Component
### 3.1 What is component
- 全てはUIコンポーネントから構成される
- 
## 3.2 Definition
## 3.3 Network b/n components
## 3.4 Design

## 4 Vue Router
## 4.1 
## 4.2
## 4.3 
## 4.4
## 4.5 

## 5 高度な機能
1. animation
2. transition -- wrapper, class, fade
3. slot -- single, scope
4. graphic function
5. mixin -- 使いまわせる小さな機能 DRY(Don't repeat oyr)


## 6 SFC(Single File Components)
開発を簡単にするためにVueCLIを導入しよう！
```html
<template>: HTML(Pug)
<script>: ES2015のimportが使用可能, `export default`が必須
<style>
```
## 6.3 Specification
## 6.4 Build 
## 6.5 Hands-on 
## 6.6 Function
- External file
- Scoped CSS
- CSS module
- Other language





# IV Design
## 9.1 Component
### Atoms
### Molecules
### Organisms
### templates
## 9.2 Unique file component
### Directory structure
### API
## 9.3
### Status modeling
### Dataflow's design
## 9.4 Routing design
### Route flow
### Route definition

# V Implementation
例: ログイン、ボード、タスク詳細
Debug
Build
Deploy
Tuning
Error-handling

## 10.1 方針の整理
テスト駆動
## 10.2 コンポーネント実装

小さいコンポーネントからボトムアップ的にやるのがおすすめらしい。
単体テストしやすいから。

## 10.3 Dataflow

## 10.4 Routing

## 10.5 Dev Server and Debug

## 10.6 E2E Test

## 10.7 Application's error handling

## 10.8 Build & Deploy

## 10.9 パフォーマンス


# VI 歴史・類型

## 1.1 現代のWebフロントエンド開発の複雑化

## 1.2 Vue.jsの特徴

## 1.3 Vue.jsの設計思想

## 1.4 プログレッシブフレームワークの解決する段階的な領域