angular.module('demo.login',['ngStorage','ngMessages'])
.controller('loginCtrl',['$scope','$location','$http','$localStorage','$timeout', function($scope,$location,$http,$localStorage,$timeout){

	$scope.doLogin = function(){
		$http.get('credentials.json')
		.then(function(data){
			console.log('success',data)
			angular.forEach(data.data, function(v,k){
				if($scope.user.email===v.email && $scope.user.password===v.password){
					$localStorage.userData = {email:v.email,password:v.password}
					$location.path('/user')
					return;
				} else {
					$scope.errorMsg = "Wrong Credentials !";
					$timeout(function(){
						$scope.errorMsg = "";
					},2000)
				}
			})
		},function(error){
			console.log('error',error)
		})
	}
	$scope.gotoRegister = function(){
		$location.path('/register')
	}
}])
