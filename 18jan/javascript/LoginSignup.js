
class User {
   constructor(email, username, password, money) {
      this.email = email
      this.username = username
      this.password = password
      this.money = money
      this.logged_in = false
      this.cart = []
      this.card = null
   }
   buy() {
      // To be further developed.
   }
   /*logout() {
      this.logged_in = false
      console.log(`User ${this.username} logged out due to inactivity.`)
   }*/
}
 
let users = JSON.parse(localStorage.getItem("users")) || []
 
function signup(email, username, password, money) {
   const newUser = new User(email, username, password, money)
   users.push(newUser)
   localStorage.setItem("users", JSON.stringify(users))
}

function login(email, password) {
   for (let i = 0; i < users.length; i++) {
      if (email == users[i].email && password == users[i].password) {
         users[i].logged_in = true
         localStorage.setItem("users", JSON.stringify(users))
         console.log(`Login successful! Welcome ${users[i].username}.`)
         return users[i]
      }
   }
   console.log("Invalid email or password.")
   return null;
}
 
   // Sample usage
// signup("user5@example.com", "user5", "password5", 500)
// var currentUser = login("user5@example.com", "password5")
// console.log(currentUser)
// setTimeout(() => currentUser.logout(), 360000)


//settimeoutfunctionality Task
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
   
