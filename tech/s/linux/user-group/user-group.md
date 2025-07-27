### CRUD of users and groups

|  | User(`user-`) | Group(`group-`) |
| --- | --- | --- |
| Create(`-add`) | `useradd` | `groupadd` |
| Read |  |  |
| Update(`-mod`) | `usermod` | `groupmod` |
| Delete(`-del`) | `userdel` | `groupdel` |

```bash
users # Host - Users
groups # Which group does the user belong to?
whoami
```

### CRUD of PASSWORD

**Password itself**

`passwd`,`gpasswd`

`chpasswd`

**Password expiration period**

`chage`

`chsh`

```bash
chsh -s <shell-name>
chsh -l
```

- High-level tools
    
    adduser
    
    deluser
    

### 

### `id`

```bash
id -u
id -g
id -G
id -n 
id -z
```

`/etc/shadow`

- Obsolete commands to convert/unconvert shadow files
    
    `pwconv`, `pwunconv` , `grpconv`, `grpunconv` exist in `/bin` but not used by users manually.
    
    `pwck`, `grpck` 
    
    `vipw`, `vigr` exist in `/bin` but not used by users manually.
    

`/etc/passwd`

**storing password hashes** and **password aging information**.

### HTTP server

`htpasswd`

`htdigest` 

### Aren’t used widely.

`chfn` 

They create