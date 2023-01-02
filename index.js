const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");

const employeeArray = [];

function init(){
    startHTML();
    addEmployee();
};

function addEmployee(){
    inquirer.prompt([{
        type: "input",
        message: "Enter new Employee's name: ",
        name: "name",
    },
    {
        type: "input",
        message: "Enter new Employee's role",
        name: "role",
    },
    {
        type: "input",
        message: "Enter new Employee's id",
        name: "id",
    },
    {
        type: "input",
        message: "Enter new Employee's email",
        name: "email",
    }
    ])
    .then(function({name, role, id, email}){
        if(role === "Engineer"){
            inquirer.prompt([{
                type: "input",
                message: "Enter new Engineer's github username",
                name: "uniqueRoleDetails"
            }])
        }
        if(role === "Intern"){
            inquirer.prompt([{
                type: "input",
                message: "Enter new Intern's school name",
                name: "uniqueRoleDetails"
            }])
        }
        if(role === "Manager"){
            inquirer.prompt([{
                type: "input",
                message: "Enter new Manager's office number",
                name: "uniqueRoleDetails"
            }])
        }
    })
    .then(function(uniqueRoleDetails){
        let newEmployee;
        if(role === "Engineer"){
            newEmployee = new Engineer(name, id, email, uniqueRoleDetails);
        }
        if(role === "Intern"){
            newEmployee = new Intern(name, id, email, uniqueRoleDetails);
        }
        if(role === "Manager"){
            newEmployee = new Manager(name, id, email, uniqueRoleDetails);
        }
        employeeArray.push(newEmployee);
    })
}

function startHTML(){
    const data = `<!DOCTYPE html>
    <html lang="en"
    <head>
    <meta charset="UTF-8>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Employee DB Manager</title>
    </head>
    <body>
    <div class="container">
        <div class="row">
    `;
    fs.writeFile("./dist/employeesList.html", data);
}



init();