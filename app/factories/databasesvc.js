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
            var url = apiurl+"api/Home/GetSellerByAreaId";
           
               // $http.defaults.headers.common.Authorization = 'Bearer ' + acToken.accessToken;
                $http.post(url, {AreaID:pin})
                    .success(function(result) {
                        callback(result);
                    })
                    .error(function(e, r, s) {
						$rootScope.error='No internet connection available';
						$rootScope.appLoaded=false;
                    });
           
        }
        function getFeaturedProduct(sellerID,callback){
            var url = apiurl+"api/Home/GetFeaturedProduct";
           
               // $http.defaults.headers.common.Authorization = 'Bearer ' + acToken.accessToken;
            $http.post(url, {sellerid:sellerID})
                .success(function(result) {
                    console.log(result);
                    callback(result);
                })
                .error(function(e, r, s) {
                                            $rootScope.error='No internet connection available';
                                            $rootScope.appLoaded=false;
                });
        }
        function getPackageProduct(sellerID,callback){
            var url = apiurl+"api/Home/GetPackageByUserID";
           
               // $http.defaults.headers.common.Authorization = 'Bearer ' + acToken.accessToken;
            $http.post(url, {sellerid:sellerID})
                .success(function(result) {
                    callback(result);
                })
                .error(function(e, r, s) {
                                            $rootScope.error='No internet connection available';
                                            $rootScope.appLoaded=false;
                });
        }
        function getUser(deviceid,Platform,GCMRegistrationKey,callback){
            //var randomnumber = Math.floor((Math.random()*6)+1);
            var url = apiurl+"api/Home/SetupUser";
                    $http.post(url, {deviceid:"22569",Platform:"Android",GCMRegistrationKey:""})
                    .success(function(result) {
						console.log(result)
                        callback(result);
                    })
                    .error(function(e, r, s,t,h) {	
						$rootScope.error='No internet connection available';
						$rootScope.appLoaded=false;
                    });
        }
        function addToCart(p,IsPackage,callback){
//            console.log(p);
            if($rootScope.$storage.orderId == null){
                var orderId = 0;
            }else{
                var orderId = $rootScope.$storage.orderId;
            }
            var url = apiurl+"api/Home/AddToCart";
                    $http.post(url, {SellerProductID:p.SellerProductID,Quantity:1,SellerId:$rootScope.$storage.seller.SellerID,IsPackage:IsPackage,UserId:$rootScope.$storage.user.UserID,TempOrderID:orderId})
                    .success(function(result) {
                        callback(result);
                    })
                    .error(function(e, r, s,t,h) {	
						$rootScope.error='No internet connection available';
						$rootScope.appLoaded=false;
                    });
        }
        function removeFromCart(p,IsPackage,callback){
//           console.log(p);
            if($rootScope.$storage.orderId == null){
                var orderId = 0;
            }else{
                var orderId = $rootScope.$storage.orderId;
            }
            
                    if(p.Qnt > 1){
                        var url = apiurl+"api/Home/UpdateProductFromcart";
                        $http.post(url, {SellerProductID:p.SellerProductID,quantity:1,IsPackage:IsPackage,TempOrderID:orderId})
                        .success(function(result) {
                            callback(result);
                        })
                        .error(function(e, r, s,t,h) {	
                                                    $rootScope.error='No internet connection available';
                                                    $rootScope.appLoaded=false;
                        }); 
                    }else{
                        var url = apiurl+"api/Home/RemoveProductFromeCart";
                        $http.post(url, {SellerProductID:p.SellerProductID,IsPackage:IsPackage,TempOrderID:orderId})
                        .success(function(result) {
                            callback(result);
                        })
                        .error(function(e, r, s,t,h) {	
                                                    $rootScope.error='No internet connection available';
                                                    $rootScope.appLoaded=false;
                        }); 
                    }
                    
        }
        function updateArea(areaId,callback){
           var url = apiurl+"api/Home/UpdateArea";
            $http.post(url, {AreaId:areaId,Userid:$rootScope.$storage.user.UserID})
            .success(function(result) {
                callback(result);
            })
            .error(function(e, r, s,t,h) {	
                                        $rootScope.error='No internet connection available';
                                        $rootScope.appLoaded=false;
            });  
        }
        function updateSeller(sellerId,callback){
           var url = apiurl+"api/Home/UpdateSeller";
            $http.post(url, {sellerId:sellerId,Userid:$rootScope.$storage.user.UserID})
            .success(function(result) {
                callback(result);
            })
            .error(function(e, r, s,t,h) {	
                                        $rootScope.error='No internet connection available';
                                        $rootScope.appLoaded=false;
            });  
        }
        function getProductOfCartByUserId(callback){
            var url = apiurl+"api/Home/GetProductOfCartByUserId";
            $http.post(url, {Userid:$rootScope.$storage.user.UserID})
            .success(function(result) {
                callback(result);
            })
            .error(function(e, r, s,t,h) {	
                                        $rootScope.error='No internet connection available';
                                        $rootScope.appLoaded=false;
            });   
        }
        function updateMobile(phone,callback){
             var url = apiurl+"api/Home/UpdateMobile";
            $http.post(url, {UserID:$rootScope.$storage.user.UserID,UserName:phone,Deviceid:"22569",Platform:"Android",GCMRegistrationKey:""})
            .success(function(result) {
                callback(result);
            })
            .error(function(e, r, s,t,h) {	
                                        $rootScope.error='No internet connection available';
                                        $rootScope.appLoaded=false;
            }); 
        }
        function otpVerification(otp,callback){
            var url = apiurl+"api/Home/OTPVerfication";
            $http.post(url, {UserName:$rootScope.phone,otp:otp})
            .success(function(result) {
                callback(result);
            })
            .error(function(e, r, s,t,h) {	
                                        $rootScope.error='No internet connection available';
                                        $rootScope.appLoaded=false;
            }); 
        }
		return {
			getData:getData,
			getCategories:getCategories,
			getCategoryProduct:getCategoryProduct,
			getSubCategory:getSubCategory,
			getSeller:getSeller,
                        getFeaturedProduct:getFeaturedProduct,
                        getPackageProduct:getPackageProduct,
                        getUser:getUser,
                        addToCart:addToCart,
                        removeFromCart:removeFromCart,
                        updateArea:updateArea,
                        updateSeller:updateSeller,
                        getProductOfCartByUserId:getProductOfCartByUserId,
                        updateMobile:updateMobile,
                        otpVerification:otpVerification
		}
}]);