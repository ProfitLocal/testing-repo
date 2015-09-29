// onload functions
$(window).load(function() {
    checkOrientation();
    setHeight()
});

// on resize functions
$(window).resize(function() {
    checkOrientation();
    setHeight()
});

// On document ready functions
$(document).ready(function() {

    //initialize swiper when document ready  
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        slidesPerView: 2,
        spaceBetween: 0
    })

    //initialize swiper when document ready  
    var swiper = new Swiper('#banner', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });

    // menu navigation
    $('nav#menu').mmenu({
        extensions: ['effect-slide-menu', 'pageshadow'],
        navbar: {
            title: 'Kitbucket'
        },
        navbars: [{
            position: 'top',
            content: [
                'prev',
                'title',
                'close'
            ]
        }, {
            position: 'bottom',
            content: [
                '<a href="http://sumedhasoftech.com" target="_blank">Sumedha Softech</a>'
            ]
        }]
    });
	
    // search panel
    $('#searchPanel').mmenu({
        offCanvas: {
            position: "right",
        },
        searchfield: true,
        navbar: {
            title: 'Search products'
        },
        navbars: [{
            position: 'top',
            content: ['searchfield']
        }]
    });
	
    // filter panel
    $('#filterPanel').mmenu({
        offCanvas: {
            position: "right",
        },
        navbar: {
            title: 'Filter Products'
        }
    });

});

// check screen orientation
function checkOrientation() {
    if ($(window).width() > $(window).height()) {
        $("body").addClass('horizontal')
    } else {
        $("body").removeClass('horizontal')
    }
}

// set min-height of screen
function setHeight() {
    var wH = $(window).height();
    $(".minHeight").css('min-height', wH)
}