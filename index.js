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
const name="riya garg";
const dob="03/10/2005";
function say(){
    console.log("my name is"+name)
}
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