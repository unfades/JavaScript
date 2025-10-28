let size = 16;
let changeSize = document.getElementById("tbox");
let text = document.querySelector("p");

changeSize.onkeydown = (e) =>{
    if(e.key === "+") text.style.fontSize = ++size + "px";
    else if(e.key === "-") text.style.fontSize = --size + "px";
};