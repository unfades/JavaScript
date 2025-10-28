let img = document.querySelector("img");

img.addEventListener("mouseover", () => {
  img.style.width = "400px";
});

img.addEventListener("mouseover", () => {
  setTimeout(() => {
    img.src = "../../images/sachin2.jpg";
  }, 1000);
});
