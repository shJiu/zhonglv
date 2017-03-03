angular.module("app")


.controller("wodekuaixunCtrl",["userServer","$scope","$state",function( userServer,$scope,$state ){
	$scope.id = 1;
	$scope.pageSize = 1;
	$scope.pageIndex = 1;
	
	userServer.kx({
        id : $scope.id,
        pageSize : $scope.pageSize,
        pageIndex : $scope.pageIndex
	},function(data){
		console.log(data)
	},function(err){
		console.log(22)
		console.log(err)
	})
	
}])