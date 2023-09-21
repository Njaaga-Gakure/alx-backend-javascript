const Utils = require("./utils");
const sendPaymentRequestToApi = require("./4-payment");
const sinon = require("sinon");

describe("sendPaymentRequestToApi", () => {
  it("Call the function calculateNumber with SUM type and correct args", () => {
    const calculateNumberSpy = sinon.spy(Utils, "calculateNumber");
    sendPaymentRequestToApi(100, 20);
    sinon.assert.alwaysCalledWithExactly(calculateNumberSpy, "SUM", 100, 20);
    calculateNumberSpy.restore();
  });
  it("Stub a function to always return 10", () => {
    const calculateNumberSpy = sinon.stub(Utils, "calculateNumber").returns(10);
    const consoleLogSpy = sinon.spy(console, "log");
    sendPaymentRequestToApi(100, 20);
    sinon.assert.alwaysCalledWithExactly(calculateNumberSpy, "SUM", 100, 20);
    sinon.assert.alwaysCalledWith(consoleLogSpy, "The total is: 10");
    calculateNumberSpy.restore();
    consoleLogSpy.restore();
  });
});
