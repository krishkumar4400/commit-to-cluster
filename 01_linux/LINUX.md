# 🐧 Linux Notes

> These notes cover Linux fundamentals for DevOps beginners — from basic commands to advanced tools like `grep`, `find`, and the `vi` editor.

---

## 📚 Topics Covered

1. [Introduction to Linux](#1-introduction-to-linux)
2. [Basic Navigation Commands](#2-basic-navigation-commands)
3. [Deleting Files & Directories + `ls` Variants](#3-deleting-files--directories--ls-variants)
4. [File Content Commands (`cat` & friends)](#4-file-content-commands-cat--friends)
5. [Copy, Move & Merge Files](#5-copy-move--merge-files)
6. [Linux File System Structure](#6-linux-file-system-structure)
7. [Vi Editor Basics](#7-vi-editor-basics)
8. [grep Command](#8-grep-command)
9. [Linux Pipes](#9-linux-pipes)
10. [find & locate Commands](#10-find--locate-commands)

---

## 1. Introduction to Linux

### What is Linux?

Linux is an **operating system** (OS) — just like Windows or macOS — but it is:

- ✅ **Free** — no license cost
- ✅ **Open Source** — anyone can view or modify the code
- ✅ **Highly Secure** — fewer vulnerabilities, widely trusted

### Why Learn Linux?

- Every application deployed on a **server** runs on Linux
- All major **DevOps tools** (Docker, Kubernetes, Jenkins, etc.) run on Linux
- **Cloud environments** (AWS, Azure, GCP) use Linux heavily

### Popular Linux Distributions (Flavours)

| Distribution | Used For |
| --- | --- |
| **Ubuntu** | Beginner-friendly, desktop & server |
| **Amazon Linux** | AWS cloud environments |
| **Red Hat (RHEL)** | Enterprise / production servers |

> 💡 A *distribution* is just a version/flavour of Linux packaged with different tools & UI.

---

## 2. Basic Navigation Commands

> These are the commands you'll use every single day.

| Command | Full Form | What It Does |
| --- | --- | --- |
| `pwd` | Present Working Directory | Shows your current location in the file system |
| `mkdir <name>` | Make Directory | Creates a new folder |
| `cd <folder>` | Change Directory | Moves into a folder |
| `cd ..` | — | Moves one level up (out of current folder) |
| `touch <file>` | — | Creates a new empty file |

### Examples

```bash
pwd                  # Output: /home/krish
mkdir projects       # Creates a folder named 'projects'
cd projects          # Moves into 'projects'
touch index.html     # Creates an empty file 'index.html'
cd ..                # Goes back to /home/krish
```

---

## 3. Deleting Files & Directories + `ls` Variants

### `ls` — List Files (with options)

| Command | What It Does |
| --- | --- |
| `ls -l` | Lists files with details (permissions, size, date) |
| `ls -lr` | Lists in reverse order |
| `ls -lh` | Lists with human-readable file sizes (KB, MB) |
| `ls -lt` | Lists sorted by modification time (newest first) |
| `ls -ltr` | Lists sorted by modification time (oldest first) |

### Deleting Files & Directories

| Command | What It Does |
| --- | --- |
| `rmdir <folder>` | Deletes an **empty** directory |
| `rm -rf <folder>` | Deletes a directory **even if it has files** ⚠️ |
| `rm <filename>` | Deletes a single file |
| `rm *.txt` | Deletes all `.txt` files |
| `rm test.*` | Deletes all files named `test` (any extension) |
| `rm m*.tf` | Deletes all `.tf` files starting with `m` |

> ⚠️ `rm -rf` is **irreversible** — deleted files don't go to Trash. Be very careful!

---

## 4. File Content Commands (`cat` & friends)

### `cat` — View & Write File Content

| Command | What It Does |
| --- | --- |
| `cat test.txt` | Displays the full content of a file |
| `cat > test.txt` | **Overwrites** file with new content (type, then Ctrl+D) |
| `cat >> test.txt` | **Appends** content to the end of a file |
| `cat -n test.txt` | Displays content with **line numbers** |
| `cat a.txt b.txt > c.txt` | Merges `a.txt` and `b.txt` into `c.txt` |

### Reverse Content

| Command | What It Does |
| --- | --- |
| `tac test.txt` | Shows file content in **reverse line order** |
| `rev demo.js` | Reverses the **characters** of each word in every line |

### View First/Last Lines

| Command | What It Does |
| --- | --- |
| `head test.txt` | Shows **first 10 lines** |
| `tail test.txt` | Shows **last 10 lines** |
| `head -n 4 test.txt` | Shows first **4 lines** |
| `tail -n 4 test.txt` | Shows last **4 lines** |

> 💡 `tail` is very useful for **monitoring live logs** in DevOps (`tail -f logfile.log`)

---

## 5. Copy, Move & Merge Files

| Command | What It Does |
| --- | --- |
| `mv old.yml new.yml` | **Renames** a file |
| `mv file.yml devops/` | **Moves** a file to another directory |
| `cp source.txt dest.txt` | **Copies** content from one file to another (overwrites dest) |
| `cat a.txt b.txt > c.txt` | **Merges** multiple files into one |
| `history` | Shows list of all previously executed commands |

### Examples

```bash
mv demo.yml docker-compose.yml        # Rename
mv docker-compose.yml devops/         # Move to 'devops' folder
cp ci.txt jenkins.txt                 # Copy ci.txt content into jenkins.txt
cat ansible.txt jenkins.txt > shell.txt   # Merge into shell.txt
```

---

## 6. Linux File System Structure

> In Linux, **everything is a file** — even directories and shortcuts.

| File Type | Example |
| --- | --- |
| Normal File | `file.txt`, `app.yml`, `main.tf` |
| Directory | `projects/`, `devops/` |
| Link File (Shortcut) | Points to another file |

### Important Directories

| Directory | Purpose |
| --- | --- |
| `/home` | Your personal workspace — all your files live here |
| `/bin` | Essential Linux commands (`ls`, `mv`, `cp`, etc.) |
| `/tmp` | Temporary files — **auto-deleted** on restart |
| `/usr` | Installed applications & user programs |
| `/opt` | Optional / third-party software |
| `/var` | Variable data — **application logs** are stored here |
| `/etc` | **Configuration files** for all applications |

> 💡 As a DevOps engineer, you'll frequently visit `/etc` (configs) and `/var/log` (logs).

---

## 7. Vi Editor Basics

`vi` is a powerful **text editor** built into almost every Linux system. It has 3 modes:

### Modes of Vi

| Mode | Purpose |
| --- | --- |
| **Command** | Navigate the file (default mode when you open) |
| **Insert** | Edit / write content (press `i` to enter) |
| **Escape** | Exit insert mode (press `Esc`) |

### Opening & Saving a File

```bash
vi demo.txt       # Opens (or creates) demo.txt in vi
```

**To write and save:**

1. Press `i` → enters Insert mode
2. Type your content
3. Press `Esc` → exits Insert mode
4. Type `:wq` → **saves and exits**

**To exit WITHOUT saving:**

1. Press `i` → type something
2. Press `Esc`
3. Type `:q!` → **exits without saving**

### Escape Mode Shortcuts (Navigation)

| Key | Action |
| --- | --- |
| `yy` | Copy (yank) a line |
| `d` | Delete a line |
| `p` | Paste copied/deleted line |

---

## 8. `grep` Command

### What is `grep`?
>
> **grep** = **G**lobal **R**egular **E**xpression **P**rint

It's used to **search for a pattern** (text) inside files and prints all matching lines.

### Syntax

```bash
grep "pattern" filename
```

### Common Options

| Command | What It Does |
| --- | --- |
| `grep "Telusko" file.txt` | Find lines containing "Telusko" (case-sensitive) |
| `grep -i "Telusko" file.txt` | Find lines — **ignore case** (matches Telusko, telusko, TELUSKO) |
| `grep -c -i "Telusko" file.txt` | **Count** how many lines match |
| `grep -v "Telusko" file.txt` | Show lines that **do NOT** contain "Telusko" |
| `grep -n "telusko" file.txt` | Show matching lines with their **line numbers** |

### Examples

```bash
grep "error" app.log             # Find all error lines in a log file
grep -i "warning" app.log        # Case-insensitive search for warnings
grep -n "404" access.log         # Show which line numbers have 404 errors
grep -v "success" result.txt     # Show all lines except successful ones
```

---

## 9. Linux Pipes (`|`)

### What is a Pipe?

A **pipe** (`|`) connects two commands — the **output of one command becomes the input of the next**.

```bash
command1 | command2
```

### Examples

```bash
# Show only lines from telusko.txt that contain "telusko"
cat telusko.txt | grep -i "telusko"

# List only .txt files in current directory
ls | grep ".txt"

# Search command history for docker-related commands
history | grep "docker"

# Count how many lines match "telusko" in the file
cat telusko.txt | grep -i "telusko" | wc -l
# Output: 6

# List only .js files
ls | grep ".js"
```

> 💡 You can chain **multiple pipes** together for powerful one-liners!

---

## 10. `find` & `locate` Commands

### `find` — Search Files in Real Time

> `find` searches the actual file system in real time. Always accurate but slightly slower.

### Syntax

```bash
find <where_to_search> <options>
```

### Common Examples

```bash
# Find a specific file by name in current directory
find . -name "ci.txt"

# Find all .txt files
find . -name "*.txt"

# Find all .txt files inside /home
find /home -name "*.txt"

# Find only directories
find . -type d

# Find only files
find . -type f

# Find empty directories
find . -type d -empty

# Find empty files
find . -type f -empty

# Combine find with grep
find . -name "*.txt" | grep "ci"
```

---

### `locate` — Fast File Search

> `locate` uses a **pre-built database** to search — much faster than `find`, but may show outdated results.

```bash
# First, update the database (run this before using locate)
sudo updatedb

# Search for a file
locate exception.txt

# Count how many matches found
locate -c exception.txt
```

### `find` vs `locate` — Which to Use?

| | `find` | `locate` |
| --- | --- | --- |
| **Speed** | Slower | Faster ⚡ |
| **Accuracy** | Real-time ✅ | May be outdated |
| **Use When** | Need guaranteed current results | Quick system-wide search |

---

## 🗺️ Quick Reference Cheat Sheet

```bash
# Navigation
pwd | mkdir <dir> | cd <dir> | cd .. | touch <file>

# List
ls -l | ls -lh | ls -lt | ls -ltr

# Delete
rm <file> | rm -rf <dir> | rm *.txt

# View Content
cat <file> | head <file> | tail <file> | cat -n <file>

# Edit
vi <file>   →   i (insert)   →   Esc   →   :wq (save & quit)

# Search in file
grep "pattern" file | grep -i | grep -n | grep -v | grep -c

# Pipe
cmd1 | cmd2 | cmd3

# Find files
find . -name "*.txt" | find . -type f | find . -type d -empty
locate <filename>
```

---

*Notes prepared for DevOps learning. Keep practising on a Linux terminal — the best way to learn is by doing! 🚀*
