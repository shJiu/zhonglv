angular.module("app").factory( "userServer",function( httpServer,$ionicPopup,$state){

    return {
        //注册
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

        
        //登录

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
        //个人设置
       amend : function( options,successCallback,errorCallback ){
            httpServer.post( "Account/UpdateUserInfo",{
                id:JSON.parse(window.localStorage['user']).id,
                nick_name : options.username, 
                msn : options.msn,
                qq :options.qq,
                email:options.email 
            },function( res ){
                if(res.data.title=="成功"){
                    window.localStorage['user'] = JSON.stringify(res.config.data)
                    var alertPopup = $ionicPopup.alert({
                       title: '提示',
                       template: "修改成功"
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

        getUserId:function(){
            if(window.localStorage['user']){
                return JSON.parse(window.localStorage['user']).id
            }
        },
        //修改密码
        xiugaipwd:function(options,successCallback,errorCallback){
            httpServer.post("Account/UpdateUserPassWord",{
                id:JSON.parse(window.localStorage['user']).id,
                old_password:options.old_password,
                new_password:options.new_password
            },function(res){
                console.log(res)
                if(res.data.title=="成功"){
                    window.localStorage['user'] = JSON.stringify(res.config.data)
                    var alertPopup = $ionicPopup.alert({
                       title: '提示',
                       template: res.data.description
                     });
                     alertPopup.then(function(res) {
                       console.log('Thank you for not eating my delicious ice cream cone');
                     });
                }
            },function(err){

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

        }, 

        photo : function( options,successCallback,errorCallback ){
            httpServer.post( "Account/UpdateUserAvatar",{
                id : options.id,
                avatar : options.avatar
            },function( res ){
                
               successCallback(res);
            },function(error){
               errorCallback( error );
            })
        },



        //发送验证码
         Code : function( options,successCallback,errorCallback ){
            httpServer.post( "Account/RegisterSMSSend",{
                mobile : options.mobile
            },function( res ){
                console.log(res)
                successCallback(res);
            },function(error){
                errorCallback( error );
            })
        },
        //忘记密码
        remPwd:function(options,successCallback,errorCallback){
            httpServer.post("Account/RepassSmsSend",{
                mobile:options.userPhone
            },function(res){
               console.log(res)
                successCallback(res);
            },function(error){
               // cosnole.log(error)
                 errorCallback( error );
            })
        }

    }



} )