angular.module("app").controller("detailsController",function($scope,$http,$timeout,$ionicLoading,httpServer,userServer,$stateParams){
	$scope.id=$stateParams.id;
	console.log($scope.id)
	userServer.detali({
		id : $stateParams.id,
        user_id : 1
	},function(data){
		console.log(data.data.RetValue);
		$scope.xqList=data.data.RetValue;
	},function(){
		console.log("数据错误");
	})

	//点击购买
	$scope.purchase=function(id){
		console.log(id)
		alert("暂时不能购买");
	}
		
})
