# bootloader

## (物理的に)どこにあるの？
SSDかUSBのどちらか、が多い。


## どんなプログラムなの？
What the bootloader does after clean install of Arch:
Bootloader (usually GRUB or systemd-boot) is installed on the EFI partition (if you use UEFI).

When you power on:

Firmware (UEFI) loads the bootloader from the EFI partition.

Bootloader loads:

The Linux kernel image (vmlinuz-linux).

The initramfs/initrd image (initramfs-linux.img), which contains essential drivers and tools needed to start up the system before the real root filesystem is mounted.

Bootloader passes control to the kernel, along with kernel parameters.

What happens after the kernel starts:
Kernel initializes hardware and mounts the root filesystem.

Starts the init system (usually systemd on Arch).

The init system continues to boot user-space services and eventually brings you to a login screen or shell.

## どんな種類があるの?
- GRUB (Linux)
- Windows Boot Manager
- rEFInd.
- LILO