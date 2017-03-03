angular.module("app")
.controller("dengluCtrl",function(userServer,$scope,$state ){
	$scope.userPhone="";
	$scope.userPwd="";
	//登录
	$scope.loginDo=function(){
		userServer.Login({
			userPhone:this.userPhone,
			Pwd:this.userPwd
		},function(res){
			
			if(res.result!=-1){
				$state.go("shouye")
			}
			
		},function(){
			alert("登陆失败")
		})
	}
	//忘记密码
	$scope.remPwd=function(){
		userServer.remPwd({
			userPhone:this.userPhone
		},function(res){
			console.log("已找回")
		},function(){
			console.log("找不回")
		})
	}
})