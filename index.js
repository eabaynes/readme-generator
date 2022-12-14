const fs= require('fs');
const inquirer = require('inquirer');

// Provide the template literal to be applied to the new ReadMe- This is not indented because it will be copied exactly into the file
//  each ${} denotes a specific answer being pasted into this string
function readMeContents (answers) {
    return `
# ${answers.title}

## Description
- ${answers.motivation}
- ${answers.problem}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)

## Installation
${answers.install}

## Usage
${answers.usage}

## Credits
${answers.credits}

## License
${answers.license}

## Features
${answers.features}
    `
}

// the series of questions being asked in the command line
inquirer.prompt([
    {
        type: 'input',
        message:'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'what was your motivation?',
        name: 'motivation'
    },
    {
        type: 'input',
        message: 'what problem does this project solve?',
        name: 'problem'
    },
    {
        type: 'input',
        message: "what steps are required to run your program?",
        name: 'install'
    },
    {
        type: 'input',
        message: 'What are the instructions to use this app?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'List the collaborators on the project',
        name: 'credits'
    },
    {
        type: 'input',
        message:'what license is your software using?',
        name: 'license'
    },
    {
        type: 'input',
        message: 'what are some of the features of your program?',
        name: 'features'
    }
]).then(answers =>{
    fs.writeFile('NewReadMe.md', readMeContents(answers), (err) =>
  err ? console.error(err) : console.log('Success!')
  )
})