// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: " what is the name of the project??",
    name: "title",
  },
  {
    type: "input",
    message:
      "what is this progect about?? (please give a discripton of your project)",
    name: "Description",
  },
  {
    type: "input",
    message: "tabel of contets?",
    name: "Tabel of contents",
  },
  {
    type: "input",
    message: "What does the user need to install?",
    name: "install",
  },
  {
    type: "input",
    message: "what licenese does your project use?",
    choices: ["none, MIT, GPL, cc--0"],
    name : "license",
  },
  {
    type: "input",
    message: "what is being used (licensed)??",
    name: "license",
  },
  {
    type: "input",
    message: "who contributed to this project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "whats your github account Username?",
    name: "Github username",
  },
  {
    type: "input",
    message: "what is your email?",
    name: "Email adress",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, function (err) {
    console.log(fileName)
    console.log(data)
    if (err) {
      console.log(err)
      throw Error(err)
    } else {
      console.log("sucess")
    }
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)//.then((data) => {
    //console.log(data);
   // const md = generateMarkdown({...data})
    //console.log(md);
   .then(function(data) {
     writeToFile("README.md",generateMarkdown(data));
   console.log(data)
   
  })
}

// Function call to initialize app
init()
  //.then((userInput) => {
    //generateMarkdown(userInput);
  //})
  // .then((readmeInfo) => {
  //   writeToFile(readmeInfo);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
