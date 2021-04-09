const managerQuestions = [
    {
        type: 'input',
        message: "Please enter the manager's full name:",
        name: 'name'
    },
    {
        type: 'input',
        message: "Please enter the manager's ID:",
        name: 'id'
    },
    {
        type: 'input',
        message: "Please enter the manager's email:",
        name: 'email'
    },
    {
        type: 'input',
        message: "Please enter the manager's office phone number:",
        name: 'officeNumber'
    }
]

const engineerQuestions = [
    {
        type: 'input',
        message: "Please enter the engineer's full name:",
        name: 'name'
    },
    {
        type: 'input',
        message: "Please enter the engineer's ID:",
        name: 'id'
    },
    {
        type: 'input',
        message: "Please enter the engineer's email:",
        name: 'email'
    },
    {
        type: 'input',
        message: "Please enter the engineer's github username:",
        name: 'github'
    }
]

const internQuestions = [
    {
        type: 'input',
        message: "Please enter the intern's full name:",
        name: 'name'
    },
    {
        type: 'input',
        message: "Please enter the intern's ID:",
        name: 'id'
    },
    {
        type: 'input',
        message: "Please enter the intern's email:",
        name: 'email'
    },
    {
        type: 'input',
        message: "Please enter the intern's school:",
        name: 'school'
    }
]

const employeeTypeQuestion = {
    type: 'list',
    message: 'Which type of employee would you like to add?',
    name: 'employeeType',
    choices: ["Engineer", "Intern", "None"]

}

module.exports = {
    managerQuestions: managerQuestions, 
    engineerQuestions: engineerQuestions, 
    internQuestions: internQuestions,
    employeeTypeQuestion: employeeTypeQuestion
}
