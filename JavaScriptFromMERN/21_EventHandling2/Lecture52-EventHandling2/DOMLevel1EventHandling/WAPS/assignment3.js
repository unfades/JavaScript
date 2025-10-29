let x = document.querySelector("input");

x.onkeydown = (e) =>{
    if(!("0123456789".includes(e.key))){
        alert("warning: only digits are allowed!");
        return false;
    }
};