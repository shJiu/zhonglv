angular.module("app").config(function($stateProvider,$urlRouterProvider){
	if(window.localStorage['user']){
		$urlRouterProvider.otherwise("/shouye")
		
	}else{
		$urlRouterProvider.otherwise("/denglu")
	}
	
	$stateProvider
	.state("yindao",{
		url:"/yindao",
		templateUrl:"controllers/yindao/yindao.html",
		controller:"yindaoController"
	})
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
	.state("details",{//详情
		url:"/details",
		templateUrl:"controllers/kecheng/details/details.html",
		controller:"detailsController",
        params: {
            id: null,
            category: null
        }
	})
	.state("wode",{
		url:"/wode",
		templateUrl:"controllers/wode/wode.html",
		controller:"wodeController"
	})
	.state("shezhi",{
		url:"/shezhi",
		templateUrl:"controllers/wode/wode_page/shezhi/shezhi.html",
		controller:"wodeshezhiCtrl"
	})
	.state("biji",{
		url:"/biji",
		templateUrl:"controllers/wode/wode_page/biji/biji.html",
		controller:"wodebijiCtrl"
	})
	.state("dingdan",{
		url:"/dingdan",
		templateUrl:"controllers/wode/wode_page/dingdan/dingdan.html",
		controller:"wodedingdanCtrl"
	})
	.state("kuaixun",{
		url:"/kuaixun",
		templateUrl:"controllers/wode/wode_page/kuaixun/kuaixun.html",
		controller:"wodekuaixunCtrl"
	})

	.state("kuaixundetail",{
		url:"/kuaixundetail",
		templateUrl:"controllers/wode/wode_page/kuaixundetail/kuaixundetail.html",
		controller:"wodekuaixundetailCtrl"
	})

	.state("denglu",{
		url:"/denglu",
		templateUrl:"controllers/wode/wode_page/denglu/denglu.html",
		controller:"dengluCtrl"
	})

	.state("pinglun",{
		url:"/pinglun",
		templateUrl:"controllers/wode/wode_page/pinglun/pinglun.html",
		controller:"wodepinglunCtrl"
	})

	.state("xiaoxi",{
		url:"/xiaoxi",
		templateUrl:"controllers/wode/wode_page/xiaoxi/xiaoxi.html",
		controller:"wodexiaoxiCtrl"
	})

	.state("xiugaipwd",{
		url:"/xiugaipwd",
		templateUrl:"controllers/wode/wode_page/xiugaipwd/xiugaipwd.html",
		controller:"wodexiugaipwdCtrl"
	})

	.state("zhuce",{
		url:"/zhuce",
		templateUrl:"controllers/wode/wode_page/zhuce/zhuce.html",
		controller:"zhuceCtrl"
	})
	.state("zsd",{
		url:"/zsd/:parent_id",
		templateUrl:"controllers/zhishidian/zsd/zsd.html",
		controller:"zsdController"
	})
	.state("zsd-xq",{
		url:"/zsd-xq/:category_id",
		templateUrl:"controllers/zhishidian/zsd-xq/zsd-xq.html",
		controller:"zsdxqController"
	})
	.state("xq",{
		url:"/xq/:id",
		templateUrl:"controllers/zhishidian/xq/xq.html",
		controller:"xqController"
	})
	.state("paper",{		//试卷详情
		url:"/paper/:year",
        templateUrl:"controllers/tiku/paper.html",
        controller:"paperController"
       
	})
	
})