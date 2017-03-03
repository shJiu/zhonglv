
angular.module("app")
.controller("wodexiugaipwdCtrl",function( $scope,userServer ){

	$scope.xiuGai=function(){
		
		userServer.xiugaipwd({
			old_password:this.oldPwd,
			new_password:this.newPwd
		},function(){

		},function(){

		})
	}
})