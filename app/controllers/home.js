
app.controller('homeController', function($scope,dataSVC) {
$scope.data=[];
dataSVC.getData(function(d){
	console.log(d);
	$scope.data=d.data;
});
         
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