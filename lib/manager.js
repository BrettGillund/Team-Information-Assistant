const Employee = require('./employee');

class Manager extends Employee {

    constructor(id, name, email, officeNum) {
        super(id, name, email);
        this.id = id;
        this.name = name;
        this.email = email;
        this.officeNum = officeNum;
    };
    getOfficeNum() {
        return this.officeNum
    };
    getRole() {
        return 'Manager'
    };

}


module.exports = Manager;

// const gandalf = new Manager(1, 'Gandalf', 'thegrey@mordor.edu', 'helmsdeep');

// console.log(gandalf)