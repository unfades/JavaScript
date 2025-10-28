//on double click on heading it should become italic
let heading = document.querySelector("h3");

//when mouse goes over the image it should change
let img = document.querySelector("img");

img.onmouseover = () =>{
    img.src = "../images/joe_blink.jpg";
    img.style.width = 400 + "px";
};
img.onmouseout = () =>{
    img.src = "../images/joe_open.jpg";
};