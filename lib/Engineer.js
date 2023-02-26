const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email,  github) {
        super(name,id, email, github);
        this.github = github;
        // and other properties
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }

}



module.exports = Engineer;
