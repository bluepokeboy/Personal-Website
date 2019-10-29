	function initial(){
		if (localStorage.getItem("count") === null) {
		}
		else{
			var counter = localStorage.getItem("count");
			document.getElementById("myText").innerHTML = counter;
		}
	}
		function like(){
	if (localStorage.getItem("count") === null) {
		var counter=0;
	counter++;
	document.getElementById("myText").innerHTML = counter;
	localStorage.setItem("count",counter);
}
else{
	var counter = localStorage.getItem("count");
	counter++;
	document.getElementById("myText").innerHTML = counter;
	localStorage.setItem("count",counter);
}
}
