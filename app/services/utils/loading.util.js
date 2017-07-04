(function() {
  angular
    .module('pluri')
    .service('LoadingUtil', LoadingUtil);

  function LoadingUtil($mdDialog) {

    var params = {
      templateUrl: '../../partials/loading-spinner.tmpl.html',
      parent: angular.element(document.body),
      clickOutsideToClose: true,
    };

    var _startLoading = function () {
      $mdDialog.show(params);
    };

    var _stopLoading = function () {
      $mdDialog.hide();
    };

    return {
      startLoading: _startLoading,
      stopLoading: _stopLoading
    };
  }
})();
