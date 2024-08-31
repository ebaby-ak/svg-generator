const fs = require('fs')
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes.js')


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter characters (3 max):',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Text: Enter color or hexadecimal:',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Shape: Enter color or hexadecimal:',
    },
    {
        type: 'list',
        name: 'shapeChoice',
        message: 'Choose shape:',
        choices: ['Circle','Square','Triangle'],
    },
];
function createShape(text, textColor, shapeColor, shapeChoice) {
  let inputShape;
  if (shapeChoice === 'Circle') {
    inputShape = new Circle(shapeColor);
  } else if (shapeChoice === 'Triangle') {
    inputShape = new Triangle(shapeColor);
  } else if (shapeChoice === 'Square') {
    inputShape = new Square(shapeColor);
  }

const svgContent = `
<svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>${inputShape.render()}
<text x='150' y='100' font-size='50' fill='${textColor}' text-anchor='middle' alignment-baseline='middle'>${text}</text>
</svg>`;

  return svgContent;
}

  function saveToFile(filename, content) {
    fs.writeFileSync(`logos/${filename}`, content);
    console.log('Create Logo');
  }

async function runApp() {
  const response = await inquirer.prompt(questions);
  const data = createShape(response.text, response.textColor, response.shapeColor, response.shapeChoice);
  saveToFile('logo.svg', data);
}

runApp();