// Mudança de logo conforme Scroll
jQuery("document").ready(function($){
	    	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 250) {
			$("#logogaleria").attr("src", "img/incept-ligth.png");
		} else {
			$("#logogaleria").attr("src", "img/incept-dark.png");
		}      
	});

});