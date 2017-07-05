exports.doLoginSuccess = function() {
  var email = element(by.id('email-input')),
      pass = element(by.id('pass-input')),
      loginBtn = element(by.id('login-btn'));

  email.sendKeys("aluno_1@plurieducacional.com.br");
  pass.sendKeys(123456);
  return loginBtn.click();
};
