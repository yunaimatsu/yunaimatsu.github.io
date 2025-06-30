# ドットファイルの哲学
## GNU Makeで実現する宣言的な設定ファイル
宣言的な設定ファイルとは、実現したい状態を記述した記法だ。

Shell ScriptやGNU Make(`Makefile`を`make`コマンドで実行する)による
設定の反映は、命令的なものだ。
```sh
sudo pacman -S hyprland
echo 'Hyprland is installed!'
```
それに対し、代表的な宣言的な設定スタイルである
`lazy.nvim` の `init.lua` の記法は以下のようになっている。
```lua
-- Vim Options
vim.o.clipboard = "unnamedplus"
vim.o.number = true
vim.o.relativenumber = true
vim.o.termguicolors = true
vim.api.nvim_set_hl(0, "Normal", { bg = bg_color })
```
これの特徴は、「こうあってほしい」という状態を記述できることで、
その状態を実現するために行う処理(打つコマンド)は一切書かれないことである。

これによって、直観的な設定することができる。
可読性も高いし、書くときも、`タブのスペース数: 2`のように、
`設定項目:設定内容`のマッピング形式で書くことができるので、
変更すべき箇所がすぐにわかる。

## 絶えず変化し続けるドットファイルを
dotfileをGitHubリポジトリとして管理することの魅力は、
自分の環境設定をすぐに変更でき、
且つそれを他のデバイスにもすぐに反映できることだ。
日常の開発や作業の中で「不便だな」と感じたことを気軽に改善できるし、
新しい技術もすぐに取り入れることが可能である。
これにより、新しい技術を取り入れるのもすぐにできる。
