// Import the shape classes
const { Triangle, Circle, Square } = require('./shapes');

// Define the test suite
describe('Shape classes', () => {
  // Test the Triangle class
  it('Triangle render method returns correct SVG string', () => {
    const triangle = new Triangle('#FFFFFF');
    expect(triangle.render()).toBe('<polygon points="50,15 100,100 0,100" style="fill:#FFFFFF"/>');
  });

  // Test the Circle class
  it('Circle render method returns correct SVG string', () => {
    const circle = new Circle('#FFFFFF');
    expect(circle.render()).toBe('<circle cx="50" cy="50" r="50" style="fill:#FFFFFF"/>');
  });

  // Test the Square class
  it('Square render method returns correct SVG string', () => {
    const square = new Square('#FFFFFF');
    expect(square.render()).toBe('<rect width="100" height="100" style="fill:#FFFFFF"/>');
  });
});
