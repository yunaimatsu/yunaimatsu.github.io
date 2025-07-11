XKB layouts refer to keyboard layouts managed by the X Keyboard
Extension (XKB) in X11, the windowing system used by many Unix-like
operating systems (like Linux and BSD). XKB handles how key presses
on a keyboard are interpreted and allows for complex configuration
of keyboard behavior.

🔹 What is XKB?
XKB (X Keyboard Extension) is an extension to the X11 protocol that
provides enhanced control over keyboard behavior, including:

Key remapping (changing what each key does)

Multiple layouts and switching between them (e.g., QWERTY, AZERTY,
Dvorak)

Modifier keys and advanced combinations (Ctrl, Alt, Shift, etc.)

Key repeat behavior

LED indicator control

🔹 What is an XKB Layout?
An XKB layout is essentially a map that defines what each key does
for a given language or input style. For example:

us → US QWERTY layout

de → German layout

ru → Russian Cyrillic layout

dvorak → Dvorak English layout

us(intl) → US International (for typing accented characters)

These layouts are defined in XKB configuration files, typically
located at:

bash
Copy code
/usr/share/X11/xkb/
🔹 Key Components of XKB
XKB configurations are split into several components:

Keycodes – mapping between physical keys and symbolic key names

Symbols – mapping of symbolic key names to character output (layout)

Types – defines how modifier keys affect key behavior

Compat – compatibility rules for legacy behavior

Geometry – physical layout of the keyboard (used for visualization)

🔹 Switching XKB Layouts
You can switch layouts dynamically using tools like:

setxkbmap
Example: setxkbmap us,ru -option grp:alt_shift_toggle

Desktop settings in GNOME/KDE

Config files like /etc/X11/xorg.conf or .xinitrc

🔹 Why Use XKB?
Full control over keyboard layouts and behavior

Supports multiple languages and custom configurations

Essential for users with specific typing needs, languages, or
accessibility concerns

Let me know if you'd like help customizing or creating an XKB
layout!
