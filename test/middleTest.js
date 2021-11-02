
//const assertArraysEqual= require('../assertArraysEqual.js');
//const middle = require('../middle.js');


//assertArraysEqual(middle([1, 2, 3, 4, 5, 6,7]))
const assert = require('chai').assert;
const middle = require('../middle.js');


describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.strictEqual(middle([1, 2, 3]), 2);
  });
  it("returns 'Lighthouse' for ['hello','Lighthouse','labs']", () => {
    assert.strictEqual(middle(['hello','Lighthouse','labs']), 'Lighthouse'); 
  });
});