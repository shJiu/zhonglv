angular.module("app")
.controller("wodepinglunCtrl",["$scope","userServer",function( $scope, userServer ){
	userServer.pl({
        user_id : 1,
        pagesize : 1,
        pageindex : 1
	},function(data){
		console.log(data)
	},function(err){
		console.log(22)
		console.log(err)
	})
}])