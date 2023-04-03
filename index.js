// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// imported modules
const { Circle, Square, Triangle } = require ("./lib/shapes.js");

// array of questions for user input
const logoQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "logoText",
      message: "Please enter (3) letters or numbers that represent your company.",
    },
    {
      type: "input",
      name: "logoColor",
      message: "Please enter a color for your text.",
    },
    {
      type: "list",
      name: "shapeChoice",
      message: "Which shape would you like to use?",
      choice: { Circle, Square, Triangle },
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Please enter a color for your shape.",
    }
  ]);
};

// function to write svg file
const writeSVG = (userLogoData) => {
    fs.writeFile("logo.svg", userLogoData, (err) =>
      err ? console.log(err) : console.log("Generated logo.svg!")
    );
};

// function to initialize program
function generateLogo() {
    logoQuestions()
    .then((answers) => {
        return generateSVG(answers);
    })
    .then((userLogoData) => {
        return writeSVG(userLogoData);
    })
    .catch((err) => {
        console.log(err);
    });
};

// function call to initialize program
generateLogo();
