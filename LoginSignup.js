
class User {
   constructor(email, username, password, money) {
      this.email = email
      this.username = username
      this.password = password
      this.money = money
      this.logged_in = false
   }
   buy() {
     // To be further developed.
   }
}
 
let users = JSON.parse(localStorage.getItem("users")) || [];
 
function signup(email, username, password, money) {
   const newUser = new User(email, username, password, money)
   users.push(newUser)
   localStorage.setItem("users", JSON.stringify(users))
}

function login(email, password) {
   for (let i = 0; i < users.length; i++) {
      if (email == users[i].email && password == users[i].password) {
         console.log(`Login successful! Welcome ${users[i].username}.`)
         users[i].logged_in = true
         setTimeout(() => {
            users[i].logged_in = false
            console.log(`User ${users[i].username} logged out due to inactivity.`)
         }, 3600000)
         return
      }
   }
   console.log("Invalid email or password.")
}
 
 // Sample usage
signup("user5@example.com", "user5", "password5", 500)
login("user5@example.com", "password5")
 