function backgroundSwitch(interval, frames) {
	var int = 2;
			
	function func() {
		document.getElementById("test").className = "section background" + int;
		int++;
		if(int === frames) { int = 1; }
	}
	   
	var swap = window.setInterval(func, interval); 	
}