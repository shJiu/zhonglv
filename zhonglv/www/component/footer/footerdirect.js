angular.module("app").directive("footerDirective",function(){
	return {
		restrict:"E",
		replace:true,
		templateUrl:"./component/footer/footer.html"
	}
})