$(document).ready(function(){
	$('.slider__slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 1000,
		easing: 'ease',
		infinite: false,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 1500,
		pauseOnHover: true,
		pauseOnFocus: false,
		draggable: false,
		swipe: true,
		centerMode: true,
	});
});