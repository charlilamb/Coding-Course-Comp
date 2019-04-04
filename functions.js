function backgroundSwitch(interval, frames) {
	var int = 2;
			
	function func() {
		document.getElementById("test").className = "section background" + int;
		int++;
		if(int === frames) { int = 1; }
	}
	   
	var swap = window.setInterval(func, interval); 	
}

function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('txt').innerHTML =
	h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 500);
}
function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}

function submitted() {
	window.alert("Thank you for the message. We will aim to get back to you within one working day.")
}