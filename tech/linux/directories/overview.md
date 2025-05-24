## `/usr` "Unix Sytem Resources"

そして、
## `/bin` "Binary"
実行可能ファイルがたくさん入っています。
Some executable files which aren’t stored in `/bin` are used 

## `/sbin`

## `/lib` "Libraries fr 32 bit architecture"

## `/lib64` "Libraries for 64 bit architecture"

## `/boot` "

    
## `/root` Home directory of `root` user.
    
    ```bash
    whoami
    root
    
    echo $USER
    root
    
    echo $HOME
    /root
    ```

## `/dev` 

### Block Devices
SATA/SCSI Disks	/dev/sd[a-z], /dev/sd[a-z][0-9]	a-z = disk, number = partition
NVMe Drives	/dev/nvme[0-9]n[0-9]p[0-9]	High-speed SSDs
MMC/SD Cards	/dev/mmcblkX, /dev/mmcblkXpY	Used in embedded systems
Loopback Devices	/dev/loopX	Mount disk images as block devices
Device Mapper	/dev/mapper/*	LVM, cryptsetup, etc.
Optical Drives	/dev/sr0, /dev/cdrom	CD/DVD drives
RAM Disks	/dev/ramX	Simulated block devices

### Character Devices
Virtual Consoles	/dev/tty[1-9]	Ctrl+Alt+F1..F6 terminals
Pseudo Terminals	/dev/pts/[0-9]+	Used by terminal emulators
Controlling Terminals	/dev/tty, /dev/console	Bound to foreground session
Serial Ports	/dev/ttyS[0-9]	Hardware serial interfaces
USB Serial	/dev/ttyUSB[0-9]	USB-to-serial adapters

### I/O Devices
Subtype	Examples	Notes
Keyboards, Mice	/dev/input/eventX	Low-level input events
Joysticks	/dev/input/jsX	Game controllers
Touchpads	/dev/input/mouseX	Often symlinked to mice
---
Subtype	Examples	Notes
ALSA Sound Devices	/dev/snd/*	Audio input/output via ALSA
OSS Devices	/dev/dsp, /dev/mixer	Legacy interfaces
Video Capture	/dev/videoX	Webcams, capture cards (V4L2)

### Network Devices

### Pseudo-devices
Subtype	Examples	Notes
Null/Zero/Full	/dev/null, /dev/zero, /dev/full	Always-empty, zeros, or errors
Random Sources	/dev/random, /dev/urandom	Entropy generators
Time/Clock	/dev/rtc, /dev/ptmx	Real-time clock, PTY master

### Special Devices