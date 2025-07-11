In Arch Linux, key bindings and key remapping can be managed in several ways, depending on your desktop environment, window manager, or if you're working in a barebones setup. Here's a general guide to help you get started:

🔧 Key Remapping in Arch Linux
1. Using setxkbmap (Temporary Changes)
For simple remapping (like swapping Caps Lock and Control):
```sh
setxkbmap -option ctrl:swapcaps
```
This change is temporary and will reset after reboot or logout.

Use setxkbmap -option to clear options.

2. Using xmodmap
xmodmap gives you more control. First, get the keycode:
```sh
xev | grep keycode
```
Then create a .Xmodmap file in your home directory:

```sh
vi ~/.Xmodmap
```
Example to remap Caps Lock to Escape:
```
remove Lock = Caps_Lock
keysym Caps_Lock = Escape
```
Then apply with:
xmodmap ~/.Xmodmap
Make it persistent by adding to .xinitrc or .xprofile:

xmodmap ~/.Xmodmap &

3. Using udev/hwdb (For low-level remapping)
More complex and persistent system-wide remaps.

Find your device with:

libinput list-devices
Create or edit the hwdb file:

sudo nano /etc/udev/hwdb.d/90-custom-keyboard.hwdb
Example for swapping keys (e.g., keycode 58 to keycode 1):

evdev:input:b0003vXXXXpYYYY*
 KEYBOARD_KEY_3a=esc
Then run:
sudo systemd-hwdb update
sudo udevadm trigger
⌨️ Custom Key Bindings (depends on environment)
If using i3 window manager:
 your config (~/.config/i3/config):

bindsym $mod+Return exec alacritty
bindsym $mod+d exec rofi -show run
Then reload i3:

Mod+Shift+R
If using GNOME:
Go to Settings > Keyboard Shortcuts, or use:

gsettings set org.gnome.settings-daemon.plugins.media-keys custom-keybindings ...
If using KDE/Plasma:
Go to System Settings > Shortcuts.

If using Xfce:
Go to Settings > Keyboard > Application Shortcuts.

🛠 For Advanced Needs:
sxhkd – Simple hotkey daemon, popular with bspwm or standalone setups.

Config in ~/.config/sxhkd/sxhkdrc

Example:

super + Return
    alacritty
interception-tools + caps2esc – For powerful remapping like Vim-style Esc from Caps Lock.

📝 Pro Tips
For Wayland-based sessions (e.g., Sway or GNOME Wayland), tools like xmodmap won't work.

Use keyd or interception-tools for device-level remapping.

Use showkey (TTY) or evtest to find keycodes if X tools don't work.

If you tell me your window manager or desktop environment, I can give more tailored instructions.
