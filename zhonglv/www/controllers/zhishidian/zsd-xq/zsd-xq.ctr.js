angular.module("app").controller("zsdxqController",function($scope,userServer,knowledgeServer,$stateParams){
	
	knowledgeServer.GetKnowledgeList({
		user_id:userServer.getUserId(),
		category_id:$stateParams.category_id
	},function(res){
		$scope.Ret=res.RetValue
		console.log($scope.Ret)
	},function(){

	})
})