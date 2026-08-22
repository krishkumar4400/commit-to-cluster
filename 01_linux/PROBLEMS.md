# 🧪 Linux Practice Problems

### Master Every Concept — Hands On

> **How to use this:** Open a Linux terminal (or spin up an Ubuntu VM / WSL on Windows) and solve each problem yourself. Don't just read — **type the commands**.

---

## 📊 Difficulty Legend

| Symbol | Level |
| --- | --- |
| 🟢 | Beginner — straight from notes |
| 🟡 | Intermediate — combine 2–3 concepts |
| 🔴 | Advanced — think before typing |

---

## 🗂️ Section 1: Navigation & Directory Basics

| # | Problem | Level |
| --- | --- | --- |
| 1 | Print your current working directory | 🟢 |
| 2 | Create a folder called `devops-practice` | 🟢 |
| 3 | Inside `devops-practice`, create 3 subfolders: `scripts`, `logs`, `configs` | 🟢 |
| 4 | Navigate into `scripts`, then go back to `devops-practice` without typing the full path | 🟢 |
| 5 | Create a file called `notes.txt` inside `configs` without `cd`-ing into it | 🟡 |
| 6 | Create a nested folder structure `projects/web/frontend` in a single command | 🟡 |

---

## 📄 Section 2: `ls` — List & Inspect

| # | Problem | Level |
| --- | --- | --- |
| 7 | List all files in your home directory with full details | 🟢 |
| 8 | List files sorted by newest modification time | 🟢 |
| 9 | List files with human-readable sizes (KB, MB) | 🟢 |
| 10 | List files sorted by oldest modification time (reverse order) | 🟢 |
| 11 | Create 5 files with different extensions (`.txt`, `.yml`, `.sh`, `.tf`, `.json`). Now list only and confirm all are visible | 🟡 |

---

## 🗑️ Section 3: Delete Files & Directories

| # | Problem | Level |
| --- | --- | --- |
| 12 | Create an empty folder `temp` and delete it using the safest possible command | 🟢 |
| 13 | Create a folder `trash` with 3 files inside it. Delete the entire folder in one command | 🟢 |
| 14 | Create 5 files: `a.txt`, `b.txt`, `c.yml`, `d.tf`, `e.txt`. Delete only the `.txt` files | 🟢 |
| 15 | Create files: `main.tf`, `module.tf`, `output.yml`. Delete all `.tf` files starting with `m` | 🟡 |
| 16 | Create `test.txt`, `test.yml`, `test.sh`. Delete all files named `test` regardless of extension | 🟡 |

---

## 📖 Section 4: File Content Commands

| # | Problem | Level |
| --- | --- | --- |
| 17 | Create `bio.txt` and write 3 lines of text into it using `cat` | 🟢 |
| 18 | Add 2 more lines to `bio.txt` **without deleting** the existing content | 🟢 |
| 19 | View `bio.txt` with line numbers | 🟢 |
| 20 | View `bio.txt` in reverse line order | 🟢 |
| 21 | Display only the **first 3 lines** of `bio.txt` | 🟢 |
| 22 | Display only the **last 2 lines** of `bio.txt` | 🟢 |
| 23 | Create `file1.txt` and `file2.txt` with different content. Merge both into `merged.txt` | 🟡 |
| 24 | Create a file with 20 lines of text. Display lines from the middle (lines 8–12) using `head` and `tail` together | 🔴 |

---

## 📋 Section 5: Copy, Move & Rename

| # | Problem | Level |
| --- | --- | --- |
| 25 | Create `old.txt`. Rename it to `new.txt` | 🟢 |
| 26 | Create a folder `archive`. Move `new.txt` into it | 🟢 |
| 27 | Copy content of `notes.txt` into a new file `backup.txt` | 🟢 |
| 28 | Show the last 10 commands you ran | 🟢 |
| 29 | Create 3 separate log files with different content. Merge all 3 into `master.log` | 🟡 |
| 30 | Move all `.txt` files from current directory into a folder `text-files` (create it first) | 🔴 |

---

## 🏗️ Section 6: Linux File System

| # | Problem | Level |
| --- | --- | --- |
| 31 | Navigate to the `bin` directory and list the commands available there | 🟢 |
| 32 | Navigate to `/etc` and list all files. How many are there? | 🟢 |
| 33 | Navigate to `/tmp`, create a file there, restart your terminal session and check if it's gone | 🟡 |
| 34 | Find where `ls` command is stored on your system | 🟡 |
| 35 | Navigate to `/var/log` and list all log files. Identify what each might be logging | 🟡 |

---

## ✏️ Section 7: Vi Editor

| # | Problem | Level |
| --- | --- | --- |
| 36 | Open a new file `hello.txt` in vi and write "Hello, Linux!" — save and exit | 🟢 |
| 37 | Open `hello.txt` in vi, add 2 more lines, then exit **without saving** | 🟢 |
| 38 | Open `hello.txt`, go to line 1, copy it, and paste it at the end | 🟡 |
| 39 | Open `hello.txt`, delete the second line using vi | 🟡 |
| 40 | Create a shell script `run.sh` using vi with the content `echo "DevOps is awesome!"`. Save it | 🟡 |
| 41 | Open a file with 10 lines in vi. Delete all lines using vi commands only | 🔴 |

---

## 🔍 Section 8: `grep` Command

> First, create this file for practice:
>
> ```bash
> cat > devops.txt
> Docker is a containerization tool.
> Kubernetes manages containers at scale.
> Jenkins is a CI/CD automation server.
> docker-compose is used to run multi-container apps.
> Ansible automates configuration management.
> DevOps bridges development and operations.
> kubernetes is widely used in production.
> Jenkins pipelines automate build and deploy.
> ```

| # | Problem | Level |
| --- | --- | --- |
| 42 | Find all lines containing "Docker" (case-sensitive) | 🟢 |
| 43 | Find all lines containing "kubernetes" — ignore case | 🟢 |
| 44 | Count how many lines mention "Jenkins" | 🟢 |
| 45 | Display all lines that do **NOT** contain "Docker" | 🟢 |
| 46 | Find all lines with "jenkins" and show their line numbers | 🟢 |
| 47 | Find all lines containing both "Docker" and "container" | 🟡 |
| 48 | Search for the word "DevOps" across **all `.txt` files** in current directory | 🟡 |
| 49 | Count total number of lines that mention any tool (Docker, Kubernetes, Jenkins, Ansible) | 🔴 |

---

## 🔗 Section 9: Pipes

| # | Problem | Level |
| --- | --- | --- |
| 50 | List files in current directory and filter only `.yml` files using pipe | 🟢 |
| 51 | Show command history and filter only `grep` commands | 🟢 |
| 52 | Count how many files are in your current directory using `ls` and `wc -l` | 🟡 |
| 53 | Show content of `devops.txt` and count how many lines contain "Docker" | 🟡 |
| 54 | List all files, filter `.txt` files, and count how many there are — in a single pipeline | 🟡 |
| 55 | From `devops.txt`, find lines with "Jenkins", then extract and count unique words using pipes | 🔴 |
| 56 | Show last 5 commands from history that contain the word "rm" | 🔴 |

---

## 🔎 Section 10: `find` & `locate`

> Setup: Run this first to create a test structure:
>
> ```bash
> mkdir -p test-find/{docs,scripts,configs}
> touch test-find/docs/{readme.txt,guide.txt}
> touch test-find/scripts/{deploy.sh,build.sh}
> touch test-find/configs/{nginx.conf,app.yml}
> touch test-find/empty-file.txt
> mkdir test-find/empty-dir
> ```

| # | Problem | Level |
| --- | --- | --- |
| 57 | Find all `.txt` files inside `test-find` | 🟢 |
| 58 | Find all **directories** inside `test-find` | 🟢 |
| 59 | Find all **files** inside `test-find` | 🟢 |
| 60 | Find all **empty directories** inside `test-find` | 🟢 |
| 61 | Find all **empty files** inside `test-find` | 🟢 |
| 62 | Find all `.sh` files and display their names using `find` + `grep` | 🟡 |
| 63 | Find all `.conf` files anywhere inside `/etc` | 🟡 |
| 64 | Update the `locate` database and search for a file you just created | 🟡 |
| 65 | Find all `.txt` files, then filter only those with "guide" in the name — using pipe | 🟡 |
| 66 | Find all files modified in the last 1 day using `find . -mtime -1` | 🔴 |
| 67 | Find all files larger than 1MB using `find . -size +1M` | 🔴 |

---

## 🔥 Section 11: Mixed / Real-World Challenges

> These combine multiple concepts. Think before typing!

| # | Problem | Level |
| --- | --- | --- |
| 68 | Create a folder structure mimicking a real project: `myapp/{src,tests,docs,logs,config}` with at least 2 files in each | 🟡 |
| 69 | Find all empty files in `myapp`, list them, then delete them — in the fewest commands possible | 🔴 |
| 70 | Create a log file with 30 lines (mix of errors, warnings, info). Display only the ERROR lines using `grep`. Count them. | 🔴 |
| 71 | Find all `.sh` files in your home directory, and display only the names (not the full path) | 🔴 |
| 72 | Create 10 files named `log1.txt` to `log10.txt`, merge all of them into `full.log`, then show the last 5 lines of `full.log` | 🔴 |
| 73 | Write a sequence of commands to: create a folder `backup`, copy all `.txt` files into it, then list what's inside `backup` | 🔴 |
| 74 | Search your entire home directory for any file containing the word "password" using `grep -r` | 🔴 |
| 75 | Use `history`, `grep`, `wc -l` together to count how many times you've used the `cat` command today | 🔴 |

---

## ✅ Self-Assessment Checklist

After finishing all problems, you should be able to:

- [ ] Navigate Linux file system confidently without getting lost
- [ ] Create, rename, move, copy, and delete files/folders
- [ ] Read file content in multiple ways (head, tail, cat, reverse)
- [ ] Use `vi` to create and edit files without a GUI
- [ ] Search text inside files using `grep` with different flags
- [ ] Chain commands together using pipes (`|`)
- [ ] Find any file on the system using `find` or `locate`
- [ ] Understand what each major Linux directory is for

---

## 💡 Pro Tips

- **Practice daily** — even 20–30 minutes of hands-on terminal time beats hours of reading
- **Break things on purpose** — delete a wrong file, mess up a vi session — learn to recover
- **Use `man <command>`** — e.g., `man grep` shows the full manual for any command
- **WSL (Windows Subsystem for Linux)** — best way to practice on Windows without a VM

---

*"You don't learn Linux by reading about it. You learn it by using it every day." 🐧*
