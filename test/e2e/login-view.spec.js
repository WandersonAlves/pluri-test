var loginPO = require('./pageObjects/login-form');

describe("Login form", function () {
  it("Deve realizar o login com sucesso", function () {
    browser.get("http://localhost:8080/");
    loginPO.doLoginSuccess();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:8080/#/search");
  });
});
