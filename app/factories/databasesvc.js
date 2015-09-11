angular.module('app').factory("dataSVC", ["$http", "$location","$rootScope", function($http, $location,$rootScope) {
		var apiurl="http://122.160.153.14:183/";
        function getData(callback) {
            var url = apiurl+"api/Home/GetListProducts";
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
                    $http.post(url, {})
                    .success(function(result) {
                        callback(result);
                    })
                    .error(function(e, r, s,t,h) {	
						$rootScope.error='No internet connection available';
						$rootScope.appLoaded=false;
                    });
           
        }
		function getCategoryProduct(catid,sellerID,from,to,callback) {
            var url = apiurl+"api/Home/GetProductsByCatAndSellerId";
           
               // $http.defaults.headers.common.Authorization = 'Bearer ' + acToken.accessToken;
                $http.post(url, {CatId:catid,SellerID:sellerID,From:from,To:to})
                    .success(function(result) {
                        callback(result);
                    })
                    .error(function(e, r, s) {
						$rootScope.error='No internet connection available';
						$rootScope.appLoaded=false;
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
						$rootScope.error='No internet connection available';
						$rootScope.appLoaded=false;
                    });
           
        }
		function getSeller(pin,callback) {
            var url = apiurl+"api/Home/GetSellerListByPinCode";
           
               // $http.defaults.headers.common.Authorization = 'Bearer ' + acToken.accessToken;
                $http.post(url, {PinCode:pin})
                    .success(function(result) {
                        callback(result);
                    })
                    .error(function(e, r, s) {
						$rootScope.error='No internet connection available';
						$rootScope.appLoaded=false;
                    });
           
        }
		return {
			getData:getData,
			getCategories:getCategories,
			getCategoryProduct:getCategoryProduct,
			getSubCategory:getSubCategory,
			getSeller:getSeller
		}
}]);