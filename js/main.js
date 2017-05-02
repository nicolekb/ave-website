// $( ".cross" ).hide();
// $( ".first-nav" ).hide();

$( ".hamburger" ).click(function() {
	$( ".first-nav" ).slideToggle( "slow", function() {
		$( ".hamburger" ).hide();
		$( ".cross" ).show();
	});
});

$( ".cross" ).click(function() {
	$( ".first-nav" ).slideToggle( "slow", function() {
		$( ".cross" ).hide();
		$( ".hamburger" ).show();
		});
});
