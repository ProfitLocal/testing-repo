angular.module('app').factory("dataSVC", ["$http", "$location", function($http, $location) {
	
        function getData(callback) {
            var url = "http://122.160.153.14:182/api/Home/GetListProducts";
           
               // $http.defaults.headers.common.Authorization = 'Bearer ' + acToken.accessToken;
                $http.post(url, {})
                    .success(function(result) {
                        callback(result);
                    })
                    .error(function(e, r, s) {
callback(e);
                    });
           
        }
		
		return {
			getData:getData
		}
}]);