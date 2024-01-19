
import {Usr} from "./fetchApi.js"

console.log(Usr);

let users = JSON.parse(localStorage.getItem("users")) || []

function fetchUser(user){
   for (let i = 0; i < users.length; i++) {
      if (user.username == users[i].username && users[i].logged_in == true){
         // console.log("I'm here");
         // console.log(users[i]);
         return users[i]
      }
   }
   console.log("not found");
}

var Usr1 = fetchUser(Usr)

var cart = Usr1.cart;
var cart_total = 0;

window.onload = function() {
   console.log( "from cart" ,cart);
   var cartItemsElement = document.querySelector(".product");
   // var totalCostElement = document.getElementById('total-cost');
   console.log(cartItemsElement);
   cartItemsElement.innerHTML = '';
   
   for(let i=0; i<cart.length; i++){
      cart_total += cart[i].price * cart[i].quantity
      console.log("hi", cart_total);
      var cartItem = document.createElement('li');
      cartItem.textContent = `${cart[i].name} - Quantity: ${cart[i].quantity} - $${(cart[i].price * cart[i].quantity).toFixed(2)}`;
      cartItemsElement.appendChild(cartItem);
      console.log(cartItemsElement);
   }
}

var checkoutBtn = document.getElementById('Checkout');
// console.log(checkoutBtn);
checkoutBtn.addEventListener('click', checkOut);

function checkOut() {
   console.log("I'm a button")
   //   cart_total = 20
   console.log("Cart Total:", cart_total);
   if(cart_total > Usr1.money){ console.log("Insufficient funds, cart total is more than your current balance.") }
   else if(cart_total == 0){ console.log("Your cart is empty, go shopping!");}
   else{
      Usr1.money -= cart_total
      Usr1.cart = []
      console.log("Mission Successful!");
      for (let i = 0; i < users.length; i++) {
         if (Usr1.username == users[i].username && users[i].logged_in == true){
            users[i] = Usr1
            localStorage.setItem("users", JSON.stringify(users))
            break
         }
      }
   }
}


