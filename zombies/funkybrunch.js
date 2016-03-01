
$("#trigger").scrollFlight();
$(".TOCtoggle").scrollFlight();



/*
$(".scrolling").on("arrived",function(e) {
	$("#dacat").addClass("pop-up");
	});
*/

$("#trigger").on("arrived",function(e) {
	$(".hand").addClass("slideinleft");
	$(".welcometitle").addClass("riseup");
	$(".right").addClass("fadein");
});

$(".TOCtoggle").on("click",function(e) {
	$("#homepage").addClass("fadeout");
	$("#TOC").addClass("fadein");
	console.log("your mom sucks");
});






$("#dacat").hover(
	function() {
		$("#birthday").addClass("fade-in");
		$("#head").addClass("balooned");
		$(".lefti").addClass("widened");
		$(".righti").addClass("widened");
		$(".glimmer").addClass("widened");
		$("#nose").addClass("move");
		$(".ear").addClass("dissapear")
		$(".down").addClass("moveit");
		$(".trileft").addClass("moveit");
		$(".triright").addClass("moveit");
		$("#loon").addClass("descend");
		$("#dacat").addClass("flyaway");
		$("#raining").addClass("makeitrain");
		$("#raining2").addClass("makeitrain");
		$("#cover").addClass("goaway");
		$("#instruct").addClass("fade-out");
	});
	