// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");


class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name,id, email, role,github);
        this.role = "Intern"
        this.school = school;
        // and other properties
    }
}












module.exports = Intern;