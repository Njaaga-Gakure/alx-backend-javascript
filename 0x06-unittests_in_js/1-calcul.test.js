const calculateNumber = require("./1-calcul");
const assert = require("assert");

describe("Test the result of arithmetic operations", () => {
  it("Add two positive integers", () => {
    assert.equal(calculateNumber("SUM", 2, 3), 5);
  });
  it("Add two negative integers", () => {
    assert.equal(calculateNumber("SUM", -2, -3), -5);
  });
  it("Add a positive integer and a negative integer", () => {
    assert.equal(calculateNumber("SUM", -2, 3), 1);
  });
  it("Add a float and an integer", () => {
    assert.equal(calculateNumber("SUM", 2, 3.4), 5);
  });
  it("Add two float numbers with decimal part less than 5", () => {
    assert.equal(calculateNumber("SUM", 2.2, 3.4), 5);
  });
  it("Add two float numbers with decimal part greater than 5", () => {
    assert.equal(calculateNumber("SUM", 2.6, 3.8), 7);
  });
  it("Add two float numbers with decimal part equal to 5", () => {
    assert.equal(calculateNumber("SUM", 2.5, 3.5), 7);
  });
  it("SUBTRACT two positive integers", () => {
    assert.equal(calculateNumber("SUBTRACT", 2, 3), -1);
  });
  it("SUBTRACT two negative integers", () => {
    assert.equal(calculateNumber("SUBTRACT", -2, -3), 1);
  });
  it("SUBTRACT a positive integer and a negative integer", () => {
    assert.equal(calculateNumber("SUBTRACT", -2, 3), -5);
  });
  it("SUBTRACT a float and an integer", () => {
    assert.equal(calculateNumber("SUBTRACT", 2, 3.4), -1);
  });
  it("SUBTRACT two float numbers with decimal part less than 5", () => {
    assert.equal(calculateNumber("SUBTRACT", 2.2, 3.4), -1);
  });
  it("SUBTRACT two float numbers with decimal part greater than 5", () => {
    assert.equal(calculateNumber("SUBTRACT", 2.6, 3.8), -1);
  });
  it("SUBTRACT two float numbers with decimal part equal to 5", () => {
    assert.equal(calculateNumber("SUBTRACT", 2.5, 3.5), -1);
  });
  it("DIVIDE two positive integers", () => {
    assert.equal(calculateNumber("DIVIDE", 10, 2), 5);
  });
  it("DIVIDE two negative integers", () => {
    assert.equal(calculateNumber("DIVIDE", -10, -2), 5);
  });
  it("DIVIDE a positive integer and a negative integer", () => {
    assert.equal(calculateNumber("DIVIDE", -10, 2), -5);
  });
  it("DIVIDE a float and an integer", () => {
    assert.equal(calculateNumber("DIVIDE", 10, 2.4), 5);
  });
  it("DIVIDE two float numbers with decimal part less than 5", () => {
    assert.equal(calculateNumber("DIVIDE", 10.2, 2.4), 5);
  });
  it("DIVIDE two float numbers with decimal part greater than 5", () => {
    assert.equal(calculateNumber("DIVIDE", 9.6, 1.8), 5);
  });
  it("DIVIDE two float numbers with decimal part equal to 5", () => {
    assert.equal(calculateNumber("DIVIDE", 9.5, 1.5), 5);
  });
  it("DIVIDE a number by 0", () => {
    assert.equal(calculateNumber("DIVIDE", 2.5, 0.4), "Error");
  });
});
