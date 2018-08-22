/*global $, window*/
$(function () {
    "use strict";
	// Tooltip
	$(function () {

		$('[data-toggle="tooltip"]').tooltip();
	});

	// Show and Hide Navbar
	$(window).scroll(function () {

		if ($(window).scrollTop() < 80) {
			$('.navbar').css({
				'margin-top': '-100px',
				'opacity': '0'
			});
		} else {
			$('.navbar').css({
				'margin-top': '0px',
				'opacity': '1',
				'background-color': 'rgba(59, 59, 59, .7)'
			});
		}
	});
    
    // Smooth Scroll
    $('.navbar-nav li a').click(function () {
       
        $('html, body').animate({
           
            scrollTop: $('#' + $(this).data('value')).offset().top - 60
            
        }, 1000);
        
    });
    
    
    // Back To Top
    $('.scroll-top').click(function () {

        $('html, body').animate({
           
            scrollTop: "0"
            
        }, 1500);

    });
    

	// Active Menu Item On Click
	$(".navbar .navbar-nav li a").click(function () {
		
		$(".navbar-nav li a").parent().removeClass("active");
		$(this).parent().addClass("active");

	});


	// Highlight Menu Item On Scroll
	$(window).scroll(function () {

		$("section").each(function () {

			var dd = $(this).attr('id'),
				hei = $(this).outerHeight(),
				grttop	= $(this).offset().top - 70;

			if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {

				$(".navbar .navbar-nav .nav-item a[href='#" + dd + "']").parent().addClass('active');

			} else {

				$(".navbar-nav .nav-item a[href='#" + dd + "']").parent().removeClass('active');

			}
		});
	});
    
    // Back To Top
    $('.Scroll-top').click(function () {

        $('html, body').animate({
           
            scrollTop: "0"
            
        }, 1500);

    });

    // Add Auto Padding To Header
    setInterval(function () {

        var winHeight = $(window).height(),
            containerHeight = $('.header-container').height(),
            padTop = winHeight - containerHeight;
        
        $('.header-container').css({

            'padding-top': Math.round( padTop / 2 ) + 'px',
            'padding-bottom': Math.round( padTop / 2 ) + 'px'

        });
        
    }, 10);


    // BxSlider
    $('.slider').bxSlider({
    	slideWidth: 340,
    	auto: true,
    	minSlides: 1,
    	maxSlides: 3,
    	slideMargin: 50,
    	controls: false
    });

    // Add Counter
    $('.counter-num').counterUp({
    	delay: 10,
    	time: 2000
    });

    // Add Wow and Animate
    new WOW().init();
});