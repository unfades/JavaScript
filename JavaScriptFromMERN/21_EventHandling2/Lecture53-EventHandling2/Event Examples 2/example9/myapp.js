let inp = document.getElementById("mytext");

inp.onkeydown = (e) => {
    if(!"0123456789".includes(e.key)){
        alert("only enter digits, nothing else");
        return false;
    }
};