
angular.module("app")
.controller("zhuceCtrl",function($scope,userServer,$state){
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
			
			$state.go("denglu")

		},function(){
			
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