angular.module('myApp', ['ui.router','myApp.services'])

.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/home");

  $stateProvider.state('home', {
    url: '/home',
    views: {
    	"main": {
    		controller: "home as vm",
    		templateUrl: 'src/home/home.html',
    		resolve: {
    			data: function call($q, $state, $timeout, homeService) {
    				var defer = $q.defer();
    				$timeout(function get() {
						homeService.query({}, function success(res) {
							defer.resolve(res);
						});
					}, 2000);
    				return defer.promise;
    			}
    		}
    	}
    }
  });

  $stateProvider.state('others', {
    url: '/others',
    views: {
    	"main": {
    		templateUrl: 'src/others.html'
    	}
    }
  });
});