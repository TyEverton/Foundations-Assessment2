/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = 'Git is a tool that developers use that allows for better work. Version control, recalls, collaboration.'

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = 'An online repository of a developers work. Great place for version control, collaboration and a great place to display your work.'

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

const init = {
 description: 'Creates a new Git repository. Used to convert existing and unversioned projects to a Git respository or initialize a new, empty repository';
 code: 'git init <insert directory if you choose>';
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

const clone = {
    description: 'Primarily used to point to an existing repo and make a clone or copy of that repo in a new directory, at another location';
    code: 'git clone <insert addess>';
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

const status = {
    description: 'Displays the state of the working directory and the staging area. It lets you see which changes have been staged, which havent and files that are NOT being tracked by Git';
    code: 'git status';
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

const add = {
    description: 'Marks changes to be included in the next commit';
    code: 'git add . OR git add <insert file name>';
}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

const commit = {
    description: 'Captures a snapshot of the projects currently staged changes. ';
    code: 'git commit -m"insert file name"';
}


//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

const push = {
    description: 'Transfers or pushes commits to a remote repository like GitHub';
    code: 'git push "remote_name" "branch_name"';
}