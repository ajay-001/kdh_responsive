// JavaScript Document

$(function(){
	// also check if user is behind nav, attach nav
			  //$(window).scroll(function() {      
                var windowScrollTop = $(window).scrollTop();
				var navPosition = $('div.hero-unit').offset().top;
				if (windowScrollTop > navPosition){
					$('#green_strip').addClass('sticky').css({'height':'auto'});
					$('div#nav_side').css({'top': '3.5em'});
				}else{
					$('#green_strip').removeClass('sticky').css({'height':'auto'});
				}
            //});
			$(window).resize(function(){
				var windowScrollTop = $(window).scrollTop();
				var navPosition = $('div.hero-unit').offset().top;
				if (windowScrollTop > navPosition){
					$('#green_strip').addClass('sticky').css({'height':'auto'});
					$('div#nav_side').css({'top': '3.5em'});
				}else{
					$('#green_strip').removeClass('sticky').css({'height':'auto'});
				}
			});
	
	$('#green_strip').waypoint(               // create a waypoint
				function(direction) {
					if (direction == 'down'){
						$('#green_strip').addClass('sticky', direction=='down');
						$('div#green_strip').css('height', 'auto');
						$('div#nav_side').animate({'top':'3.5em'});
						$('#border_bottom').show();
					} else {
						$('#green_strip').removeClass('sticky');
						$('#border_bottom').hide();
						$('div#green_strip').css('height', 'auto');
						$('div#nav_side').animate({'top': '.2em'});
					}
				}
			  );
});