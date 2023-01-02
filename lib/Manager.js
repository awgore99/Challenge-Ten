const Employee = require("./Employee").default;

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email, school);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager";
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;