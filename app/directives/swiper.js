//Sidebar Menu Handle
angular.module('app')
    .directive('swiper', function () {
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
            scope: {
            },
            templateUrl: 'views/partials/swiper.html',
            replace: true,
            controller: 'swiperCtrl',
            controllerAs: 'ctrl'
        };
    })	
    .controller('swiperCtrl', ['$scope', "dataSVC","$timeout", function($scope, dataSVC,$timeout) {
        var self = this;
		self.data=[];
		dataSVC.getData(function(d){
		
				alert(d.Message);
			self.data=d.data;
				  $timeout(function(){
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
	},1000);
		});
	}]);
