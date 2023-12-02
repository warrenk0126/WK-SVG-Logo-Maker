// Base Shape class
class Shape {
    constructor(color) {
        this.color = color;
    }

    // Method to be implemented by subclasses
    render() {
        throw new Error('Method "render" must be implemented');
    }
}

// Triangle class that extends Shape
class Triangle extends Shape {
    // Returns SVG string for a triangle
    render() {
        return `<polygon points="50,15 100,100 0,100" style="fill:${this.color}"/>`;
    }
}

// Circle class that extends Shape
class Circle extends Shape {
    // Returns SVG string for a circle
    render() {
        return `<circle cx="50" cy="50" r="50" style="fill:${this.color}"/>`;
    }
}

// Square class that extends Shape
class Square extends Shape {
    // Returns SVG string for a square
    render() {
        return `<rect width="100" height="100" style="fill:${this.color}"/>`;
    }
}

// Export the shape classes
module.exports = { Triangle, Circle, Square };
