angular.module("app").controller("zhishidianController",["$scope",function($scope){

	$scope.butshow = true;
    $scope.toggle= function(index){
    	$scope.butshow = !($scope.butshow);
	}

	var inp=document.getElementById('zsd_inputtxt'),
		inpbox=document.getElementById("inpbox"),
		qxbtn=document.getElementsByClassName('zsd_btn_ml');

	inp.onfocus=function(){
		inpbox.style.width=77+"%";
	}
	qxbtn[0].onclick=function(){
		inpbox.style.width=100+"%";
	}

	/*//搜索框获取焦点改变宽度
	$("#zsd_inputtxt").on("focus",function(){
		$(".zsd_ss div").animate({width:"78%"},500)
		$(".zsd_con").hide()
	})
		
	//点击取消搜索框宽度变为100%
	$(".zsd_btn_ml").on("click",function(){
		$(".zsd_ss div").animate({width:"100%"},500)
		$(".zsd_con").show()
	})

	//点击ol下的li显示隐藏列表
	$(".zsd_con_list_tit").on("click",function(){
		$(this).toggleClass("hide")
		$(this).next().slideToggle("slow")
	})*/


}])