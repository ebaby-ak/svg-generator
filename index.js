const filesystem = require('fs')
const inquirer = require('inquirer');
const path = require('path');
const {Circle, Square, Triangle} = require('./lib/shapes.js')

class svg {
    constructor() {
        this.textElement = ''
        this.shapesElement = ''
    }
    render() {
        return 
    }
};

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter characters (3 max):',
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'Enter color or hexadecimal:',
    },
    {
        type: 'list',
        name: 'shapes',
        message: 'Choose shape:',
        choices: ['circle','square','triangle'],
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'Enter color or hexadecimal:',
    },
];
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Create image.svg file:");
    writeToFile(
      "image.svg",
      generateMarkdown({
        ...responses,
      })
    );
  });
}


init();