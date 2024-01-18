// import {Usr} from "./fetchApi.js"
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


window.onload = function() {
   // var cart = [];
   console.log( "from cart" ,cart);
   var cartItemsElement = document.querySelector(".product");
   // var totalCostElement = document.getElementById('total-cost');
   console.log(cartItemsElement);
   cartItemsElement.innerHTML = '';
   
   for(let i=0; i<cart.length; i++){
      console.log("hi");
      var cartItem = document.createElement('li');
      cartItem.textContent = `${cart[i].name} - Quantity: ${cart[i].quantity} - $${(cart[i].price * cart[i].quantity).toFixed(2)}`;
      cartItemsElement.appendChild(cartItem);
      console.log(cartItemsElement);
   }
}


// document.addEventListener("DOMContentLoaded",function(cart){
//    console.log(cart);
//    var cartItemsElement = document.querySelector(".product");
//    // var totalCostElement = document.getElementById('total-cost');
//    console.log(cartItemsElement);
//    cartItemsElement.innerHTML = '';
   
//    for(let i=0; i<cart.length; i++){
//       console.log("hi");
//       var cartItem = document.createElement('li');
//       cartItem.textContent = `${cart[i].name} - Quantity: ${cart[i].quantity} - $${(cart[i].price * cart[i].quantity).toFixed(2)}`;
//       cartItemsElement.appendChild(cartItem);
//       console.log(cartItemsElement);
//    }
 
//    // cart.forEach(itemm => {
//    //     var cartItem = document.createElement('li');
//    //     cartItem.textContent = `${itemm.name} - Quantity: ${itemm.quantity} - $${(itemm.price * itemm.quantity).toFixed(2)}`;
//    //     cartItemsElement.appendChild(cartItem);
//    // });
// }) 

// document.addEventListener("DOMContentLoaded",function(){
//    let products = document.querySelector(".product");
//    var json;
//    fetch('https://dummyjson.com/products')
//    .then(res=>res.json())
//    .then(fetchedJson=> {
//      json = fetchedJson;
//     //  console.log(json.products);
//      json.products.forEach(data => {
//      products.innerHTML += `
//                  <div class="product filter-item all mobiles">
//                     <div class="box">
//                       <div class="image">
//                         <img src="${data.thumbnail}" alt="">
//                       </div>
//                        <div class="text">
//                        <p class="category"> ${data.category}</p>
//                      <p class="product-name">${data.title}</p>
//                      <p class="price">${data.price}</p>
//                      <p class="description">${data.description}</p>
//               <button class="purchase" onclick="addToCart(${data.id})"><a target="_blank" href="./cart.html">Add to Cart</a></button>
//                  </div>
//              </div>
//              </div>`
//    })
//  })
//  });

// function updateCart() {
//   try {
//      var cart3 =  addToCart(1, cart);
//      console.log("Current User Cart: ", cart3);
//   } catch (error) {
//      console.error("Error updating cart:", error);
//   }
// }
// updateCart();

