const calculateNumber = require("./1-calcul");
const { expect } = require("chai");

describe("Test the result of arithmetic operations", () => {
  it("Test sum", () => {
    expect(calculateNumber("SUM", 2, 3)).to.equal(5);
    expect(calculateNumber("SUM", -2, -3)).to.equal(-5);
    expect(calculateNumber("SUM", -2, 3)).to.equal(1);
    expect(calculateNumber("SUM", 2, 3.4)).to.equal(5);
    expect(calculateNumber("SUM", 2.2, 3.4)).to.equal(5);
    expect(calculateNumber("SUM", 2.6, 3.8)).to.equal(7);
    expect(calculateNumber("SUM", 2.5, 3.5)).to.equal(7);
  });
  it("Test subtraction", () => {
    expect(calculateNumber("SUBTRACT", 2, 3)).to.equal(-1);
    expect(calculateNumber("SUBTRACT", -2, -3)).to.equal(1);
    expect(calculateNumber("SUBTRACT", -2, 3)).to.equal(-5);
    expect(calculateNumber("SUBTRACT", 2, 3.4)).to.equal(-1);
    expect(calculateNumber("SUBTRACT", 2.2, 3.4)).to.equal(-1);
    expect(calculateNumber("SUBTRACT", 2.6, 3.8)).to.equal(-1);
    expect(calculateNumber("SUBTRACT", 2.5, 3.5)).to.equal(-1);
  });
  it("Test division", () => {
    expect(calculateNumber("DIVIDE", 10, 2)).to.equal(5);
    expect(calculateNumber("DIVIDE", -10, -2)).to.equal(5);
    expect(calculateNumber("DIVIDE", -10, 2)).to.equal(-5);
    expect(calculateNumber("DIVIDE", 10, 2.4)).to.equal(5);
    expect(calculateNumber("DIVIDE", 10.2, 2.4)).to.equal(5);
    expect(calculateNumber("DIVIDE", 9.6, 1.8)).to.equal(5);
    expect(calculateNumber("DIVIDE", 9.5, 1.5)).to.equal(5);
    expect(calculateNumber("DIVIDE", 2.5, 0.4)).to.equal("Error");
  });
});
