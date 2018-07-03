
// Slider
(function(){
function slider(sliderName, velocidade) {
	var sliderClass = '.' + sliderName,
			activeClass = 'active',
			rotate = setInterval(rotateSlide, velocidade);
	
	$(sliderClass + ' > :first').addClass(activeClass);

	function rotateSlide() {
		var activeSlide = $(sliderClass + ' > .' + activeClass),
				nextSlide = activeSlide.next();

		if(nextSlide.length == 0) {
			nextSlide = $(sliderClass + ' > :first');
		}
        
		activeSlide.removeClass(activeClass);
		nextSlide.addClass(activeClass);
	} 
}

slider('avaliacoes', 4000);
})();

$('.mobile-btn').click(function(){
	$(this).toggleClass('active');
	$('.mobile-menu').toggleClass('active');
});

















