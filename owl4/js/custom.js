$(document).ready(function() {	
		
	$("#jumbotron-slider").owlCarousel({
		navigation : true,
		singleItem : true,
		pagination : false,
		transitionStyle : "fade",
		autoPlay: 3000,
		slideSpeed : 500,
		navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  	});
	
    //OWL CAROUSEL - HIDDEN CONTROLS
    $(".owl-carousel.hidden-control").mouseenter(function(e) {
		$(this).find(".owl-prev").animate({opacity:1,left:"20px"});
		$(this).find(".owl-next").animate({opacity:1,right:"20px"});
    });

    $(".owl-carousel.hidden-control").mouseleave(function(e) {
		$(this).find(".owl-prev").animate({opacity:0,left:"40px"});
		$(this).find(".owl-next").animate({opacity:0,right:"40px"});
    });
		
	//TOUCH SPIN
	$("input[name='quantity']").TouchSpin({
      	verticalbuttons: true,
	  	min : 1,
      	verticalupclass: 'fa fa-plus',
      	verticaldownclass: 'fa fa-minus'
    });
});
$('#one').click(function () {
	console.log("clicjed");
    $('.owl-carousel').trigger('owl.jumpTo',0);
});
$('#two').click(function () {
    console.log("clicjed");
    $('.owl-carousel').trigger('owl.jumpTo',1);
});
$('#three').click(function () {
    console.log("clicjed");
    $('.owl-carousel').trigger('owl.jumpTo',2);
});
$('#four').click(function () {
    console.log("clicjed");
    $('.owl-carousel').trigger('owl.jumpTo',3);
});

