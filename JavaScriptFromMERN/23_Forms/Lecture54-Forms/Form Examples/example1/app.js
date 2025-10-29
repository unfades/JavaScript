//this is the way for js 
//straight via name and then access like that and assign

const myForm = document.loginform;
const myButton = myForm.btnlogin;

const user = myForm.txtusername;

const pwd = myForm.txtpassword;

myButton.addEventListener("click", ()=>{
    let username = user.value;
    let password = pwd.value;
    alert(`username: ${username},password: ${password}`);
});