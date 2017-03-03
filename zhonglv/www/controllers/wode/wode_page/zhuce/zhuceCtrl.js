
angular.module("app")
.controller("zhuceCtrl",function($scope,userServer,$state){
	$scope.Register=function(){
		//console.log(this.LoginCode)
		userServer.Register({
			LoginMobile : this.LoginMobile, 
			LoginCode : this.LoginCode,
			Pwd :this.Pwd 
		},function(res){
			console.log(res)
			if(res.RetValue!=-1){
				$state.go("denglu")
			}
		},function(err){
			console.log(err)
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