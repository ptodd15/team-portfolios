const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const fs = require('fs');
const pageTemplate = require('./dist/pageTemplate')

//array of employees
var employees = [];


// Manager profile
const managerProfile = function () {
    return inquirer.prompt([
        {
        type: 'text',
        name: 'name',
        message: 'Please enter manager name',
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log('Please enter name');
                return false;
        }
    }
    },
    {
        type: 'text',
        name: 'id',
        message: 'Please enter manager ID',
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log('Please enter ID');
                return false;
        }
    }
    },
    {
        type: 'text',
        name: 'email',
        message: 'Please enter manager email address',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter email');
                return false;
        }
    }
    },
    {
        type: 'text',
        name: 'office',
        message: 'Please enter Office Number of the manager',
        validate: office => {
            if (office) {
                return true;
            } else {
                console.log('Please enter office number');
                return false;
            }
        }
    },
])

.then(managerData => {
    const { name, id, email, officeNumber } = managerData;
    const manager = new Manager(name, id, email, officeNumber);
    employees.push(manager);
    })
};



const menu = function () {
    // Title select
    inquirer.prompt([
    {
        type: 'list',
        message: 'Select team member to add',
        name: 'role',
        choices: ['Add Engineer', 'Add Intern']
    },
        {
            type: 'text',
            name: 'name',
            message: 'What is employee name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter name');
                    return false;
                }   
            }
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is employee id',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter ID');
                    return false;
            }
        }
        },
        {
            type: 'text',
            name: 'email',
            message: 'Please enter the email address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter email');
                    return false;
            }
        }
        },
        {
            type: 'text',
            name: 'github',
            message: 'Please enter the github name of the engineer',
            when: (input) => input.role === 'Engineer',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('Please enter email');
                    return false;
            }
        }
        },
        {
            type: 'text',
            name: 'school',
            message: 'Please enter the school name of the intern',
            when: (input) => input.role === 'Intern',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Please enter school name');
                    return false;
            }
        }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Add another employee?',
            default: false
        }

    ])

    .then(employeesData => {
        let { name, id, email, role, github, school, confirmAddEmployee} = employeesData;
        let employee;

        if (role === 'Engineer') {
            employee = new Engineer (name, id, email, role, github);
            console.log(employee);
        } else if (role === 'Intern') {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
        employees.push(employee);

        if (confirmAddEmployee) {
            return this.menu(employees)
        } else {
            return employees;
        }
    })
};

managerProfile()
.then(menu)
.then(data => {
    const pageHTML = pageTemplate(data)

    fs.writeFile('./index.html', pageHTML, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Page created on index.html")
        }
    })
});
