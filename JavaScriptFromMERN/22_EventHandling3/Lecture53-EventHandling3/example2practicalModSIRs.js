let img = document.querySelector("img");

img.addEventListener("mouseover", () => {
  img.style.width = "400px";
});

//here addEventListener is a higher order function
//because it is a function in which a callback is used.
img.addEventListener("mouseover", () => {
  setTimeout(() => {
    img.src = "joe_blink.jpg";
  }, 1000);
});
