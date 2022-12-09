function init() {
  inquirer.prompt(questions).then(function(userInput) {
    const markdown = generateMarkdown(userInput)
    fs.writeFile('./dist/index.html', data, error => {
      if(error) {
        console.log(error);
      } else {
        console.log("index.html successfully created!")
      }
    })
  })
};