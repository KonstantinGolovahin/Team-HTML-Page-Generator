const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name,id, email, role,github);
        this.role = "Engineer"
        this.github = github;
        // and other properties
    }
}

//const eng1 = new Engineer("Danish", "danish@gmail.gov", "danisheng");

module.exports = Engineer;
