## 

```html
<ul id="tree">
    <li class="folder">インド・ヨーロッパ語族
    <ul class="children">
        <li class="folder">ゲルマン語派
        <ul class="children">
            <li><a href="/languages/german.html">ドイツ語</a></li>
            <li><a href="/languages/english.html">英語</a></li>
        </ul>
        </li>
        <li class="folder">ロマンス語派
        <ul class="children">
            <li><a href="/languages/french.html">フランス語</a></li>
        </ul>
        </li>
    </ul>
    </li>
    <li class="folder">ウラル語族
    <ul class="children">
        <li><a href="/languages/finnish.html">フィンランド語</a></li>
    </ul>
    </li>
</ul>
<style>
    ul { list-style: none; padding-left: 1em; }
    .folder::before { content: '▶'; margin-right: 5px; cursor: pointer; }
    .folder.open::before { content: '▼'; }
    .children { display: none; margin-left: 1em; }
    .folder.open > .children { display: block; }
</style>
<script>
    document.querySelectorAll('.folder').forEach(folder => {
    folder.addEventListener('click', e => {
        if (e.target === folder) {
        folder.classList.toggle('open');
        }
    });
    });
</script>
```