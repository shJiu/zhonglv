angular.module("app").controller("tikuController",function($scope,$http,$timeout, $ionicLoading){
	 // Setup the loader
	 $scope.data=[
	 	{
	 		id: 1,
	 		title: "历年<br/>真题"
	 	},
	 	{
	 		id: 2,
	 		title: "分科<br/>真题"
	 	},
	 	{
	 		id: 3,
	 		title: "模拟<br/>试卷"
	 	},
	 	{
	 		id: 4,
	 		title: "题海<br/>实战"
	 	},
	 	{
	 		id: 5,
	 		title: "主观<br/>题"
	 	},

	 ];

	 $http.get("http://119.10.11.121:8587/Api/Question/GetQuestionCategory?user_id=2")
	 	.then(function(data){
	 		$scope.tikuNav=data.data.RetValue;
	 		console.log(data.data.RetValue)
	 });

	 $scope.getCont=function(index){
	 	console.log(index)
	 	 $ionicLoading.show({
		    content: 'Loading',
		    animation: 'fade-in',
		    showBackdrop: true,
		    maxWidth: 200,
		    showDelay: 0
		  });
	 }
	 
	   $timeout(function () {
	    $ionicLoading.hide();
	  //  $scope.stooges = [{name: 'Moe'}, {name: 'Larry'}, {name: 'Curly'}];
	  }, 2000);
})