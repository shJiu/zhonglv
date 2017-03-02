angular.module("app").controller("tikuController",function($scope,$http,$timeout, $ionicLoading,$ionicSlideBoxDelegate,httpServer){
	 // Setup the loader
	 // dataCont
	
	///httpServer.get(url,data,successCallback, errorCallback )
	httpServer.get("Question/GetQuestionCategory",{
		user_id : 1
	},function(data){
		
		//$scope.tikuNav=data.data.RetValue;
		//console.log( data.data.RetValue)
	var datas = data.data.RetValue;	//每一项数组
		//console.log(datas)
		$ionicSlideBoxDelegate.update();
	

	var arr = (function fn(arr,i){
			if(i<arr.length){
				arr[i].Navs=[];
				httpServer.get("Question/GetQuestionCategoryList",{
					parent_id: arr[i].id,
					user_id: 1
				},function(data){
					arr[i].Navs = data.data.RetValue;
					fn(arr,++i);
				});	

			}
			return arr;
			
		})(datas,0)
//console.log(arr)

	$scope.arr = arr;

	}, function(err){
		console.log("请求失败");
	} );


	//试题列表
	//Question/GetQuestionList?category_id="+61+"&user_id=1")
	//Question/GetQuestionCategoryList?parent_id="+id+"&user_id=1")
//	$scope.active=false;
	$scope.getList=function(i){
		//console.log(i)
		httpServer.get("Question/GetQuestionCategoryList",{
			parent_id : i,
			user_id: 1
		},function(data){
			//console.log( data.data.RetValue)
			$scope.dataCont=data.data.RetValue;
		},function(err){
			console.log("试题消失了")
		});

	 	//console.log(i)
	 	// if(i){
	 	// 	$scope.active=true;
	 	// }
	// 	$scope.active=true;


	}
	$scope.getList(56);


	//隐藏
	$scope.goHideFoot=function(){
		$scope.$emit("hideFoot",false);
	};

	
})
.directive("navs",function(){
	return {
		restrict: "A",
		scope: {
			click: "&"
		},
		link: function($scope){
			
			var navs = document.querySelectorAll(".tabs-nav");
			
				for(var i in navs){	
    			navs[i].onclick=function(e){
    				
    				//this.childrenNodes.className=" ";
    				var as = this.getElementsByTagName("a");
    				for(var i=0;i<as.length;i++){
    					as[i].className=" ";
    				}

					var thisA;

    				if(e.target.nodeName=="A"){
    					thisA = e.target
    				}else if(e.target.nodeName=="SPAN"){
    					thisA = e.target.parentNode
    				}else{
    					return false;
    				}

    				thisA.className="on";
    			}

    			}


		}
	}
})