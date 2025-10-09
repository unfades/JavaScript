const btn = document.querySelector("#additem");
const ul = document.querySelector("ul");
ul.addEventListener("click", (e) => {
  e.target.style.color = "crimson";
});

btn.addEventListener("click", () => {
  let task = prompt("What you want to do next ?");
  ul.innerHTML += "<li>" + task + "</li>";
});
