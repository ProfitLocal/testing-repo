angular.module('app').factory("dataSVC", ["$http", "$location", function($http, $location) {
		var apiurl="http://122.160.153.14:182/";
        function getData(callback) {
            var url = apiurl+"api/Home/GetListProducts";
           
               // $http.defaults.headers.common.Authorization = 'Bearer ' + acToken.accessToken;
                $http.post(url, {})
                    .success(function(result) {
                        callback(result);
                    })
                    .error(function(e, r, s,t,h) {
					alert(e)
					alert(r)
					alert(s)
					alert(t)
					alert(h)
callback(e);
                    });
           
        }
		function getCategories(callback) {
            var url = apiurl+"api/Home/GetListCategories";
           
               // $http.defaults.headers.common.Authorization = 'Bearer ' + acToken.accessToken;
                $http.post(url, {})
                    .success(function(result) {
                        callback(result);
                    })
                    .error(function(e, r, s,t,h) {
					console.log(e)
					console.log(r)
					console.log(s)
					console.log(t)
					console.log(h)
callback(e);
                    });
           
        }
		function getCategoryProduct(catid,from,to,callback) {
            var url = apiurl+"api/Home/GetProductsByCategoryId";
           
               // $http.defaults.headers.common.Authorization = 'Bearer ' + acToken.accessToken;
                $http.post(url, {CatId:catid,From:from,To:to})
                    .success(function(result) {
                        callback(result);
                    })
                    .error(function(e, r, s) {
callback(e);
                    });
           
        }
		function getSubCategory(catid,callback) {
            var url = apiurl+"api/Home/GetSubCategoriesById";
           
               // $http.defaults.headers.common.Authorization = 'Bearer ' + acToken.accessToken;
                $http.post(url, {CatId:catid})
                    .success(function(result) {
                        callback(result);
                    })
                    .error(function(e, r, s) {
callback(e);
                    });
           
        }
		return {
			getData:getData,
			getCategories:getCategories,
			getCategoryProduct:getCategoryProduct,
			getSubCategory:getSubCategory
		}
}]);