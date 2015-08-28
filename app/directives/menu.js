//Sidebar Menu Handle
angular.module('app')
    .directive('sidebarMenu', function () {
        return {
            restrict: 'AC',
            link: function (scope, el, attr) {
                
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
	console.log($('nav#menu').size());
	//
	$('nav#menu').mmenu({
		extensions	: [ 'effect-slide-menu', 'pageshadow' ],
		searchfield	: true,
		counters	: true,
		navbar 		: {
			title		: 'Kitbucket'
		},
		navbars		: [
			{
				position	: 'top',
				content		: [ 'searchfield' ]
			}, {
				position	: 'top',
				content		: [
					'prev',
					'title',
					'close'
				]
			}, {
				position	: 'bottom',
				content		: [
					'<a href="http://sumedhasoftech.com" target="_blank">Sumedha Softech</a>'
				]
			}
		]
	}); 
            }
        };
    });
