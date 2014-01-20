$(function(){
	var $mainContent = $('#default-headline'), // keep the mainContent saved
		$currentProduct, $arrow, $hoverReplace; // make high level variables to save current selections

	// function to toggle the visibility of the currently set elements
	// this function assignment needs to be above the 'hoverIn' because it is used within 'hoverIn'
	var toggleVisible = function(){
		// use the toggleClass to add when not hasClass and remove when hasClass
		$mainContent.toggleClass('invisible');
		$arrow.toggleClass('invisible');
		$hoverReplace.toggleClass('invisible');
	}

	// function to set what has been hovered on, then toggle the visibility
	var hoverOn = function(){
		console.log(this);
		// set the LI that was hovered over
		$currentProduct = $(this);
		// set the current arrow
		$arrow = $currentProduct.find('img.arrow');
		// set the ID of the hover we want to show from the LI's data attribute
		$hoverReplace = $('#' + $currentProduct.data('product-id'));

		// show the current things and hide main
		toggleVisible();
	}

	$('.product').hover(
		hoverOn, 
		toggleVisible
	);
	// call toggleVisible directly on hoverOff because we already set everything in hoverOn
});

