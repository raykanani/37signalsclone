$(function(){
	var baseCamp = $('.basecamp');
	var highRise = $('.highrise');
	var campFire = $('.campfire');
	var mainContent = $('h1, .subline');
	var hoverContent = $('h2, .subline-replace');
	var arrow = $('.arrow');

	baseCamp.hover(
		function(){
			mainContent.addClass('invisible');
			hoverContent.removeClass('invisible');
			arrow.removeClass('invisible');
		}, function(){
			hoverContent.addClass('invisible');
			arrow.addClass('invisible');
			mainContent.removeClass('invisible');
		}
	);
});

/* Can I make one hover function that selects product specific content specific to what "product" container is being hovered over */
/* How can I utilize data attribute to select product specific content */
/* How can I select the arrow image for visibility based on product being hovered over */
/* Why wont $('h1 .headline') work */