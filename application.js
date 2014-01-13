var orginalHeadline = $('<h1 class="headline">Making collaboration productive and enjoyable for people every day</h1>');
var originalSubline = $('<h4 class="subline">Frustration-free web-based apps for collaboration, sharing information, and making decisions.</h4>');

$(function(){
	$('.basecamp').mouseenter(function(){
		//Basecamp product content enter and replace
		$('.headline').replaceWith('<h2 class="headline"><span>Basecamp</span> is the project management tool you wish you had on your last project.</h2>');
		$('.subline').replaceWith('<h5 class="subline-replace">Are you still managing projects with email? Are you still using Excel for your to-do lists? It’s time to upgrade to Basecamp. Manage projects and collaborate with your team and clients the modern way.</h5>');
		$('.basecamp .arrow-right').css('display', 'inline');
	});
	$('.highrise').mouseenter(function(){
		//Highrise product content enter and replace
		$('.headline').replaceWith('<h2 class="headline"><span>Highrise</span> remembers the important things about people you’d normally forget.</h2>');
		$('.subline').replaceWith('<h5 class="subline-replace">Keep a permanent record of people you do business with. Know who you talked to, when you talked to them, what was said, and when to follow up next. Over 20,000,000 contacts are tracked using Highrise.</h5>');
		$('.highrise .arrow-right').css('display', 'inline');

	});
	$('.campfire').mouseenter(function(){
		//Campfire product content enter and replace
		$('.headline').replaceWith('<h2 class="headline">From near or far, <span>Campfire</span> helps teams work together over the web in real-time.</h2>');
		$('.subline').replaceWith('<h5 class="subline-replace">Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a real-time private chat room. It’s game changing. We couldn’t run our own business without Campfire.</h5>');
		$('.campfire .arrow-left').css('display', 'inline');

	});
	$('.basecamp, .highrise, .campfire').mouseleave(function(){
		$('.headline').replaceWith(orginalHeadline);
		$('.subline-replace').replaceWith(originalSubline);
		$('.arrow-left, .arrow-right').css('display', 'none');
	});
});

