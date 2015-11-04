// JavaScript Document
$( document ).ready(function() {
//create array for video slides	
var VideoTitle = [];
function disp( titles ) {
  for ( var i = 0; i < titles.length; i++ ) {
    VideoTitle.push( titles[ i ].innerHTML );
  }
}
//gather slide titles from here
disp( $(".video-rotator-slide h3"));
	//call rotator on video slides
	$('.video-roator').before('<ul class="video-rotator-nav">').cycle({ 
		fx:    'fade',
		speed:  'slow', 
		timeout: 7000, 
		pager:  '.video-rotator-nav',
		next:   '.video-rotator-next', 
    	prev:   '.video-rotator-prev',
		pause:   true,
		pagerAnchorBuilder: paginate
	});
	//call rotator on testimonials
	$('.testimonial-wrapper').cycle({ 
			fx:    'fade',
			speed:  'slow', 
			timeout: 7000, 
			pause:   true,
			next:   '.testimonial-next', 
			prev:   '.testimonial-prev'
	});

	//populate video rotator pagination based on generated array above
	function paginate(ind) {
		if (ind === 0){ return '<li><a href="#">' +  VideoTitle[0]  + '</a></li>';}
		if (ind === 1){ return '<li><a href="#">' +  VideoTitle[1]  + '</a></li>';}
		if (ind === 2){ return '<li><a href="#">' +  VideoTitle[2]  + '</a></li>';}
		if (ind === 3){ return '<li><a href="#">' +  VideoTitle[3] + '</a></li>';}
		if (ind === 4){ return '<li><a href="#">' +  VideoTitle[4]  + '</a></li>';}
	}
	
	//footer funcitonality
	$('.footer-parent').click(function(){
		$(this).find('.footer-child, .footer-icon').toggleClass('active');	
		return false;
	});
	
	//api for vimeo videos		
		var iframes = $('.vimeo-player'),
			status = $('.status');
	
		$('.video-rotator-nav, .about-vimeo-close').bind('click', function () {
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
	$('.KB-img img').hide().one("load",function(){
		$(this).fadeIn(500);
		}).each(function(){
			if(this.complete){ $(this).trigger("load");
		}
	});

});

