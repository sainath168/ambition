angular.module("myApp.services", ["ngResource"])
	.factory("homeService", homeService);

function homeService($resource) {
	return $resource("https://jsonplaceholder.typicode.com/posts");
}