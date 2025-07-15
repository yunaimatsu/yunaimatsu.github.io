
---

# @規則とは？
### 実際のコードを眺めてみよう
まず、下のコードを見てください。内容は理解できなくても全く問題ありません。
```css:style.css
@media (hover: hover) {
  abbr:hover {
    color: limegreen;
    transition-duration: 1s;
  }
}

@media not all and (hover: hover) {
  abbr::after {
    content: ' (' attr(title) ')';
  }
}
```
何やら、見慣れない`@media`という記述が見えますね。今回のテーマ「@規則」は、まさにこのような`@`で始まるコマンドのことなのです。

### 何のために使う？
@規則とは、以下の2つを行うためのCSSの機能です。
* **条件分岐**
* **ファイルのインポート**
それぞれ詳しく見ていきましょう！

# 条件分岐
まず「条件分岐」です。条件分岐とは、条件によって処理を変えることです。
よくあるのは、「スマホとPCによって文字の大きさを変える」「スマホで開いた時は縦画面構成にする」というような場面です。
### `@media`
#### 演算子
```css:style.css
/* and */
@media () and () { ... }

/* or */
@media () or () { ... }
@media (), () { ... }

/* not */
@media not () { ... }

/* only */
@media only () { ... }

/**/
@media ( <, <=, =, =>, > ) { ... }
```
#### メディアタイプ
```css:style.css
@media all ...
@media print ...
@media screen ...
```
#### メディア特性
**デバイス関係**
```css:style.css
@media (dynamic-range: standard) { ... }
@media (dynamic-range: high) { ... }

@media (grid: 0) { ... }
@media (grid: 1) { ... }

@media (resolution: ) { ... }

@media (scan: ) { ... }
@media (update: ) { ... }
/* ポインティングデバイス */
@medai (pointer: ) { ... }

/* マウスがない時 */
@media (any-pointer: none) { ... }

/* 正確なマウスがある時 */
@media (any-pointer: fine) { ... }

/* 不正確でもとりあえずマウスがある時 */
@media (any-pointer: coarce) { ... }
``` 
**操作関係**
```css:style.css
@meida (hover: hover) { ... }
@meida (hover: none) { ... }
/* 閲覧するデバイスでホバリング可能な時 */
@media (any-hover: hover) { ... }
```
**デバイス関係**
```css:style.css

```
**色関係**
```css:style.css
@media color /**/
@media color-gamut /**/
@media color-index /**/
@media forced-colors /**/
@meida prefers-color-scheme /**/
@media prefers-contrast /**/
@media inverted-colors /**/
@media monochrome /**/
```
**ユーザ設定関係**
```css:style.css
@media (prefers-color-scheme) { ... }
@media (prefers-contrast) { ... }
@meida (prefers-reduced-data) { ... }
@media (prefers-reduced-motion) { ... }
@media (prefers-reduced-transparancy) { ... }
```
**サイズ関係**
```css:style.css
@media (min-aspect-ratio: ___), (max-acpect-ratio: ___) { ... }
@media (... aspect-ratio ...) { ... }
```

```css:style.css
@media (height ... ) { ... }
@media (max-height ... ) { ... }
@media (min-height ... ) { ... }

@media (width ... ) { ... }
@media (max-width ... ) { ... }
@media (min-width ... ) { ... }

@media horizontal-viewport-segments
@meida vertical-viewport-segments

@media overflow-block
@media overflow-inline
```
**JavaScriptの設定**
```css:style.css
@meida scripting
```

**表示方法関連**
```css:style.css
@media (display-mode: browser) { ... }
@media (display-mode: fullscreen) { ... }
@media (display-mode: minimal-ui) { ... }
@media (display-mode: standalone) { ... }
@media (display-mode: window-controls-overlay) { ... }

/* ブラウザーがナヴィゲーションを提供しているかを検出 */
@media (nav-controls) { ... }
    
/* 非推奨（非対応ブラウザが多い） */
@media (display-mode: picture-in-picture) { ... }

/*  */
@media (orientation: ) { ... }
```
# ファイルのインポート

### `@layer`
### `@supports`
そもそも、非対応ブラウザがあるスタイルは避けましょう。