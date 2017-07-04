(function () {
	angular
		.module('pluri')
		.config(config);

	function config($mdThemingProvider) {
		$mdThemingProvider.theme('default').primaryPalette('green');
	}
})();
