(function() {

    var EndpointApi = {
        BASE: 'http://plurieducacional.com.br/homologacao/',
        API: 'pluriidapi/',
        KEY: '1b6453892473a467d07372d45eb05abc2031647a'
    };

    angular.module('pluri', ['ui.router', 'ngMaterial', 'ngAnimate']).constant('EndpointApi', EndpointApi);
})();
