// JavaScript Document
$( window ).load(function() {
  
  checkOrientation();
  setHeight()
  
});
$( window ).resize(function() {

  checkOrientation();
  setHeight()
  
});
$( document ).ready(function() {
  // Run code
  
});

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