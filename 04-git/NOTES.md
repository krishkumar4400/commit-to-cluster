# Git & GitHub – Complete Revision Notes

> A practical handbook for learning, revising, and practicing Git and GitHub commands.
>
> **Environment:** Git Bash / Linux / macOS (Windows alternatives mentioned wherever relevant).

---

# Table of Contents

1. Introduction to Git and GitHub
2. Git Installation and Configuration
3. Initializing a Git Repository
4. Git Working Areas and Lifecycle
5. Adding and Committing Changes
6. Viewing Commit History
7. Comparing Changes – Git Diff
8. Removing Files and Untracking Files
9. Git Ignore – `.gitignore`
10. SSH Authentication with GitHub
11. Git Tags and Releases
12. Branching in Git
13. Switching Between Branches
14. Merging Branches
15. Pulling and Pushing Changes
16. Detached HEAD State
17. Git Stash
18. Undoing Changes
19. Handling Merge Conflicts
20. Useful Git Commands
21. Common Git Workflows
22. Important Git Best Practices
23. Hands-on Practice Tasks
24. Quick Revision Cheat Sheet

---

# 1. Introduction to Git and GitHub

## What is Git?

Git is a distributed version control system (VCS) used to track changes in source code and manage different versions of a project.

It helps developers maintain project history, collaborate with other developers, and restore previous versions of their code.

### Why do we use Git?

- Track changes made to source code.
- Maintain different versions of a project.
- Restore previous versions when something breaks.
- Work on multiple features simultaneously using branches.
- Collaborate with other developers.
- Maintain a complete history of project development.

## What is GitHub?

GitHub is a cloud-based platform that hosts Git repositories.

It provides additional collaboration features such as:

- Remote repository hosting.
- Pull requests.
- Code reviews.
- Issues and project management.
- GitHub Actions for CI/CD.
- Release management.
- Repository access management.

## Git vs GitHub

| Git | GitHub |
| --- | --- |
| Version control system | Cloud-based development platform |
| Installed locally | Accessed through the internet |
| Tracks code changes | Hosts Git repositories |
| Works offline | Requires internet for remote operations |
| Command-line tool | Web interface and Git integration |

**Remember:** Git is the tool; GitHub is one platform where you can host Git repositories.

---

# 2. Git Installation and Configuration

## 2.1 Check Git Version

**Command:**

```bash
git --version
```

**Explanation:**

Displays the currently installed Git version.

## 2.2 Configure Username

```bash
git config --global user.name "Your Name"
```

Sets your Git username globally.

## 2.3 Configure Email

```bash
git config --global user.email "your@email.com"
```

Sets your Git email globally.

**Important:** The username and email are recorded in your commits. They are not the same as your GitHub login credentials.

## 2.4 View Git Configuration

```bash
git config --list
```

Displays the currently available Git configuration.

## 2.5 View a Specific Configuration

```bash
git config user.name
git config user.email
```

## 2.6 Edit Git Configuration

```bash
git config --global --edit
```

Opens the global Git configuration file in your configured editor.

## 2.7 Configuration Levels

Git supports three main configuration levels:

| Level | Command | Scope |
| --- | --- | --- |
| System | `--system` | Entire machine |
| Global | `--global` | Current operating-system user |
| Local | `--local` | Current repository |

**Priority:** Local configuration overrides global configuration, which overrides system configuration.

---

# 3. Initializing a Git Repository

## 3.1 git init

```bash
git init
```

**Explanation:**

Initializes a new Git repository in the current directory.

It creates a hidden `.git` directory that stores repository metadata, commits, branches, configuration, and other Git information.

**Example:**

```bash
mkdir my-project
cd my-project
git init
```

Now your project is a Git repository.

## 3.2 Initialize with the Main Branch

```bash
git init -b main
```

**Explanation:**

Initializes a new Git repository and creates its initial branch with the name `main`.

Without `-b main`, the default initial branch name depends on your Git configuration.

**Difference:**

```bash
git init
```

Initializes a repository using the configured default branch name.

```bash
git init -b main
```

Explicitly initializes the repository with `main` as its initial branch.

## 3.3 Check Repository Status

```bash
git status
```

Displays the current state of your working directory and staging area.

It tells you:

- Which files are modified.
- Which files are untracked.
- Which files are staged.
- Whether your branch is ahead or behind its remote counterpart.

**Tip:** `git status` is one of the most frequently used Git commands.

---

# 4. Git Working Areas and Lifecycle

Before learning Git commands, understand the three important working areas.

## 4.1 Three Main Areas

### 1. Working Directory

The actual project directory where you create, edit, and delete files.

### 2. Staging Area (Index)

An intermediate area where you prepare changes before committing them.

### 3. Local Repository

Stores committed snapshots of your project and their history.

## 4.2 Git Workflow

```text
        Working Directory
                |
                | git add
                v
          Staging Area
                |
                | git commit
                v
         Local Repository
                |
                | git push
                v
         Remote Repository
              (GitHub)
```

## 4.3 Git File States

| State | Meaning |
| --- | --- |
| Untracked | Git is not tracking the file yet |
| Modified | A tracked file has been changed |
| Staged | Changes are prepared for the next commit |
| Committed | Changes are saved in repository history |

**Important:** A newly created file is generally untracked until you add it to Git.

---

# 5. Adding and Committing Changes

## 5.1 git add

```bash
git add filename
```

Adds a specific file to the staging area.

**Example:**

```bash
git add FirstCode.txt
```

Stages `FirstCode.txt` for the next commit.

### Add Multiple Files

```bash
git add file1.txt file2.txt
```

### Add All Changes

```bash
git add .
```

Stages new, modified, and deleted files under the current directory.

**Important:** `git add .` does not automatically commit anything. It only stages changes.

## 5.2 git commit

```bash
git commit -m "Commit message"
```

Creates a commit containing the changes currently staged in the index.

**Example:**

```bash
git add FirstCode.txt
git commit -m "My first commit"
```

### What is a Commit?

A commit is a snapshot of your project at a particular point in time.

Every commit has:

- Unique commit hash (SHA).
- Author information.
- Commit timestamp.
- Commit message.
- References to its parent commit(s), where applicable.
- Project snapshot.

## 5.3 git commit -a

```bash
git commit -a -m "My third commit"
```

**Explanation:**

Automatically stages modifications and deletions of already tracked files and commits them.

**Important limitation:**

It does not include newly created untracked files.

Example:

Suppose you have:

- `app.js` – already tracked and modified.
- `newfile.js` – newly created and untracked.

Running:

```bash
git commit -a -m "Update files"
```

Will include changes to `app.js`, but not `newfile.js`.

For new files, use:

```bash
git add newfile.js
git commit -m "Add new file"
```

**Best practice:** Explicitly stage your changes when you want control over exactly what goes into a commit.

## 5.4 git commit -am

```bash
git commit -am "Update application"
```

A shorter form of:

```bash
git commit -a -m "Update application"
```

---

# 6. Viewing Commit History

## 6.1 git log

```bash
git log
```

Displays the commit history of the current branch.

It shows:

- Commit hash.
- Author.
- Date.
- Commit message.

## 6.2 Compact Commit History

```bash
git log --oneline
```

Displays each commit in a compact single-line format.

Example:

```text
a123456 Add authentication
b234567 Update homepage
c345678 Initial commit
```

## 6.3 Visual Commit History

```bash
git log --graph
```

Displays the commit history as a graph, showing branch and merge relationships.

## 6.4 All Branches Commit History

```bash
git log --all --graph --oneline
```

Displays a compact graphical history across all reachable branches.

This is especially useful when working with multiple branches.

## 6.5 Show a Particular Commit

```bash
git show <commit-hash>
```

Displays information about a particular commit, including its changes.

Example:

```bash
git show a123456
```

## 6.6 Limit Commit History

```bash
git log -5
```

Displays the latest five commits.

---

# 7. Comparing Changes – Git Diff

`git diff` is used to compare changes between different Git states.

## 7.1 git diff

```bash
git diff
```

Shows differences between the working directory and the staging area.

In simple terms, it shows changes that you have made but have not staged yet.

**Example:**

1. Modify `app.js`.
2. Run `git diff`.
3. Git displays the modifications.

## 7.2 git diff --staged

```bash
git diff --staged
```

Displays differences between the staging area and the latest commit (`HEAD`).

It helps you review what will be included in your next commit.

**Example workflow:**

```bash
git add app.js
git diff --staged
git commit -m "Update application"
```

## 7.3 Compare Two Commits

```bash
git diff commit1 commit2
```

Compares the project snapshots represented by two commits.

## 7.4 Compare Two Branches

```bash
git diff main feature1
```

Displays the differences between the tips of `main` and `feature1`.

## 7.5 Quick Difference

```bash
git diff --stat
```

Displays a summary of changed files and the number of insertions and deletions.

### Difference Between Common Diff Commands

| Command | What it compares |
| --- | --- |
| `git diff` | Working directory vs staging area |
| `git diff --staged` | Staging area vs latest commit |
| `git diff HEAD` | Working directory + staging area vs HEAD |
| `git diff main feature1` | Two branch tips |

---

# 8. Removing Files and Untracking Files

## 8.1 git rm

```bash
git rm filename
```

Removes a file from the working directory and stages its deletion.

Example:

```bash
git rm oldfile.txt
```

## 8.2 git rm --cached

```bash
git rm --cached filename
```

Removes a file from Git tracking but keeps the file in your local working directory.

**Example:**

```bash
git rm --cached credentials.txt
```

This is useful when you accidentally added a file to Git but do not want it tracked anymore.

Your local `credentials.txt` remains available, but Git stages its removal from the repository.

### Windows PowerShell Example

Your original command:

```powershell
git rm --cached .\credentials.txt
```

This is also valid in PowerShell.

### Important Security Warning

If you have already committed or pushed credentials, running `git rm --cached` does not remove them from previous commits.

You should:

1. Revoke or rotate the exposed credentials immediately.
2. Remove the file from future tracking.
3. Add it to `.gitignore`.
4. Consider history rewriting if the sensitive data must be removed from repository history.

Never assume that deleting a file from the latest commit makes an exposed secret safe.

---

# 9. Git Ignore – .gitignore

## What is .gitignore?

`.gitignore` is a configuration file that tells Git which untracked files and directories it should ignore.

It is commonly used for:

- Environment variables.
- Dependencies.
- Build files.
- Logs.
- Temporary files.
- IDE configuration.

## Create a .gitignore File

```bash
touch .gitignore
```

## Example .gitignore

```gitignore
# Environment variables
.env
.env.local
.env.production

# Node dependencies
node_modules/

# Build output
dist/
build/

# Logs
*.log

# IDE files
.vscode/

# Operating system files
.DS_Store
Thumbs.db
```

## Important Points

1. `.gitignore` does not automatically untrack files that Git already tracks.
2. Add `.gitignore` before staging sensitive or unnecessary files.
3. For already tracked files, use `git rm --cached`.
4. Never commit private API keys, passwords, or database credentials.

---

# 10. SSH Authentication with GitHub

## 10.1 What is SSH?

SSH stands for Secure Shell.

It provides an encrypted way to authenticate and communicate with remote systems.

GitHub supports SSH authentication so that you can push and pull repositories without entering your username and password for every operation.

## 10.2 Generate an SSH Key

**Recommended command:**

```bash
ssh-keygen -t ed25519 -C "your@email.com"
```

Explanation:

- `ssh-keygen`: Utility used to generate SSH keys.
- `-t ed25519`: Specifies the Ed25519 key algorithm.
- `-C`: Adds a comment, commonly your email address.

Your original command:

```bash
ssh-keygen -o
```

This is an older, incomplete approach for modern SSH key generation. Prefer the explicit Ed25519 command above.

## 10.3 Where Are SSH Keys Stored?

On Linux, macOS, and Git Bash, the default directory is:

```bash
~/.ssh/
```

Common files:

```text
.ssh/
    id_ed25519
    id_ed25519.pub
```

| File | Purpose |
| --- | --- |
| `id_ed25519` | Private key |
| `id_ed25519.pub` | Public key |

**Never share your private key.**

## 10.4 Navigate to SSH Directory

```bash
cd ~/.ssh
```

Your original commands:

```bash
cd
cd .ssh
```

Also work in Git Bash when your home directory contains the `.ssh` directory.

## 10.5 Display Public Key

```bash
cat ~/.ssh/id_ed25519.pub
```

Copies the public key text visually to your terminal so you can copy it.

In PowerShell:

```powershell
Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub
```

## 10.6 Add SSH Key to GitHub

Steps:

1. Log in to GitHub.
2. Open Settings.
3. Navigate to SSH and GPG keys.
4. Click New SSH key.
5. Enter a descriptive title.
6. Paste the contents of `id_ed25519.pub`.
7. Save the key.

**Important clarification:** Add your SSH public key under GitHub's **SSH and GPG keys** settings, not under repository Actions secrets.

GitHub Actions secrets are a separate feature used to store credentials for automated workflows.

## 10.7 Test SSH Connection

```bash
ssh -T git@github.com
```

If authentication succeeds, GitHub displays a welcome message.

## 10.8 Clone Repository Using SSH

```bash
git clone git@github.com:username/repository.git
```

## 10.9 Change Remote from HTTPS to SSH

```bash
git remote set-url origin git@github.com:username/repository.git
```

Check the remote:

```bash
git remote -v
```

---

# 11. Git Tags and Releases

## What is a Git Tag?

A Git tag is a reference that points to a specific commit.

Tags are commonly used to mark important versions of software.

Examples:

- v1.0
- v1.1
- v2.0
- v2.0.1

## 11.1 List All Tags

```bash
git tag
```

Displays all tags in the local repository.

## 11.2 Create a Lightweight Tag

```bash
git tag v1.0
```

Creates a lightweight tag pointing to the current commit.

## 11.3 Create an Annotated Tag

```bash
git tag -a v1.0 -m "First release"
```

Creates an annotated tag with a message.

An annotated tag stores additional metadata such as:

- Tagger name.
- Tagger email.
- Tag creation date.
- Tag message.

**Best practice:** Use annotated tags for release versions.

## 11.4 View Tag Details

```bash
git show v1.0
```

Displays the tag information and the associated commit.

## 11.5 Push a Particular Tag to GitHub

```bash
git push origin v1.0
```

Pushes the specified tag to the remote repository.

## 11.6 Push All Tags

```bash
git push origin --tags
```

Pushes all local tags that are not already present on the remote.

## 11.7 Delete a Local Tag

```bash
git tag -d v1.0
```

## 11.8 Delete a Remote Tag

```bash
git push origin --delete v1.0
```

**Remember:** Creating a tag locally does not automatically publish it to GitHub.

---

# 12. Branching in Git

## What is a Branch?

A branch is a movable reference to a commit.

Branches allow developers to work on different features independently without directly changing the main development branch.

### Why use branches?

- Develop new features independently.
- Fix bugs without disturbing the main code.
- Experiment with new implementations.
- Collaborate with team members.
- Merge completed features into the main branch.

### Example

Suppose your project has:

```text
main
 |
 |---- feature-login
 |
 |---- feature-payment
 |
 |---- bug-fix
```

Each branch can contain its own development work.

## 12.1 List Local Branches

```bash
git branch
```

Displays all local branches.

The current branch is marked with `*`.

## 12.2 Create a New Branch

```bash
git branch feature1
```

Creates a new branch named `feature1`.

**Important:** This command does not switch you to the newly created branch.

## 12.3 Create and Switch to a New Branch

Using checkout:

```bash
git checkout -b feature1
```

Using switch:

```bash
git switch -c feature2
```

Both commands create a branch and switch to it.

**Recommendation:** Prefer `git switch` for branch switching because it has a more focused purpose.

## 12.4 List All Branches

```bash
git branch --all
```

Displays local and remote-tracking branches.

Example:

```text
* main
  feature1
  feature2
  remotes/origin/main
  remotes/origin/feature1
```

## 12.5 Delete a Local Branch

```bash
git branch -d feature2
```

Deletes a branch if Git considers it safely merged.

## 12.6 Force Delete a Branch

```bash
git branch -D feature2
```

Deletes a branch even if its changes have not been merged.

**Warning:** You can lose access to unmerged work if you delete the branch and no other reference preserves those commits.

## 12.7 Rename a Branch

```bash
git branch -m old-name new-name
```

If you are currently on the branch:

```bash
git branch -m new-name
```

## 12.8 Switch Between Branches

```bash
git switch feature1
```

Switches to `feature1`.

```bash
git switch main
```

Switches back to `main`.

## 12.9 Switch to the Previous Branch

```bash
git switch -
```

Switches to the branch you were previously on.

Example:

```bash
git switch main
git switch feature1
git switch -
```

The final command takes you back to `main`.

## 12.10 Create a Remote Branch

First create and switch to a local branch:

```bash
git switch -c feature1
```

Push it to GitHub:

```bash
git push -u origin feature1
```

The `-u` flag sets the upstream tracking branch.

After that, you can generally use:

```bash
git push
git pull
```

without specifying the remote and branch every time.

---

# 13. Switching Between Branches

## git switch vs git checkout

Both commands can switch branches, but their intended use differs.

### Using git checkout

```bash
git checkout main
```

Switches to the `main` branch.

### Using git switch

```bash
git switch main
```

Also switches to the `main` branch.

### Main Difference

| git checkout | git switch |
| --- | --- |
| Older, versatile command | Newer, focused command |
| Switches branches | Switches branches |
| Can restore files | Does not restore files |
| Can enter detached HEAD state | Can also enter detached HEAD state |

**Recommendation:** Use:

- `git switch` for switching branches.
- `git restore` for restoring files.
- `git checkout` when working with older tutorials or commands that require it.

---

# 14. Merging Branches

## What is Git Merge?

Git merge combines the changes from one branch into another branch.

It is commonly used when a feature is completed and needs to be integrated into the main branch.

## 14.1 Basic Merge Workflow

Suppose you are working on `feature1` and want to merge it into `main`.

### Step 1: Switch to main

```bash
git switch main
```

### Step 2: Merge feature1

```bash
git merge feature1
```

This merges `feature1` into the currently checked-out branch, which is `main`.

### Step 3: Verify History

```bash
git log --graph --oneline --all
```

### Step 4: Push Changes

```bash
git push origin main
```

## 14.2 Important Rule

The branch you are currently on is the destination branch.

Example:

```bash
git switch main
git merge feature1
```

Means:

```text
feature1 ----\
              \
               main (updated)
```

It does not mean that `main` is merged into `feature1`.

## 14.3 Fast-Forward Merge

A fast-forward merge happens when the destination branch has not diverged from the source branch.

Git simply moves the destination branch pointer forward.

## 14.4 Three-Way Merge

A three-way merge happens when the branches have diverged.

Git uses:

1. The common ancestor.
2. The latest commit of the current branch.
3. The latest commit of the branch being merged.

Git combines their changes and may create a merge commit.

## 14.5 Merge Example with Two Feature Branches

```bash
git switch main
git merge feature1
git merge feature2
git push origin main
```

This assumes both feature branches exist and their changes can be merged.

## 14.6 Delete a Merged Branch

```bash
git branch -d feature1
```

Once a feature is merged and no longer needed, you can delete its local branch.

---

# 15. Pulling and Pushing Changes

## What is a Remote Repository?

A remote repository is a version of your Git repository hosted somewhere else, such as GitHub.

The default remote name is usually `origin`.

## 15.1 Check Remote Repository

```bash
git remote -v
```

Displays the configured remote repository URLs.

## 15.2 Add Remote Repository

```bash
git remote add origin https://github.com/username/repository.git
```

Connects your local repository to a remote repository named `origin`.

## 15.3 Push Changes

```bash
git push origin main
```

Pushes local commits from the `main` branch to the remote `main` branch.

## 15.4 Pull Changes

```bash
git pull origin main
```

Fetches updates from the remote `main` branch and integrates them into your current branch.

**Important:** The command does not automatically switch your current branch to `main`.

For example, if you are currently on `feature1`, this command integrates the remote `main` changes into `feature1`.

## 15.5 Push a New Branch

```bash
git push origin feature1
```

Pushes the local `feature1` branch to GitHub.

Recommended first push:

```bash
git push -u origin feature1
```

## 15.6 Fetch Changes

```bash
git fetch origin
```

Downloads new commits and references from the remote repository without merging them into your current branch.

## 15.7 Fetch vs Pull

| git fetch | git pull |
| --- | --- |
| Downloads remote changes | Downloads and integrates remote changes |
| Does not change current branch contents | May update current branch |
| Safer for inspecting changes first | Convenient for routine updates |

### Recommended Workflow

```bash
git fetch origin
git log --oneline HEAD..origin/main
git merge origin/main
```

This allows you to inspect incoming commits before merging them.

---

# 16. Detached HEAD State

## What is HEAD?

`HEAD` is a reference that identifies the commit or branch checkout you currently have.

Normally, `HEAD` points to the current branch.

Example:

```text
HEAD -> main -> Commit C
```

## What is Detached HEAD?

Detached HEAD occurs when you check out a specific commit instead of checking out a branch.

Your original command:

```bash
git checkout 4253a52520f27f5c053ceea729aeaac433689134
```

This checks out the specific commit.

You can also use:

```bash
git switch --detach 4253a52520f27f5c053ceea729aeaac433689134
```

### What Happens?

You are no longer working on a named branch.

You can inspect old code, test something, and even create commits.

However, if you create commits in detached HEAD and switch away without creating a branch, those commits may eventually become difficult to recover.

## Create a Branch from a Specific Commit

Your original workflow:

```bash
git checkout 4253a52520f27f5c053ceea729aeaac433689134

# Make some changes

git add .
git commit -m "Create lite version"

git checkout -b liteversion
```

This works, but the new branch is created after the commit.

A cleaner approach is to create the branch immediately from the desired commit:

```bash
git switch -c lite-version 4253a52520f27f5c053ceea729aeaac433689134
```

Now you are on `lite-version`.

Make changes:

```bash
git add .
git commit -m "Create lite version"
```

Push:

```bash
git push -u origin lite-version
```

**Important:** Your original notes used both `liteversion` and `lite-version`. These are different branch names. Keep the spelling consistent.

## When is Detached HEAD Useful?

- Inspecting previous versions.
- Testing old commits.
- Debugging historical issues.
- Comparing different versions of a project.

**Best practice:** Create a branch before making work that you want to preserve.

---

# 17. Git Stash

## What is Git Stash?

Git stash temporarily saves changes in your working directory so that you can work on something else without committing unfinished changes.

It is useful when you need to switch branches but are not ready to commit your current work.

## 17.1 Stash Changes

```bash
git stash
```

Saves tracked modifications and staged changes and restores the working tree to a clean state.

## 17.2 Stash with a Message

```bash
git stash push -m "Work in progress"
```

Saves changes with a descriptive message.

## 17.3 View Stash List

```bash
git stash list
```

Displays all saved stash entries.

Example:

```text
stash@{0}: On main: Work in progress
stash@{1}: On feature1: Fix login UI
```

## 17.4 Apply Latest Stash

```bash
git stash apply
```

Restores the latest stash but keeps it in the stash list.

## 17.5 Apply a Specific Stash

```bash
git stash apply stash@{1}
```

Applies the specified stash entry.

## 17.6 Apply and Remove Stash

```bash
git stash pop
```

Applies the latest stash and removes that stash entry if the application succeeds.

## 17.7 Delete a Stash

```bash
git stash drop stash@{0}
```

Removes the specified stash entry.

## 17.8 Delete All Stashes

```bash
git stash clear
```

Removes all stash entries.

**Warning:** This is destructive. Use it carefully.

## 17.9 Stash Untracked Files

By default, untracked files are not included in a normal stash.

To include them:

```bash
git stash -u
```

To include even ignored files:

```bash
git stash -a
```

### Complete Stash Workflow

```bash
# Make some changes

git stash push -m "Incomplete login feature"

# Switch to another branch
git switch main

# Complete other work

# Return to your previous branch
git switch feature1

# Restore your changes
git stash pop
```

---

# 18. Undoing Changes

Understanding how to undo changes is extremely important.

## 18.1 Discard Changes in a File

```bash
git restore filename
```

Restores the file to its index version, discarding unstaged working-directory changes.

Example:

```bash
git restore app.js
```

**Warning:** Uncommitted changes discarded this way are generally lost.

## 18.2 Unstage a File

```bash
git restore --staged filename
```

Removes a file from the staging area without discarding the changes in your working directory.

## 18.3 Undo the Latest Commit but Keep Changes

```bash
git reset --soft HEAD~1
```

Moves the current branch back by one commit while keeping the changes staged.

## 18.4 Undo the Latest Commit and Unstage Changes

```bash
git reset HEAD~1
```

Equivalent to:

```bash
git reset --mixed HEAD~1
```

Moves the current branch back by one commit and leaves the changes in the working directory, unstaged.

## 18.5 Permanently Discard the Latest Commit and Changes

```bash
git reset --hard HEAD~1
```

Moves the branch back by one commit and resets both the staging area and working directory.

**Warning:** This can permanently discard uncommitted work and should be used carefully.

## 18.6 Revert a Commit

```bash
git revert <commit-hash>
```

Creates a new commit that reverses the changes introduced by a specified commit.

### Reset vs Revert

| git reset | git revert |
| --- | --- |
| Moves branch history backward | Creates a new reversing commit |
| Can rewrite local history | Preserves existing history |
| Can be destructive | Generally safer for shared history |
| Useful for local corrections | Useful for undoing pushed commits |

**Best practice:** Prefer `git revert` when undoing changes that have already been shared with other developers.

---

# 19. Handling Merge Conflicts

## What is a Merge Conflict?

A merge conflict occurs when Git cannot automatically combine changes from different branches.

A common example is when two developers modify the same lines of the same file.

## Example

Suppose `main` contains:

```javascript
const message = "Hello";
```

And `feature1` contains:

```javascript
const message = "Hello World";
```

If Git cannot determine which version should be retained, it reports a conflict.

## Conflict Markers

Git may display:

```text
<<<<<<< HEAD
const message = "Hello";
=======
const message = "Hello World";
>>>>>>> feature1
```

Meaning:

- `<<<<<<< HEAD`: Start of the current branch's changes.
- `=======`: Separates the two versions.
- `>>>>>>> feature1`: End of the incoming branch's changes.

## How to Resolve a Merge Conflict

### Step 1: Identify Conflicted Files

```bash
git status
```

### Step 2: Open the Conflicted Files

Choose the correct code or combine both changes manually.

Remove the conflict markers.

### Step 3: Stage Resolved Files

```bash
git add filename
```

### Step 4: Complete the Merge

```bash
git commit
```

Git may automatically prepare a merge commit message.

### Step 5: Push Changes

```bash
git push origin main
```

**Important:** If you want to cancel a merge that is currently in progress:

```bash
git merge --abort
```

---

# 20. Useful Git Commands

## Repository Information

| Command | Purpose |
| --- | --- |
| `git status` | Check repository status |
| `git log` | View commit history |
| `git log --oneline` | Compact commit history |
| `git show` | Show commit details |
| `git diff` | View unstaged changes |
| `git diff --staged` | View staged changes |

## Branch Management

| Command | Purpose |
| --- | --- |
| `git branch` | List local branches |
| `git branch -a` | List local and remote-tracking branches |
| `git branch -d name` | Delete a merged branch |
| `git branch -D name` | Force delete a branch |
| `git branch -m name` | Rename current branch |
| `git switch name` | Switch branches |
| `git switch -c name` | Create and switch branches |

## Remote Management

| Command | Purpose |
| --- | --- |
| `git remote -v` | View remote URLs |
| `git remote add origin URL` | Add remote |
| `git remote remove origin` | Remove remote |
| `git remote set-url origin URL` | Change remote URL |
| `git fetch origin` | Fetch remote updates |
| `git pull origin main` | Pull remote main |
| `git push origin main` | Push local main |

## File Management

| Command | Purpose |
| --- | --- |
| `git add filename` | Stage a file |
| `git add .` | Stage changes under current directory |
| `git rm filename` | Remove and stage deletion |
| `git rm --cached filename` | Untrack file but keep locally |
| `git restore filename` | Discard unstaged changes |
| `git restore --staged filename` | Unstage a file |

---

# 21. Common Git Workflows

## 21.1 Starting a New Project

```bash
mkdir my-project
cd my-project

git init -b main

# Create project files

git status
git add .
git commit -m "Initial commit"
```

## 21.2 Connecting a Local Repository to GitHub

```bash
git remote add origin https://github.com/username/repository.git

git branch -M main

git push -u origin main
```

Alternatively, use an SSH remote URL if you have configured SSH authentication.

## 21.3 Working on a New Feature

```bash
git switch -c feature-login

# Make changes

git status
git add .
git diff --staged
git commit -m "Add login functionality"

git push -u origin feature-login
```

## 21.4 Merging a Feature into Main

```bash
git switch main

git pull origin main

git merge feature-login

git push origin main
```

Once the merge is complete:

```bash
git branch -d feature-login
```

## 21.5 Updating Your Feature Branch with Main

```bash
git switch main
git pull origin main

git switch feature-login
git merge main
```

This incorporates the latest local `main` changes into your feature branch.

## 21.6 Creating a Release

```bash
git switch main

git tag -a v1.0 -m "First stable release"

git push origin main
git push origin v1.0
```

## 21.7 Temporarily Switching Tasks

```bash
git stash push -m "Current unfinished work"

git switch main

# Perform another task

git switch feature-login

git stash pop
```

---

# 22. Important Git Best Practices

1. **Write meaningful commit messages.**

   Good:

   ```bash
   git commit -m "Add JWT authentication"
   ```

   Avoid:

   ```bash
   git commit -m "changes"
   ```

2. **Commit frequently.** Small, meaningful commits make debugging and reviewing easier.

3. **Create separate branches for features and bug fixes.**

4. **Pull or fetch remote changes regularly** to avoid unnecessary integration problems.

5. **Review changes before committing.**

   ```bash
   git status
   git diff
   git diff --staged
   ```

6. **Never commit secrets.** Use `.env` files and environment variables.

7. **Maintain a proper `.gitignore` file.**

8. **Avoid force-pushing to shared branches.**

9. **Prefer pull requests for team collaboration.**

10. **Use annotated tags for software releases.**

11. **Understand the difference between local branches and remote-tracking branches.**

12. **Do not use `git reset --hard` casually.** It can destroy uncommitted work.

---

# 23. Hands-on Practice Tasks

The best way to master Git is to use it in real projects. Complete these exercises in order.

## Level 1 – Git Basics

- [ ] Install Git and configure your username and email.
- [ ] Create a new project directory.
- [ ] Initialize Git using `git init -b main`.
- [ ] Create `index.html`.
- [ ] Stage the file using `git add`.
- [ ] Create your first commit.
- [ ] View the commit history using `git log`.
- [ ] Modify the file and inspect changes using `git diff`.
- [ ] Stage changes and inspect using `git diff --staged`.
- [ ] Commit the changes.

## Level 2 – Git Branching

- [ ] Create a `feature-login` branch.
- [ ] Create a `feature-dashboard` branch.
- [ ] Switch between branches.
- [ ] Make different changes in each branch.
- [ ] View all branches using `git branch --all`.
- [ ] Merge both feature branches into `main`.
- [ ] Delete merged branches.
- [ ] Inspect the history using `git log --graph --oneline --all`.

## Level 3 – GitHub Integration

- [ ] Create a GitHub account.
- [ ] Create a new repository.
- [ ] Configure SSH authentication.
- [ ] Connect your local repository to GitHub.
- [ ] Push your main branch.
- [ ] Create a new feature branch.
- [ ] Push your feature branch.
- [ ] Create a Pull Request on GitHub.
- [ ] Merge the Pull Request.
- [ ] Pull the latest changes locally.

## Level 4 – Advanced Git

- [ ] Create an annotated tag named `v1.0`.
- [ ] Push the tag to GitHub.
- [ ] Create a detached HEAD state.
- [ ] Create a branch from an older commit.
- [ ] Practice `git stash`.
- [ ] Practice `git stash pop`.
- [ ] Practice `git reset --soft`.
- [ ] Practice `git revert`.
- [ ] Intentionally create a merge conflict.
- [ ] Resolve the merge conflict.
- [ ] Inspect the final commit history.

---

# 24. Quick Revision Cheat Sheet

## Initialize and Configure

```bash
git init
git init -b main
git --version
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

## Add and Commit

```bash
git add filename
git add .
git commit -m "message"
git commit -am "message"
```

## History and Differences

```bash
git status
git log
git log --oneline
git log --graph --oneline --all
git show <commit-hash>
git diff
git diff --staged
```

## Branching

```bash
git branch
git branch --all
git branch feature1
git switch feature1
git switch -c feature2
git switch -
git branch -d feature1
git branch -D feature1
```

## Merge and Remote

```bash
git merge feature1
git remote -v
git remote add origin <URL>
git fetch origin
git pull origin main
git push origin main
git push -u origin feature1
```

## Tags

```bash
git tag
git tag v1.0
git tag -a v1.0 -m "First release"
git show v1.0
git push origin v1.0
git push origin --tags
```

## Stash

```bash
git stash
git stash list
git stash apply
git stash pop
git stash drop
git stash clear
```

## Undo Changes

```bash
git restore filename
git restore --staged filename
git reset --soft HEAD~1
git reset --mixed HEAD~1
git reset --hard HEAD~1
git revert <commit-hash>
```

## SSH

```bash
ssh-keygen -t ed25519 -C "your@email.com"
cd ~/.ssh
cat id_ed25519.pub
ssh -T git@github.com
```

---

# Final Revision Checklist

Before considering yourself comfortable with Git and GitHub, make sure you can independently:

- Explain Git vs GitHub.
- Explain the working directory, staging area, and repository.
- Initialize and configure repositories.
- Stage and commit changes.
- Inspect differences between Git states.
- Manage branches and merge them.
- Connect local repositories to GitHub.
- Push, pull, and fetch changes.
- Configure SSH authentication.
- Create and push tags.
- Work with detached HEAD.
- Temporarily save changes using stash.
- Undo commits and file changes safely.
- Resolve merge conflicts.
- Collaborate using GitHub Pull Requests.

**Golden Rule:** Don't just memorize Git commands. Understand the state of your repository before and after executing each command.

That understanding is what makes you comfortable using Git in real-world software development.

---

*End of Git & GitHub Revision Notes.*
