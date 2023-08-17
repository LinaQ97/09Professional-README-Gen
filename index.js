// TODO: Include packages needed for this application
const generateMarkdown=require("./utils/generateMarkdown");
const fs=require("fs");
const inquirer= require("inquirer");

// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Create an array of questions for user input
const questions = [
{
    type:"input",
    message:"What is the project title?",
    name:"title",
},
{
    type:"editor",
    message:"What is the project description?",
    name:"description",
},
{
    type:"",
    message:"Table of Contents",
    name:"description",
},
{
    type:"",
    message:"What is the project description?",
    name:"installation",
},
{
    type:"",
    message:"What is the project description?",
    name:"usage",
},
{
    type:"list",
    message:"Choose the following license:",
    choices:["MIT", "Mozilla", "Apache", "No License"],
    name: "license",
},
{
    type:"",
    message:"What is the project description?",
    name:"contribution",
},
{
    type:"",
    message:"What is the project description?",
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
