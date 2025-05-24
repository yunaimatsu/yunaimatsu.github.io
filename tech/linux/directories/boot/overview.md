# `/boot`

```plain
/boot/
├── EFI/
├── grub/
├── loader/
├── vmlinuz-linux
├── initramfs-linux.img
├── initramfs-linux-fallback.img
├── System.map-linux
└── config-linux
```

| Name/Type | Description |
| :--- | :--- |
| `vmlinuz-linux` (or `vmlinuz-<version>`)| The **Linux kernel image** — this is the compressed binary of the Linux kernel that the bootloader loads into memory. |
| `initramfs-linux.img` (or similar, like `initramfs-linux-fallback.img`) | The **initial RAM filesystem (initramfs/initrd)** image — contains drivers and scripts needed to mount the real root filesystem during early boot. |
| `EFI/` (folder) | The **EFI System Partition (ESP) mount point** in some setups, contains EFI bootloaders and related firmware files (if `/boot` is mounted on ESP). |
| `loader/` (folder) | Used by **systemd-boot** (if installed) to hold bootloader config files and entries. |
| `grub/` (folder) | Contains **GRUB bootloader** configuration files and modules (if GRUB is installed). |
| `System.map-<version>` | A symbol table file for the kernel — useful for debugging and kernel development. |
| `config-<version>` | Kernel configuration file showing options used to build the kernel. |

vml — stands for Virtual Memory Linux

lin — from Linux

z — means the file is compressed (usually with gzip)