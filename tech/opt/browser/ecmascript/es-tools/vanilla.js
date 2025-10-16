## HTMLでSFCを作って、インポートする方法

```jsx
export class MyComponent extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById("my-component");
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
  }
  
  connectedCallback() {
    this.shadowRoot.querySelector("button")
      .addEventListener("click", () => alert("Clicked!"));
  }
}
```

```jsx
customElements.define("my-component", MyComponent);
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>SFC in Vanilla.js</title>
</head>
<body>
  <!-- コンポーネントの呼び出し -->
  <my-component></my-component>

  <!-- template 読み込み -->
  <script src="MyComponent.html" type="text/html"></script>

  <!-- JS モジュール読み込み -->
  <script type="module" src="./MyComponent.js"></script>
</body>
</html>
```

自分でHTML要素を作る
In Vanilla JS (with <script type="module"> or <script>), the order of <script> relative to your custom elements in HTML matters.
