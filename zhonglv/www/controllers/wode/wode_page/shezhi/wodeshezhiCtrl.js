angular.module("app")
.controller("wodeshezhiCtrl",function($scope,userServer,$state){
	$scope.Register=function(){
		//console.log(this.LoginCode)
		userServer.Login({
			LoginMobile : this.LoginMobile, 
			LoginCode : this.LoginCode,
			Pwd :this.Pwd 
		},function(res){
			console.log(res)
			if(res.RetValue==true){
				$state.go("denglu")
			}
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
