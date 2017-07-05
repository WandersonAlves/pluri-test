(function() {
    angular
        .module('pluri')
        .factory('AulasFactory', AulasFactory);

    function AulasFactory($filter) {

        var _filterFromGetAulas = function(result) {
            return $filter('limitTo')(result, 50);
        }

        return {
            filterFromGetAulas: _filterFromGetAulas
        };
    }
})();
