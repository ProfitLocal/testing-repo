var PHONE_REGEXP = /^[(]{0,1}[0-9]{3}[)\.\- ]{0,1}[0-9]{3}[\.\- ]{0,1}[0-9]{4}$/;

app.controller('checkoutController', function($scope,$rootScope,dataSVC) {
	$rootScope.pageTitle='Kitbucket';
	$rootScope.backLink='#menu';
	$rootScope.backImage='glyphicon-menu-hamburger';
        $scope.showOtp = false;
        $scope.showMobile = true;
        $scope.errorMsg = "";
        $scope.msg = "";
	$scope.$on('ngRepeatFinished', function () {
            
   //initialize swiper when document ready  
  /*  var mySwiper = new Swiper ('.swiper-container', {
		// Optional parameters
		slidesPerView: 2,
		spaceBetween: 0
    })    
	
	//initialize swiper when document ready  
   var swiper = new Swiper('#banner', {
		pagination: '.swiper-pagination',
		paginationClickable: true
	});*/
	});
//        console.log($rootScope.$storage.seller.SellerID);
//	dataSVC.getFeaturedProduct($rootScope.$storage.seller.SellerID,function(d){
//                console.log(d)		
////                $scope.featuredProduts=d.data;					
//        })
    
    $scope.updateMobile = function(){
         if(PHONE_REGEXP.test($scope.phone)) {
             $scope.phoneField = false;
         }else{
             $scope.phoneField = true;
         }
         if(!$scope.phoneField){
             dataSVC.updateMobile($scope.phone,function(d){
                console.log(d);
                if(d.status== true){
                    $scope.showOtp = true;
                    $scope.showMobile = false;
                    $scope.errorMsg = "";
                    $rootScope.phone = $scope.phone;
                }else{
                    $scope.errorMsg = d.Message;
                }
            })
         }
        
    }
    $scope.otpVerification = function(){
         if($scope.otp.length > 0){
             dataSVC.otpVerification($scope.otp,function(d){
                console.log(d);
                if(d.status== true){
                    $scope.msg = d.Message;
                }else{
                    $scope.msg = d.Message;
                }
            })
         }
        
    }
});