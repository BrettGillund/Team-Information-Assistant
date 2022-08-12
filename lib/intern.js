const Employee = require('./employee')

class Intern extends Employee {

    constructor(id, name, email, school) {
        super(id, name, email);
        this.id = id;
        this.name = name;
        this.email = email;
        this.school = school;
    };
    getSchool() {
        return this.school
    };
    getRole() {
        return 'Intern'
    };
}

module.exports = Intern;

// const gandalf = new Intern(1, 'Gandalf', 'thegrey@mordor.edu', 'helmsdeep');

// console.log(gandalf)