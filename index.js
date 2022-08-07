// Imports
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions Array for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your Project called? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("You need to provide the Project's Title!");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose which license you used on your Project!',
        choices: ['ISC', 'MIT', 'Apache', 'Boost', 'BSD', 'GNU', 'Eclipse', 'No License']
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project! (Required)',
        validate: projectDescription => {
            if (projectDescription) {
                return true;
            } else {
                console.log('Please enter a Description for your Project!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install the project? Please provide explicit instructions to start the developmental environment!',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide explicit instructions on how to use the application!',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide explicit instructions on any tests conducted!',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Did anyone else contribute to your project? If so, who?',
    },

    // Contact-me / questions section
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username. (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub Username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your E-mail Address. (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your E-mail Address!');
                return false;
            }
        }
    },
];

// Function will create a README.md file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
    });
};

// Function to initialize the app
function init() {
    return inquirer.prompt(questions)
    .then((answers) => {writeToFile('README', generateMarkdown(answers))} )
    .then((err) => err ? console.log('An error occured!', err) : console.log('README.md was succesfully created!'));
};

// Function call to initialize app
init();