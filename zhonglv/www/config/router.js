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
	.state("details",{
		url:"/details",
		templateUrl:"controllers/kecheng/kecheng/details.html",
		controller:"kechengController"
	})
	.state("kecheng.law",{
		url:"/kecheng",
		templateUrl:"controllers/kecheng/kecheng/law.html",
		controller:"kechengController"
	})
	.state("kecheng.judicial",{
		url:"/kecheng",
		templateUrl:"controllers/kecheng/kecheng/judicial.html",
		controller:"kechengController"
	})
	.state("kecheng.fashuo",{
		url:"/kecheng",
		templateUrl:"controllers/kecheng/kecheng/fashuo.html",
		controller:"kechengController"
	})
	.state("kecheng.tmall",{
		url:"/kecheng",
		templateUrl:"controllers/kecheng/kecheng/tmall.html",
		controller:"kechengController"
	})
	.state("wode",{
		url:"/wode",
		templateUrl:"controllers/wode/wode.html",
		controller:"wodeController"
	})
	
})