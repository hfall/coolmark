app.controller("HomeController", ['$scope', '$location', 'bookSearch', 'myService', 'bestService', function($scope, $location, bookSearch, myService, bestService){
$scope.website="CoolMark";
$scope.books= myService.book;
$scope.$watch('books', function(){
   myService.book= $scope.books; 
});
bestService.success(function(data){
    $scope.bestSearch= data;
});
$scope.submit= function () {
    if($scope.books === ''){
        alert('Field is empty');
        console.log($scope.books);
        return false;
    } 
    else {
        var valid= document.getElementById('check');
        valid.innerHTML= 'Your';
       console.log($scope.books); 
       bookSearch.getBooks($scope.books).success(function(data){
            $scope.searchResult = data;
        });
    }
};


}]);