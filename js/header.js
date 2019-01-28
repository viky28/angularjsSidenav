angular.module('demo.header',['ngMaterial', 'ngMessages'])
.controller('headerCtrl',['$scope', function($scope){
	$scope.toggleSidenav = function () {
        $mdSidenav('left-side-nav').toggle();
    };
}])