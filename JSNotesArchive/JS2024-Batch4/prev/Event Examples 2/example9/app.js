let inp = document.getElementById("mytext");
inp.onkeydown = (e) => {
	if (e.key < "0" || e.key > "9") {
		alert("Only digits!");
		return false;
	}
};
