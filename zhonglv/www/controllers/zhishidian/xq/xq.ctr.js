angular.module("app").controller("xqController",function($scope,userServer,knowledgeServer,$stateParams){
	console.log($stateParams)
	knowledgeServer.GetKnowledgeMain({
		user_id:userServer.getUserId(),
		id:$stateParams.id
	},function(res){
		console.log(res.RetValue)
		$scope.data=res.RetValue
	},function(){

	})
})