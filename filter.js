function fetchData() {
    return fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => data.products); 
  }

  function showProducts(products) {
    const productsContainer = document.querySelector('.row');
    productsContainer.innerHTML = '';

    products.forEach(product => {
      productsContainer.innerHTML += `<div class="col-md-4">
                        <div class="card">
                      <img src="${product.thumbnail}" class="card-img-top">
                      <div class="card-body">
                          <h5 class="card-title"> ${product.price}</h5>
                          <p class="product-brand"><span class="data">${product.title}</span></p>
                          <p class="card-text"><span class="data">${product.category}</span></p>
                          <p class="card-text"><span class="data">Description </span>${product.description}</p>
                          <button class="btn btn-success show-details">Details</button>
                          <button class="btn btn-success" onclick="addToCart(${product.id})">Add to Cart</button>
                      </div>
                  </div>
              </div>`;
              $(".card-title, .card-text").hide()
$(".show-details").click(function () 
{
    var details = $(this).parent().parent().find(".card-title, .card-text").not(":eq(1)")
    details.toggle()
    if ($(this).text() == "Details") 
    {
        $(this).text("Hide")
    } else 
    {
        $(this).text("Details")
    }
})
    });
  }

  function populateCategories(products) {
    const categories = ['all', ...new Set(products.map(product => product.category))];
    const categoryFilter = document.getElementById('categoryFilter');

    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.text = category.charAt(0).toUpperCase() + category.slice(1); 
      categoryFilter.appendChild(option);
    });
  }

  function filterProducts() {
    const selectedCategory = document.getElementById('categoryFilter').value;

    fetchData()
      .then(products => {
        if (selectedCategory !== 'all') {
          products = products.filter(product => product.category === selectedCategory);
        }
        showProducts(products);
      });
  }

  fetchData()
    .then(products => {
      populateCategories(products);
      showProducts(products);
    })
    .catch(error => console.error('Error fetching data:', error));
  
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

// var Usr = fetchUser(newUser)
let currentUser = JSON.parse(localStorage.getItem("Current User"))

function addToCart(id) {
    console.log(currentUser)
 var cart = currentUser.cart;
 fetch('https://dummyjson.com/products/' + id)
   .then(res => res.json())
   .then(product => {
     var item = cart.find(p => p.id === product.id);
     if (item) {
       item.quantity++;
     } else {
       cart.push({ id: product.id, name: product.title, price: product.price, quantity: 1 });
     }
     currentUser.cart = cart
     for (let i = 0; i < users.length; i++) {
       if (currentUser.username == users[i].username && users[i].logged_in == true){
          console.log("I'm here");
          users[i] = currentUser
          console.log(users[i]);
          localStorage.setItem("users", JSON.stringify(users))
          break;
       }
    }
    //  console.log(cart);
     return currentUser;
   });
}