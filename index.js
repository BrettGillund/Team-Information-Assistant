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

const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Employee = require('./lib/employee');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/intern');
const generateHtml = require('./lib/GenerateMarkDown');


function teamCreation() {

    inquirer.prompt([

    {
        name: 'managers name',
        message: `please provide the team manager's name:`
    },
    {
        name: 'employee ID',
        message: `please provide your employee ID:`
    },
    {
        name: 'email address',
        message: `please provide your email address:`
    },
    {
        name: 'office number',
        message: `please provide your office number:`
    }
    ]).then(mainMenu())
}

function mainMenu() {

    inquirer.prompt(
        {
            type: 'list',
            name: 'Main Menu',
            message: 'Please select an option from the below menu:',
            list: ['Add Engineer', 'Add Intern', 'Finish Building My Team']
        }
    ).then().then().then()
    // if ()
}

function engineerCreation(){    
    inquirer.prompt([

    {
        name: 'engineer name',
        message: `please provide the engineer's name:`
    },
    {
        name: 'employee ID',
        message: `please provide your employee ID:`
    },
    {
        name: 'email address',
        message: `please provide your email address:`
    },
    {
        name: 'office number',
        message: `please provide your github link:`
    }
    ])
    
}
function internCreation(){
    inquirer.prompt([

        {
            name: 'interns name',
            message: `please provide the team manager's name:`
        },
        {
            name: 'employee ID',
            message: `please provide your employee ID:`
        },
        {
            name: 'email address',
            message: `please provide your email address:`
        },
        {
            name: 'school',
            message: `please provide your school:`
        }
        ])

}

// function createHtml(fileData) {
//     fs.writeFile(`file name`, fileData, (error) =>
//     error ? console.error(error) : console.log('success!'));
// }



teamCreation();

// ---------------------------------------------------------SAND BOX -----------------------------------------------------------------//