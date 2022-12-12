const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");


function promptCreator() {
  function employeeType() {
    inquirer.prompt(
      [
        {
          name: "employeeChoice",
          message: "Please select the employee type that you wish to add to your team:",
          choices: ["Manager", "Intern", "Engineer"],
          type: "list"
        }
      ]
    )

  }






}




// function init() {
//   inquirer.prompt(questions).then(function(userInput) {
//     const markdown = generateMarkdown(userInput)
//     fs.writeFile('./dist/index.html', data, error => {
//       if(error) {
//         console.log(error);
//       } else {
//         console.log("index.html successfully created!")
//       }
//     })
//   })
// };