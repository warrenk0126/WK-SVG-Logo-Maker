// Import required modules
const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('svg.js');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Main function
async function main() {
  // Prompt user for input
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo text:',
      validate: function(value) {
        if (value.length <= 3) {
          return true;
        }
        return 'Please enter up to three characters.';
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword or hexadecimal number for the text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for the logo:',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword or hexadecimal number for the shape color:',
    },
  ]);

  // Create SVG drawing area
  const draw = SVG().size(300, 200);
  
  // Create shape with user-provided color
  const shape = new (eval(answers.shape))(answers.shapeColor);
  
  // Add shape to SVG
  draw.svg(shape.render()).move(50, 50);
  
  // Add text to SVG
  draw.text(answers.text).fill(answers.textColor).move(100, 100);

  // Write SVG to file
  fs.writeFileSync('logo.svg', draw.svg());
  
  // Log success message
  console.log('Generated logo.svg');
}

// Run main function
main();
