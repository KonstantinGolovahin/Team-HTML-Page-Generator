// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");


class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name,id, email, role,officeNumber);
        this.role = "Manager"
        this.officeNumber = officeNumber;
        // and other properties
    }
}





module.exports = Manager;