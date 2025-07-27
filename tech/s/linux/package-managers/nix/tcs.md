# Nix Package Manager Cheat Sheet

```
nix
├── Package Management
│   ├── nix-env
│   │   ├── -i <package>          # Install package
│   │   ├── -e <package>          # Remove package
│   │   ├── -u                    # Upgrade all packages
│   │   ├── -u <package>          # Upgrade specific package
│   │   ├── -q                    # Query installed packages
│   │   ├── -qa                   # Query all available packages
│   │   ├── -qa | grep <term>     # Search packages
│   │   ├── --rollback            # Rollback to previous generation
│   │   ├── --list-generations    # List all generations
│   │   ├── --switch-generation <n> # Switch to generation n
│   │   └── --delete-generations <n> # Delete generation n
│   │
│   ├── nix search
│   │   ├── nixpkgs <term>        # Search in nixpkgs
│   │   └── --json nixpkgs <term> # JSON output
│   │
│   └── nix profile (flakes)
│       ├── install <package>     # Install with flakes
│       ├── remove <package>      # Remove package
│       ├── upgrade               # Upgrade all
│       └── list                  # List installed
│
├── Nix Expressions & Development
│   ├── nix-shell
│   │   ├── -p <package>          # Enter shell with package
│   │   ├── -p <pkg1> <pkg2>      # Multiple packages
│   │   ├── --pure                # Pure shell (no system packages)
│   │   ├── --run <command>       # Run command in shell
│   │   └── <file.nix>            # Use expression file
│   │
│   ├── nix-build
│   │   ├── <expression>          # Build expression
│   │   ├── -A <attribute>        # Build specific attribute
│   │   ├── --out-link <name>     # Custom output link name
│   │   └── --no-out-link         # Don't create result link
│   │
│   ├── nix-instantiate
│   │   ├── --eval <expr>         # Evaluate expression
│   │   ├── --eval --strict <expr> # Strict evaluation
│   │   └── --parse <expr>        # Parse expression
│   │
│   └── nix repl
│       ├── :l <file>             # Load file
│       ├── :t <expr>             # Show type
│       ├── :b <expr>             # Build expression
│       └── :q                    # Quit
│
├── Flakes (Modern Nix)
│   ├── nix flake
│   │   ├── init                  # Initialize flake
│   │   ├── update                # Update flake.lock
│   │   ├── lock                  # Generate lock file
│   │   ├── check                 # Check flake
│   │   ├── show                  # Show flake outputs
│   │   └── clone <url>           # Clone flake
│   │
│   ├── nix run
│   │   ├── <package>             # Run package
│   │   ├── github:user/repo      # Run from GitHub
│   │   └── .#<output>            # Run local flake output
│   │
│   ├── nix shell
│   │   ├── <package>             # Shell with package
│   │   └── nixpkgs#<package>     # From nixpkgs
│   │
│   └── nix develop
│       ├── .                     # Enter dev shell
│       └── <flake>               # Dev shell from flake
│
├── Store Management
│   ├── nix-store
│   │   ├── -q --roots            # Show GC roots
│   │   ├── -q --requisites <path> # Show dependencies
│   │   ├── -q --referrers <path> # Show what depends on path
│   │   ├── --verify              # Verify store
│   │   ├── --repair              # Repair store
│   │   └── --optimize            # Optimize store (hardlink)
│   │
│   ├── nix-collect-garbage
│   │   ├── -d                    # Delete old generations
│   │   ├── --delete-older-than <days>d # Delete older than X days
│   │   └── --dry-run             # Show what would be deleted
│   │
│   └── nix store
│       ├── gc                    # Garbage collect
│       ├── diff-closures <old> <new> # Compare closures
│       ├── path-info <path>      # Show path info
│       └── verify                # Verify store
│
├── Channels (Legacy)
│   ├── nix-channel
│   │   ├── --add <url> <name>    # Add channel
│   │   ├── --remove <name>       # Remove channel
│   │   ├── --update              # Update channels
│   │   └── --list                # List channels
│   │
│   └── Common Channels
│       ├── nixos-unstable        # Latest packages
│       ├── nixos-24.05           # Stable release
│       └── nixpkgs-unstable      # Non-NixOS unstable
│
├── Configuration
│   ├── ~/.config/nix/nix.conf    # User config
│   ├── /etc/nix/nix.conf         # System config
│   │
│   ├── Common Settings
│   │   ├── experimental-features = nix-command flakes
│   │   ├── auto-optimise-store = true
│   │   ├── max-jobs = auto
│   │   └── trusted-users = root @wheel
│   │
│   └── Environment Variables
│       ├── NIX_PATH              # Package search path
│       ├── NIX_REMOTE            # Remote store
│       └── NIXPKGS_ALLOW_UNFREE  # Allow unfree packages
│
├── Common Patterns
│   ├── Package Installation
│   │   ├── nix-env -iA nixpkgs.firefox  # Install Firefox
│   │   ├── nix profile install nixpkgs#git # With flakes
│   │   └── nix shell nixpkgs#python3    # Temporary shell
│   │
│   ├── Development
│   │   ├── nix-shell -p nodejs npm      # Node.js dev environment
│   │   ├── nix develop                  # Project dev shell
│   │   └── nix-shell --run "python setup.py build"
│   │
│   ├── Building
│   │   ├── nix-build -A package         # Build package
│   │   ├── nix build .#package          # Build with flakes
│   │   └── nix run .#app                # Run application
│   │
│   └── Maintenance
│       ├── nix-collect-garbage -d       # Full cleanup
│       ├── nix-env --list-generations   # Check generations
│       └── nix store gc --dry-run       # Preview cleanup
│
├── Useful Files & Paths
│   ├── ~/.nix-profile/           # User profile
│   ├── /nix/store/              # Package store
│   ├── /nix/var/nix/profiles/   # System profiles
│   ├── ~/.nix-defexpr/          # Default expressions
│   ├── flake.nix                # Flake definition
│   ├── flake.lock               # Locked dependencies
│   ├── shell.nix                # Shell environment
│   └── default.nix              # Default expression
│
└── Tips & Tricks
    ├── Search Packages
    │   ├── nix search nixpkgs python
    │   └── https://search.nixos.org
    │
    ├── Temporary Environments
    │   ├── nix-shell -p git --run "git clone ..."
    │   └── nix shell nixpkgs#jq -c "jq --help"
    │
    ├── Rollback Safety
    │   ├── Every operation creates a generation
    │   ├── nix-env --rollback for quick undo
    │   └── Always test before committing
    │
    ├── Performance
    │   ├── Use --max-jobs for parallel builds
    │   ├── Enable auto-optimise-store
    │   └── Regular garbage collection
    │
    └── Debugging
        ├── nix-build --keep-failed      # Keep failed builds
        ├── nix-shell --pure             # Isolate environment
        ├── nix-instantiate --eval --strict # Debug expressions
        └── nix log <derivation>         # View build logs
```

## Quick Start Examples

### Install a package
```bash
nix-env -iA nixpkgs.firefox     # Legacy way
nix profile install nixpkgs#firefox  # Modern way
```

### Create development environment
```bash
nix-shell -p nodejs python3 git  # Temporary shell
nix develop                       # Project dev shell (with flake)
```

### Search and run packages
```bash
nix search nixpkgs python        # Search packages
nix run nixpkgs#cowsay -- "Hello Nix!"  # Run without installing
```

### Cleanup system
```bash
nix-collect-garbage -d          # Remove old generations
nix store gc                    # Garbage collect unused packages
```
