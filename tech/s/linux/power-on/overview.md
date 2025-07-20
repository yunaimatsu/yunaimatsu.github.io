# 電源を押してから、Linuxが立ち上がるまで

## 電源を押すと、マザーボードに保管されているファームウェアが立ち上がる。

## ファームウェア(firmware)を起動する

Performs POST (Power-On Self Test): Checks RAM, CPU, keyboard, etc.
Then it looks for a bootable device (like your internal SSD/HDD). -> Once found, it loads the bootloader from that device.

## bootloaderが実行される

> Dual-boot

It decides which OS to load

> Clean-install

load the Linux kernel and initramfs into memory and start it.
It loads the operating system kernel into memory.
Jump to the kernel's entry point — this starts the Linux OS boot process.

## OSが始まる
Windows, macOS, or Linux starts.
OS initializes drivers, system services, and eventually the user interface (e.g., desktop environment or login screen).

----
(UEFI-based System)
    
    1. Power-On and Firmware Initialization (UEFI or BIOS)
    When you press the power button, the firmware (UEFI) is the first code that runs. It's stored in non-volatile memory (like flash ROM) on the motherboard.
    UEFI performs:
    CPU and chipset initialization
    DRAM controller setup
    Peripheral detection (keyboard, GPU, storage)
    POST (Power-On Self-Test)
    
    UEFI scans storage devices for a bootloader (e.g., EFI/BOOT/BOOTX64.EFI).
    2. Bootloader Phase (GRUB or systemd-boot)
    UEFI loads the first-stage bootloader from the EFI System Partition (ESP).
    For GRUB, this means executing grubx64.efi located in /boot/EFI/ or /boot/grub/.
    GRUB does:
    Reads its config file: /boot/grub/grub.cfg
    Lists boot entries (menu interface)
    Loads:
    vmlinuz-*: the Linux kernel
    initramfs-*: the initial RAM-based root filesystem
    3. **Kernel Execution**
    GRUB places the kernel and initramfs into memory and jumps to the kernel’s entry point.
    The kernel decompresses itself and takes over:
    Initializes memory management
    Enumerates CPUs
    Sets up the initial root filesystem from initramfs
    Loads essential kernel modules (drivers)
    Starts init (PID 1) — the first userspace process
    4. initramfs Phase
    initramfs is a temporary minimal root filesystem bundled into memory.
    Its job:
    Detect the root storage device (e.g., /dev/nvme0n1p3)
    Mount the real root filesystem (/)
    Load storage drivers (e.g., NVMe, LVM, Btrfs)
    Handoff to the real root with switch_root
    5. Userspace Initialization
    After the real root is mounted, the kernel executes /sbin/init (or /lib/systemd/systemd on systemd systems).
    This begins:
    Mounting other filesystems (/home, /boot, etc.)
    Starting services (sshd, NetworkManager, etc.)
    Setting up networking
    Displaying login screen or GUI
    
    Diagram Summary (UEFI + GRUB + systemd)
    [ Power Button ]      ↓[ UEFI Firmware ]      ↓[ /boot/EFI/grubx64.efi ]      ↓[ GRUB loads vmlinuz + initramfs ]      ↓[ Kernel (vmlinuz) executes ]      ↓[ initramfs → detect root FS ]      ↓[ switch_root to real / ]      ↓[ /sbin/init or systemd ]      ↓[ OS boots to login or desktop ]