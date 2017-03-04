angular.module("app").controller("wodeController",function( $scope,$state){
	if(JSON.parse(window.localStorage['user']).nick_name){
		$scope.Name=JSON.parse(window.localStorage['user']).nick_name
	}else{
		$scope.Name="未设置"
	}
	//退出登录
	$scope.quit=function(){
		window.localStorage.removeItem("user")
		$state.go("denglu")
	}	
})