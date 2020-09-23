$(document).ready(function(){
    $(window).bind('scroll', function() {
		var navHeight = $('.main-header').height();
		if ($(window).scrollTop() > navHeight) {
			$('.nav-bar').addClass('fixed');
			$('.nav-1').addClass('toleft');
		 }
		else {
			$('.nav-bar').removeClass('fixed');
			$('.nav-1').removeClass('toleft');
		 }
	});

    $('.nav-bar a[href*="#"]').on('click', function(){
        $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top -100
        }, 1800);
    });

    $('.up').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
            }, 1800);
    })

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    })
});