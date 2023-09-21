const sendPaymentRequestToApi = require("./5-payment");
const sinon = require("sinon");

describe("sendPaymentRequestToApi", () => {
  let consoleLogSpy;
  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, "log");
  });
  afterEach(() => {
    consoleLogSpy.restore();
  });
  it("Call sendPaymentRequestToAPI with 100 and 20", () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.alwaysCalledWith(consoleLogSpy, "The total is: 120");
    sinon.assert.calledOnce(consoleLogSpy);
  });
  it("Call sendPaymentRequestToAPI with 10 and 10", () => {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.alwaysCalledWith(consoleLogSpy, "The total is: 20");
    sinon.assert.calledOnce(consoleLogSpy);
  });
});
