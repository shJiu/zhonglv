angular.module("app")
.controller("dengluCtrl",function(userServer,$scope,$state ){
	$scope.userPhone="";
	$scope.userPwd="";

	$scope.loginDo=function(){
		///console.log(this.userPwd)
		userServer.Login({
			userPhone:this.userPhone,
			Pwd:this.userPwd
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