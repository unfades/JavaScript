let x = document.getElementById("tbox");
x.style.borderColor = "black";
let s = document.querySelector("span");

let str = "";
x.onkeydown = (e) => {
    if((e.key < "0" || e.key > "9") && e.key!="Backspace" && e.key!="Shift"){
        alert("only digits allowed");
        console.log(e.key);
        return false;
    }else if(e.key === "Backspace"){
        str = str.substring(0,str.length-1);
    }else{
        str+=e.key;
    }
    if((str.length>10 || str.length<10) & str.length!=0){
        s.innerText = "Only 10 digits allowed!";
        s.style.color = "crimson";
        x.style.borderColor = "crimson";
    }
    else if(str.length === 10){
        s.innerText = "Success!";
        s.style.color = "limegreen";
        x.style.borderColor = "limegreen";
    }else if(str.length === 0){
        x.style.borderColor = "black";
    }
    console.log(str);
};