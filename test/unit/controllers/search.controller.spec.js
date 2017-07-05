(function () {

  'use strict';

  describe("login.controller.js", function () {

    var searchController,
        deferred,
        scope;

    beforeEach(module("pluri"));

    beforeEach(inject(function ($controller, $templateCache, _$q_, _UserObservable_, $rootScope, $state, _AulasService_) {
      $templateCache.put('/views/search-view.html', '');
      $templateCache.put('/views/login-view.html', '');
      $templateCache.put('../../partials/loading-spinner.tmpl.html', '');
      scope = $rootScope.$new();
      deferred = _$q_.defer();

      spyOn(_AulasService_, 'getAulas').and.returnValue(deferred.promise);;
      spyOn($state, 'go');

      searchController = new $controller('SearchController');


    }));

    it("Deve redirecionar para a tela de login caso não logado", inject(function ($state) {
      expect($state.go).toHaveBeenCalledWith('login');
    }));

    it("Deve buscar as aulas", inject(function (_AulasService_) {
      localStorage.setItem("USER_TOKEN", 'ehewuh');
      deferred.resolve({data: {}});
      scope.$apply();
      expect(_AulasService_.getAulas).toHaveBeenCalled();
    }));

    it("Deve não buscar as aulas", inject(function (_AulasService_) {
      localStorage.setItem("USER_TOKEN", 'ehewuh');
      deferred.reject({data: {}});
      scope.$apply();
      expect(_AulasService_.getAulas).toHaveBeenCalled();
    }));

    describe("setClass", function () {
      it("Deve retornar 'green-bg' quando a área for 'Ciências da Natureza'", function () {
        var result = searchController.setClass('Ciências da Natureza');
        expect(result).toEqual('green-bg');
      });

      it("Deve retornar 'pink-bg' quando a área for 'Ciências Humanas'", function () {
        var result = searchController.setClass('Ciências Humanas');
        expect(result).toEqual('pink-bg');
      });

      it("Deve retornar 'darkturquoise-bg' quando a área for 'Linguagens e Códigos'", function () {
        var result = searchController.setClass('Linguagens e Códigos');
        expect(result).toEqual('darkturquoise-bg');
      });

      it("Deve retornar 'red-bg' quando a área for qualquer valor arbitrario", function () {
        var result = searchController.setClass('xxx');
        expect(result).toEqual('red-bg');
      });
    });



  });

})();
