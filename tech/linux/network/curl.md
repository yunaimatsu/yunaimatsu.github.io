### 1. Protocol Interaction

Use curl to communicate with a wide range of protocols.

HTTP / HTTPS (web requests)

FTP / FTPS (file transfer)

SFTP / SCP (secure file transfer)

SMB / SMBs (Windows shares)

FILE (local files)

LDAP / LDAPS

MQTT

IMAP / SMTP / POP3

RTMP (streaming)

GOPHER

### 2. Request Types and Methods

Control the HTTP request method.

GET (default)

POST (-d or --data)

PUT (-T or --upload-file)

DELETE, PATCH, OPTIONS, etc. (-X)

HEAD request (-I or --head)



---

✅ 3. Data Handling

Send or receive data in specific ways.

Upload form data (-F)

Send raw body data (-d, --data-raw, --data-binary)

Download and save output (-o, -O)

Resume downloads (-C -)

Output to stdout, file, or pipe



---

✅ 4. Header & Cookie Management

Customize headers and session data.

Add custom headers (-H)

Include cookies (--cookie)

Save cookies to file (--cookie-jar)

Read headers only (-I)

Modify User-Agent (-A)



---

✅ 5. Authentication & Security

Secure your requests.

Basic auth (-u user:pass)

Bearer tokens (-H "Authorization: Bearer ...")

Client certificates (--cert, --key)

CA bundle or SSL control (--cacert, --insecure, etc.)

SSH keys for SFTP



---

✅ 6. Redirects and Connection Behavior

Control how curl connects and follows requests.

Follow redirects (-L)

Limit redirect depth (--max-redirs)

Timeout control (--connect-timeout, --max-time)

Retry on failure (--retry)

Limit rate (--limit-rate)

IPv4/IPv6 preference (-4, -6)



---

✅ 7. Debugging and Output Control

Help inspect and debug requests.

Verbose output (-v)

Show headers (-i)

Silent mode (-s)

Dump entire request/response (--trace, --trace-ascii)

Measure timings (-w)



---

✅ 8. Proxy & Network Options

Manage network routing.

Use HTTP/SOCKS proxy (-x, --socks5)

Set interface (--interface)

Use specific DNS servers (--dns-servers)

Use .netrc files for credentials



---

Let me know if you want a cheat sheet, diagram, or real-world examples for any of these categories!

