
angular.module("app")
.controller("zhuceCtrl",function($scope,userServer){
	$scope.mobile="",
	LoginCode="",
	Pwd=""
	$scope.Register=function(){
		//console.log(this.LoginCode)
		userServer.Login({
			LoginMobile : this.LoginMobile, 
			LoginCode : this.LoginCode,
			Pwd :this.Pwd 
		},function(){
			alert("注册成功")
		},function(){
			alert("注册失败")
		})
	}
	$scope.RegisterCode=function(){
		userServer.Code({
			mobile : this.mobile
		},function(){
			
		},function(){
			
		})
	}
})