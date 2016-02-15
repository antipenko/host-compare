;(function($){
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
