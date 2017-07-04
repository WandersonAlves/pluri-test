(function() {
    angular
        .module('pluri')
        .controller('NavigationController', NavigationController);

    function NavigationController() {
        var vm = this;

        vm.currentUser = "Visitante";
    }
})();
