
let users = JSON.parse(localStorage.getItem("users")) || []
let currentUser = JSON.parse(localStorage.getItem("Current User"))
console.log(currentUser)

function logout(user) {
   if(user.logged_in){
      user.logged_in = false
      for (let i = 0; i < users.length; i++) {
         if (user.username == users[i].username && users[i].logged_in == true) {
           users[i] = user
           localStorage.setItem("users", JSON.stringify(users))
           localStorage.setItem("Current User", JSON.stringify(user))
           break
         }
       }
      alert(`User ${user.username} logged out due to inactivity.`)
   }
   else{ alert("User is already logged out") }
}

setTimeout(() => logout(currentUser), 300000)

// function logoutBTN(){
//    // console.log("Hello from button invoked Fn.", newUser)
//    if(newUser.logged_in){
//       newUser.logged_in = false
//       console.log(`User ${newUser.username} logged out due to inactivity.`)
//    }
//    else{ console.log("User is already logged out") }
// }

// var logoutBtn = document.getElementById('LogOut')
// logoutBtn.addEventListener('click', logoutBTN)

function resetLogoutTimer() {
//   clearTimeout(logout);
//   logout(currentUser);
}

document.addEventListener("mousemove", resetLogoutTimer);
document.addEventListener("keypress", resetLogoutTimer);

