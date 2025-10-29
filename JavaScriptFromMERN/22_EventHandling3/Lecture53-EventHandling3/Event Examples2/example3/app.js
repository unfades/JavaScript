let img = document.querySelector("img");

img.addEventListener("mouseover", () => {
  img.style.width = "400px";
});

img.addEventListener("mouseover", () => {
  setTimeout(() => {
    img.src = "../../joe_blink.jpg";
  }, 1000);
});
