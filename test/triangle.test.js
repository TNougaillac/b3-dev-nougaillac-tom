const Triangle = require('../src/app').Triangle;
const expect = require('chai').expect;

describe('Testing the Triangle Functions', function() {
    it('1. The side length of the Triangle', function(done) {
        let t1 = new Triangle(2);
        expect(t1.getSideLength()).to.equal(2);
        done();
    });

    it('2. The surface area of the Triangle', function(done) {
        let t2 = new Triangle(5);
        expect(t2.getSurfaceArea()).to.equal(10.825317547305481);
        done();
    });

});