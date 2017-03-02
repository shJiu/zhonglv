angular.module("app").controller("paperController",function($scope,$stateParams){
	 // Setup the loader
	 // $scope.dataCont=[
	 // 	{}
	 // ];
	 $scope.title="答题列表";
	// $scope.showFoot=function(){
	console.log($stateParams)	
	$scope.year=$stateParams.year;
	// 	$scope.$emit("showFoot",true)
	// }

})