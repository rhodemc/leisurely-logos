// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// imported modules
const { Circle, Square, Triangle } = require("./lib/shapes.js");

// array of questions for user input
const logoQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "logoText",
      message: "Please enter (3) letters or numbers that represent your company:",
    },
    {
      type: "input",
      name: "textColor",
      message: "Please enter a specific color (or hexidecimal number) for your text:",
    },
    {
      type: "list",
      name: "shapeChoice",
      message: "Which shape would you like to use?",
      choices: ["Circle", "Square", "Triangle"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Please enter a color (or hexidecimal number) for your shape:",
    },
  ]);
};

const generateLogo = (answers) => {
  let newSvgString = "";

  switch (answers.shapeChoice) {
    case "Circle":
      const newCircle = new Circle(answers.shapeColor, answers.textColor, answers.logoText);
      newSvgString = `${newCircle.render()}`;
      break;

    case "Square":
      const newSquare = new Square(answers.shapeColor, answers.textColor, answers.logoText);
      newSvgString = `${newSquare.render()}`;
      break;

    case "Triangle":
      const newTriangle = new Triangle(answers.shapeColor, answers.textColor, answers.logoText);
      newSvgString = `${newTriangle.render()}`;
      break;
  }
  return newSvgString;
};

// function to write svg file
function writeSvg(newSvgString) {
  fs.writeFile("./examples/logo.svg", newSvgString, (err) =>
    err ? console.log(err) : console.log("Generated logo.svg!")
  );
}

// function to initialize program
function generateSvg() {
  logoQuestions()
    .then((answers) => {
      return generateLogo(answers);
    })
    .then((newSvgString) => {
      return writeSvg(newSvgString);
    })
    .catch((err) => {
      console.log(err);
    });
}

// function call to initialize program
generateSvg();
