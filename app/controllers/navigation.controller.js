(function() {
    angular
        .module('pluri')
        .controller('NavigationController', NavigationController);

    function NavigationController(UserObservable) {
        var vm = this;

        vm.currentUser = "Visitante";

        UserObservable.observeUser().then(null, null, function(currentUser) {
            vm.currentUser = currentUser;
        });
    }
})();
