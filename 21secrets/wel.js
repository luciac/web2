
$(".fadeee").scrollFlight();
$(".empty").scrollFlight();
$(".innards").scrollFlight();
$("#bgcolor").scrollFlight();
$("#three").scrollFlight();
$("#zoomtigger").scrollFlight();





$(".fadeee").on("arrived",function(e) {
	$("#one h2").addClass("fade-in")
	});
	
$(".fadeee").on("departing",function(e) {
	$("#one h2").addClass("fade-out");
	$("#one .innards").addClass("fade-in");
	});
	
$(".empty").on("arrived",function(e) {
	$(".innards").addClass("fade-in");
	$("#bgcolor").addClass("backgroundtwo");
	});
$(".empty").on("departing",function(e) {
	$("#one .innards").addClass("fade-out");
	});
	


//SUCCESS inserthappygif
$("#three").on("arrived",function(e) {
	$(this).addClass("fixit");
	$("#two").addClass("hideit");
	});

$("#zoomtigger").on("arrived",function(e) {
	$(".secretthree").addClass("zoom");
	});


//FAILLL WHY DO YOU FAIILLL!??????????????????????????????????????????????

$("#braintigger").on("arrived",function(e) {
	$(".brain").addClass("showit");
	});

$("#cosmictigger").on("arrived",function(e) {
	$(".cosmicbrain").addClass("showit");
	});

$("#unfixtigger").on("arrived",function(e) {
	$("#three").addClass("unfixit");
	});

