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



function addToCart(id) {
  var cart = [];
  fetch('https://dummyjson.com/products/' + id)
    .then(res => res.json())
    .then(product => {
      var item = cart.find(p => p.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        cart.push({ id: product.id, name: product.title, price: product.price, quantity: 1 });
      }
      console.log(cart);
      // updateCartUI(cart);
      return cart;
    });
}
var as = addToCart(1);
document.addEventListener("DOMContentLoaded",function(as){
  console.log(as);
  var cartItemsElement = document.getElementById("cart-items");
  // var totalCostElement = document.getElementById('total-cost');
  console.log(cartItemsElement);
  cartItemsElement.innerHTML += '';
  

  as.forEach(itemm => {
      var cartItem = document.createElement('li');
      cartItem.textContent = `${itemm.name} - Quantity: ${itemm.quantity} - $${(itemm.price * itemm.quantity).toFixed(2)}`;
      cartItemsElement.appendChild(cartItem);
  });

  // var totalCost = cart.reduce((total, itemm) => total + itemm.price * itemm.quantity, 0);
  // totalCostElement.textContent = totalCost.toFixed(2);

})
// function updateCartUI(cart)