let x = document.querySelector("img");

x.onmouseover = function(){
    x.src = "memeclosed.png";
};

x.onmouseout = function(){
    x.src = "memeopen.png";
};