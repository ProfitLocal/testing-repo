
app.controller('homeController', function($scope,$rootScope,dataSVC) {
	$rootScope.pageTitle='Kitbucket';
	$rootScope.backLink='#menu';
	$rootScope.backImage='glyphicon-menu-hamburger';
   //initialize swiper when document ready  
    var mySwiper = new Swiper ('.swiper-container', {
		// Optional parameters
		slidesPerView: 2,
		spaceBetween: 0
    })    
	
	//initialize swiper when document ready  
   var swiper = new Swiper('#banner', {
		pagination: '.swiper-pagination',
		paginationClickable: true
	});
});