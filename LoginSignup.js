
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
   buy(cost) {
      // To be further developed.
      if(cost > this.money){ console.log("Insufficient funds, cart total is more than your current balance.")}
      else{
         this.money -= cost
      }
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
   return null
}
 
   // Sample usage
// signup("user6@example.com", "user6", "pass", 1000000)
// var newUser = login("user6@example.com", "pass")
// console.log(newUser)





// export {newUser}

