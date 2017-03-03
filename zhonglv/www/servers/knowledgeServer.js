angular.module("app").factory( "knowledgeServer",function( httpServer,$ionicPopup ){

    return {
        //获取标题
    	getTitleCategory : function( opt,successCallback){
    		httpServer.get( "Knowledge/GetKnowledgeCategory",{
    			user_id:opt.user_id
    		},function( data ){
    			successCallback(data.data);
    		})
    	},
        getMenuCategory : function( opt,successCallback){
            httpServer.get( "Knowledge/GetKnowledgeCategory",{
                user_id:opt.user_id,
                parent_id:opt.parent_id
            },function( data ){
                successCallback(data.data);
            })
        },
        getSubMenuCategory : function(opt,successCallback){
            httpServer.get( "Knowledge/GetKnowledgeCategoryList",{
                user_id:opt.user_id,
                parent_id:opt.parent_id
            },function( data ){
                successCallback(data.data);
            })
        },
        GetKnowledgeList : function(opt,successCallback){
            httpServer.get( "Knowledge/GetKnowledgeList",{
                user_id:opt.user_id,
               category_id:opt.category_id
            },function( data ){
                successCallback(data.data);
            })
        },
        GetKnowledgeMain : function(opt,successCallback){
            httpServer.get( "Knowledge/GetKnowledgeMain",{
                user_id:opt.user_id,
               id:opt.id
            },function( data ){
                successCallback(data.data);
            })
        }
    }
} )