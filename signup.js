import { User } from "./user.js"

let users = JSON.parse(localStorage.getItem("users")) || []
 
function signup(email, username, password, money) {
   const newUser = new User(email, username, password, money)
   users.push(newUser)
   localStorage.setItem("users", JSON.stringify(users))
}

var signupBtn = document.getElementById('submit_button')
// console.log(signupBtn);

signupBtn.addEventListener("click", function(){
   var name = document.getElementById('inputUsername').value
   var mail = document.getElementById('inputEmailSignup').value
   var pass = document.getElementById('inputPasswordSignup').value
   var balance = document.getElementById('balance').value
   // console.log(this, name, mail, pass, balance);
   signup(mail, name, pass, balance)
})