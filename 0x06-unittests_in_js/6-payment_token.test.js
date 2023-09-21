const getPaymentTokenFromAPI = require("./6-payment_token");
const { expect } = require("chai");

describe("getPaymentTokenFromAPI", () => {
  it("Test getPaymentTokenFromAPI function when success === true", (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.eql({ data: "Successful response from the API" });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
