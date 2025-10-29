let x = document.querySelector("p");
let inp = document.querySelector("input");
x.style.fontSize = "16px";
let a = 16;
inp.onkeydown = (e) => {
    if(e.key === "+") x.style.fontSize = ++a + "px";
    if(e.key === "-") x.style.fontSize = --a + "px";
};


