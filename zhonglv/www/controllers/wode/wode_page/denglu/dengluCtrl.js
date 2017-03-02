angular.module("app")
.controller("dengluCtrl",function(userServer,$scope,$state ){
	$scope.userPhone="";
	$scope.userPwd="";

	$scope.loginDo=function(){
		userServer.Login({
			userPhone:$scope.userPhone,
			Pwd:$scope.userPwd
		},function(res){
			console.log(res)
			if(res.result!=-1){
				$state.go("shouye")
			}
			
		},function(){
			alert("登陆失败")
		})
	}
})