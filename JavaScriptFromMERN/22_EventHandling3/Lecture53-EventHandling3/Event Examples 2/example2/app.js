// Can you reduce the length of previous code?
let x = document.getElementById("mydiv");
x.onclick = () => {
	x.style.color = "red"; 
};
//this does not work with arrow functions, it refers to the containing scope.
//so we say x instead of this.