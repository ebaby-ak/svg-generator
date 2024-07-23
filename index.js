const filesystem = require('fs')
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes.js')

class svg {
    constructor() {
        this.textElement = ''
        this.shapesElement = ''
    }
    render() {
        return 
    }
}

const questions = {
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
}