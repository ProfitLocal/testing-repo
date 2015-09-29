
app.controller('orderController', function($scope,$rootScope,dataSVC) {
	$rootScope.pageTitle='Kitbucket';
	$rootScope.backLink='#menu';
	$rootScope.backImage='glyphicon-menu-hamburger';
//        console.log($rootScope.$storage.user);
        if($rootScope.$storage.user.IsTempUser == false){
            $scope.checkOutLink = "#";
        }else{
            $scope.checkOutLink = "#/app/checkout";
        }
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
});