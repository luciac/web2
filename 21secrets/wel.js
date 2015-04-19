
$(".fadeee").scrollFlight();
$(".empty").scrollFlight();
$(".innards").scrollFlight();
$(".bgcolor").scrollFlight();
$(".goaway").scrollFlight();
$(".colorchangetwo").scrollFlight();
$("#three").scrollFlight();
$("#zoomtigger").scrollFlight();
$("#braintigger").scrollFlight();
$("#cosmictigger").scrollFlight();
$("#ptigger").scrollFlight();
$("#unfixtigger").scrollFlight();



$(".fadeee").on("arrived",function(e) {
	$("#one h2").addClass("fade-in")
	});
	
$(".fadeee").on("departing",function(e) {
	$("#one h2").addClass("fade-out");
	console.log("h2 gone");
	});
	
$(".empty").on("arrived",function(e) {
	$(".innards").addClass("fade-in");
	console.log("secret one faded in");
	});
	
$(".goaway").on("arrived",function(e) {
	$(".innards").removeClass("fade-in");
	console.log("be gone satan!");
	});	
	
$(".colorchangetwo").on("arrived",function(e) {
	$(".bgcolor").addClass("backgroundtwo");
	console.log("swtich");
	});

$("#two").on("arrived",function(e) {
	$(this).addClass("fixit");
	$("#two").addClass("hideit");
	console.log("IT FIXXEDD");
	});



//SUCCESS inserthappygif
$("#three").on("arrived",function(e) {
	$(this).addClass("fixit");
	$(".bgcolor").addClass("backgroundthree");
	console.log("IT FIXXEDD");
	});
$("#zoomtigger").on("arrived",function(e) {
	$(".secretthree").addClass("zoom");
	console.log("it zoomed");
	});
$("#braintigger").on("arrived",function(e) {
	$(".brain").addClass("showit");
	console.log("chinchilla brainnsss");
	});
$("#cosmictigger").on("arrived",function(e) {
	$(".cosmicbrain").addClass("fade-in");
	console.log("cosmic brain");
	});
$("#ptigger").on("arrived",function(e) {
	$(".thirdpar").addClass("appear");
	console.log("paragraph");
	});


$("#unfixtigger").on("arrived",function(e) {
	$("#three").removeClass("fixit");
	$(".secretthree").removeClass("zoom");
	$(".brain").removeClass("showit");
	$(".cosmicbrain").removeClass("fade-in");
	$(".thirdpar").removeClass("appear");
	console.log("unfixed");
	});

