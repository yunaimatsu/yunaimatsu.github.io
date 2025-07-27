# key-value set

### JS(object)

```jsx
var AAA = {
		key1: "value1",
		key2: "value2",
		key3: "value3",
};
```

### 🐍(dict)

$$
list \supset dict
$$

```python
list = ["a", "b", "c", ..., "n"]
dict = ["element"]

# index of Nth element
# 
dict[n]

# Method 1
AAA = {
		""
}

# Method 2
BBB = dict("key1"="value1", "key2"="value2", "key3"="value3")

リスト内包表記では条件文を後ろにかけます。条件文は`if`キーワードを使います。以下は、条件文を使った例です。

```python
my_list = ["a", "b", "c", "d", "e", "f"]

# 偶数の要素だけを含む pairs リスト
pairs = [my_list[i:i+2] for i in range(0, len(my_list), 2) if i % 2 == 0]

print(pairs)
```

この例では、`if i % 2 == 0` という条件文が追加されています。これにより、`my_list` の偶数番目の要素だけを含む `pairs` リストが生成されます。条件文は、リスト内包表記内で要素を生成する際に特定の条件を満たす要素だけを含めるために使用されます。
```