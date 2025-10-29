let x = document.querySelector("img");
let t = document.querySelector("h3");

let a = 1;
let id;
function oneToTwo() {
    if (a === 2) { x.src = "joe_open.jpg"; clearInterval(id); a = 1;}
    a++;
}

function startOneToTwo() {
    id = setInterval(oneToTwo, 1000);
}

t.addEventListener("dblclick", () => {
    t.style.fontStyle = "italic";
});

x.addEventListener("mouseover", () => {
    x.style.width = "400px";
    startOneToTwo();
});

x.addEventListener("mouseover", () => {
    x.src = "joe_blink.jpg";
});

x.addEventListener("mouseout", () => {
    x.src = "joe_open.jpg";
    x.style.width = "100px";
});