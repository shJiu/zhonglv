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
  
})
/*.controller("appCtrl",function($scope){
	$scope.show=false;
	console.log($scope.show)
	
  $scope.$on("showbar",function(event,data){
  	console.log(data)
  	$scope.show=data;
  })
})*/