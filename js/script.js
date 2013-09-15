// JavaScript Document

$(function(){
			
			/*$('div#nav_arrow').hover(
				function(){
					$('div#nav_side').animate({left:'-24em'}, 500);
					setTimeout(function(){$('div#nav_side').animate({left:'-25em'}, 500);}, 2000);
				});*/
			
			$('div#nav_arrow').toggle(
				function(){$('div#nav_side').animate({left:'-2em'}, 1000, 'easeInOutQuart');},
        		function(){$('div#nav_side').animate({left:'-25em'}, 1000, 'easeInOutQuart');});
			
		});