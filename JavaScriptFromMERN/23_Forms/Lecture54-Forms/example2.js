const myForm = document.myfrm;

const txtFno = myForm.txtfno;
const txtSno = myForm.txtsno;
const txtRes = myForm.txtresult;
const btnAdd = myForm.btnadd;
const btnClear = myForm.btnclear;

btnAdd.addEventListener("click", ()=>{
    //by default takes string form
    //convert to number
    let fno = txtFno.value;
    let sno = txtSno.value;
    let sum = Number(fno) + Number(sno);
    txtRes.value = sum;
});

btnClear.addEventListener("click", ()=>{
    txtRes.value = "";
    txtFno.value = "";
    txtSno.value = "";
});