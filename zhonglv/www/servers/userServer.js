angular.module("app").factory( "userServer",function( httpServer,$ionicPopup ){

	
    return {
    	Register : function( options,successCallback,errorCallback ){
    		httpServer.post( "Account/Register",{
    			LoginMobile : options.LoginMobile,
    			LoginCode : options.LoginCode, 
    			Pwd : options.Pwd
    		},function( res ){
    			successCallback(res);
    		},function(error){
    			errorCallback( error );
    		})
    	},
        kechi : function( options,successCallback,errorCallback ){
            httpServer.get( "Course/GetCourseList",{
                user_id : options.user_id,
                category_id : options.category_id,
                pagesize : options.pagesize,
                pageindex : options.pageindex 
            },function( res ){
                successCallback(res);
            },function(error){
                errorCallback( error );
            })
        },
        detali : function( options,successCallback,errorCallback ){
            httpServer.get( "Course/GetCourseMain",{
                id : options.id,
                user_id : options.user_id
            },function( res ){
                successCallback(res);
            },function(error){
                errorCallback( error );
            })
        },
    	Login : function( options,successCallback,errorCallback ){
    		httpServer.post( "Account/Login",{
    			LoginName : options.LoginName,
    			Pwd : options.Pwd
    		},function( res ){
    			if( res.data.RetValue ){
    				window.localStorage['user'] = JSON.stringify(res.data.RetValue);
    			}else{
    				var alertPopup = $ionicPopup.alert({
				       title: '提示',
				       template: res.data.description
				     });
				     alertPopup.then(function(res) {
				       console.log('Thank you for not eating my delicious ice cream cone');
				     });
    			}
    			successCallback(res.data);
    		},function(error){
    			errorCallback( error );
    		})
    	}
    }



} )