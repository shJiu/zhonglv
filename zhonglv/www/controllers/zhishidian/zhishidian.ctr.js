angular.module("app")
.controller("zhishidianController",function($scope,$http,httpServer,userServer,knowledgeServer){
	var userId=userServer.getUserId()

	$scope.viewMenu=[];

	function getSubList(key,menuSubList){
		for(var i=0;i<menuSubList.length;i++){
			(function(i){
				knowledgeServer.getSubMenuCategory({
					parent_id:menuSubList[i].id,
					user_id:userId
				},function(data2){
					$scope.viewMenu[key]["menu"][i].subMenu=data2.RetValue;
				})
			})(i)
		}
		
	}

	knowledgeServer.getTitleCategory({
		user_id:userId
	},function(data){
		$scope.viewMenu=data.RetValue;
		for(var key in $scope.viewMenu){
			(function(i){
				knowledgeServer.getMenuCategory({
					parent_id:$scope.viewMenu[i].id,
					user_id:userId
				},function(data2){
					$scope.viewMenu[i].menu=data2.RetValue;
					getSubList(i,$scope.viewMenu[i].menu)
				})
			})(key)
		}
	})

	   //搜索框获取焦点改变宽度
	$("#zsd_inputtxt").on("focus",function(){
		$(".zsd_ss div").animate({width:"78%"},500)
		$(".zsd_con").hide()
	})
		
	//点击取消搜索框宽度变为100%
	$(".zsd_btn_ml").on("click",function(){
		$(".zsd_ss div").animate({width:"100%"},500)
		$(".zsd_con").show()
	})	

	
})

.directive("toggleClass",function(){
	return{
		restrict:"A",
		scope:{
			toggleClass:"@"
		},
		link:function($scope,$element){
			$element.on("click",function(){
				$element.toggleClass($scope.toggleClass)
			})
		}
	}
})