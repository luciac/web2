
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





//==============================================JACKET OPTIONS=====




$(".leather").on("click",function(e) {
	$(".leather p").toggleClass("open");
	$(".leather p").toggleClass("closed");
	$(".leather h3").toggleClass("open");
	$(".leather h3").toggleClass("closed");
	$(".canvas h3").removeClass("open");
	$(".canvas h3").addClass("closed");
	$(".canvas p").removeClass("open");
	$(".canvas p").addClass("closed");
	$(".duck h3").removeClass("open");
	$(".duck h3").addClass("closed");
	$(".duck p").removeClass("open");
	$(".duck p").addClass("closed");
	$("#first .photo").removeClass("canvas");
	$("#first .photo").removeClass("duck");
	console.log("your face wins");
});



$(".canvas").on("click",function(e) {
	$(".canvas p").toggleClass("open");
	$(".canvas p").toggleClass("closed");
	$(".canvas h3").toggleClass("open");
	$(".canvas h3").toggleClass("closed");
	$(".leather h3").removeClass("open");
	$(".leather h3").addClass("closed");
	$(".leather p").removeClass("open");
	$(".leather p").addClass("closed");
	$(".duck h3").removeClass("open");
	$(".duck h3").addClass("closed");
	$(".duck p").removeClass("open");
	$(".duck p").addClass("closed");
	$("#first .photo").addClass("canvas");
	$("#first .photo").removeClass("duck");
	$("#first .photo").removeClass("jacket");
	console.log("your face dies");
});





$(".duck").on("click",function(e) {
	$(".duck p").toggleClass("open");
	$(".duck p").toggleClass("closed");
	$(".duck h3").toggleClass("open");
	$(".duck h3").toggleClass("closed");
	$(".leather h3").removeClass("open");
	$(".leather h3").addClass("closed");
	$(".leather p").removeClass("open");
	$(".leather p").addClass("closed");
	$(".canvas h3").removeClass("open");
	$(".canvas h3").addClass("closed");
	$(".canvas p").removeClass("open");
	$(".canvas p").addClass("closed");
	$("#first .photo").addClass("duck");
	$("#first .photo").removeClass("canvas");
	$("#first .photo").removeClass("jacket");
	console.log("your face dies");
});











//==============================================FOOD OPTIONS=====

$(".beef").on("click",function(e) {
	$(".beef p").toggleClass("open");
	$(".beef p").toggleClass("closed");
	$(".beef h3").toggleClass("open");
	$(".beef h3").toggleClass("closed");
	$(".fruit h3").removeClass("open");
	$(".fruit h3").addClass("closed");
	$(".fruit p").removeClass("open");
	$(".fruit p").addClass("closed");
	$(".granola h3").removeClass("open");
	$(".granola h3").addClass("closed");
	$(".granola p").removeClass("open");
	$(".granola p").addClass("closed");
	$("#ninth .photo").removeClass("fruit");
	$("#ninth .photo").removeClass("granola");
	console.log("your mom wins");
});


$(".fruit").on("click",function(e) {
	$(".fruit p").toggleClass("open");
	$(".fruit p").toggleClass("closed");
	$(".fruit h3").toggleClass("open");
	$(".fruit h3").toggleClass("closed");
	$(".beef h3").removeClass("open");
	$(".beef h3").addClass("closed");
	$(".beef p").removeClass("open");
	$(".beef p").addClass("closed");
	$(".granola h3").removeClass("open");
	$(".granola h3").addClass("closed");
	$(".granola p").removeClass("open");
	$(".granola p").addClass("closed");
	$("#ninth .photo").addClass("fruit");
	$("#ninth .photo").removeClass("granola");
	console.log("your mom wins");
});


$(".granola").on("click",function(e) {
	$(".granola p").toggleClass("open");
	$(".granola p").toggleClass("closed");
	$(".granola h3").toggleClass("open");
	$(".granola h3").toggleClass("closed");
	$(".beef h3").removeClass("open");
	$(".beef h3").addClass("closed");
	$(".beef p").removeClass("open");
	$(".beef p").addClass("closed");
	$(".fruit h3").removeClass("open");
	$(".fruit h3").addClass("closed");
	$(".fruit p").removeClass("open");
	$(".fruit p").addClass("closed");
	$("#ninth .photo").addClass("granola");
	$("#ninth .photo").removeClass("fruit");
	console.log("your mom wins");
});













$(".uno").on("click",function(e) {
	$("#first").removeClass("closed");
	$("#second").addClass("closed");
	$("#third").addClass("closed");
	$("#fourth").addClass("closed");
	$("#fifth").addClass("closed");
	$("#sixth").addClass("closed");
	$("#seventh").addClass("closed");
	$("#eigth").addClass("closed");
	$("#ninth").addClass("closed");
	$("#tenth").addClass("closed");
	console.log("your mom ate potatos");
});


$(".dos").on("click",function(e) {
	$("#first").addClass("closed");
	$("#second").removeClass("closed");
	$("#third").addClass("closed");
	$("#fourth").addClass("closed");
	$("#fifth").addClass("closed");
	$("#sixth").addClass("closed");
	$("#seventh").addClass("closed");
	$("#eigth").addClass("closed");
	$("#ninth").addClass("closed");
	$("#tenth").addClass("closed");
	console.log("your mom ate potatos");
});

$(".tres").on("click",function(e) {
	$("#first").addClass("closed");
	$("#second").addClass("closed");
	$("#third").removeClass("closed");
	$("#fourth").addClass("closed");
	$("#fifth").addClass("closed");
	$("#sixth").addClass("closed");
	$("#seventh").addClass("closed");
	$("#eigth").addClass("closed");
	$("#ninth").addClass("closed");
	$("#tenth").addClass("closed");
	console.log("your mom ate potatos");
});


$(".quatro").on("click",function(e) {
	$("#first").addClass("closed");
	$("#second").addClass("closed");
	$("#third").addClass("closed");
	$("#fourth").removeClass("closed");
	$("#fifth").addClass("closed");
	$("#sixth").addClass("closed");
	$("#seventh").addClass("closed");
	$("#eigth").addClass("closed");
	$("#ninth").addClass("closed");
	$("#tenth").addClass("closed");
	console.log("your mom ate potatos");
});



$(".cinco").on("click",function(e) {
	$("#first").addClass("closed");
	$("#second").addClass("closed");
	$("#third").addClass("closed");
	$("#fourth").addClass("closed");
	$("#fifth").removeClass("closed");
	$("#sixth").addClass("closed");
	$("#seventh").addClass("closed");
	$("#eigth").addClass("closed");
	$("#ninth").addClass("closed");
	$("#tenth").addClass("closed");
	console.log("your mom ate potatos");
});


$(".seis").on("click",function(e) {
	$("#first").addClass("closed");
	$("#second").addClass("closed");
	$("#third").addClass("closed");
	$("#fourth").addClass("closed");
	$("#fifth").addClass("closed");
	$("#sixth").removeClass("closed");
	$("#seventh").addClass("closed");
	$("#eigth").addClass("closed");
	$("#ninth").addClass("closed");
	$("#tenth").addClass("closed");
	console.log("your mom ate potatos");
});


$(".siete").on("click",function(e) {
	$("#first").addClass("closed");
	$("#second").addClass("closed");
	$("#third").addClass("closed");
	$("#fourth").addClass("closed");
	$("#fifth").addClass("closed");
	$("#sixth").addClass("closed");
	$("#seventh").removeClass("closed");
	$("#eigth").addClass("closed");
	$("#ninth").addClass("closed");
	$("#tenth").addClass("closed");
	console.log("your mom ate potatos");
});


$(".hocho").on("click",function(e) {
	$("#first").addClass("closed");
	$("#second").addClass("closed");
	$("#third").addClass("closed");
	$("#fourth").addClass("closed");
	$("#fifth").addClass("closed");
	$("#sixth").addClass("closed");
	$("#seventh").addClass("closed");
	$("#eigth").removeClass("closed");
	$("#ninth").addClass("closed");
	$("#tenth").addClass("closed");
	console.log("your mom ate potatos");
});



$(".nueve").on("click",function(e) {
	$("#first").addClass("closed");
	$("#second").addClass("closed");
	$("#third").addClass("closed");
	$("#fourth").addClass("closed");
	$("#fifth").addClass("closed");
	$("#sixth").addClass("closed");
	$("#seventh").addClass("closed");
	$("#eigth").addClass("closed");
	$("#ninth").removeClass("closed");
	$("#tenth").addClass("closed");
	console.log("your mom ate potatos");
});



$(".diez").on("click",function(e) {
	$("#first").addClass("closed");
	$("#second").addClass("closed");
	$("#third").addClass("closed");
	$("#fourth").addClass("closed");
	$("#fifth").addClass("closed");
	$("#sixth").addClass("closed");
	$("#seventh").addClass("closed");
	$("#eigth").addClass("closed");
	$("#ninth").addClass("closed");
	$("#tenth").removeClass("closed");
	console.log("your mom ate potatos");
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
	