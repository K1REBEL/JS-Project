
// import {Usr} from "./fetchApi.js"

// console.log(Usr);

let users = JSON.parse(localStorage.getItem("users")) || []
let currentUser = JSON.parse(localStorage.getItem("Current User"))
console.log(currentUser);

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

// var Usr1 = fetchUser(Usr)

var cart = currentUser.cart;
var cart_total = 0;
console.log(cart)
window.onload = function() {
   // console.log( "from cart" ,cart);
   var cartItemsElement = document.querySelector(".col-md-8");
   var summaryElement = document.querySelector(".cart-summary");
   // var totalCostElement = document.getElementById('total-cost');
   console.log(cartItemsElement);
   cartItemsElement.innerHTML = '';
   
   for(let i=0; i<cart.length; i++){
      cartItemsElement.innerHTML += `
      
                <div class="cart-item">
                    <img src="${cart[i].image}">
                    <div class="item-details">
                        <h4>${cart[i].name}</h4>
                        <p>${cart[i].price}</p>
                        <div class="quantity-box">
                            <div class="quantity-controls">
                                <button class="btn btn-sm btn-increase" aria-label="Increase Quantity">+</button>
                                <span>${cart[i].quantity}</span>
                                <button class="btn btn-sm btn-decrease" aria-label="Decrease Quantity">-</button>
                            </div>
                        </div>
                        <button class="btn btn-sm btn-remove" aria-label="Remove"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            `
      cart_total += cart[i].price * cart[i].quantity;
      console.log("hi", cart_total);
      // var cartItem = document.createElement('li');
      // cartItem.textContent = ${cart[i].name} - Quantity: ${cart[i].quantity} - $${(cart[i].price * cart[i].quantity).toFixed(2)};
      // cartItemsElement.appendChild(cartItem);
      // console.log(cartItemsElement);
   }
summaryElement.innerHTML = '';
summaryElement.innerHTML += `<h4>Cart Summary</h4>
<p>Total: <span id="total">EGP ${cart_total}</span></p>
<a class="btn btn-success btn-checkout" href="#checkoutModal">Checkout</a>`
{/* <div class="cart-summary">
                    
                </div> */}
}

// window.onload = function() {
//    console.log( "from cart" ,cart);
//    var cartItemsElement = document.querySelector(".row");
//    // var totalCostElement = document.getElementById('total-cost');
//    console.log(cartItemsElement);
//    cartItemsElement.innerHTML += '';
   
//    for(let i=0; i<cart.length; i++){
//       cart_total += cart[i].price * cart[i].quantity
//       console.log("hi", cart_total);
//       var cartItem = document.createElement('li');
//       cartItem.textContent = `${cart[i].name} - Quantity: ${cart[i].quantity} - $${(cart[i].price * cart[i].quantity).toFixed(2)}`;
//       cartItemsElement.appendChild(cartItem);
//       console.log(cartItemsElement);
//    }
// }


{/* <div class="col-md-8">
                <div class="cart-item">
                    <img src="./imgs/ray-bin.jpg">
                    <div class="item-details">
                        <h4>Product 1</h4>
                        <p>EGP 150.00</p>
                        <div class="quantity-box">
                            <div class="quantity-controls">
                                <button class="btn btn-sm btn-increase" aria-label="Increase Quantity">+</button>
                                <span>1</span>
                                <button class="btn btn-sm btn-decrease" aria-label="Decrease Quantity">-</button>
                            </div>
                        </div>
                        <button class="btn btn-sm btn-remove" aria-label="Remove"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            </div> */}
      //       <div class="cart-item">
      //       <img src="./imgs/ray-bin.jpg">
      //       <div class="item-details">
      //           <h4>Product 1</h4>
      //           <p>EGP 150.00</p>
      //           <div class="quantity-box">
      //               <div class="quantity-controls">
      //                   <button class="btn btn-sm btn-increase" aria-label="Increase Quantity">+</button>
      //                   <span>1</span>
      //                   <button class="btn btn-sm btn-decrease" aria-label="Decrease Quantity">-</button>
      //               </div>
      //           </div>
      //           <button class="btn btn-sm btn-remove" aria-label="Remove"><i class="fas fa-trash"></i></button>
      //       </div>
      //   </div>

var checkoutBtn = document.getElementById('Checkout');
// console.log(checkoutBtn);
// checkoutBtn.addEventListener('click', checkOut);

function checkOut() {
   console.log("I'm a button")
   //   cart_total = 20
   console.log("Cart Total:", cart_total);
   if(cart_total > currentUser.money){ console.log("Insufficient funds, cart total is more than your current balance.") }
   else if(cart_total == 0){ console.log("Your cart is empty, go shopping!");}
   else{
      currentUser.money -= cart_total
      currentUser.cart = []
      console.log("Mission Successful!");
      for (let i = 0; i < users.length; i++) {
         if (currentUser.username == users[i].username && users[i].logged_in == true){
            users[i] = currentUser
            localStorage.setItem("users", JSON.stringify(users))
            localStorage.setItem("Current User", JSON.stringify(currentUser))
            console.log(users[i]);
            console.log(currentUser);
            break
         }
      }
   }
}


