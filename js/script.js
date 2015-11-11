// JavaScript Document
$( document ).ready(function() {
	
	//footer funcitonality
	$('.footer-parent').click(function(){
		$(this).find('.footer-child, .footer-icon').toggleClass('active');	
		return false;
	});
	
	//api for vimeo videos		
		var iframes = $('.vimeo-player'),
			status = $('.status');
	
		$('.about-vimeo-close').bind('click', function () {
			iframes.each(function() {
			  var player=$f(this);
			  player.api("pause");
			});
			return false;
		});
		
		$('.about-play-movie').bind('click', function () {
			iframes.each(function() {
			  var player=$f(this);
			  player.api("play");
			});
			return false;
		});
		
	//about page video load	
	$('.about-play-movie, .about-vimeo-close').click(function(){
		$('.about-vimeo, .about-hero-border, .about-hero .type-wrapper').toggleClass('active');	
		return false;
	});
	
	//call rotator on testimonials
	if ($('.testimonials').length > 0) {
	$('.testimonial-wrapper').cycle({ 
			fx:    'fade',
			speed:  'slow', 
			timeout: 7000, 
			pause:   true,
			next:   '.testimonial-next', 
			prev:   '.testimonial-prev'
	});
	}

});
	//fadein Large images on load
	function imgLoaded(img){
		var imgWrapper = img.parentNode;
		imgWrapper.className += imgWrapper.className ? ' loaded' : 'loaded';
	};
	

