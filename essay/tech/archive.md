1. Don't permit adding other branches than  main
2. Each device has its own branch `device-*`
3. Request integration
    ```sh
    git add .                                                                        
    git commit -m'<commit-message>'                                                  
    git push origin                                                                  
    gh pr create
    ```
