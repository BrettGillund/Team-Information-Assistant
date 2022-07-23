const Employee = require("./employee");

class Engineer extends Employee {

    constructor(id, name, email, github) {

        super(id, name, email);
        this.id = id;
        this.name = name;
        this.role = 'Engineer';
        this.email = email;
        this.github = github;
    }

    getGitHub() {
        return this.github
    };
} 

module.exports = Engineer