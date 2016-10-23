angular.module('myApp', ['ui.router','myApp.services'])

.config(function($stateProvider) {
  
  $stateProvider.state('home', {
    url: '/home',
    views: {
    	"main": {
    		controller: 'home as vm',
    		templateUrl: 'src/home/home.html'
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