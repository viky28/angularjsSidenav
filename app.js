var app = angular.module('demo',
	[
		'ui.router',
		'demo.register',
		'demo.login',
		'demo.vendor',
		'demo.user',
		'demo.header',
		'demo.sidebar',
		'common'
	]);
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('login', {
		url: "/",
		views : {
			"" : {
				templateUrl:"login/login.html"
			},
			"header@login":{
				templateUrl:"header/loginHeader.html"
			}
		}
	})
	.state('register', {
		url: "/register",
		views : {
			"" : {
				templateUrl:"register/register.html"
			},
			"header@register":{
				templateUrl:"header/loginHeader.html"
			}
		}
	})
	.state('vendor', {
		url: "/vendor",
		views : {
			"" : {
				templateUrl:"vendor/vendor.html"
			},
			"header@vendor":{
				templateUrl:"header/contentHeader.html"
			}
		}
	})
	.state('user', {
		url: "/user",
		views : {
			"" : {
				templateUrl:"user/user.html"
			},
			"header@user":{
				templateUrl:"header/contentHeader.html"
			}
		}
	})
})
.controller('mainCtrl',['$scope','$location','$rootScope', function($scope,$location,$rootScope){
	var local = JSON.parse(localStorage.getItem('userData'));
	$rootScope.local = local;
	$rootScope.Logout = function(){
		localStorage.clear();
		$location.path('/')
	}
}])
.run(function($rootScope,$location){
	var local = JSON.parse(localStorage.getItem('userData'));
	if(local){
		if(local.userType==="customer"){
			$location.path('/customer')
		} else if(local.userType==="agent") {
			$location.path('/agent')
		}
	}
})