# Activate ES module

Do the one action from the following 3 methods.

1. Change the file extension `.js` to `.mjs`
2. Edit `package.json`
    
    ```json
    {
    	"type": "module"
    }
    ```
    
3. Add flag in `node` command in CLI
    
    ```
    node main.js --input-type=module
    ```