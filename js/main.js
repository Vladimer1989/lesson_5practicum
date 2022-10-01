$(function () {
	$('.slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	});

	$('.header-burger').on('click', function(){
		$('.menu').addClass('active');
	});

	$('.close-btn').on('click', function(){
		$('.menu').removeClass('active');
	});
});