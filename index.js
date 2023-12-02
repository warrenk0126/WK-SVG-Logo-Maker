// Import required modules
const inquirer = require('inquirer');
const fs = require('fs');
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

  // Create shape with user-provided color
  const shape = new (eval(answers.shape))(answers.shapeColor);

  // Create SVG string
  const svg = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="50" y="57" fill="${answers.textColor}" text-anchor="middle" dominant-baseline="middle">${answers.text}</text>
    </svg>
  `;

  // Write SVG to file
  fs.writeFileSync('logo.svg', svg);

  // Log success message
  console.log('Generated logo.svg');
}

// Run main function
main();
