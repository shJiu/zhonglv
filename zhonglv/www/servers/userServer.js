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
        getuserId:function(){
            if(window.localStorage['user']){
                return JSON.parse(window.localStorage['user']).id
            }
        },
    	Login : function( options,successCallback,errorCallback ){
    		httpServer.post( "Account/Login",{

    			LoginName : options.userPhone,
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
    	},

        kx : function( options,successCallback,errorCallback ){
            httpServer.get( "Account/GetMessageList",{
                id : options.id,
                pageSize : options.pageSize,
                pageIndex : options.pageIndex
            },function( res ){
               
                successCallback(res.data);
            },function(error){
                errorCallback( error );
            })
        },
        pl : function( options,successCallback,errorCallback ){
            httpServer.get( "Comment/GetCommentList",{
                user_id : options.user_id,
                pagesize : options.pagesize,
                pageindex : options.pageindex
            },function( res ){
               
                successCallback(res.data);
            },function(error){
                errorCallback( error );
            })
        } ,


         Code : function( options,successCallback,errorCallback ){
            httpServer.post( "Account/RegisterSMSSend",{
                mobile : options.mobile
            },function( res ){
                console.log(res)
               // successCallback(res);
            },function(error){
               // errorCallback( error );
            })
        }

    }



} )