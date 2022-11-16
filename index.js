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
    }];


async function userResponse() {
    await inquirer.prompt(questions)
    .then(function (answer) {

        if (answer.role === "Manager") {
            const newManager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
            teamMembers.push(newManager);
            addTeamMembers();
        }

        else if (answer.role === "Engineer") {
            const newEngineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
            teamMembers.push(newEngineer);
            addTeamMembers();
        }
        else {
            const newIntern = new Intern(answer.name, answer.id, answer.email, answer.school);
            teamMembers.push(newIntern);
            addTeamMembers();
        }
        
    });
}



function addTeamMembers() {
     inquirer.prompt([
        {
            type: 'confirm',
            name: 'addTeamMembers',
            message: "Do you want to add another employee?",
            default: true
        }
    ])
    .then(function (response) {
        // console.log(response)
        if (response.addTeamMembers) {
            // console.log('TEAM MEMBERS ON YES', teamMembers)
            userResponse();
        }
        else {
            // const html = render(teamMembers);
            // console.log('TEAM MEMBERS', teamMembers)
            buildTeam()

        }
    })
}
    
function buildTeam(){
    fs.writeFile(outputPath, 'utf8', render(teamMembers),(err) => {

        // if (err) throw err;
        console.log("Success!");
    })
}

userResponse();
    //     else {

    //         const htmlpage = (data) =>{
    //         return new Promise ((resolve, reject)=>{
    //         fs.writeFile("./dist/index.html", data, (err) => {
    //             if (err) {
    //                 reject(err);
    //                 return;
    //             }
    //             resolve({
    //                 ok: true,
    //                 message: "HTML page has been generated.",
    //             });
    //         });
        
    //         });
    //     }
    // }
    // function init(){
    //     questions()
    //     .then((response)=>{
    //         return render.htmlpage(response);
    //     })
    //     .then((res)=>{
    //         htmlpage(res);
    //         console.log("Success! Check out your page!")

    //     });
    // }
    // init();

    




// const managerQuestion = [
//     {
//         type: 'input',
//         name: 'officeNumber',
//         message: "Enter the manager office number"

//     }
// ];

// function addManager() {
//     inquirer.prompt([...questions, ...managerQuestion])
//         .then(function (answer) {
//             const newManager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber)
//             teamMembers.push(newManager)
//             addTeamMembers()

//         })
// }
// addManager()

// function addTeamMembers() {
//     inquirer.prompt([
//         {
//             type: 'list',
//             name: 'addType',
//             message: "Select which type of team member you would like to add.",
//             choices: ["Add Engineer", "Add Intern", "Exit App"]
//         }
//     ]).then(function (response) {
//         switch (response.addType()) {
//             case "Add Engineer":
//                 addEngineer()
//                 break;
//             case "Add Intern":
//                 addIntern()
//                 break;
//             case "Exit App":
//                 addExitApp()
//                 break;
//         }
//     })
// }
// const internQuestion = [
//     {
//         type: 'input',
//         name: 'school',
//         message: "Enter the name of the intern's school"

//     }
// ];
// function addIntern() {
//     inquirer.prompt([...questions, ...internQuestion])
//         .then(function (answer) {
//             const newIntern = new Intern(answer.name, answer.id, answer.email, answer.school)
//             teamMembers.push(newIntern)
//             addTeamMembers()
//         })
// }


// addIntern()

// const engineerQuestion = [
//     {
//         type: 'input',
//         name: 'github',
//         message: "Enter the name of the engineer's github profile"

//     }
// ];
// function addEngineer() {
//     inquirer.prompt([...questions, ...engineerQuestion])
//         .then(function (answer) {
//             const newEngineer = new Engineer(answer.name, answer.id, answer.email, answer.github)
//             teamMembers.push(newEngineer)
//             addTeamMembers()
//         })
// }


// addEngineer()