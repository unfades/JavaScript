// Can you reduce the length of previous code?
function changeColor() {
	this.style.color = "red";
}
window.onload = () => {
	let x = document.getElementById("mydiv");
	x.onclick = changeColor;
};