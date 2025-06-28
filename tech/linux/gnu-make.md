# Makefile
## Define the shell type
```Makefile
SHELL:= /bin/zsh
```

## Define variables
```Makefile
<VARIABLE>:= <VALUE>
```

## Target
## Recipe
One-line in recipe corresponds to one shell process.

```Makefile
<taget>: <prerequisites>
    recipe
```
Expand variable with `$$<var>`
Recipe is written in shell script.
