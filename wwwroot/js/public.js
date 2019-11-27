$(window).load(function () {
  $(".navbar-toggler").click(function(){
	$(this).toggleClass("navbar-toggler-click toggler_button");
	$(".navbar ul").slideToggle(250);
  });
  $(".navbar ul li").each(function(index) {
	$(this).css({'animation-delay':(index/10)+'s'});
  });
});