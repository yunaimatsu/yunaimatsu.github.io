## Steps to `mount`

```sh
sudo mkdir /mnt/<target-dir>
sudo mount /dev/<dev-name> /mnt/<target-dir>
```
`mount $1 $2` をすると、 `$1` を `$2` につなげられる。
> ソフトリンクとの違い

- `Softlink`: 参照を作る
- `Mount`: カーネルレベルで接続する

## `mount`されたファイルを確認する方法

### `mv`との違い
Suppose we start with this structure:

```bash
$ tree
.
├── folder1
│   └── file.txt
└── folder2
```

### 📦 Result:

```bash
$ tree
.
├── folder1
└── folder2
    └── file.txt
```

**Explanation**:

* `file.txt` was physically **moved** from `folder1` to `folder2`.
* This is a **permanent change** in the file system.

`mount` – Mounting a filesystem at a directory

Suppose we have:

```bash
$ tree
.
├── mymount/
└── somefile.txt
```

And we have a USB device (e.g., `/dev/sdb1`) that contains this:

```bash
# Contents of /dev/sdb1 when mounted elsewhere:
USB
├── fileA.txt
└── dirA/
    └── fileB.txt
```

### 📂 Result (after mounting):

```bash
$ tree
.
├── mymount
│   ├── fileA.txt
│   └── dirA
│       └── fileB.txt
└── somefile.txt
```

**Explanation**:

* The directory `mymount/` now shows the contents of the **USB device**.
* Nothing was copied or moved — you're just **viewing** another filesystem **through** `mymount/`.
* If you `umount mymount`, the contents disappear from `tree` view:

  ```bash
  sudo umount mymount
  $ tree
  .
  ├── mymount/
  └── somefile.txt
  ```