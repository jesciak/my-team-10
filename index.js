const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const { choices } = require("yargs");

const teamMembers = [];
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// const generateHtml = require("./src/generateHTML");

const questions = [
    {
        type: 'input',
        name: 'id',
        message: "Enter the employee ID"
    },
    {
        type: 'input',
        name: 'name',
        message: "Enter the employee name, first and last."
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the employee email address"
    }
];
const managerQuestion = [
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the manager office number"

    }
];

function addManager() {
    inquirer.prompt([...questions, ...managerQuestion])
        .then(function (answer) {
            const newManager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber)
            teamMembers.push(newManager)
            addTeamMembers()

        })
}

function addTeamMembers() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addType',
            message: "Select which type of team member you would like to add.",
            choices: ["Add Engineer", "Add Intern", "Exit App"]
        }
    ]).then(function (response) {
        switch (response.addType()) {
            case "Add Engineer":
                addEngineer()
                break;
            case "Add Intern":
                addIntern()
                break;
            case "Exit App":
                addExitApp()
                break;
        }
    })
}

function addIntern(){

}


addManager()