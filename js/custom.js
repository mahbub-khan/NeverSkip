$(document).ready(function() {
 
  $(".one-slide-carousel").owlCarousel({
 
      autoPlay: 5000, //Set AutoPlay to 3 seconds
 
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
	  itemsTablet :	[768,1],
	  itemsMobile :	[479,1],
	  slideSpeed:	1500,
	  paginationSpeed:	2300,
	  rewindSpeed:2500,
    navigation: true,
    navigationText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
 
  });
 
})