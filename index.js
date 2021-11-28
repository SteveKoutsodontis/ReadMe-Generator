// Packages needed for this application.
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require;


// Call Prompt.
function init() {

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your Project Title?',
                name: 'title'
            },
            {
                type: 'input',
                message: 'Please enter your description',
                name: 'description'
            },
            {
                type: 'input',
                message: 'Please enter any installation instructions',
                name: 'installation'
            },
            {
                type: 'input',
                message: 'Please enter your usage information',
                name: 'usuage'
            },
            {
                type: 'input',
                message: 'Please enter your contriution guidelines',
                name: 'contribution'
            },
            {
                type: 'input',
                message: 'Please enter your test instructions',
                name: 'testInstructions',
                default: 'npm test'
            },
            {
                type: 'input',
                message: 'Enter your github username',
                name: 'github'
            },
            {
                type: 'input',
                message: 'Enter your email address',
                name: 'email'
            },
            {
                type: 'input',
                message: 'What kind of license do you want?',
                name: 'license',
                choices: ['MIT','Apache 2.0', 'GNU GPL v3', 'Eclipse 1.0', 'None']
            },
        ])
        .then((response) => {
            writeToFile('Readme-proj.md', reponse);
        });

        // Takes user input, Generates README markdown and writes a new file.
        function writeToFile(fileName, data) {
            console.log(data);
            let readMeText = generateMarkdown(data);

            fs.witeFile(
                fileName,
                readMeText,
                (err) => (err ? console.log(err) : console.log('Successfuly created ' + fileName + '!'))
            );
        }
}

// Function call to initialize App.
init();
