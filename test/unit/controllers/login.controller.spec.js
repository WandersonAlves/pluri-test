(function () {

  'use strict';

  describe("login.controller.js", function () {

    var loginController,
        deferred,
        scope;

    var returnMock = {
      data: {
        informacoesUsuario: {
          nome: 'Wanderson Alves'
        }
      }
    };

    beforeEach(module("pluri"));

    beforeEach(inject(function ($controller, $templateCache, _$q_, _UserObservable_, $rootScope, _LoginService_) {
      $templateCache.put('/views/login-view.html', '');
      $templateCache.put('/views/search-view.html', '');
      $templateCache.put('../../partials/loading-spinner.tmpl.html', '');
      scope = $rootScope.$new();
      deferred = _$q_.defer();

      spyOn(_LoginService_, 'login').and.returnValue(deferred.promise);
      spyOn(_UserObservable_, 'observeUser');

      loginController = new $controller('LoginController');


    }));

    it("Deve barrar o login caso não possua os dados preenchidos", inject(function (_LoginService_) {
      loginController.loginUser();
      expect(_LoginService_.login).not.toHaveBeenCalled();
    }));

    it("Deve realizar o login com sucesso", inject(function (_LoginService_) {
      loginController.email = "test@gmail.com";
      loginController.password = "123456";
      loginController.loginUser();
      deferred.resolve(returnMock);
      scope.$apply();
      expect(_LoginService_.login).toHaveBeenCalledWith("test@gmail.com", "123456");
    }));

    it("Deve realizar o login com sucesso porém com estrutura errada", inject(function (_LoginService_) {
      loginController.email = "test@gmail.com";
      loginController.password = "123456";
      loginController.loginUser();
      deferred.resolve({data: {}});
      scope.$apply();
      expect(_LoginService_.login).toHaveBeenCalled();
    }));

    it("Deve realizar o login e rejeitar o mesmo", inject(function (_LoginService_) {
      loginController.email = "test@gmail.com";
      loginController.password = "123456";
      loginController.loginUser();
      deferred.reject({data: {}});
      scope.$apply();
    }));

  });

})();
