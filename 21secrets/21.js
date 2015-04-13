
$(".fadeee").scrollFlight();
$(".empty").scrollFlight();




$(".fadeee").on("arrived",function(e) {
	$("#one h2").addClass("fade-in");
	});
$(".fadeee").on("departing",function(e) {
	$("#one h2").addClass("fade-out");
	});
	
$(".empty").on("arriving",function(e) {
	$("#one .innards").addClass("fade-in");
	});
$(".empty").on("departing",function(e) {
	$("#one .innards").addClass("fade-out");
	});




	
