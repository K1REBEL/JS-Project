import {newUser} from "./LoginSignup.js"
// console.log(newUser);


document.addEventListener("DOMContentLoaded",function(){
  let products = document.querySelector(".products");
  var json;
  fetch('https://dummyjson.com/products')
  .then(res=>res.json())
  .then(fetchedJson=> {
    json = fetchedJson;
   //  console.log(json.products);
    json.products.forEach(data => {
    products.innerHTML += `
                <div class="product filter-item all mobiles">
                   <div class="box">
                     <div class="image">
                       <img src="${data.thumbnail}" alt="">
                     </div>
                      <div class="text">
                      <p class="category"> ${data.category}</p>
                    <p class="product-name">${data.title}</p>
                    <p class="price">${data.price}</p>
                    <p class="description">${data.description}</p>
             <button class="purchase" onclick="addToCart(${data.id})"><a target="_blank" href="./cart.html">Add to Cart</a></button>
                </div>
            </div>
            </div>`
  })
})
});

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

var Usr = fetchUser(newUser)

function addToCart(id, Usr) {
   var cart = Usr.cart;
   fetch('https://dummyjson.com/products/' + id)
     .then(res => res.json())
     .then(product => {
       var item = cart.find(p => p.id === product.id);
       if (item) {
         item.quantity++;
       } else {
         cart.push({ id: product.id, name: product.title, price: product.price, quantity: 1 });
       }
       Usr.cart = cart
       for (let i = 0; i < users.length; i++) {
         if (Usr.username == users[i].username && users[i].logged_in == true){
            // console.log("I'm here");
            users[i] = Usr
            // console.log(users[i]);
            localStorage.setItem("users", JSON.stringify(users))
            break
         }
      }
      //  console.log(cart);
       return Usr;
     });
 }

 var as = addToCart(1, Usr);

// console.log(Usr);

export {Usr}


