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