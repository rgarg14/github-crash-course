const age=24;
// to track index.js we have to initialize git
// git init
// there is hidden git file in it which tracks
// to see do ls -la
// U-> is not tracking
// to start tracking we add that in it
// git add index.js
// after git add it moves file to staging area(waiting room for files)
// staging area is like shopping cart and checkout with bill is like git commit
// M-> modified
const name1="riya garg";
const dob="03/10/2005";
function say(){
    console.log("my name is"+name1)
}

const age1=56;
// this green line shows tracking
// git diff shows + sign with lines we added

// its difficult to add each file one by one to add all files in git do
// git add .
// to untrack file like to remove
// git rm <FILE PATH>
// if want to remove file from folder and staging area :
// git rm -f <path>
// if just want to untrack after staging it:
// git rm --cached <path>

// ******** Commit *********
// commit ka user friendly msg hota
// git commit -m " "

// git log ->gives history of commits
// there is id of each commit

function above18(){
    return age>=18
}

// change name with name 1 and do git diff
// we made changes so we will do git add .
// then commit
// if after git diff u get output it means something is uncommitted
// git log --oneline shows recent commits

// git show (gitid) means without brackets show commit changes in that particular commit
// after git show press q to quit the view as git how is read only viewe u cant edit 

// git blame (filename) -> to check which line when and who have changed it.

function newfn(){
    console.log("hy i am new func")
}
function newfeat(){
    console.log("new part");
}

// git status tells files u chnges,ready to be saved,not tracking

// after changes if we commit it will not happen as staging area is empty. so first put those changed files in staging area by git add then commit

// we made changes in utils file by giving a wrong thing like b1 and b as variables but we want revert back so to do this we have to go to previous commit to do that we will do
// git reset --hard (previous commit id)
// it will delete that faulty git and make changes like before that commit

// if we have to remove commit in between may commits without deleting them all we do
// git revert (that commit id)


// when we do git remote -v nothing gets consoled in nature as we dont have remote here(github)


// to add remote git remote add <any name u can give but typically given is origin> (repository url link)
// origin or any name is just a nickname for url

// push our commit to origin branch main as we were on master so we changed our master branch name to main branch by :
// git branch -M (change name)

// git push -u origin main


// ese toh mere server pae koi bhi push krdega changes with url but its not like this.for that we need authentication called SSH key authentication secure shell->so if we generate this no one can access. bcoz it generates two keys :
// 1.Private key
// 2.Public key
// public key we copy it on our account.when we try to push anything with private key it will match with public key.
// account->settings->sshand gpg keys->new ssh key->generating ssh key->mac choose->copy ssh-keygen -t ed25519 -c "email"->paste it on terminal->answers the questions after it.
// after questions do cd ~/.ssh
// then ls if have one pair of ssh keys otherwise do ls | grep id to show files with that id;ls | grep .pub ->show public ssh keys; ls | grep github -> shows files that contain github.
// after that do cat


// if we revert any commit after pushing that we have to push again and to do that we have to do forcefully:
// git push -f to reset head.


// to check current branch-> git branch
// to create brach from head-> git branch "name of branch"
// to go to new branch -> git checkout (branch name)
// to merge new branch into main first we have to do commit then checkout to main branch and then by git:
// git merge origin/(branch name)

// to create new branch and switch to that -> git checkout -b "new branch "