angular.module("app").controller("kechengController",function($scope,$http,$q,$timeout,$ionicLoading,httpServer,userServer){
	
	//头部数据

	httpServer.get("Course/GetCourseCategory",{
		user_id:1
	},function(data){
		$scope.kechengTitle=data.data.RetValue;
		//console.log(data.data.RetValue)
	},function(){
		console.log("数据请求失败")
	});
	
	list(84);
	//列表
	function list(id){
		//console.log(id);
		userServer.kechi({
			user_id :1,
			category_id : id,
			pagesize :20,
			pageindex:5
		},function(data){
			if(data.data.RetValue==null){
				alert("没有数据");
			}else{
				//console.log(data.data.RetValue);
				$scope.listNav=data.data.RetValue;
			}			
		},function(){
			console.log("数据请求失败");
		})
	}






	$scope.data = {
        current: "84" 
    };            
    $scope.actions =function(param,index){
    	 $scope.data.current = param;
    	 list(param);
    	 console.log(param+"===="+index)
    }
	
})
/*.run(function ($rootScope) {
    $rootScope.data = {
        current: "84" 
    };            
    $rootScope.actions =function(param,index){
    	 $rootScope.data.current = param;
    	 console.log(param+"===="+index)
    }
    {
        setCurrent: function (param) {
            $rootScope.data.current = param;
        }
    }
})*/