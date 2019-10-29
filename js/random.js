function initial(){
	if (localStorage.getItem("arr") === null) {
	}
	else{
		var retrievedData = localStorage.getItem("arr");
var array = JSON.parse(retrievedData);
		for (var i = 0; i < array.length; i++) {
var tr = "<tr>";
tr += "<td>" + array[i].name + "</td>" + "<td>" + array[i].skill.toString() + "<td>" + array[i].level.toString() + "</td></tr>";
tbody.innerHTML += tr;
	}
}
}
function tabler(){
if (localStorage.getItem("arr") === null) {
	var array = [];
	var list = {
name: document.getElementById("name").value,
skill: document.getElementById("skill").value,
level: document.getElementById("level").value
};
array.push(list);
var tr = "<tr>";
tr += "<td>" + list.name + "</td>" + "<td>" + list.skill.toString() + "<td>" + list.level.toString() + "</td></tr>";
tbody.innerHTML += tr;
localStorage.setItem("arr", JSON.stringify(array));
}
else{

var retrievedData = localStorage.getItem("arr");
var array = JSON.parse(retrievedData);
var list = {
name: document.getElementById("name").value,
skill: document.getElementById("skill").value,
level: document.getElementById("level").value
};

array.push(list);
var tr = "<tr>";
tr += "<td>" + list.name + "</td>" + "<td>" + list.skill.toString() + "<td>" + list.level.toString() + "</td></tr>";
tbody.innerHTML += tr;
localStorage.setItem("arr", JSON.stringify(array));
}
}
