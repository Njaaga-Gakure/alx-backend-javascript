const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Add two numbers and return the result', () => {
  it('Add two positive integers', () => {
    assert.equal(calculateNumber(2, 3), 5);
  });
  it('Add two negative integers', () => {
    assert.equal(calculateNumber(-2, -3), -5);
  });
  it('Add a positive integer and a negative integer', () => {
    assert.equal(calculateNumber(-2, 3), 1);
  });
  it('Add a float and an integer', () => {
    assert.equal(calculateNumber(2, 3.4), 5);
  });
  it('Add two float numbers with decimal part less than 5', () => {
    assert.equal(calculateNumber(2.2, 3.4), 5);
  });
  it('Add two float numbers with decimal part greater than 5', () => {
    assert.equal(calculateNumber(2.6, 3.8), 7);
  });
  it('Add two float numbers with decimal part equal to 5', () => {
    assert.equal(calculateNumber(2.5, 3.5), 7);
  });

  it('Add negative floats', () => {
    assert.equal(calculateNumber(-2.4, -3.3), -5);
  });
});
