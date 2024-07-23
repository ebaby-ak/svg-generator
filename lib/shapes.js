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
        return `<circle cx="150" cy="100" r="80" fill="green" />'`;
    }
};

module.exports = {Circle}

