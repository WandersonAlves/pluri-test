(function() {
    angular
        .module('pluri')
        .controller('SearchController', SearchController);

    function SearchController(AulasService, AulasFactory, UserObservable, $state) {
        var vm = this;

        vm.setClass = function (area) {
          if (area === "Ciências da Natureza") {
            return 'green-bg'
          }
          else if (area === "Ciências Humanas") {
            return 'pink-bg';
          }
          else if (area === "Linguagens e Códigos") {
            return 'darkturquoise-bg';
          }
          else {
            return 'red-bg';
          }
        }

        var _aulasServiceSuccess = function (result) {
            vm.aulas = AulasFactory.filterFromGetAulas(result.data);
            console.log(vm.aulas);
        }

        var _aulasServiceError = function (err) {
            console.log(err.data);
        }

        var init = function () {
          if (angular.isUndefined(UserObservable.getUser())) {
            $state.go('login');
          }
          if (angular.isDefined(localStorage.getItem("USER_TOKEN"))){
            AulasService.getAulas().then(_aulasServiceSuccess, _aulasServiceError);
          }
        }();

    }
})();
