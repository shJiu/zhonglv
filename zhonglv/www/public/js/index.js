angular.module('app', ['ionic'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
<<<<<<< HEAD


})
.controller("appCtrl",function($scope){
	$scope.show=true;
	$scope.$on("hideFoot",function(event,data){
		console.log(data)
		    $scope.show=data;
		
	});
 $scope.showfoot=function(){
       $scope.show=true;
 }

})
=======
  
})
/*.controller("appCtrl",function($scope){
	$scope.show=false;
	console.log($scope.show)
	
  $scope.$on("showbar",function(event,data){
  	console.log(data)
  	$scope.show=data;
  })
})*/
>>>>>>> 219ec334cecb3c6ed091ec9c22c12382fad6bab8
