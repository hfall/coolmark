app.controller('SearchController', ['$scope', 'bookSearch', '$routeParams', 'myService' , 'bestService', function($scope, bookSearch, $routeParams, myService, bestService) {
$scope.books= myService.book;
bookSearch.getBooks($scope.books).success(function(data){
   $scope.bookInfo= data.items[$routeParams.id]; 
});
$scope.return= "Back Home";
bestService.success(function(data){
	$scope.detail_result= data.items[$routeParams.id];
});


  
}]);
