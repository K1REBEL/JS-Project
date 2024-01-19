import {newUser} from "./LoginSignup.js"
// console.log(newUser)

function logout(user) {
   if(user.logged_in){
      user.logged_in = false
      console.log(`User ${user.username} logged out due to inactivity.`)
   }
   else{ console.log("User is already logged out") }
}

function logoutBTN(){
   // console.log("Hello from button invoked Fn.", newUser)
   if(newUser.logged_in){
      newUser.logged_in = false
      console.log(`User ${newUser.username} logged out due to inactivity.`)
   }
   else{ console.log("User is already logged out") }
}

var logoutBtn = document.getElementById('LogOut')
// console.log(logoutBtn)
logoutBtn.addEventListener('click', logoutBTN)

setTimeout(() => logout(newUser), 300000)




// var loggingoutTimer;

// function logoutTimer() {
//   loggingoutTimer = setTimeout(logout, 3600000); 
// }

function resetLogoutTimer() {
  clearTimeout(logout);
  logout(newUser);
}

// function logout() {
//   alert("You are Logged Out Please login again");
//   window.location.href = "login.html"

// }

logout(newUser);

document.addEventListener("mousemove", resetLogoutTimer);
document.addEventListener("keypress", resetLogoutTimer);

