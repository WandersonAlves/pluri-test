(function() {
    angular
        .module('pluri')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        var loginState = {
          url: '/login',
          templateUrl: '/views/login-view.html',
          controller: "LoginController",
          controllerAs: "loginController"
        };

        var searchState = {
          url: '/search',
          templateUrl: '/views/search-view.html',
          controller: 'SearchController',
          controllerAs: 'searchController'
        };

        $urlRouterProvider.otherwise('/login');
        $stateProvider.state('login', loginState);
        $stateProvider.state('search', searchState);
    }
})();
