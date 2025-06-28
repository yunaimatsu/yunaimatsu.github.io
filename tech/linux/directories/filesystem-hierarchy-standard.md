## freedesktop.org(fd.o), **X Desktop Group (XDG)**
interoperability and shared base technology 
https://www.freedesktop.org/

https://share.google/4MMnNQLn5RG3x3JDW
## User-specific
### `$HOME`
Since `$HOME` might be shared between systems of different architectures, installing compiled binaries to `$HOME/.local/bin` could cause problems when used on systems of differing architectures.
### `$XDG_CONFIG_HOME` 
`$HOME/.config`
configuration files
### `$XDG_DATA_HOME` 
`$HOME/.local/share`
data files
### `$XDG_STATE_HOME` 
`$HOME/.local/state`
state files 
state data that
- should persist between (application) restarts
- is not important or portable enough to the user

actions history
- logs
- history
- recently used files

current state of the application that can be reused on a restart
- view
- layout
- open files
- undo history
### `$HOME/.local/bin` (`$PATH`)
executable files

### `$XDG_RUNTIME_DIR` 

windowing system
Display server protocol

### $XDG_DATA_DIRS
the preference-ordered set of base directories to search for data files
- in addition to the $XDG_DATA_HOME
- should be separated with a colon ':'.
- /usr/local/share/:/usr/share/

### $XDG_CONFIG_DIRS
the preference-ordered set of base directories to search for configuration files
- in addition to the $XDG_CONFIG_HOME
- should be separated with a colon ':'.
- /etc/xdg

### X Window System (X11, or simply X)
A  for bitmap displaysa
### Wayland 
that specifies the communication between a display server and its clients