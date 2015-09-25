//Sidebar Menu Handle
angular.module('app')
    .directive('swiperpackage', function () {
       /* return {
            restrict: 'E',
            link: function (scope, el, attr) {
                
   //initialize swiper when document ready  
    var mySwiper = new Swiper ('.swiper-container', {
		// Optional parameters
		slidesPerView: 2,
		spaceBetween: 0
    })    
	
            }
        };*/
		return {
            restrict: 'E',
            scope: {
				index:"="
            },
            templateUrl: 'views/partials/swiper_package.html',
            replace: true,
            controller: 'swiperPackageCtrl',
            controllerAs: 'ctrl'
        };
    })	
    .controller('swiperPackageCtrl', ['$scope', "dataSVC","$timeout","$rootScope", function($scope, dataSVC,$timeout,$rootScope) {
        var self = this;
		self.data=[];
		self.loadData=function(){
//		dataSVC.getData(function(d){
dataSVC.getPackageProduct($rootScope.$storage.seller.SellerID,function(d){
			self.data=d.data;
				  $timeout(function(){
					  console.log(d.data)
					 var mySwiper = new Swiper ('.swiper-container', {
		// Optional parameters
		slidesPerView: 2,
		spaceBetween: 0
    })    
	
	//initialize swiper when document ready  
   var swiperpackage = new Swiper('#banner', {
		pagination: '.swiper-pagination',
		paginationClickable: true
	});
   
	},1000);
		});
		
		}
		self.loadData()
	}]);
