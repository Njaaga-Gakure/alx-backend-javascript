const request = require("request");
const { expect } = require("chai");

describe("Express Server Test", () => {
  it("Test / route", (done) => {
    request("http://localhost:7865", "GET", (_, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal("Welcome to the payment system");
    });
    done();
  });
});
