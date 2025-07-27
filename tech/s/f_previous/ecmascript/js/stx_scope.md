プログラミングのファイルは、さらに行(Line)という最小単位に分割できる。

Top-level(関数やブロックで囲まれていないところ): 

関数: 

ブロック: 

Ordinally…
**Function scope: inside function scope**
**Block scope: inside block scope**
**Global: outside scope**

| Declaration Type | Top Level | Inside Function | Inside Block | Top Level in Module |
|---|---|---|---|---|
| `let` | Script Scope | Function Scope | Block Scope | Module Scope |
| `const` | Script Scope | Function Scope | Block Scope | Module Scope |
| `var` | Global Scope | Function Scope | Placed in the scope outside the block<sup>\*1</sup> | Module Scope |
| Function Declaration | Global Scope | Function Scope | Placed in the scope outside the block<sup>\*2</sup> | Module Scope |

\*1 For example, if the scope one level outside the `if` statement is a function scope, the variable is placed in the function scope.

\*2 In Strict mode (see section 16.5.2), block scope is enabled.

| Scope | Description |
|---|---|
| Global Scope | Variables and functions declared with `var` or declared as functions at the top level of a JavaScript file or within a script tag in an HTML file are accessible throughout the entire script. |
| Script Scope | Variables and functions declared with `let` or `const` at the top level of a JavaScript file or within a script tag in an HTML file are accessible within that script only. |
| Function Scope | Variables and functions declared within a function are accessible only within that function and any nested functions. |
| Block Scope | Variables and functions declared with `let` or `const` within a block (such as an `if` statement or `while` loop) are accessible only within that block and any nested blocks. |
| Module Scope | Variables and functions declared at the top level of a module (using ES modules) are accessible only within that module. |

# Purpose of **scope**

To prevent global-pollution

参照できるvariables/constants, functionsの範囲のこと。

variables/constants, functionsは、同じスコープにその宣言文がないと使用できない。

(Function scope)

(Module scope)

(Global scope/Script scope)

他のブロックスコープから参照することができる。

他のブロックスコープから参照することができない。

# Examples of scopes

## `var`

関数宣言を使った場合は他の

### Top-level

Top-level of `.js`file or `<script>` tag of `.html` file

Script scope

Block scope

Placed in the scope outside the block

### Script scope[Global scope without `Window`]

## `const`/`let`

## Script scope[Global scope without `Window`]

### Top-level

## `function`

# Scope

## Global scope

## Function scope

## Block scope

## Module scope

Execution context

Global context

Function context

# Dynamic scope

# Static scope
