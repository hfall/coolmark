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
        return false;
    } 
    else {
        // If search field is empty, render 'no'. Otherwise change to 'Your' when search is not empty 
        var valid= document.getElementById('check');
        valid.innerHTML= 'Your';
       console.log($scope.books); 
       bookSearch.getBooks($scope.books).success(function(data){
            $scope.searchResult = data;
        });
    }
};


}]);