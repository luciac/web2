var howold = prompt("How old are you? Numbers only please darling");

howold;

/*
var coin = Math.random()
var nope = function (coin) {
	if (0 <= coin <= 0.49) {
		$("#first").removeClass("gone");
		}
	else {
		$("#second").removeClass("gone");
		}
	}
*/



if (howold == null) {
	$("#willsmith").removeClass("gone");
	}
else if (howold == "") {
	$("#empty").removeClass("gone");
	}
else if (howold < 11) {
	$("#second").removeClass("gone");
	}
else if (howold <= 20) {
	$("#first").removeClass("gone");
	}
else if (isNaN(howold)) {
	$("#tres").removeClass("gone");
	}
else if (howold >= 21) {
	window.location.href = 'http://luciac.github.io/web2/21secrets/welcome'; 
	} 



/*
else if (howold <= 70 && howold >= 20) {
	window.location.href = 'http://luciac.github.io/web2/21secrets/welcome'; 
	} 
else if (howold >= 70) {
	$("#old").removeClass("gone");
	}	*/