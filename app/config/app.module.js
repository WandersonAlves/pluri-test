(function() {

    var EndpointApi = {
        BASE: 'http://localhost:8080/',
        API: 'api/'
    };

    angular.module('pluri', ['ui.router', 'ngMaterial', 'ngAnimate']).constant('EndpointApi', EndpointApi);
})();
