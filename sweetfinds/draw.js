/*-------------------------------------------------------------------------
----------------ZOOM --------------------------------------------------------------------------*/

$(".button-zoom").on("click",function(e) {
	$(".nemap").addClass("zoom").removeClass("zoomout");
	console.log("done");
});

$("#button-zoomout").on("click",function(e) {
	$(".nemap").addClass("zoomout").removeClass("zoom");
	console.log("out");
});


/*-------------------------------------------------------------------------
----------------MENU CLICKS --------------------------------------------------------------------------*/


$("#button-menu").on("click",function(e) {
	$("#menumenu").toggleClass("open");
	$(".mnu").toggleClass("fa-bars fa-times");
	$("#filtermenu").removeClass("open");
	$(".right").toggleClass("open");
	console.log("filteropen");
});



$("#button-filter").on("click",function(e) {
	$("#filtermenu").toggleClass("open");
	$("#menumenu").removeClass("open");
	console.log("menuopen");
});


/*-------------------------------------------------------------------------
----------------FILTER BUTTONS --------------------------------------------------------------------------*/
$("#pastryfilter").on("click",function(e) {
	$(".pastry").addClass("gone");
	$(this).addClass("gone");
	$("#pastrydeact").removeClass("gone");
	console.log("switched pastry shops");
});
$("#pastrydeact").on("click",function(e) {
	$(".pastry").removeClass("gone");
	$(this).addClass("gone");
	$("#pastryfilter").removeClass("gone");
	console.log("switched pastry shops");
});



$("#coffeefilter").on("click",function(e) {
	$(".cafe").addClass("gone");
	$(this).addClass("gone");
	$("#coffeedeact").removeClass("gone");
	console.log("switched pastry shops");
});
$("#coffeedeact").on("click",function(e) {
	$(".cafe").removeClass("gone");
	$(this).addClass("gone");
	$("#coffeefilter").removeClass("gone");
	console.log("switched pastry shops");
});



$("#bankfilter").on("click",function(e) {
	$(".atm").addClass("gone");
	$(this).addClass("gone");
	$("#bankdeact").removeClass("gone");
	console.log("switched pastry shops");
});
$("#bankdeact").on("click",function(e) {
	$(".atm").removeClass("gone");
	$(this).addClass("gone");
	$("#bankfilter").removeClass("gone");
	console.log("switched pastry shops");
});


$("#dollafilter").on("click",function(e) {
	$(".cashonly").addClass("gone");
	$(this).addClass("gone");
	$("#dolladeact").removeClass("gone");
	console.log("switched pastry shops");
});
$("#dolladeact").on("click",function(e) {
	$(".cashonly").removeClass("gone");
	$(this).addClass("gone");
	$("#dollafilter").removeClass("gone");
	console.log("switched pastry shops");
});











/*-------------------------------------------------------------------------
----------------FILTER BUTTONS --------------------------------------------------------------------------*/



$("#button-right").on("click",function(e) {
    $(".panorama").animate({left: "-=100vw"}, 2000);
});
$("#button-left").on("click",function(e) {
    $(".panorama").animate({left: "+=100vw"}, 2000);
});



$("#button-bovaabout").on("click",function(e) {
	$(".closebutton").toggleClass("gone");
	$(".openbutton").toggleClass("gone");
	$("#button-bovamenu").toggleClass("gone");
	$("#button-bovagame").toggleClass("gone");
	$(".lower").toggleClass("gone");
	$("#panorama").toggleClass("gone");
	$("#about").toggleClass("gone");
	$("#videolinks").toggleClass("gone");
	console.log("about is open");
});




$(".brushsize").on("click",function(e) {
	$(".brushsize").removeClass("selected");
	$(this).addClass("selected");
	var size =$(this).data("width");
	lineWidth(size);
});

