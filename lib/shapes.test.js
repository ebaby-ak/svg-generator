const {Circle, Square, Triangle} = require('./shapes')

describe('Circle', () => {
    test('svg render', () => {
        const shapes = new Circle();
        var color = ('green')
        shapes.setColor(color);
        expect(shapes.render()).toEqual(
          `<circle cx="150" cy="100" r="80" fill="green" />
        `);
    })
})