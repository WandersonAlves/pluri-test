(function () {
  angular
      .module('pluri')
      .service('AulasService', AulasService);

  function AulasService($http, ) {

      var _getAulas = function () {
        return $http.get('http://homologacao-api.semchamada.com.br/aulas', {
          headers: {'Authorization': localStorage.getItem("USER_TOKEN")},
          cache: true
        });
      }
      return {
        getAulas: _getAulas
      }
  }
})();
