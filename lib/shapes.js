class Shapes {
    constructor(){
        this.color=''
    } 
   setColor(color){
    this.color=(color);
   }
};

class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />'`;
    }
};

class Square extends Shapes {
    render() {
        return `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />'`;
    }
};

class Triangle extends Shapes {
    render() {
        return `<polygon points="100,10 200,190 10,190" fill="${this.color}" />'`;
    }
};

module.exports = {Circle}

