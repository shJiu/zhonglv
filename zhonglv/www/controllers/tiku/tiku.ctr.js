angular.module("app").controller("tikuController",function($scope,$http,$timeout, $ionicLoading,$ionicSlideBoxDelegate){
	 // Setup the loader
	 
	 $http.get("http://119.10.11.121:8587/Api/Question/GetQuestionCategory?user_id=1")
	 	.then(function(data){
	 		$scope.tikuNav=data.data.RetValue;
	 		console.log(data.data.RetValue)
	 		$ionicSlideBoxDelegate.update();

	 });

	 // $scope.getCont=function(index){
	 // 	console.log(index)
	 // 	 $ionicLoading.show({
		//     content: 'Loading',
		//     animation: 'fade-in',
		//     showBackdrop: true,
		//     maxWidth: 200,
		//     showDelay: 0
		//   });
	 // }
	 
	 //   $timeout(function () {
	 //    $ionicLoading.hide();
	 //  //  $scope.stooges = [{name: 'Moe'}, {name: 'Larry'}, {name: 'Curly'}];
	 //  }, 2000);
})