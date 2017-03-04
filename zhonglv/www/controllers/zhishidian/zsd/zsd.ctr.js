angular.module("app").controller("zsdController",function($scope,userServer,knowledgeServer,$stateParams){
	
	knowledgeServer. getSubMenuCategory({
		user_id:userServer.getUserId(),
		parent_id:$stateParams.parent_id
	},function(res){
		//console.log(res)
		$scope.RetValue=res.RetValue
	},function(){

	})
})