# All npm commands displayed on Terminal

```
npm -l
npm <command>

Usage:

npm install        install all the dependencies in your project
npm install <foo>  add the <foo> dependency to your project
npm test           run this project's tests
npm run <foo>      run the script named <foo>
npm <command> -h   quick help on <command>
npm -l             display usage info for all commands
npm help <term>    search for help on <term>
npm help npm       more involved overview

All commands:

    access          Set access level on published packages
                    
                    Usage:
                    npm access list packages [<user>|<scope>|<scope:team>] [<package>]
                    npm access list collaborators [<package> [<user>]]
                    npm access get status [<package>]
                    npm access set status=public|private [<package>]
                    npm access set mfa=none|publish|automation [<package>]
                    npm access grant <read-only|read-write> <scope:team> [<package>]
                    npm access revoke <scope:team> [<package>]
                    
                    Options:
                    [--json] [--otp <otp>] [--registry <registry>]
                    
                    Run "npm help access" for more info

    adduser         Add a registry user account
                    
                    Usage:
                    npm adduser
                    
                    Options:
                    [--registry <registry>] [--scope <@scope>] [--auth-type <legacy|web>]
                    
                    alias: add-user
                    
                    Run "npm help adduser" for more info

    audit           Run a security audit
                    
                    Usage:
                    npm audit [fix|signatures]
                    
                    Options:
                    [--audit-level <info|low|moderate|high|critical|none>] [--dry-run] [-f|--force]
                    [--json] [--package-lock-only] [--no-package-lock]
                    [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
                    [--include <prod|dev|optional|peer> [--include <prod|dev|optional|peer> ...]]
                    [--foreground-scripts] [--ignore-scripts]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    Run "npm help audit" for more info

    bugs            Report bugs for a package in a web browser
                    
                    Usage:
                    npm bugs [<pkgname> [<pkgname> ...]]
                    
                    Options:
                    [--no-browser|--browser <browser>] [--registry <registry>]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root]
                    
                    alias: issues
                    
                    Run "npm help bugs" for more info

    cache           Manipulates packages cache
                    
                    Usage:
                    npm cache add <package-spec>
                    npm cache clean [<key>]
                    npm cache ls [<name>@<version>]
                    npm cache verify
                    
                    Options:
                    [--cache <cache>]
                    
                    Run "npm help cache" for more info

    ci              Clean install a project
                    
                    Usage:
                    npm ci
                    
                    Options:
                    [--install-strategy <hoisted|nested|shallow|linked>] [--legacy-bundling]
                    [--global-style] [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
                    [--include <prod|dev|optional|peer> [--include <prod|dev|optional|peer> ...]]
                    [--strict-peer-deps] [--foreground-scripts] [--ignore-scripts] [--no-audit]
                    [--no-bin-links] [--no-fund] [--dry-run]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    aliases: clean-install, ic, install-clean, isntall-clean
                    
                    Run "npm help ci" for more info

    completion      Tab Completion for npm
                    
                    Usage:
                    npm completion
                    
                    Run "npm help completion" for more info

    config          Manage the npm configuration files
                    
                    Usage:
                    npm config set <key>=<value> [<key>=<value> ...]
                    npm config get [<key> [<key> ...]]
                    npm config delete <key> [<key> ...]
                    npm config list [--json]
                    npm config edit
                    npm config fix
                    
                    Options:
                    [--json] [-g|--global] [--editor <editor>] [-L|--location <global|user|project>]
                    [-l|--long]
                    
                    alias: c
                    
                    Run "npm help config" for more info

    dedupe          Reduce duplication in the package tree
                    
                    Usage:
                    npm dedupe
                    
                    Options:
                    [--install-strategy <hoisted|nested|shallow|linked>] [--legacy-bundling]
                    [--global-style] [--strict-peer-deps] [--no-package-lock]
                    [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
                    [--include <prod|dev|optional|peer> [--include <prod|dev|optional|peer> ...]]
                    [--ignore-scripts] [--no-audit] [--no-bin-links] [--no-fund] [--dry-run]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    alias: ddp
                    
                    Run "npm help dedupe" for more info

    deprecate       Deprecate a version of a package
                    
                    Usage:
                    npm deprecate <package-spec> <message>
                    
                    Options:
                    [--registry <registry>] [--otp <otp>]
                    
                    Run "npm help deprecate" for more info

    diff            The registry diff command
                    
                    Usage:
                    npm diff [...<paths>]
                    
                    Options:
                    [--diff <package-spec> [--diff <package-spec> ...]] [--diff-name-only]
                    [--diff-unified <number>] [--diff-ignore-all-space] [--diff-no-prefix]
                    [--diff-src-prefix <path>] [--diff-dst-prefix <path>] [--diff-text] [-g|--global]
                    [--tag <tag>]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root]
                    
                    Run "npm help diff" for more info

    dist-tag        Modify package distribution tags
                    
                    Usage:
                    npm dist-tag add <package-spec (with version)> [<tag>]
                    npm dist-tag rm <package-spec> <tag>
                    npm dist-tag ls [<package-spec>]
                    
                    Options:
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root]
                    
                    alias: dist-tags
                    
                    Run "npm help dist-tag" for more info

    docs            Open documentation for a package in a web browser
                    
                    Usage:
                    npm docs [<pkgname> [<pkgname> ...]]
                    
                    Options:
                    [--no-browser|--browser <browser>] [--registry <registry>]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root]
                    
                    alias: home
                    
                    Run "npm help docs" for more info

    doctor          Check the health of your npm environment
                    
                    Usage:
                    npm doctor [connection] [registry] [versions] [environment] [permissions] [cache]
                    
                    Options:
                    [--registry <registry>]
                    
                    Run "npm help doctor" for more info

    edit            Edit an installed package
                    
                    Usage:
                    npm edit <pkg>[/<subpkg>...]
                    
                    Options:
                    [--editor <editor>]
                    
                    Run "npm help edit" for more info

    exec            Run a command from a local or remote npm package
                    
                    Usage:
                    npm exec -- <pkg>[@<version>] [args...]
                    npm exec --package=<pkg>[@<version>] -- <cmd> [args...]
                    npm exec -c '<cmd> [args...]'
                    npm exec --package=foo -c '<cmd> [args...]'
                    
                    Options:
                    [--package <package-spec> [--package <package-spec> ...]] [-c|--call <call>]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root]
                    
                    alias: x
                    
                    Run "npm help exec" for more info

    explain         Explain installed packages
                    
                    Usage:
                    npm explain <package-spec>
                    
                    Options:
                    [--json] [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    
                    alias: why
                    
                    Run "npm help explain" for more info

    explore         Browse an installed package
                    
                    Usage:
                    npm explore <pkg> [ -- <command>]
                    
                    Options:
                    [--shell <shell>]
                    
                    Run "npm help explore" for more info

    find-dupes      Find duplication in the package tree
                    
                    Usage:
                    npm find-dupes
                    
                    Options:
                    [--install-strategy <hoisted|nested|shallow|linked>] [--legacy-bundling]
                    [--global-style] [--strict-peer-deps] [--no-package-lock]
                    [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
                    [--include <prod|dev|optional|peer> [--include <prod|dev|optional|peer> ...]]
                    [--ignore-scripts] [--no-audit] [--no-bin-links] [--no-fund]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    Run "npm help find-dupes" for more info

    fund            Retrieve funding information
                    
                    Usage:
                    npm fund [<package-spec>]
                    
                    Options:
                    [--json] [--no-browser|--browser <browser>] [--no-unicode]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [--which <fundingSourceNumber>]
                    
                    Run "npm help fund" for more info

    get             Get a value from the npm configuration
                    
                    Usage:
                    npm get [<key> ...] (See `npm config`)
                    
                    Options:
                    [-l|--long]
                    
                    Run "npm help get" for more info

    help            Get help on npm
                    
                    Usage:
                    npm help <term> [<terms..>]
                    
                    Options:
                    [--viewer <viewer>]
                    
                    alias: hlep
                    
                    Run "npm help help" for more info

    help-search     Search npm help documentation
                    
                    Usage:
                    npm help-search <text>
                    
                    Options:
                    [-l|--long]
                    
                    Run "npm help help-search" for more info

    hook            Manage registry hooks
                    
                    Usage:
                    npm hook add <pkg> <url> <secret> [--type=<type>]
                    npm hook ls [pkg]
                    npm hook rm <id>
                    npm hook update <id> <url> <secret>
                    
                    Options:
                    [--registry <registry>] [--otp <otp>]
                    
                    Run "npm help hook" for more info

    init            Create a package.json file
                    
                    Usage:
                    npm init <package-spec> (same as `npx <package-spec>`)
                    npm init <@scope> (same as `npx <@scope>/create`)
                    
                    Options:
                    [--init-author-name <name>] [--init-author-url <url>] [--init-license <license>]
                    [--init-module <module>] [--init-version <version>] [-y|--yes] [-f|--force]
                    [--scope <@scope>]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--no-workspaces-update] [--include-workspace-root]
                    
                    aliases: create, innit
                    
                    Run "npm help init" for more info

    install         Install a package
                    
                    Usage:
                    npm install [<package-spec> ...]
                    
                    Options:
                    [-S|--save|--no-save|--save-prod|--save-dev|--save-optional|--save-peer|--save-bundle]
                    [-E|--save-exact] [-g|--global]
                    [--install-strategy <hoisted|nested|shallow|linked>] [--legacy-bundling]
                    [--global-style] [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
                    [--include <prod|dev|optional|peer> [--include <prod|dev|optional|peer> ...]]
                    [--strict-peer-deps] [--prefer-dedupe] [--no-package-lock] [--package-lock-only]
                    [--foreground-scripts] [--ignore-scripts] [--no-audit] [--no-bin-links]
                    [--no-fund] [--dry-run] [--cpu <cpu>] [--os <os>] [--libc <libc>]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    aliases: add, i, in, ins, inst, insta, instal, isnt, isnta, isntal, isntall
                    
                    Run "npm help install" for more info

    install-ci-test Install a project with a clean slate and run tests
                    
                    Usage:
                    npm install-ci-test
                    
                    Options:
                    [--install-strategy <hoisted|nested|shallow|linked>] [--legacy-bundling]
                    [--global-style] [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
                    [--include <prod|dev|optional|peer> [--include <prod|dev|optional|peer> ...]]
                    [--strict-peer-deps] [--foreground-scripts] [--ignore-scripts] [--no-audit]
                    [--no-bin-links] [--no-fund] [--dry-run]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    aliases: cit, clean-install-test, sit
                    
                    Run "npm help install-ci-test" for more info

    install-test    Install package(s) and run tests
                    
                    Usage:
                    npm install-test [<package-spec> ...]
                    
                    Options:
                    [-S|--save|--no-save|--save-prod|--save-dev|--save-optional|--save-peer|--save-bundle]
                    [-E|--save-exact] [-g|--global]
                    [--install-strategy <hoisted|nested|shallow|linked>] [--legacy-bundling]
                    [--global-style] [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
                    [--include <prod|dev|optional|peer> [--include <prod|dev|optional|peer> ...]]
                    [--strict-peer-deps] [--prefer-dedupe] [--no-package-lock] [--package-lock-only]
                    [--foreground-scripts] [--ignore-scripts] [--no-audit] [--no-bin-links]
                    [--no-fund] [--dry-run] [--cpu <cpu>] [--os <os>] [--libc <libc>]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    alias: it
                    
                    Run "npm help install-test" for more info

    link            Symlink a package folder
                    
                    Usage:
                    npm link [<package-spec>]
                    
                    Options:
                    [-S|--save|--no-save|--save-prod|--save-dev|--save-optional|--save-peer|--save-bundle]
                    [-E|--save-exact] [-g|--global]
                    [--install-strategy <hoisted|nested|shallow|linked>] [--legacy-bundling]
                    [--global-style] [--strict-peer-deps] [--no-package-lock]
                    [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
                    [--include <prod|dev|optional|peer> [--include <prod|dev|optional|peer> ...]]
                    [--ignore-scripts] [--no-audit] [--no-bin-links] [--no-fund] [--dry-run]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    alias: ln
                    
                    Run "npm help link" for more info

    ll              List installed packages
                    
                    Usage:
                    npm ll [[<@scope>/]<pkg> ...]
                    
                    Options:
                    [-a|--all] [--json] [-l|--long] [-p|--parseable] [-g|--global] [--depth <depth>]
                    [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
                    [--include <prod|dev|optional|peer> [--include <prod|dev|optional|peer> ...]]
                    [--link] [--package-lock-only] [--no-unicode]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    alias: la
                    
                    Run "npm help ll" for more info

    login           Login to a registry user account
                    
                    Usage:
                    npm login
                    
                    Options:
                    [--registry <registry>] [--scope <@scope>] [--auth-type <legacy|web>]
                    
                    Run "npm help login" for more info

    logout          Log out of the registry
                    
                    Usage:
                    npm logout
                    
                    Options:
                    [--registry <registry>] [--scope <@scope>]
                    
                    Run "npm help logout" for more info

    ls              List installed packages
                    
                    Usage:
                    npm ls <package-spec>
                    
                    Options:
                    [-a|--all] [--json] [-l|--long] [-p|--parseable] [-g|--global] [--depth <depth>]
                    [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
                    [--include <prod|dev|optional|peer> [--include <prod|dev|optional|peer> ...]]
                    [--link] [--package-lock-only] [--no-unicode]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    alias: list
                    
                    Run "npm help ls" for more info

    org             Manage orgs
                    
                    Usage:
                    npm org set orgname username [developer | admin | owner]
                    npm org rm orgname username
                    npm org ls orgname [<username>]
                    
                    Options:
                    [--registry <registry>] [--otp <otp>] [--json] [-p|--parseable]
                    
                    alias: ogr
                    
                    Run "npm help org" for more info

    outdated        Check for outdated packages
                    
                    Usage:
                    npm outdated [<package-spec> ...]
                    
                    Options:
                    [-a|--all] [--json] [-l|--long] [-p|--parseable] [-g|--global]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    
                    Run "npm help outdated" for more info

    owner           Manage package owners
                    
                    Usage:
                    npm owner add <user> <package-spec>
                    npm owner rm <user> <package-spec>
                    npm owner ls <package-spec>
                    
                    Options:
                    [--registry <registry>] [--otp <otp>]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces]
                    
                    alias: author
                    
                    Run "npm help owner" for more info

    pack            Create a tarball from a package
                    
                    Usage:
                    npm pack <package-spec>
                    
                    Options:
                    [--dry-run] [--json] [--pack-destination <pack-destination>]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root]
                    
                    Run "npm help pack" for more info

    ping            Ping npm registry
                    
                    Usage:
                    npm ping
                    
                    Options:
                    [--registry <registry>]
                    
                    Run "npm help ping" for more info

    pkg             Manages your package.json
                    
                    Usage:
                    npm pkg set <key>=<value> [<key>=<value> ...]
                    npm pkg get [<key> [<key> ...]]
                    npm pkg delete <key> [<key> ...]
                    npm pkg set [<array>[<index>].<key>=<value> ...]
                    npm pkg set [<array>[].<key>=<value> ...]
                    npm pkg fix
                    
                    Options:
                    [-f|--force] [--json]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces]
                    
                    Run "npm help pkg" for more info

    prefix          Display prefix
                    
                    Usage:
                    npm prefix [-g]
                    
                    Options:
                    [-g|--global]
                    
                    Run "npm help prefix" for more info

    profile         Change settings on your registry profile
                    
                    Usage:
                    npm profile enable-2fa [auth-only|auth-and-writes]
                    npm profile disable-2fa
                    npm profile get [<key>]
                    npm profile set <key> <value>
                    
                    Options:
                    [--registry <registry>] [--json] [-p|--parseable] [--otp <otp>]
                    
                    Run "npm help profile" for more info

    prune           Remove extraneous packages
                    
                    Usage:
                    npm prune [[<@scope>/]<pkg>...]
                    
                    Options:
                    [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
                    [--include <prod|dev|optional|peer> [--include <prod|dev|optional|peer> ...]]
                    [--dry-run] [--json] [--foreground-scripts] [--ignore-scripts]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    Run "npm help prune" for more info

    publish         Publish a package
                    
                    Usage:
                    npm publish <package-spec>
                    
                    Options:
                    [--tag <tag>] [--access <restricted|public>] [--dry-run] [--otp <otp>]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root]
                    [--provenance|--provenance-file <file>]
                    
                    Run "npm help publish" for more info

    query           Retrieve a filtered list of packages
                    
                    Usage:
                    npm query <selector>
                    
                    Options:
                    [-g|--global]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--package-lock-only]
                    [--expect-results|--expect-result-count <count>]
                    
                    Run "npm help query" for more info

    rebuild         Rebuild a package
                    
                    Usage:
                    npm rebuild [<package-spec>] ...]
                    
                    Options:
                    [-g|--global] [--no-bin-links] [--foreground-scripts] [--ignore-scripts]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    alias: rb
                    
                    Run "npm help rebuild" for more info

    repo            Open package repository page in the browser
                    
                    Usage:
                    npm repo [<pkgname> [<pkgname> ...]]
                    
                    Options:
                    [--no-browser|--browser <browser>] [--registry <registry>]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root]
                    
                    Run "npm help repo" for more info

    restart         Restart a package
                    
                    Usage:
                    npm restart [-- <args>]
                    
                    Options:
                    [--ignore-scripts] [--script-shell <script-shell>]
                    
                    Run "npm help restart" for more info

    root            Display npm root
                    
                    Usage:
                    npm root
                    
                    Options:
                    [-g|--global]
                    
                    Run "npm help root" for more info

    run-script      Run arbitrary package scripts
                    
                    Usage:
                    npm run-script <command> [-- <args>]
                    
                    Options:
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--if-present] [--ignore-scripts]
                    [--foreground-scripts] [--script-shell <script-shell>]
                    
                    aliases: run, rum, urn
                    
                    Run "npm help run-script" for more info

    sbom            Generate a Software Bill of Materials (SBOM)
                    
                    Usage:
                    npm sbom
                    
                    Options:
                    [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
                    [--package-lock-only] [--sbom-format <cyclonedx|spdx>]
                    [--sbom-type <library|application|framework>]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces]
                    
                    Run "npm help sbom" for more info

    search          Search for packages
                    
                    Usage:
                    npm search <search term> [<search term> ...]
                    
                    Options:
                    [--json] [--color|--no-color|--color always] [-p|--parseable] [--no-description]
                    [--searchlimit <number>] [--searchopts <searchopts>]
                    [--searchexclude <searchexclude>] [--registry <registry>] [--prefer-online]
                    [--prefer-offline] [--offline]
                    
                    aliases: find, s, se
                    
                    Run "npm help search" for more info

    set             Set a value in the npm configuration
                    
                    Usage:
                    npm set <key>=<value> [<key>=<value> ...] (See `npm config`)
                    
                    Options:
                    [-g|--global] [-L|--location <global|user|project>]
                    
                    Run "npm help set" for more info

    shrinkwrap      Lock down dependency versions for publication
                    
                    Usage:
                    npm shrinkwrap
                    
                    Run "npm help shrinkwrap" for more info

    star            Mark your favorite packages
                    
                    Usage:
                    npm star [<package-spec>...]
                    
                    Options:
                    [--registry <registry>] [--no-unicode] [--otp <otp>]
                    
                    Run "npm help star" for more info

    stars           View packages marked as favorites
                    
                    Usage:
                    npm stars [<user>]
                    
                    Options:
                    [--registry <registry>]
                    
                    Run "npm help stars" for more info

    start           Start a package
                    
                    Usage:
                    npm start [-- <args>]
                    
                    Options:
                    [--ignore-scripts] [--script-shell <script-shell>]
                    
                    Run "npm help start" for more info

    stop            Stop a package
                    
                    Usage:
                    npm stop [-- <args>]
                    
                    Options:
                    [--ignore-scripts] [--script-shell <script-shell>]
                    
                    Run "npm help stop" for more info

    team            Manage organization teams and team memberships
                    
                    Usage:
                    npm team create <scope:team> [--otp <otpcode>]
                    npm team destroy <scope:team> [--otp <otpcode>]
                    npm team add <scope:team> <user> [--otp <otpcode>]
                    npm team rm <scope:team> <user> [--otp <otpcode>]
                    npm team ls <scope>|<scope:team>
                    
                    Options:
                    [--registry <registry>] [--otp <otp>] [-p|--parseable] [--json]
                    
                    Run "npm help team" for more info

    test            Test a package
                    
                    Usage:
                    npm test [-- <args>]
                    
                    Options:
                    [--ignore-scripts] [--script-shell <script-shell>]
                    
                    aliases: tst, t
                    
                    Run "npm help test" for more info

    token           Manage your authentication tokens
                    
                    Usage:
                    npm token list
                    npm token revoke <id|token>
                    npm token create [--read-only] [--cidr=list]
                    
                    Options:
                    [--read-only] [--cidr <cidr> [--cidr <cidr> ...]] [--registry <registry>]
                    [--otp <otp>]
                    
                    Run "npm help token" for more info

    uninstall       Remove a package
                    
                    Usage:
                    npm uninstall [<@scope>/]<pkg>...
                    
                    Options:
                    [-S|--save|--no-save|--save-prod|--save-dev|--save-optional|--save-peer|--save-bundle]
                    [-g|--global]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    aliases: unlink, remove, rm, r, un
                    
                    Run "npm help uninstall" for more info

    unpublish       Remove a package from the registry
                    
                    Usage:
                    npm unpublish [<package-spec>]
                    
                    Options:
                    [--dry-run] [-f|--force]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces]
                    
                    Run "npm help unpublish" for more info

    unstar          Remove an item from your favorite packages
                    
                    Usage:
                    npm unstar [<package-spec>...]
                    
                    Options:
                    [--registry <registry>] [--no-unicode] [--otp <otp>]
                    
                    Run "npm help unstar" for more info

    update          Update packages
                    
                    Usage:
                    npm update [<pkg>...]
                    
                    Options:
                    [-S|--save|--no-save|--save-prod|--save-dev|--save-optional|--save-peer|--save-bundle]
                    [-g|--global] [--install-strategy <hoisted|nested|shallow|linked>]
                    [--legacy-bundling] [--global-style]
                    [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
                    [--include <prod|dev|optional|peer> [--include <prod|dev|optional|peer> ...]]
                    [--strict-peer-deps] [--no-package-lock] [--foreground-scripts]
                    [--ignore-scripts] [--no-audit] [--no-bin-links] [--no-fund] [--dry-run]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    aliases: up, upgrade, udpate
                    
                    Run "npm help update" for more info

    version         Bump a package version
                    
                    Usage:
                    npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
                    
                    Options:
                    [--allow-same-version] [--no-commit-hooks] [--no-git-tag-version] [--json]
                    [--preid prerelease-id] [--sign-git-tag]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--no-workspaces-update] [--include-workspace-root]
                    
                    alias: verison
                    
                    Run "npm help version" for more info

    view            View registry info
                    
                    Usage:
                    npm view [<package-spec>] [<field>[.subfield]...]
                    
                    Options:
                    [--json] [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root]
                    
                    aliases: info, show, v
                    
                    Run "npm help view" for more info

    whoami          Display npm username
                    
                    Usage:
                    npm whoami
                    
                    Options:
                    [--registry <registry>]
                    
                    Run "npm help whoami" for more info

Specify configs in the ini-formatted file:
    /Users/MyUser/.npmrc
or on the command line via: npm <command> --key=value

More configuration info: npm help config
Configuration fields: npm help 7 config

npm@10.8.2 /usr/local/lib/node_modules/npm
```

- `npm help config`
    
    ```bash
    Unknown locale, assuming C
    NPM-CONFIG(1)                                                    NPM-CONFIG(1)
    
    NAME
           npm-config - Manage the npm configuration files
    
       Synopsis
             npm config set <key>=<value> [<key>=<value> ...]
             npm config get [<key> [<key> ...]]
             npm config delete <key> [<key> ...]
             npm config list [--json]
             npm config edit
             npm config fix
    
             alias: c
    
           Note: This command is unaware of workspaces.
    
       Description
           npm gets its config settings from the command line, environment
           variables, npmrc files, and in some cases, the package.json file.
    
           See npm help npmrc for more information about the npmrc files.
    
           See npm help config for a more thorough explanation of the mechanisms
           involved, and a full list of config options available.
    
           The npm config command can be used to update and edit the contents of
           the user and global npmrc files.
    
       Sub-commands
           Config supports the following sub-commands:
    
       set
             npm config set key=value [key=value...]
             npm set key=value [key=value...]
    
           Sets each of the config keys to the value provided. Modifies the user
           configuration file unless location ⟨/commands/npm-config#location⟩ is
           passed.
    
           If value is omitted, the key will be removed from your config file
           entirely.
    
           Note: for backwards compatibility, npm config set key value is
           supported as an alias for npm config set key=value.
    
       get
             npm config get [key ...]
             npm get [key ...]
    
           Echo the config value(s) to stdout.
    
           If multiple keys are provided, then the values will be prefixed with
           the key names.
    
           If no keys are provided, then this command behaves the same as npm
           config list.
    
       list
             npm config list
    
           Show all the config settings. Use -l to also show defaults. Use --json
           to show the settings in json format.
    
       delete
             npm config delete key [key ...]
    
           Deletes the specified keys from all configuration files.
    
       edit
             npm config edit
    
           Opens the config file in an editor. Use the --global flag to edit the
           global config.
    
       fix
             npm config fix
    
           Attempts to repair invalid configuration items. Usually this means
           attaching authentication config (i.e. _auth, _authToken) to the
           configured registry.
    
       Configuration
       json
    
           •   Default: false
    
           •   Type: Boolean
    
           Whether or not to output JSON data, rather than the normal output.
    
           •   In npm pkg set it enables parsing set values with JSON.parse()
               before saving them to your package.json.
    
           Not supported by all npm commands.
    
       global
    
           •   Default: false
    
           •   Type: Boolean
    
           Operates in "global" mode, so that packages are installed into the
           prefix folder instead of the current working directory. See npm help
           folders for more on the differences in behavior.
    
           •   packages are installed into the {prefix}/lib/node_modules folder,
               instead of the current working directory.
    
           •   bin files are linked to {prefix}/bin
    
           •   man pages are linked to {prefix}/share/man
    
       editor
    
           •   Default: The EDITOR or VISUAL environment variables, or
               '%SYSTEMROOT%\notepad.exe' on Windows, or 'vi' on Unix systems
    
           •   Type: String
    
           The command to run for npm edit and npm config edit.
    
       location
    
           •   Default: "user" unless --global is passed, which will also set this
               value to "global"
    
           •   Type: "global", "user", or "project"
    
           When passed to npm config this refers to which config file to use.
    
           When set to "global" mode, packages are installed into the prefix
           folder instead of the current working directory. See npm help folders
           for more on the differences in behavior.
    
           •   packages are installed into the {prefix}/lib/node_modules folder,
               instead of the current working directory.
    
           •   bin files are linked to {prefix}/bin
    
           •   man pages are linked to {prefix}/share/man
    
       long
    
           •   Default: false
    
           •   Type: Boolean
    
           Show extended information in ls, search, and help-search.
    
       See Also
    
           •   npm help folders
    
           •   npm help config
    
           •   package.json ⟨/configuring-npm/package-json⟩
    
           •   npm help npmrc
    
           •   npm help npm
    
    NPM@10.8.2                         July 2024                     NPM-CONFIG(1)
    ```
    
- `npm help 7 config`
    
    ```bash
    npm help config > config_help.txt
    ```
    
    ```bash
    NPM-CONFIG(1)                                                    NPM-CONFIG(1)
    
    NNAAMMEE
           nnppmm--ccoonnffiigg - Manage the npm configuration files
    
       SSyynnooppssiiss
             npm config set <key>=<value> [<key>=<value> ...]
             npm config get [<key> [<key> ...]]
             npm config delete <key> [<key> ...]
             npm config list [--json]
             npm config edit
             npm config fix
    
             alias: c
    
           Note: This command is unaware of workspaces.
    
       DDeessccrriippttiioonn
           npm gets its config settings from the command line, environment
           variables, nnppmmrrcc files, and in some cases, the ppaacckkaaggee..jjssoonn file.
    
           See npm help npmrc for more information about the npmrc files.
    
           See npm help config for a more thorough explanation of the mechanisms
           involved, and a full list of config options available.
    
           The nnppmm ccoonnffiigg command can be used to update and edit the contents of
           the user and global npmrc files.
    
       SSuubb--ccoommmmaannddss
           Config supports the following sub-commands:
    
       sseett
             npm config set key=value [key=value...]
             npm set key=value [key=value...]
    
           Sets each of the config keys to the value provided. Modifies the user
           configuration file unless llooccaattiioonn _⟨_/_c_o_m_m_a_n_d_s_/_n_p_m_-_c_o_n_f_i_g_#_l_o_c_a_t_i_o_n_⟩ is
           passed.
    
           If value is omitted, the key will be removed from your config file
           entirely.
    
           Note: for backwards compatibility, nnppmm ccoonnffiigg sseett kkeeyy vvaalluuee is
           supported as an alias for nnppmm ccoonnffiigg sseett kkeeyy==vvaalluuee.
    
       ggeett
             npm config get [key ...]
             npm get [key ...]
    
           Echo the config value(s) to stdout.
    
           If multiple keys are provided, then the values will be prefixed with
           the key names.
    
           If no keys are provided, then this command behaves the same as nnppmm
           ccoonnffiigg lliisstt.
    
       lliisstt
             npm config list
    
           Show all the config settings. Use --ll to also show defaults. Use ----jjssoonn
           to show the settings in json format.
    
       ddeelleettee
             npm config delete key [key ...]
    
           Deletes the specified keys from all configuration files.
    
       eeddiitt
             npm config edit
    
           Opens the config file in an editor. Use the ----gglloobbaall flag to edit the
           global config.
    
       ffiixx
             npm config fix
    
           Attempts to repair invalid configuration items. Usually this means
           attaching authentication config (i.e. __aauutthh, __aauutthhTTookkeenn) to the
           configured rreeggiissttrryy.
    
       CCoonnffiigguurraattiioonn
       jjssoonn
    
           •   Default: false
    
           •   Type: Boolean
    
           Whether or not to output JSON data, rather than the normal output.
    
           •   In nnppmm ppkkgg sseett it enables parsing set values with JSON.parse()
               before saving them to your ppaacckkaaggee..jjssoonn.
    
           Not supported by all npm commands.
    
       gglloobbaall
    
           •   Default: false
    
           •   Type: Boolean
    
           Operates in "global" mode, so that packages are installed into the
           pprreeffiixx folder instead of the current working directory. See npm help
           folders for more on the differences in behavior.
    
           •   packages are installed into the {{pprreeffiixx}}//lliibb//nnooddee__mmoodduulleess folder,
               instead of the current working directory.
    
           •   bin files are linked to {{pprreeffiixx}}//bbiinn
    
           •   man pages are linked to {{pprreeffiixx}}//sshhaarree//mmaann
    
       eeddiittoorr
    
           •   Default: The EDITOR or VISUAL environment variables, or
               '%SYSTEMROOT%\notepad.exe' on Windows, or 'vi' on Unix systems
    
           •   Type: String
    
           The command to run for nnppmm eeddiitt and nnppmm ccoonnffiigg eeddiitt.
    
       llooccaattiioonn
    
           •   Default: "user" unless ----gglloobbaall is passed, which will also set this
               value to "global"
    
           •   Type: "global", "user", or "project"
    
           When passed to nnppmm ccoonnffiigg this refers to which config file to use.
    
           When set to "global" mode, packages are installed into the pprreeffiixx
           folder instead of the current working directory. See npm help folders
           for more on the differences in behavior.
    
           •   packages are installed into the {{pprreeffiixx}}//lliibb//nnooddee__mmoodduulleess folder,
               instead of the current working directory.
    
           •   bin files are linked to {{pprreeffiixx}}//bbiinn
    
           •   man pages are linked to {{pprreeffiixx}}//sshhaarree//mmaann
    
       lloonngg
    
           •   Default: false
    
           •   Type: Boolean
    
           Show extended information in llss, sseeaarrcchh, and hheellpp--sseeaarrcchh.
    
       SSeeee AAllssoo
    
           •   npm help folders
    
           •   npm help config
    
           •   ppaacckkaaggee..jjssoonn _⟨_/_c_o_n_f_i_g_u_r_i_n_g_-_n_p_m_/_p_a_c_k_a_g_e_-_j_s_o_n_⟩
    
           •   npm help npmrc
    
           •   npm help npm
    
    NPM@10.8.2                         July 2024                     NPM-CONFIG(1)
    	
    ```
    
- All commands
    
    ```
    npm --help
    npm <command>
    
    Usage:
    
    npm install        install all the dependencies in your project
    npm install <foo>  add the <foo> dependency to your project
    npm test           run this project's tests
    npm run <foo>      run the script named <foo>
    npm <command> -h   quick help on <command>
    npm -l             display usage info for all commands
    npm help <term>    search for help on <term>
    npm help npm       more involved overview
    
    All commands:
    
        access, adduser, audit, bugs, cache, ci, completion,
        config, dedupe, deprecate, diff, dist-tag, docs, doctor,
        edit, exec, explain, explore, find-dupes, fund, get, help,
        help-search, hook, init, install, install-ci-test,
        install-test, link, ll, login, logout, ls, org, outdated,
        owner, pack, ping, pkg, prefix, profile, prune, publish,
        query, rebuild, repo, restart, root, run-script, sbom,
        search, set, shrinkwrap, star, stars, start, stop, team,
        test, token, uninstall, unpublish, unstar, update, version,
        view, whoami
    
    Specify configs in the ini-formatted file:
        /Users/yunaimatsu/.npmrc
    or on the command line via: npm <command> --key=value
    
    More configuration info: npm help config
    Configuration fields: npm help 7 config
    
    npm@10.8.2 /usr/local/lib/node_modules/npm
    ```