
(function() {
    angular
        .module('pluri')
        .controller('LoginController', LoginController);

    function LoginController(LoginService, UserObservable) {
        var vm = this;
        // NOTE Public functions

        vm.loginUser = function () {
          if (angular.isUndefined(vm.email) || angular.isUndefined(vm.password)) {
            return;
          }
          LoginService.login(vm.email, vm.password).then(_loginUserSuccess, _loginUserError);
        };

        var _loginUserSuccess = function(response) {
          var response = response.data;
          if (angular.isDefined(response.informacoesUsuario)) {
            UserObservable.setUser(response.informacoesUsuario.nome);
          }
        }

        var _loginUserError = function(err) {
          console.log(err.data);
        }
    }
})();
