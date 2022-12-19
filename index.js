// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");


const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    Message: " what is the name of the project??",
    Name: "title",
  },
  {
    type: "input",
    Message:
      "what is this progect about?? please give a discripton of your project",
    name: "Description",
  },
  {
    type: "input",
    Message: "tabel of contets",
    Name: "TAbel of contents",
  },
  {
    type: "input",
    Message: "What does the user need to install ",
    Name: "installation",
  },
  {
    type: "input",
    message: "what licenese does your project use",
    choices: ["none, MIT, GPL, cc--0"],
  },
  {
    type: "input",
    Message: "what is being used (licensed)",
    Name: "license",
  },
  {
    type: "input",
    Message: "who contributed to this project",
    Name: "contributing",
  },
  {
    type: "input",
    Message: "whats your github account Username?",
    Name: "Github username",
  },
  {
    type: "input",
    Message: "what is your email?",
    Name: "Email adress",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeToFile(fileName, data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
     console.log(err);
     throw Error(err)
    } else {
      console.log("sucess");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then( (data) => {
    console.log(data)
    writeToFile("README.md", generateMarkdown(data));
    console.log(data);
  });
}

// Function call to initialize app
init()
  .then((userInput) => {
     generateMarkdown(userInput);
  })
  .then((readmeInfo) => {
     writeToFile(readmeInfo);
  })
  .catch((err) => {
    console.log(err);
  });
