// Debounce do Lodash
$( document ).ready(function() {
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// Animação ao Scroll

(function(){
	var $target = $('[data-anime="scroll"]'),
        $target2 = $('[data-anime2="scroll"]'),
			animationClass = 'animate',
			offset = $(window).height() * 4/5;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			}
		});
        
        $target2.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 20));
})();


    TweenMax.staggerFrom(".projeto-link",0.5,{
        opacity:0,
        right:20,
        ease: Power0.easeNone,
    },0.1)


   $('.whatsapp').click(function() {
       $('.wpp-number').toggle(function() {
           $('.wpp-type').animate({ 
             width:'150px',
           });
       })
   });
    
    
   $('.mobile-btn').click(function(){
	$(this).toggleClass('mb-btn-active');
	   $('.mobile-nav').toggleClass('mb-nav-active');
    });
   });


// hide #back-top first
    $("#back-top").hide();


// fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('#back-top').fadeIn('slow');
            } else {
                $('#back-top').fadeOut('fast');
      
            }
        });
// scroll body to 0px on click
        $('#back-top').click(function () {
            $('body,html').animate({
                scrollTop:0,
            }, 400);
            return false;
        });
    });










