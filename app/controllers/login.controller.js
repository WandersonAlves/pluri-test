
(function() {
    angular
        .module('pluri')
        .controller('LoginController', LoginController);

    function LoginController(LoginService, UserObservable, LoadingUtil, $state) {
        var vm = this;
        // NOTE Public functions

        vm.loginUser = function () {
          if (angular.isUndefined(vm.email) || angular.isUndefined(vm.password)) {
            return;
          }
          LoadingUtil.startLoading();
          LoginService.login(vm.email, vm.password).then(_loginUserSuccess, _loginUserError);
        };

        var _loginUserSuccess = function(response) {
          var response = response.data;
          LoadingUtil.stopLoading();
          if (angular.isDefined(response.informacoesUsuario)) {
            UserObservable.setUser(response.informacoesUsuario.nome);
            localStorage.setItem("USER_TOKEN", response.informacoesUsuario.token);
            $state.go('search');
          }
          else {
            // errr
          }
        }

        var _loginUserError = function(err) {
          LoadingUtil.stopLoading();
          console.log(err.data);
        }
    }
})();
