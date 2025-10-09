//Input validation
let input = document.querySelector("input");
input.addEventListener("keydown", (e) => {
  if (e.key < "0" || e.key > "9") {
    alert("Only digits allowed");
    e.preventDefault();
  }
});
