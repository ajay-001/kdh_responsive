// JavaScript Document

$(function(){
	$('.page_content').waypoint(               // create a waypoint
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