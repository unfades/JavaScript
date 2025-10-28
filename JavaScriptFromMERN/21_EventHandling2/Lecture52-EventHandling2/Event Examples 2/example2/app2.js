// Can you reduce the length of previous code?
let x = document.getElementById("mydiv");
x.onclick = function(){
	this.style.color = "red"; 
};
//most developers do this, they add the script tag at the bottom,
//no need for window.onload = init; etc etc
//react uses this the most.