(function () {

  'use strict';

  describe("navigation.controller.js", function () {

    var navController,
        deferred,
        scope;

    beforeEach(module("pluri"));

    beforeEach(inject(function ($controller, $templateCache, _$q_, _UserObservable_, $rootScope) {
      $templateCache.put('/views/login-view.html', '');
      scope = $rootScope.$new();
      deferred = _$q_.defer();

      spyOn(_UserObservable_, 'observeUser').and.returnValue(deferred.promise);

      navController = new $controller('NavigationController', {
        UserObservable: _UserObservable_
      });


    }));

    it("currentUser deve ser 'Visitante'", function () {
      var result = navController.currentUser;
      expect(result).toEqual('Visitante');
    });

    it("currentUser deve ser notificado quando o usuario logar", function () {
      deferred.notify('Aluno_1');
      scope.$apply();
      expect(navController.currentUser).toEqual('Aluno_1');
    });

  });

})();
