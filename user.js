
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
 

export {User}

