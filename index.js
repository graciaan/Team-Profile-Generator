//set of requirements needed to run everything
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const teamTemplate = require("./src/teamtemplate.js")

//creates a blank array to have all the responses to the prompts pushed in to
teamArr = []

//this function creates all of the prompts needed to gather the necessry information
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
    //if statements that help guide the user through the different categories of employees
    .then(function(data){
      if (`${data.employeeChoice}` === "Manager"){
        return managerPrompts();
      } else if (`${data.employeeChoice}` === "Intern"){
        return internPrompts();
      } else if (`${data.employeeChoice}` === "Engineer"){
        return engineerPrompts();
      } else {
        return siteGenerator();
      }
    })
  };
  //generates the prompt questions for the manager employee type
  function managerPrompts() {
    inquirer.prompt(
      [
        {
          name: "managerName",
          message: "What is the name of the Manager you wish to add?",
          type: "text"
        },

        {
          name: "managerId",
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
    //pushes all of the data from the manager prompts in to the teamArr array and runs the prompts again to add info for another employee
    .then(function(responses) {
      const manager = new Manager(responses.managerName, responses.managerId, responses.managerEmail, responses.managerOffice);
      teamArr.push(manager);
      employeeType();
    })
  };
  
  //generates the prompt questions for the intern employee type
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
    //pushes all of the data from the intern prompts in to the teamArr array and runs the prompts again to add info for another employee
    .then(function(responses) {
      const intern = new Intern(responses.internName, responses.internId, responses.internEmail, responses.internSchool);
      teamArr.push(intern);
      employeeType();
    })
  };

  //generates the prompt questions for the engineer employee type
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
    //pushes all of the data from the engineer prompts in to the teamArr array and runs the prompts again to add info for another employee
    .then(function(responses) {
      const engineer = new Engineer(responses.engineerName, responses.engineerId, responses.engineerEmail, responses.engineerGitHub);
      teamArr.push(engineer);
      employeeType();
    })
  };
  
  employeeType()
}

//calls the function that runs all of the prompts
promptCreator()

//function that writes the html file with all of the data collected through the prompts. it pulls from the teamTemplate page that has further code for the html file
function siteGenerator() {
  fs.writeFile('./dist/index.html', teamTemplate(teamArr), err => {
    if (err) {
      console.log(err);
    } else {
      console.log("index.html successfully created!")
    }
  } )
};
