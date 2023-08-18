// TODO: Include packages needed for this application
const generateMarkdown=require("./utils/generateMarkdown");
const fs=require("fs");
const inquirer= require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
{
    type:"input",
    message:"What is the project title?",
    name:"title",
},
{
    type:"input",
    message:"What is the project description?",
    name:"description",
},

{
    type:"input",
    message:"What are the steps required to install your project?",
    name:"installation",
},
{
    type:"input",
    message:"Provide instructions and examples for use.",
    name:"usage",
},
{
    type:"list",
    message:"Choose the following license:",
    choices:["MIT", "Mozilla", "Apache", "No License"],
    name: "license",
},
{
    type:"input",
    message:"Include how other developers can contribute to the application or package you created.",
    name:"contribution",
},
{
    type:"input",
    message:"Write tests for you application.",
    name:"test",
},
{
    type:"input",
    message:"What is your Github username?",
    name:"username",
},
{
    type:"input",
    message:"What is your email?",
    name:"email",
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err=>{
        if(err) throw err
        console.log("success!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) 
    .then(data=>{
        writeToFile("./output/README.md", data)
    })
}

// Function call to initialize app
init();
