angular.module("app")
	.filter('toTurnHtml', ['$sce', function ($sce) {

		return function (text) {
		    return $sce.trustAsHtml(text);
		};

}]);