const Utils = {
  calculateNumber(type, a, b) {
    const numOne = Math.round(a);
    const numTwo = Math.round(b);
    if (type === "SUM") return numOne + numTwo;
    if (type === "SUBTRACT") return numOne - numTwo;
    if (type === "DIVIDE") {
      return numTwo ? numOne / numTwo : "Error";
    }
  },
};
module.exports = Utils;
