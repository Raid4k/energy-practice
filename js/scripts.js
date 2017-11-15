$(document).ready(function() {
	var wdth_win = $(window).width(),
		search = $(".search-js"),
		input = $(".input-js");

	search.click(function(event) {
		if(wdth_win < 1000) {
			event.preventDefault();
			input.fadeToggle();
		}
	});

	$(window).resize(function(){
		wdth_win = $(window).width();
	});
})