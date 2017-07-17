angular.module("myApp.services", ["ngResource"])
    .factory('_', LodashFactory)
	.factory("homeService", homeService)
	.factory("getGeoCodeService", getGeoCodeService)
    .factory("getPlacesNearBy", getPlacesNearBy);

function LodashFactory($window) {
	if(!$window._){
		// If lodash is not available you can now provide a
		// mock service, try to load it from somewhere else,
		// redirect the user to a dedicated error page, ...
	}
	return $window._;
}

function homeService($resource) {
	return $resource("https://jsonplaceholder.typicode.com/posts");
}

function getGeoCodeService($resource) {
	return $resource("https://maps.googleapis.com/maps/api/geocode/json");
}

//location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=indian&key=AIzaSyDTg0F3V18OaZ-0r6vdPTEje5rSdKeuX_4
function getPlacesNearBy($resource) {
    return $resource("https://maps.googleapis.com/maps/api/place/nearbysearch/json");
}
