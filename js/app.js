var app = angular.module('coolMark', ['ngRoute']);

// ADDING LOADING GRAPHIC FOR SEARCH USING CUSTOM DIRECTIVE
app.directive('loading', ['$http', function($http){
	return {
		restrict: 'A',
		link:function(scope, element, attrs){
			scope.isLoading = function(){
				return $http.pendingRequests.length > 0;
			};
			scope.$watch(scope.isLoading, function(value) {
				if(value) {
					element.removeClass('ng-hide');
				} else {
					element.addClass('ng-hide');
				}
			});
		}
	};
}]);

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