(function () {
	angular
		.module('app')
		.config(config);

	function config($mdThemingProvider) {
		$mdThemingProvider.theme('default').primaryPalette('green');
	}
})();
