function init(){
	let x = document.getElementById("mydiv");
	x.onclick = changeColor;
}

function changeColor() {
	this.style.color = "red";
}

window.onload = init;
/*
let x = document.getElementById("mydiv");
x.onclick = changeColor;
this is gonna cause an error by default because
JS will be loading it immediately

even the 
function init(){
	let x = document.getElementById("mydiv");
	x.onclick = changeColor;
}
init();
will run into the same issue.
*/

/*we can use window.onload = in order to mitigate that
it means hey wait until the html,css part loads up, then
js is allowed to run init function if it is called...*/