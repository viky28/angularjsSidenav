angular.module('demo.register',[])
.controller('registerCtrl',['$scope','$location', function($scope,$location){
	$scope.gotoLogin = function(){
		$location.path('/')
	}
}])