angular.module("app").config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/shouye")
	$stateProvider
	.state("shouye",{
		url:"/shouye",
		templateUrl:"controllers/shouye/shouye.html",
		controller:"shouyeController"
	})
	.state("tiku",{
		url:"/tiku",
		templateUrl:"controllers/tiku/tiku.html",
		controller:"tikuController"
	})
	.state("zhishidian",{
		url:"/zhishidian",
		templateUrl:"controllers/zhishidian/zhishidian.html",
		controller:"zhishidianController"
	})
	.state("kecheng",{
		url:"/kecheng",
		templateUrl:"controllers/kecheng/kecheng.html",
		controller:"kechengController"
	})
	.state("wode",{
		url:"/wode",
		templateUrl:"controllers/wode/wode.html",
		controller:"wodeController"
	})
	// .state("tiku.paper",{		//试卷详情
	// 	url:"/paper",
 //        templateUrl:"controllers/tiku/paper.html",
 //        controller:"paperController"
       
	// })
	
})