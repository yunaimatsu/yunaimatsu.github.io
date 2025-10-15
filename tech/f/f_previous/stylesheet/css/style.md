---
layout: '@layout/Layout.astro'
---
# 文章の流れに載せるなら`inline`
```css:style.css
.box {
    display: inline;
}
```
# 文章から独立させるなら`block`
```css:style.css
.box {
    display: block;
}
```

display: flow;
display: flow-root;
display: table;
display: flex;
display: grid;
display: ruby;
display: block flow;
display: inline table;
display: list-item;
display: list-item block
display: list-item inline;
display: list-item flow;
display: list-item flow-root;
display: list-item block flow;
display: list-item block flow-root;
display: flow list-item block;
display: table-row-group;
display: table-header-group;
display: table-footer-group
display: table-row;
display: table-cell;
display: table-column-group;
display: table-column;
display: table-caption;
display: ruby-base;
display: ruby-text;
display: ruby-base-container;
display: ruby-text-container;
display: contents;
display: none;
display: inline-block;
display: inline-table;
display: inline-flex;
display: inline-grid;
```

# Display-legacy
```css:style.css
.box {
    display: inline-block;
    display: inline-table;
    display: inline-flex;
    display: inline-grid;
}
```
# ほとんど使わない表示形式
a block element if it stands alone, but as an inline element if it is immediately followed by another block element
```css:style.css
.box {
    display: run-in;
}
```
|条件|`run-in`ディスプレイの結果|
|---|---|
|blockboxを内包|ブロックボックスになる|
|blockboxが後続|ブロックボックスの最初のインラインボックス|
|inlineboxが後続|ブロックボックス|

# Modules
## Display-outside
## Display-inside
## Display-outside & Display-inside
## Display-listitem
## Display-internal
## Display-box
## Display-legacy