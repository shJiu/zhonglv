angular.module("app").controller("yindaoController",function($scope){
	$scope.showbar=function(){
		$scope.$emit("showbar",true);
	}
})