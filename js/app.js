var app = angular.module('coolMark', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: "HomeController",
		templateUrl: "views/home.html"
	})
	.when('/search/:id', {
		controller: "SearchController",
		templateUrl: "views/search.html"
	})
	.when('/topsell/:id', {
		controller:"SearchController",
		templateUrl:"views/topsell.html"
	})
	.otherwise({redirectTo: "/"});
});