const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require('path')
const pageTemplate = require("./src/page-template");
const questions = require('./src/questions')


// use path module to define the path to the output directory
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

//Array to hold all the team members
const employees = [];

//init function
function init(){
    //function to create a manager
        function createManager(){
            inquirer
            .prompt(questions.managerQuestions)
            .then((res) => {
                //create a new instance of the Manager class
                let manager = new Manager(res.name, res.id, res.email, res.officeNumber);
                //push the new manager to the employee array
                employees.push(manager);
                //Call function to create the rest of the team
                createTeam();
            });
        };

    //function to create the rest of the team
        function createTeam(){
            inquirer
            .prompt(questions.employeeTypeQuestion)
            .then((addEmployee) => {
                //console.log(addEmployee.employeeType)
                if( addEmployee.employeeType == "None" ){
                    createOutput();
                } else if (addEmployee.employeeType == "Engineer") {
                    inquirer
                        .prompt(questions.engineerQuestions)
                        .then((res) => {
                            let engineer = new Engineer(res.name, res.id, res.email, res.github);
                            employees.push(engineer)
                            createTeam();
                        })
                } else {
                    inquirer
                        .prompt(questions.internQuestions)
                        .then((res) => {
                            let intern = new Intern(res.name, res.id, res.email, res.school);
                            employees.push(intern)
                            createTeam();
                        })
                }
            })
        }


    //function to create the output
        function createOutput(){
            // call the function from page-template module and pass in the team members array and save to a data variable
            const data = pageTemplate(employees)

            // use fs module to write the a file -> pass in the fs.write(outputPath, the data, and "utf-8")
            fs.writeFileSync(outputPath, data, "utf-8");
        }

    //call the function created above to create manager to start the process
        createManager()
}   

//call init
init()