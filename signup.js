//password & confirmation password task 
function checkPassword() {
let pass = document.getElementById("inputPasswordSignup").value;
let confirmpass = document.getElementById("confirmPassword").value;
let message = document.getElementById("message")
if(pass.length != 0){
    if(pass == confirmpass){
        message.textContent = "Password Match";
        message.style.backgroundColor = "#3ae374";}
    else{
        message.textContent = "Password doesn't match Re-Enter password";
        message.style.backgroundColor = "#ff4d4d"

    }
}
else {
    alert("Password can't be empty");
    message.textContent = "";

}
}
















//adding sigunup inputs to local storage into array
function saveData (){
    let name,email,password,userBalance ;
    userName = document.getElementById("inputUsername").value;
    email = document.getElementById("inputEmailSignup").value;
    password = document.getElementById("inputPasswordSignup").value;
    userBalance = document.getElementById("balance").value;

}


let userRecords = new Array();
    userRecords = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(userRecords.some((v)=>{
return v.email==email
    } )){
        alert("Duplicate Data")
    }
    else{
        userRecords.push({
            "name": userName,
            "email":email,
            "password":password,
            "balance":userBalance
        })
        localStorage.setItem("users",JSON.stringify(userRecords));
    }











