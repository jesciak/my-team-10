const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const render = require("./src/generateHTML");

const teamMembers = [];

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const OUTPUT_DIR= path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");


console.log("Please enter Manager information first")
const questions = [

    {
        type: 'input',
        name: 'id',
        message: "Enter the employee ID."
    },
    {
        type: 'input',
        name: 'name',
        message: "Enter the employee name, first and last."
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the employee email address."
    },
    {
        type: 'list',
        name: 'role',
        message: "Select the role of the employee.",
        choices: [{
            name: "Manager"
        },
            {
                name: "Engineer"
            },
            {
                name: "Intern"
            }]
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter manager's office number.",
        when: function (response) {
            return response.role === "Manager";
        }
    },
    {
        type: "input",
        name: "github",
        message: "Enter engineer's github username.",
        when: function (response) {
            return response.role === "Engineer";
        }
    },
    {
        type: "input",
        name: "school",
        message: "Enter intern's school name.",
        when: function (response) {
            return response.role === "Intern";
        }
    },
    {
    type: "confirm",
        name: "done",
        message: "Add another employee?",
        default: true,
    },
];
async function inputEmployees(employeeData= []){
    try{
        const{ done, ...response}= await inquirer.prompt(questions);
        const newEmployee= [...employeeData, response];
        return done ? inputEmployees(newEmployee) : newEmployee;
    }catch(err){
        throw err;
    }
    }
    async function buildTeam(){
        try{
            const teamMembers= [];
            const dataInput= await inputEmployees();

            dataInput.map((employee)=>{
                const{ name, id, email, role, officeNumber, github, school} =employee;

        if (role === "Manager") {
            const newManager = new Manager(name, id, email, officeNumber);
            teamMembers.push(newManager);
         
        }

        else if (role === "Engineer") {
            const newEngineer = new Engineer(name, id, email, github);
            teamMembers.push(newEngineer);
           
        }
        else {
            const newIntern = new Intern(name, id, email, school);
            teamMembers.push(newIntern); 
        }
    });

   const renderTeam= render(teamMembers);
   fs.writeFile(outputPath, renderTeam, ()=> console.log('SUCCESS!'));
} catch (err){
    throw err;
}
    }
buildTeam();

