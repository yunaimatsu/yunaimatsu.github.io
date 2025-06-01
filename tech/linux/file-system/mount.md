# `mount`は、見えるようにしただけ！

## `mount`する方法

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

### 🛠 Command:

```bash
mv folder1/file.txt folder2/
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

### 🛠 Command:

```bash
sudo mount /dev/sdb1 mymount/
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

---

## 🔁 Summary of Effects

| Command | Changes file structure?  | Persistent? | Cross-device? | Example effect |
| ------- | ------------------------ | ----------- | ------------- | -------------- |
| `mv`    | ✅ Yes                    | ✅ Yes       | ✅ Yes         | Moves files    |
| `mount` | ❌ No (not file contents) | ❌ No        | ✅ Yes         | Shows other FS |


simulate something more complex like mounting over a **non-empty folder** or using **bind mounts**.


In the context of **Linux** (and Unix-like systems), **"to mount"** means to **make a filesystem accessible at a certain point in the directory tree**.

### More specifically:

* When you **mount** a storage device (like a USB drive, hard disk partition, or ISO file), you're telling the operating system to **associate** that device or filesystem with a **directory** (called a **mount point**) in your file system hierarchy.
* After mounting, you can access the files on that device through the designated directory.

---

### Example:

```bash
mount /dev/sdb1 /mnt/usb
```

This command:

* Mounts the device `/dev/sdb1` (e.g., a USB drive)
* At the directory `/mnt/usb`
* Now you can access the contents of the USB drive via `/mnt/usb`

---

### Key Concepts:

* **Mount Point**: A directory where the filesystem is made available.
* **Unmounting**: The process of detaching the filesystem using `umount`, e.g., `umount /mnt/usb`.

---

### Related Notes:

* Linux has a **single directory tree** starting at `/`. All filesystems must be mounted into this tree somewhere.
* Devices aren’t automatically browsable unless mounted.
* Automounting tools (like `udev` or desktop environments) often mount devices for you.

Let me know if you’d like examples with `fstab`, loopback mounts, or how to mount network drives (like NFS or SMB).
