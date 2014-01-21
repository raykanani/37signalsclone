$(function(){
	var $mainContent = $('#default-headline'), // keep the mainContent saved
		$currentProduct, $arrow, $hoverReplace; // set high-level variables as undefined

	// function to toggle the visibility of the currently set elements
	var toggleVisible = function(){
		$mainContent.toggleClass('invisible');
		$arrow.toggleClass('invisible');
		$hoverReplace.toggleClass('invisible');
	}

	// function to set what has been hovered on, then toggle the visibility
	var hoverOn = function(){
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
});

