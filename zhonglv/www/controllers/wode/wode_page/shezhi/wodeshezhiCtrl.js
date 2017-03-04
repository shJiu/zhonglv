angular.module("app")
.controller("wodeshezhiCtrl",function($scope,userServer){
	
		$scope.zhangNum=JSON.parse(window.localStorage['user']).user_name
		$scope.username=JSON.parse(window.localStorage['user']).nick_name
		$scope.qq=JSON.parse(window.localStorage['user']).qq
		$scope.msn=JSON.parse(window.localStorage['user']).msn
		$scope.email=JSON.parse(window.localStorage['user']).email
	
	//个人设置点击保存
	$scope.amend=function(){
		userServer.amend({
			username : this.username, 
			msn : this.msn,
			qq :this.qq,
			email:this.email 
		},function(res){
			$scope.username=JSON.parse(window.localStorage['user']).nick_name
			$scope.qq=JSON.parse(window.localStorage['user']).qq
			$scope.msn=JSON.parse(window.localStorage['user']).msn
			$scope.zhangNum=JSON.parse(window.localStorage['user']).user_name
		},function(err){
			console.log(err)
		})
	}
})
