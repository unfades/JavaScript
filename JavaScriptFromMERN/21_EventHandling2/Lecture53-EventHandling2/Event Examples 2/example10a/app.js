var text = document.getElementById("mytext");
var span = document.getElementById("sp1");
text.onkeydown = (e) => {
  if (e.key >= "0" && e.key <= "9") {
    span.innerHTML = "Correct!";
    span.style.color = "limegreen";
    text.style.outline = "none";
    text.style.border = "solid 1px limegreen";
  } else {
    span.innerHTML = "Only digits allowed!";
    span.style.color = "crimson";
    text.style.outline = "none";
    text.style.border = "solid 1px crimson";
    return false;
  }
};
// text.onkeypress = (e) => {
//     if (e.charCode >= 48 && e.charCode <= 57) {
//         span.innerHTML = "Correct!";
//         span.style.color = "limegreen";
//         text.style.outline = "none";
//         text.style.border = "solid 1px limegreen";
//     } else {
//         span.innerHTML = "Only digits allowed!";
//         span.style.color = "crimson";
//         text.style.outline = "none";
//         text.style.border = "solid 1px crimson";
//         return false;
//     }
// };
