;(function($){
	$(function(){
		var slider=$('.ba-baner-slider');

		slider.slick({
			// dots: true,
   // 			infinite:false

		});
		console.log('good');
	});


	$(function(){
		var slider=$('.ba-slider');

		$('.ba-featured-slider').slick({
			dots: true,
   			infinite:false,
			arrow:false,
			prevArrow: false,
			nextArrow:false

		});
		console.log('good');
	});
})(jQuery);
