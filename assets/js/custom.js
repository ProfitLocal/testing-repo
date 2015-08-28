// JavaScript Document
$( window ).load(function() {
  checkOrientation();
  setHeight()  
});

//
$( window ).resize(function() {
  checkOrientation();
  setHeight() 
});
//
$(window).load(function() {

	"use strict";

	 $('#preloader').delay(400).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('#preloader .wc_loading').fadeOut();
	
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
	
})
// check screen orientation
function checkOrientation(){
	if($( window ).width() > $( window ).height()){
		$("body").addClass('horizontal')
	}
	
	else
	{
		$("body").removeClass('horizontal')
	}
}

// set min-height of screen
function setHeight(){
	var wH = $(window).height();
	$(".minHeight").css( 'min-height' , wH )
}