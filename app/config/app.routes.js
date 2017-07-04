(function() {
    angular
        .module('pluri')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        var loginState = {
                url: '/login',
                templateUrl: '/views/login-view.html',
                controller: "LoginController",
                controllerAs: "loginController",
                title: 'Login'
            };

        $urlRouterProvider.otherwise('/login');
        $stateProvider.state('login', loginState);
    }
})();
