// questions : 
    //Can we use a CSS template (materialize) for the HTML in this project?
    //Do we need to make seperate propts 

// Things that need to be included in this command line applicatoin:

// 1. List prompt with selectable team members.

// 2. When chosen an HTML file is created that desplays a nicely formated team roser based on user input.

// 3. When an email address is clicked in the HTML default email application is opened and the email populates the TO field with team members inforamtion. 

// 4. When a githib address is clicked in the HTML default team members github is opened in a new tab. 

// 5. when application is launched user is promped to provide team manager's NAME, EMPLOYEE ID, EMAIL ADDRESS, AND OFFICE NUMBER.

// 6. when user is presented with a menu with options to add an engineer or an intern or to finish building team.

// 7. when engineer is selected user is prompted to enter the engineer’s name, ID, email, and GitHub username, and then is redirected to the main menu.

// 8. when intern is selected user is prompted to enter the intern’s name, ID, email, and school, and then is redirected to the main menu.

// 9. when finish building my team is selected exit the application and the HTML is generated.
// const Employee = require('./lib/employee');

const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/intern');
const generateHtml = require('./lib/GenerateMarkDown');
const teamArray = []

function teamCreation() {

    inquirer.prompt([

    {
        type: 'input',
        name: 'id',
        message: `please provide your employee ID:`
    },
    {
        type: 'input',
        name: 'name',
        message: `please provide the team manager's name:`
    },
    {
        type: 'input',
        name: 'email',
        message: `please provide your email address:`
    },
    {
        type: 'input',
        name: 'officeNum',
        message: `please provide your office number:`
    }
    ]).then(({ id, name, email, officeNum }) => {
        const manager = new Manager(id, name, email, officeNum);
        teamArray.push(manager);
        console.log(teamArray);
        mainMenu();
    }).catch(err => console.log(err)).finally(() => console.log('Ran intial function'));
}

function mainMenu() {

    inquirer.prompt(
        {
            type: 'list',
            name: 'employee',
            message: 'Please select an option from the below menu:',
            choices: ['Add Engineer', 'Add Intern', 'Finish Building My Team']
        }
    ).then((choice) => {
        switch(choice.employee) {
            case 'Add Engineer':
                engineerCreation()
                break;

            case 'Add Intern':
                internCreation()
                break;
            
            default:
            createHtml()
        }
    }).catch(err => console.log(err));
}

function engineerCreation(){    
    inquirer.prompt([

    {
        type: 'input',
        name: 'id',
        message: `please provide your employee ID:`
    },
    {
        type: 'input',
        name: 'name',
        message: `please provide the engineer's name:`
    },
    {
        type: 'input',
        name: 'email',
        message: `please provide your email address:`
    },
    {
        type: 'input',
        name: 'github',
        message: `please provide your github link:`
    }
    ]).then(({id, name, email, github}) => {
        const engineer = new Engineer(id, name, email, github);
        teamArray.push(engineer);
        mainMenu();
    }).catch(err => console.log(err))
    
}
function internCreation(){
    inquirer.prompt([

        {
            name: 'id',
            message: `please provide your employee ID:`
        },
        {
            name: 'name',
            message: `please provide the intern's name:`
        },
        {
            name: 'email',
            message: `please provide your email address:`
        },
        {
            name: 'school',
            message: `please provide your school:`
        }
        ]).then(({id, name, email, school}) => {
            const intern = new Intern(id, name, email, school);
            teamArray.push(intern);
            mainMenu();
        }).catch(err => console.log(err));

}

function createHtml() {

    console.log(teamArray);
    fs.writeFile('index.html', generateHtml(teamArray), (error) =>
    error ? console.error(error) : console.log('success!'));
}



teamCreation();

// ---------------------------------------------------------SAND BOX -----------------------------------------------------------------//