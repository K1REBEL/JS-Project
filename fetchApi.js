document.addEventListener("DOMContentLoaded",function(){
  let products = document.querySelector(".product");
  var json;
  fetch('https://dummyjson.com/products')
  .then(res=>res.json())
  .then(fetchedJson=> {
    json = fetchedJson;
    console.log(json.products);
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


var as = addToCart(1);


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