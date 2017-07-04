(function () {
  angular
      .module('pluri')
      .service('LoginService', LoginService);

  function LoginService($http, EndpointApi) {

      var _login = function (email, pass) {
        var params = {
          operacao: "008",
          chaveSistema: EndpointApi.KEY,
          login: email,
          senha: pass
        };

        return $http.post(EndpointApi.BASE + EndpointApi.API + 'webservice.php', params);
      }
      return {
        login: _login
      }
  }
})();
