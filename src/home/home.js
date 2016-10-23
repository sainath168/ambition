angular.module('myApp')
	.controller("home", function home($scope, data) {
	var vm = this;
	$scope.data = data;
});