
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
   logout() {
      this.logged_in = false
      console.log(`User ${this.username} logged out due to inactivity.`)
   }
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
signup("user5@example.com", "user5", "password5", 500)
var currentUser = login("user5@example.com", "password5")
console.log(currentUser)
setTimeout(() => currentUser.logout(), 360000)

