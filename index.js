const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer.prompt([

    {
        type: 'input',
        message: 'Please enter team manager name:',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'Please enter employee ID:',
        name: 'userID',
    },
    {
        type: 'input',
        message: 'Please enter employee email:',
        name: 'userEmail',
    },
    {
        type: 'input',
        message: 'Please enter employee office number:',
        name: 'userNumber',
    },



    //managerquestions
]).then(r => {

    manager = new Manager(r.userName,r.userID,r.userEmail,r.userNumber)
console.log(manager)
teamMembers.push(manager);
    // populate manager info
     promptForNextEmployee ();
})

const promptForNextEmployee = () => {
    inquirer.prompt([

        {
            type: 'checkbox',
            name: 'nextEmployee',
            message: 'Please add new employee:',
            choices: [
              'Add an engineer', 'Add an intern', 'Finish building the team', 
            ],
            
          },



       
    ]).then(response => {

        // get user selection
        let newEmployee = response.nextEmployee[0];
        console.log(newEmployee)
        // process relevant choice
        switch(newEmployee) {
            case "Add an engineer":
                promptForEngineer();
               // console.log("Engineer")
              break;
            case "Add an intern":
                //    promptForIntern
                console.log("intern")
              break;
             
            default:
               //    use the functionality from page-template to generate the team
               console.log("finish")
          } 
        
    })
}

const promptForEngineer = () => {
    inquirer.prompt([

        {
            type: 'input',
            message: 'Please enter engineer name:',
            name: 'userName',
        },
        {
            type: 'input',
            message: 'Please enter employee ID:',
            name: 'userID',
        },
        {
            type: 'input',
            message: 'Please enter employee email:',
            name: 'userEmail',
        },
        {
            type: 'input',
            message: 'Please enter employee GitHub username:',
            name: 'userGitHub',
        },


        //engineer questions
    ]).then(r => {
        // add new engineer to employees array
        const engineer = new Engineer(r.userName,r.userID,r.userEmail,r.userGitHub)
        console.log(engineer)
        teamMembers.push(engineer);
        console.log(teamMembers)
        // promptForNextEmployee
    })
}

const promptForIntern = () => {
    inquirer.prompt([{
        //intern questions
    }]).then(response => {
        // add new intern to employees array
        // promptForNextEmployee
    })
}

const buildPage = () => {

}