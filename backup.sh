branch_name="arch01"
log_date="date '+%Y-%m-%d-%H-%M'"
cd ~/yunaimatsu
git add .
git commit -m "$log_date"
git push -u origin
gh pr create --title "$log_date" --body ""
echo "$(date +"%Y-%m-%d %H:%M:%S") Backup executed" >> .log
