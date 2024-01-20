
let users = JSON.parse(localStorage.getItem("users")) || []

function login(email, password) {
   for (let i = 0; i < users.length; i++) {
      if (email == users[i].email && password == users[i].password) {
         users[i].logged_in = true
         localStorage.setItem("users", JSON.stringify(users))
         alert(`Login successful! Welcome ${users[i].username}.`)
         let currentUser = users[i]
         localStorage.setItem("Current User", JSON.stringify(currentUser))
         return currentUser
      }
   }
   alert("Invalid email or password.")
   return null
}

var loginBtn = document.getElementById('login_button')

loginBtn.addEventListener("click", function(){
   var mail = document.getElementById('inputEmail').value
   var pass = document.getElementById('inputPassword').value
   login(mail, pass)
})
