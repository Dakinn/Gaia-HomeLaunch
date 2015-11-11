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
	
	//fadein Large images on load
	$('.KB-img img, .hero-img-scroller img').one("load",function(){
		$(this).addClass('fadeIn');
		}).each(function(){
			if(this.complete){ $(this).trigger("load");
		}
	});

});

