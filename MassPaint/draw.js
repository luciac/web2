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












$("#button-triangle").on("click",function() {
 $(".tool").removeClass("selected");
 $(this).addClass("selected");
 tool = "triangle";
 lineWidth(width);
 lineColor(color);
});


function triangle() {
  angle(0);
  forward(50);
  rotate(120);
  forward(50);
  rotate(120);
  forward(50);
  rotate(120);
}



$("#button-line").on("click",function() {
 $(".tool").removeClass("selected");
 $(this).addClass("selected");
 tool = "dash";
 lineWidth(width);
 lineColor(color);
});


function dash() {
  angle(0);
  forward(50);
}



/*

$("#button-bubble").on("click",function() {
	$(".tool").removeClass("selected");
	$(this).addClass("selected");
	tool="circle";	
});




function circle() {
	angle(0);
	forward(10);
	rotate(10);
	forward(10);
	rotate(10);
	forward(10);
	rotate(10);
	forward(10);
	rotate(10);
	forward(10);
	rotate(10);
	forward(10);
	rotate(10);}
*/


/*DISSSSSSS ISSSS THEEEEEEEEEEEEEEEEEEE
EEEEEEEEEEEE sun EEEEEEEEEEEEEEEEEEEEEE
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE*/

$("#button-sun").on("click",function() {
	$(".tool").removeClass("selected");
	$(this).addClass("selected");
	tool="sun";
	lineColor("orange");
	lineWidth(8);	
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
	move(-40,13);
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

$("#clrred").on("click",function() {
	$(".color").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineColor("red");
	lineWidth(width);
});

$("#clrorange").on("click",function() {
	$(".color").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineColor("orange");
	lineWidth(width);
});

$("#clryellow").on("click",function() {
	$(".color").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineColor("yellow");
	lineWidth(width);
});

$("#clrnavajowhite").on("click",function() {
	$(".color").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineColor("navajowhite");
	lineWidth(width);
});

$("#clrgold").on("click",function() {
	$(".color").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineColor("gold");
	lineWidth(width);
});

$("#clrgreen").on("click",function() {
	$(".color").removeClass("selected");
	$(this).addClass("selected");
	tool="pen";
	lineColor("green");
	lineWidth(width);
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





/*TTTTHHHHHHIIISS ISSS THHEEEEEEEEEEEEEEEEE
EEEEEEEEEEEEEE width EEEEEEEEEEEEEEEEEEEEEE
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE*/

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