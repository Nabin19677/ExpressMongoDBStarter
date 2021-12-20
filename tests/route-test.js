var chai = require("chai");
var chaiHttp = require("chai-http");
var app = require("../app");

var expect = chai.expect;
var should = chai.should();

chai.use(chaiHttp);

it("Routes", (done) => {
  chai
    .request(app)
    .post("/api/v1/auth/login")
    .end((error, response) => {
      response.should.have.status(200);
      done();
    });
});
