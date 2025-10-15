### `/opt`

サードパーティや企業のアプリケーションの実行ファイルがすべて入っているディレクトリ。
`which` コマンドを実行すると `/usr` の中にあるので、 
「`/opt` じゃなくて `/usr` にあるのではないか？」と勘違いするかもしれない。
```sh
~ ❯ which google-chrome-stable
/usr/bin/google-chrome-stable
```

しかし、下記の通り `/usr` 内のソースコードを読むと、
実際には `/opt` 内のアプリケーションをシェル内で実行していることがわかる。
```sh
~ ❯ cat /usr/bin/google-chrome-stable
#!/bin/bash

XDG_CONFIG_HOME=${XDG_CONFIG_HOME:-~/.config}

# Allow users to override command-line options
if [[ -f $XDG_CONFIG_HOME/chrome-flags.conf ]]; then
    CHROME_USER_FLAGS="$(grep -v '^#' $XDG_CONFIG_HOME/chrome-flags.conf)"
fi

# Launch
exec /opt/google/chrome/google-chrome $CHROME_USER_FLAGS "$@"
```
