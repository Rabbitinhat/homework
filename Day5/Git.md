# 👩🏿‍💻 Git Command

[git-the simple guide](https://rogerdudler.github.io/git-guide/)

## create new repository

create a new directory and use the command `git init` to create a new repository

## checkout a repository

get a working copy of a local repository

`git clone /pathTorepository`

get a copy of remote server

`git clone username@host:/path/to/repository(remote reposity link)`

## workflow

> local repository consists of three "tree" maintained by git.
> the first one is your **working Directory**, which hold actual files
> the second one is the **Index** which acts as a staging area
> finally the **HEAD** which points to the last commit you've made.

## add & commit

add changes to the Index

`git add <filename> / *(add whole working Directory)`

commit this changes

`git commit -m "Commit message"`

> now the file is committed to the HEAD

## pushing changes to remote origin

now changes are in the HEAD of local repository, to send them to remote repository

`git push origin <Branchname>`

if I want to connect my local repository and my remote repository

❓ `git remote add origin <server>`

## branching

> Branches are used to develop features isolated from each other. The master branch is the "default" branch when you create a repository. Use other branches for development and merge them back to the master branch upon completion

create a new branch and switch to it using

`git checkout -b <branchname>`

switch back to master branch

`git checkout master`

delete the branch again

`git branch -d <brachname>`

> a branch is not available to others unless you push the branch to your remote repository

`git push origin <branch>`

## update & merge

> update local repository to the newest commit

`git pull`

## log

view the repository history

`git log`

see only commits of a cetain author

`git log --author=<authorname>`

see the compressed log(one line)

`git log --pretty=oneline`