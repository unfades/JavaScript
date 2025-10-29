let x = document.querySelector("img");
let t = document.querySelector("h3");
/*mine
function italicize(){
    this.style.fontStyle = "italic";
};
*/
t.addEventListener("dblclick", ()=>{
    t.style.fontStyle = "italic";
});

//sir's
/*
t.addEventListener("dblclick", ()=>{
    t.style.fontStyle = "italic";
});
*/

x.addEventListener("mouseover", () =>{
    x.src = "joe_blink.jpg";
});

x.addEventListener("mouseover", () =>{
    x.src = "joe_blink.jpg";
    x.style.width = "400px";
});

x.addEventListener("mouseout", () =>{
    x.src = "joe_open.jpg";
    x.style.width = "100px";
});

/*
x.onmouseover = () =>{
    x.src = "joe_blink.jpg";
};
x.onmouseover = () =>{
    x.style.width = "400px";
};

x.onmouseout = () =>{
    x.src = "joe_open.jpg";
    x.style.width = "100px";
};
this is also not valid for dom level 2 event handling
*/

//we can use level 1 handling but what if js is using something
//and our code from level 1 will replace the code of js
//if we used level 1 handling
//x.mouseover() = assigns it to x.mouseover() <- 
//if you use x.mouseover() again then it will be replaced with other code..