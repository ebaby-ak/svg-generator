const {Circle, Square, Triangle} = require('./shapes')

describe('Shapes', () => {
    test('svg render', () => {
        const circle = new Circle(color);
        const color = 'green';
        expect(circle.render()).toBe(
          `<circle cx="150" cy="100" r="80" fill="green" />`);
    });

  test('svg square render', () => {
    const square = new Square(color);
    const color = 'purple';
    expect(shape.render()).toBe(`<rect x="50" height="200" width="200" fill="purple" />`);
    });
    
  test('svg triangle render', () => {
    const triangle = new Triangle(color);
    const color = 'blue';
    expect(shapes.render()).toBe(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`);
    });
});