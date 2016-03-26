app.factory('bookSearch', ['$http', function($http){
    var factory = {};
    factory.getBooks = function(info){
       return $http.get('https://www.googleapis.com/books/v1/volumes?q='+info+'&orderBy=relevance&filter=ebooks&startIndex=0&maxResults=21&key=AIzaSyCpWB1q0-kqFEH9f5Sh8xUrXfrhoxAG7wk')
    };
    return factory;
}]);
app.factory('bestService', ['$http', function($http){
	return $http.get('https://www.googleapis.com/books/v1/volumes?q=bestsellers&orderBy=newest&filter=ebooks&startIndex=0&maxResults=10&key=AIzaSyCpWB1q0-kqFEH9f5Sh8xUrXfrhoxAG7wk')
		.success(function(data){
			return data;
		})
		.error(function(err){
			return err;
		});
}]);
app.service('myService', function(){
   this.book= ""; 
});

