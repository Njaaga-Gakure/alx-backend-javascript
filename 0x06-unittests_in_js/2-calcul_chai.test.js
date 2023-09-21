const calculateNumber = require("./2-calcul_chai");
const { expect } = require("chai");

describe("Test addition", () => {
  it("Add two positive integers", () => {
    expect(calculateNumber("SUM", 2, 3)).to.equal(5);
  });
  it("Add two negative integers", () => {
    expect(calculateNumber("SUM", -2, -3)).to.equal(-5);
  });
  it("Add a positive integer and a negative integer", () => {
    expect(calculateNumber("SUM", -2, 3)).to.equal(1);
  });
  it("Add a float and an integer", () => {
    expect(calculateNumber("SUM", 2, 3.4)).to.equal(5);
  });
  it("Add two float numbers with decimal part less than 5", () => {
    expect(calculateNumber("SUM", 2.2, 3.4)).to.equal(5);
  });
  it("Add two float numbers with decimal part greater than 5", () => {
    expect(calculateNumber("SUM", 2.6, 3.8)).to.equal(7);
  });
  it("Add two float numbers with decimal part equal to 5", () => {
    expect(calculateNumber("SUM", 2.5, 3.5)).to.equal(7);
  });
});
describe("Test subtraction", () => {
  it("SUBTRACT two positive integers", () => {
    expect(calculateNumber("SUBTRACT", 2, 3)).to.equal(-1);
  });
  it("SUBTRACT two negative integers", () => {
    expect(calculateNumber("SUBTRACT", -2, -3)).to.equal(1);
  });
  it("SUBTRACT a positive integer and a negative integer", () => {
    expect(calculateNumber("SUBTRACT", -2, 3)).to.equal(-5);
  });
  it("SUBTRACT a float and an integer", () => {
    expect(calculateNumber("SUBTRACT", 2, 3.4)).to.equal(-1);
  });
  it("SUBTRACT two float numbers with decimal part less than 5", () => {
    expect(calculateNumber("SUBTRACT", 2.2, 3.4)).to.equal(-1);
  });
  it("SUBTRACT two float numbers with decimal part greater than 5", () => {
    expect(calculateNumber("SUBTRACT", 2.6, 3.8)).to.equal(-1);
  });
  it("SUBTRACT two float numbers with decimal part equal to 5", () => {
    expect(calculateNumber("SUBTRACT", 2.5, 3.5)).to.equal(-1);
  });
});
describe("Test division", () => {
  it("DIVIDE two positive integers", () => {
    expect(calculateNumber("DIVIDE", 10, 2)).to.equal(5);
  });
  it("DIVIDE two negative integers", () => {
    expect(calculateNumber("DIVIDE", -10, -2)).to.equal(5);
  });
  it("DIVIDE a positive integer and a negative integer", () => {
    expect(calculateNumber("DIVIDE", -10, 2)).to.equal(-5);
  });
  it("DIVIDE a float and an integer", () => {
    expect(calculateNumber("DIVIDE", 10, 2.4)).to.equal(5);
  });
  it("DIVIDE two float numbers with decimal part less than 5", () => {
    expect(calculateNumber("DIVIDE", 10.2, 2.4)).to.equal(5);
  });
  it("DIVIDE two float numbers with decimal part greater than 5", () => {
    expect(calculateNumber("DIVIDE", 9.6, 1.8)).to.equal(5);
  });
  it("DIVIDE two float numbers with decimal part equal to 5", () => {
    expect(calculateNumber("DIVIDE", 9.5, 1.5)).to.equal(5);
  });
  it("DIVIDE a number by 0", () => {
    expect(calculateNumber("DIVIDE", 2.5, 0.4)).to.equal("Error");
  });
});
