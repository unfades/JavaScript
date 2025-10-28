var x = document.getElementById("mytext");
// x.onkeypress = (e) => {
//   if (e.charCode < 48 || e.charCode > 57) {
//     alert("Please input digits only");
//     return false;
//   }
// };

x.onkeydown = (e) => {
  if (e.key < "0" || e.key > "9") {
    alert("Please input digits only");
    return false;
  }
};
