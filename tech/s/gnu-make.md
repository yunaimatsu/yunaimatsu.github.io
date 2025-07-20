## Top-level
### Define the shell type
```Makefile
SHELL:= /bin/zsh
```

### Define variables
```Makefile
<VAR>:= <VAL>
```

### Call variables
> Reference recipe shell variable
`$` must be escaped with `$` in Makefile.
```Makefile
$$<VAR>
$(<VAR>)
```

### Import external files
```Makefile
include <FILE_PATH>
```

### `.PHONY`
By default, `Makefile` reads arguments as targets

By adding the target names as values of `.PHONY`, 
we can escape the target and use them with `make` command
```Makefile
.PHONY: <target-name>
```

## Target
Target is the unique name of a bundle of some setup tasks(recipes).
Target name can be used parameters of `make` command in CLI.

### Arguments

### Recipe
Each line in a recipe corresponds to one shell process so the multiple-lines have to be broken with `\` at the end of line.
Each line must start with `<tab>`, not `<space>`.
```Makefile
<taget>: <prerequisites>
    recipe1 \
    recipe2 \
    recipe3 \
    recipe4
```
Expand variable with `$$<var>`
Recipe is written in shell script.
