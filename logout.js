function logout() {
   this.logged_in = false
   console.log(`User ${this.username} logged out due to inactivity.`)
}


setTimeout(() => newUser.logout(), 360000)