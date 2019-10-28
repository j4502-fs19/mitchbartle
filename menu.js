$(document).ready(function(){
  $('.menu-trigger').click(function(){
$('nav ul').slideToggle();
});

$(window).resize(function() {
	   if (  $(window).width() > 500 ) {
		$('nav .header .container2').removeAttr('style');
	 }
	});
});
