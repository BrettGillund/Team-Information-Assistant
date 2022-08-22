const Intern = require("./intern");
const Employee = require("./employee");


function generateEmployeeMarkUp(employees) {
    
    let html = [];

    const generateManager = (employee) => {
        // console.log(employee instanceof Employee)
        console.log(employee);
    if(employee.getRole() === 'Manager'){
    return `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${employee.getName()}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
                    <p class="card-text">${employee.getOfficeNum()}</p>
                    <p>${employee.getEmail()}</p>
                    <p>${employee.getId()}</p>
                </div>
            </div>
            `
    }};
    const generateEngineer = (employee) => {
    if(employee.getRole() === 'Engineer'){
    return `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${employee.getName()}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
                    <p class="card-text">${employee.getId()}</p>
                    <p>${employee.getEmail()}</p>
                    <a href="${employee.getGitHub()}" class="card-link">Link to GitHub</a>
                </div>
            </div>
            `
    }};
    const generateIntern = (employee) => {
    if(employee.getRole() === 'Intern'){
    return `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${employee.getName()}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
                    <p class="card-text">${employee.getSchool()}</p>
                    <p class="card-text">${employee.getId()}</p>
                    <p>${employee.getEmail()}</p>
                </div>
            </div>
            `
    }};

    html.push(employees.filter(manager => manager.getRole() == 'Manager').map(manager => generateManager(manager)));
    html.push(employees.filter(engineer => engineer.getRole() == 'Engineer').map(engineer => generateEngineer(engineer)));
    html.push(employees.filter(intern => intern.getRole() == 'Intern').map(intern => generateIntern(intern)));
    return html.join('');

}

module.exports = employees => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateEmployeeMarkUp(employees)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};

