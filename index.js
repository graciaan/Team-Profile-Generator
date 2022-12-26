const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");

teamArr = []

function promptCreator() {
  function employeeType() {
    inquirer.prompt(
      [
        {
          name: "employeeChoice",
          message: "Please select the employee type that you wish to add to your team:",
          choices: ["Manager", "Intern", "Engineer", "No More Employees to Add"],
          type: "list"
        }
      ]
    )
    .then(function(data){
      if (`${data.employeeChoice}` === "Manager"){
        return managerPrompts();
      } else if (`${data.employeeChoice}` === "Intern"){
        return internPrompts();
      } else if (`${data.employeeChoice}` === "Engineer"){
        return engineerPrompts();
      } else {
        return //insert function here
      }
    })
  };
  
  function managerPrompts() {
    inquirer.prompt(
      [
        {
          name: "managerName",
          message: "What is the name of the Manager you wish to add?",
          type: "text"
        },

        {
          name: "mangerId",
          message: "What is the ID number of this Manager?",
          type: "text"
        },

        {
          name: "managerEmail",
          message: "What is the email address of the Manager?",
          type: "text"
        },

        {
          name: "managerOffice",
          message: "What is the office number of this Manager?",
          type: "text"
        }
      ]
    )
    .then(function(responses) {
      const manager = new Manager(responses.managerName, responses.managerId, responses.managerEmail, responses.managerOffice);
      teamArr.push(manager);
      employeeType();
    })
  };

  function internPrompts() {
    inquirer.prompt(
      [
        {
          name: "internName",
          message: "What is the name of the Intern you wish to add?",
          type: "text"
        },

        {
          name: "internId",
          message: "What is the ID number of this Intern?",
          type: "text"
        },

        {
          name: "internEmail",
          message: "What is the email address of this Intern?",
          type: "text"
        },

        {
          name: "internSchool",
          message: "What school does this Intern attend?",
          type: "text"
        }
      ]
    )
    .then(function(responses) {
      const intern = new Intern(responses.internName, responses.internId, responses.internEmail, responses.internSchool);
      teamArr.push(intern);
      employeeType();
    })
  };

  function engineerPrompts() {
    inquirer.prompt(
      [
        {
          name: "engineerName",
          message: "What is the name of the Engineer you wish to add?",
          type: "text"
        },

        {
          name: "engineerId",
          message: "What is the ID number of this Engineer?",
          type: "text"
        },

        {
          name: "engineerEmail",
          message: "What is the email address of this Engineer?",
          type: "text"
        },

        {
          name: "engineerGitHub",
          message: "What is the GitHub username of this Engineer?",
          type: "text"
        }
      ]
    )
    .then(function(responses) {
      const engineer = new Engineer(responses.engineerName, responses.engineerId, responses.engineerEmail, responses.engineerGitHub);
      teamArr.push(engineer);
      employeeType();
    })
  };

  employeeType()
}

promptCreator()

function siteGenerator() {
  
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