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
 
function addToCart(id, cart) {
   return new Promise((resolve, reject) => {
      fetch('https://dummyjson.com/products/' + id)
         .then(res => res.json())
         .then(product => {
            var item = cart.find(p => p.id === product.id);
            if (item) {
               item.quantity++;
            } else {
               cart.push({ id: product.id, name: product.title, price: product.price, quantity: 1 });
            }
            console.log("cart: ", cart);
            resolve(cart); 
         })
         .catch(error => {
            console.error("Error fetching product:", error);
            reject(error); 
         });
   });
}

// Sample usage
signup("user5@example.com", "user5", "password5", 500);
var currentUser = login("user5@example.com", "password5");
console.log(currentUser);

// setTimeout(() => currentUser.logout(), 360000);

var cart1 = currentUser.cart;

async function updateCart() {
   try {
      var cart3 = await addToCart(1, cart1);
      console.log("cart3: ", cart3);
   } catch (error) {
      console.error("Error updating cart:", error);
   }
}

updateCart();

export {currentUser};
