//Sidebar Menu Handle
angular.module('app')
    .directive('swiperproduct', function () {
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
            templateUrl: 'views/partials/swiper_product.html',
            replace: true,
            controller: 'swiperProductCtrl',
            controllerAs: 'ctrl'
        };
    })	
    .controller('swiperProductCtrl', ['$scope', "dataSVC","$timeout","$rootScope","$filter", function($scope, dataSVC,$timeout,$rootScope,$filter) {
        var self = this;
		self.data=[];
		self.loadData=function(){
//		dataSVC.getData(function(d){
dataSVC.getFeaturedProduct($rootScope.$storage.seller.SellerID,function(d){
			self.data=d.data;
                        console.log($rootScope.cart);
                        for(var i=0;i<self.data.length;i++){
                            if($rootScope.cart.itemCount > 0){
                                if($rootScope.cart.items != undefined){
                                    var obj=($filter('filter')($rootScope.cart.items, self.data[i].SellerProductID, false));				
                                    if(obj.length>0){
                                            self.data[i].Qnt=obj[0].Qnt;
                                    }
                                }
                            }
                        }
                        console.log(self.data);
				  $timeout(function(){
//					  console.log(d.data)
					 var mySwiper = new Swiper ('.swiper-container', {
		// Optional parameters
		slidesPerView: 2,
		spaceBetween: 0
    })    
	
	//initialize swiper when document ready  
   var swiperproduct = new Swiper('#banner', {
		pagination: '.swiper-pagination',
		paginationClickable: true
	});
   
	},1000);
		});
		
		}
		self.loadData()
	}]);
