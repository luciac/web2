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
  if(drawing || erasing) {
    lineTo(e.pageX,e.pageY);
  }
});

$(document).on("mouseup",function(e) {
  e.preventDefault();
  drawing = false;
});







