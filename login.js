
//login validation Task
let isUserLoggedIn = false;

const login = document.getElementById("login")
login.onclick = (e) =>{
    e.preventDefault();
    const emailAddress =document.getElementById("inputEmail").value;
    const passwordAddress = document.getElementById("inputPassword").value;
    const getEmail = localStorage.getItem("Email");
    const getpassword = localStorage.getItem("Password");


    if (emailAddress == "" && passwordAddress == ""){
        swal("please insert a value for the inputField")
         isUserLoggedIn = true;
    }
    else{
        if(emailAddress == getEmail && passwordAddress == getpassword){
            swal("your login is successful")
        }
        else{
            swal("Something wrong , please try again ")
        }
    }
   

}
//settimeoutfunctionality Task
//    <button onclick="logout()">Logout</button> this button 'll be in the profile of the user page(cart page) 
var loggingoutTimer;

function logoutTimer() {
  loggingoutTimer = setTimeout(logout, 3600000); 
}

function resetLogoutTimer() {
  clearTimeout(loggingoutTimer);
  logoutTimer();
}

function logout() {
  alert("You are Logged Out Please login again");
  window.location.href = "login.html"

}

logoutTimer();

document.addEventListener("mousemove", resetLogoutTimer);
document.addEventListener("keypress", resetLogoutTimer);




