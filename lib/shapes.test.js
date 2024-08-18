const {Circle, Square, Triangle} = require('./shapes')

describe('Circle', () => {
    test('svg render', () => {
        const shapes = new Circle();
        var color = ('green')
        shapes.setColor(color);
        expect(shapes.render()).toEqual(
          `<circle cx="150" cy="100" r="80" fill="${color}" />`);
    });
});

describe('Square', () => {
  test('svg render', () => {
    const shapes = new Square();
    var color = ('purple')
    shapes.setColor(color);
    expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}" />`);
  });
});

describe('Triangle', () => {
  test('svg render', () => {
    const shapes = new Triangle();
    var color = ('blue')
    shapes.setColor(color);
    expect(shapes.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`);
  });
});