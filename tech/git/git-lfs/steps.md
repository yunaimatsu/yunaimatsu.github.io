```sh
git lfs install # Initialize git-lfs in the repository
git lfs track "<pattern>" # Create `.gitattributes` which tells git-lfs which files to track 
git add .gitattributes
git add <large-files>
git commit -m'<commit-message>' # Commit .gitattributes and large files at the same time
git push
```
