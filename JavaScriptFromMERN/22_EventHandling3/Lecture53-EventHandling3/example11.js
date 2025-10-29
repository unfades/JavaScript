let x = document.getElementById("mytextbox");

//this is deprecated stuff but you might use it if you work on
//legacy code bases
x.onkeypress = (e) => {
    alert("you pressed the key " + String.fromCharCode(e.charCode));
};