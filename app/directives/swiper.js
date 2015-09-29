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
            restrict: 'E',
            scope: {
				index:"="
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
		self.loadData=function(){
		dataSVC.getData(function(d){
			self.data=d.data;
				  $timeout(function(){
					  console.log(d.data)
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
		
		}
		self.loadData()
	}]);
