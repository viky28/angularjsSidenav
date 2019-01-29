angular.module('demo.user',['ngStorage'])
.controller('userCtrl',['$scope','$localStorage', function($scope,$localStorage){
	$scope.title = "This is user page"
	console.log('storage data is',$localStorage.userData)
}])