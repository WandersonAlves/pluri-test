
(function() {
    angular
        .module('app')
        .controller('LoginController', LoginController);

    function LoginController($scope) {
        var vm = this;
        // NOTE Public functions

        var init = function() {
            console.log("Working as intended");
            vm.title = "Login!!!";
        }();
    }
})();
