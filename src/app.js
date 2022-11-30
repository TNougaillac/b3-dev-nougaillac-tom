class Cube {
    constructor(length) {
        this.length = length;
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

class Triangle {
    constructor(length) {
        this.length = length;
    }

    getSideLength () {
        return this.length;
    }

    getSurfaceArea () {
        return Math.sqrt(3)/4 * this.length * this.length;
    }
}

module.exports = {
    Cube:Cube,
    Triangle:Triangle
}