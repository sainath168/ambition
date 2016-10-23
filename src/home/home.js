angular.module('myApp')
	.controller("home", function home($scope, homeService, $timeout) {
	var vm = this;
	getData();

	function getData() {
		$timeout(function get() {
			$scope.data = homeService.query();
		}, 2000);
	}

});