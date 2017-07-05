(function() {
  angular
    .module('pluri')
    .controller('LoginController', LoginController);

  function LoginController(LoginService, UserObservable, LoadingUtil, $state, $mdToast) {
    var vm = this;
    // NOTE Public functions

    vm.loginUser = function() {
      if (!vm.email || !vm.password) {
        _showToast("Favor preencher os campos faltantes", 'bottom', 3000);
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
        _showToast("Usuario logado com sucesso", 'bottom', 3000)
      } else {
        _showToast("Usuario invalido no processo de login", 'bottom', 3000);
      }
    }

    var _loginUserError = function(err) {
      LoadingUtil.stopLoading();
      _showToast("Um erro desconhecido ocorreu no serviço de login", 'bottom', 3000);
      console.log(err.data);
    }

    var _showToast = function(text, position, delay) {
      $mdToast.show(
        $mdToast.simple()
        .textContent(text)
        .position(position)
        .hideDelay(delay)
      );
    }
  }
})();
