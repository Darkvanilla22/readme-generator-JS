// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

// Array of questions for user input
const questions = [
    { type: 'input', name: 'title', message: 'What is the title of your project?' },
    { type: 'input', name: 'description', message: 'Please provide a description of your project:' },
    { type: 'input', name: 'installation', message: 'Please provide installation instructions:' },
    { type: 'input', name: 'usage', message: 'Please provide usage information:' },
    { type: 'list', name: 'license', message: 'Choose a license for your project:', choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'] },
    { type: 'input', name: 'contributing', message: 'Please provide contribution guidelines:' },
    { type: 'input', name: 'tests', message: 'Please provide test instructions:' },
    { type: 'input', name: 'github', message: 'What is your GitHub username?' },
    { type: 'input', name: 'email', message: 'What is your email address?' }
];

// TODO: Create a function to write README file

// Function to write README file and initialize app
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
    if (err) {
        console.error('Error writing README file:', err);
    } else {
        console.log('README.md file has been successfully generated!');
    }
    });
}

// TODO: Create a function to initialize app

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        fs.writeFile('README.md', markdown, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('README.md has been generated!');
            }
        });
    });
}

// Function call to initialize app
init();
