angular.module("app")
.controller("wodeshezhiCtrl",function($scope,userServer){
	$scope.amend=function(){
		userServer.amend({
			
			username : this.username, 
			msn : this.msn,
			qq :this.qq,
			email:this.email 
		},function(res){
			console.log(res)
		},function(err){
			console.log(err)
		})
	}
})
