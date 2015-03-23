record();
reset();
hide();

$("#button-save").on("click",function() {
 downloadRecording();
});

$("#button-replay").on("click",function() {
 replay();
});


$("#button-eraser").on("click",function() {
	$(".tool").removeClass("selected");
	$(".color").removeClass("selected");
	$(".brushsize").removeClass("selected");
	$(this).addClass("selected");
	tool = "eraser";
	lineWidth(20);
	lineColor("white"); 
});



$("#button-pen").on("click",function() {
	$(".tool").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineColor(color);
	lineWidth(width);
});















var drawing = false;
var tool = "pen";

var color="black";
var width= 3;


$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "pen" || tool == "eraser") { 
    drawing = true; }
  else if(tool == "bubble") {
	bubble(); }
  else if(tool == "sun") {
	sun(); }
});

$(document).on("mousemove",function(e) {
  e.preventDefault();
  if(drawing) {
    lineTo(e.pageX,e.pageY);
  }
});

$(document).on("mouseup",function(e) {
  e.preventDefault();
  drawing = false;
});


















$("#button-bubble").on("click",function() {
	$(".tool").removeClass("selected");
	$(this).addClass("selected");
	tool="bubble";	
});




function bubble() {
	var circle=function(x) {
	forward(x);
	rotate(x/2); };

	circle(15);

	speed(1000);
	for (var i=0; i < 50; i++) {
		circle(20); } }


/*DISSSSSSS ISSSS THEEEEEEEEEEEEEEEEEEE
EEEEEEEEEEEE sun EEEEEEEEEEEEEEEEEEEEEE
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE*/

$("#button-sun").on("click",function() {
	$(".tool").removeClass("selected");
	$(this).addClass("selected");
	tool="sun";
	lineColor(width);
	lineWidth(color);	
});



function sun() {
	function rays(x) {
	rotate(315);
	forward(x);
	rotate(120);
	forward(x);
	move(15,-20);
	rotate(290);
	forward(x);
	rotate(120);
	forward(x);
	move(29,9);
	rotate(299);
	forward(x);
	rotate(120);
	forward(x);
	move(8,30);
	rotate(300);
	forward(x);
	rotate(120);
	forward(x);
	move(-18,20);
	rotate(297);	
	forward(x);
	rotate(120);
	forward(x);
	move(-30,-8);
	rotate(298);
	forward(x);
	rotate(120);
	forward(x);
	move(0);
	 }

	var circle=function(x) {
	forward(x);
	rotate(x); };

	circle(20);

	speed(1000);
	for (var i=0; i < 35; i++) {
		circle(10); }

	rays(30);
	
	}







/*THEEEEESSSE AREEEEEEEEEEEEEEEEEEEEEE
EEEEEEEEEEEEE colours EEEEEEEEEEEEEEEE
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE */

$(".color").on("click",function(e) {
	$(".color").removeClass("selected");
	$(this).addClass("selected");
	var col =$(this).data("color");
	lineColor(col);
});

/*
$("#clrred").on("click",function() {
	$(".color").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineColor("red");
});

$("#clrorange").on("click",function() {
	$(".color").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineColor("orange");
});

$("#clryellow").on("click",function() {
	$(".color").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineColor("yellow");
});

$("#clrnavajowhite").on("click",function() {
	$(".color").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineColor("navajowhite");
});

$("#clrgold").on("click",function() {
	$(".color").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineColor("gold");
});

$("#clrgreen").on("click",function() {
	$(".color").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineColor("green");
});

$("#clrskyblue").on("click",function() {
	$(".color").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineColor("skyblue");
});

$("#clraquamarine").on("click",function() {
	$(".color").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineColor("aquamarine");
});

$("#clrsteelblue").on("click",function() {
	$(".color").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineColor("steelblue");
});

$("#clrazure").on("click",function() {
	$(".color").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineColor("azure");
});

$("#clrchocolate").on("click",function() {
	$(".color").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineColor("chocolate");
});

$("#clrgrey").on("click",function() {
	$(".color").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineColor("grey");
});

$("#clrlightgrey").on("click",function() {
	$(".color").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineColor("lightgrey");
});

$("#clrblack").on("click",function() {
	$(".color").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineColor("black");
});
*/






/*TTTTHHHHHHIIISS ISSS THHEEEEEEEEEEEEEEEEE
EEEEEEEEEEEEEE width EEEEEEEEEEEEEEEEEEEEEE
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE*/


$(".brushsize").on("click",function(e) {
	$(".brushsize").removeClass("selected");
	$(this).addClass("selected");
	var size =$(this).data("width");
	lineWidth(size);
});


/*
$("#xsmall").on("click",function() {
	$(".brushsize").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineWidth(1);
});

$("#small").on("click",function() {
	$(".brushsize").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineWidth(4);
});

$("#med").on("click",function() {
	$(".brushsize").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineWidth(8);
});

$("#large").on("click",function() {
	$(".brushsize").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineWidth(12);
});

$("#xlarge").on("click",function() {
	$(".brushsize").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineWidth(16);
});	
*/