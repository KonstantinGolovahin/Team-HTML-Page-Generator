const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// used for writing index.html
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// generates HTML here
const render = require("./src/page-template.js");

// array for storing team members
const teamMembers = [];

// Thanks to https://stackoverflow.com/questions/48944397/repeat-set-of-questions-in-inquirerjs
const questionId = {
    type: 'input',
    message: 'Please enter employee ID:',
    name: 'userID',
}

const questionEmail = {
    type: 'input',
    message: 'Please enter employee email:',
    name: 'userEmail',
}

const questionName = {

    type: 'input',
    message: 'Please enter employee name:',
    name: 'userName',

}

const questionManager = {
    type: 'input',
    message: 'Please enter team manager name:',
    name: 'userName',
}

const questionOffice = {

    type: 'input',
    message: 'Please enter employee office number:',
    name: 'userNumber',
}
const questionGithub = {
    type: 'input',
    message: 'Please enter employee GitHub username:',
    name: 'userGitHub',
}
const questionSchool = {
    type: 'input',
    message: 'Please enter employee school:',
    name: 'userSchool',
}

const questionSelection = {
    type: 'checkbox',
    name: 'nextEmployee',
    message: 'Please add new employee:',
    choices: [
        'Add an engineer', 'Add an intern', 'Finish building the team',
    ],

}

// start with getting a manager
inquirer.prompt([

    questionManager,
    questionId,
    questionEmail,
    questionOffice,

]).then(r => {
    // add new manager
    manager = new Manager(r.userName, r.userID, r.userEmail, r.userNumber)

    teamMembers.push(manager);

    promptForNextEmployee();
})

const promptForNextEmployee = () => {
    inquirer.prompt([

        questionSelection,

    ]).then(response => {

        // get user selection
        let newEmployee = response.nextEmployee[0];
        console.log(newEmployee)
        // process relevant choice
        switch (newEmployee) {
            case "Add an engineer":
                promptForEngineer();

                break;
            case "Add an intern":
                promptForIntern();

                break;

            default:
                // if no new members added              
                buildPage();
        }

    })
}

const promptForEngineer = () => {
    inquirer.prompt([

        questionName,
        questionId,
        questionEmail,
        questionGithub,

    ]).then(r => {
        // add new engineer to employees array
        const engineer = new Engineer(r.userName, r.userID, r.userEmail, r.userGitHub)
        teamMembers.push(engineer);
        promptForNextEmployee();

    })
}

const promptForIntern = () => {
    inquirer.prompt([
        //intern questions
        questionName,
        questionId,
        questionEmail,
        questionSchool,

    ]).then(r => {
        // new intern
        const intern = new Intern(r.userName, r.userID, r.userEmail, r.userSchool)
        teamMembers.push(intern);
        // ask for new team member
        promptForNextEmployee();

    })
}

const buildPage = () => {

    // generate actual HTML page 
    fs.writeFile(outputPath, render(teamMembers), function (err) {
        if (err) throw err;
        console.log('File Saved!');
    });
}

