ChatGPT said:
SIGHUP is a signal in Unix-like operating systems. It stands for Signal Hang Up and is one of the original signals in the UNIX signal system.

🔍 What Is SIGHUP?
Originally, SIGHUP (signal number 1) was used to notify a process that the terminal it was connected to had been disconnected—i.e., the user hung up their modem session (hence "hang up").

Today, it’s still used to notify processes of a controlling terminal being closed, but it also has other uses.

🧠 When Is SIGHUP Sent?
A process receives SIGHUP when:

The controlling terminal is closed

e.g., You run a command in a shell and then close the terminal window.

All child processes still attached to the terminal will receive SIGHUP.

You explicitly send it:

bash
Copy
Edit
kill -HUP <pid>
🛠 What Happens When a Process Receives SIGHUP?
That depends on the process:

Default behavior:
→ Terminate the process.

Custom behavior:
→ A process can catch SIGHUP and perform cleanup or reload its config.

Example:
Many daemons (like nginx, sshd, etc.) interpret SIGHUP as:

"Reload your config without stopping."

bash
Copy
Edit
sudo kill -HUP $(pidof nginx)
💡 How Programs Handle SIGHUP
Ignore it:
c
Copy
Edit
signal(SIGHUP, SIG_IGN);
Catch it:
c
Copy
Edit
void handle_sighup(int sig) {
    // Reload config or clean up
}

signal(SIGHUP, handle_sighup);
🧪 Example (Shell)
bash
Copy
Edit
# Start a long-running command
sleep 1000
# Then close the terminal

# The `sleep` process will get a SIGHUP and terminate
But if you do:

nohup sleep 1000 &
It will ignore SIGHUP and keep running even if you close the terminal.

### Neovim commands which I want assign bindkey
:PackerSync
:MarkdownPreview

### Style with color to each programming language and markup format

### Understand Neovim package/plugin management yunaimatsu/dotfiles#42

How does `.local/share/...` work?
How are plugins installed?
Where are the files of log error of Neovim stored in?

Learn `init.lua` to write cheat sheet of it


Be master of vim
https://chatgpt.com/share/684da5a6-c758-8013-9866-7cd974bd77eb
https://www.amazon.co.jp/dp/B00HWLJI3U/ref=cm_sw_r_cp_ep_dp_7l4iAbP935H1B