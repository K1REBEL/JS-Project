function fetchData() {
  return fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => data.products)
}

function showProducts(products) {
  const productsContainer = document.querySelector(".row")
  productsContainer.innerHTML = ""

  products.forEach((product) => {
    productsContainer.innerHTML += `<div class="col-md-4 product-wrapper">
                        <div class="card">
                      <img src="${product.thumbnail}" class="card-img-top">
                      <div class="card-body">
                          <h5 class="card-title"> ${product.price} $</h5>
                          <p class="product-brand"><span class="data">${product.title}</span></p>
                          <p class="card-text"><span class="data">${product.category}</span></p>
                          <p class="card-text"><span class="data">Description </span>${product.description}</p>
                          <button class="btn btn-success btn-det show-details">Details</button>
                          <button class="btn btn-success btn-det" onclick="addToCart(${product.id})">Add to Cart</button>
                      </div>
                  </div>
              </div>`
    $(" .card-text").not(":eq(i)").hide()
    $(".show-details").click(function () {
      var details = $(this)
        .parent()
        .parent()
        .find(" .card-text")
        .not(":eq(i)")
      details.toggle()
      if ($(this).text() == "Details") {
        $(this).text("Hide")
      } else {
        $(this).text("Details")
      }
    })
  })
}

function populateCategories(products) {
  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ]
  const categoryFilter = document.getElementById("categoryFilter")

  categories.forEach((category) => {
    const option = document.createElement("option")
    option.value = category
    option.text = category.charAt(0).toUpperCase() + category.slice(1)
    categoryFilter.appendChild(option)
  })
}

function filterProducts() {
  const selectedCategory = document.getElementById("categoryFilter").value

  fetchData().then((products) => {
    if (selectedCategory !== "all") {
      products = products.filter(
        (product) => product.category === selectedCategory
      );
    }
    showProducts(products)
  });
}

fetchData()
  .then((products) => {
    populateCategories(products)
    showProducts(products)
  })
  .catch((error) => console.error("Error fetching data:", error))

let users = JSON.parse(localStorage.getItem("users")) || []
let currentUser = JSON.parse(localStorage.getItem("Current User"))
// console.log(currentUser)

function addToCart(id) {
  console.log(currentUser)
  var cart = currentUser.cart
  fetch("https://dummyjson.com/products/" + id)
    .then((res) => res.json())
    .then((product) => {
      var item = cart.find((p) => p.id === product.id)
      if (item) {
        item.quantity++
      } else {
        cart.push({
          id: product.id,
          name: product.title,
          price: product.price,
          quantity: 1,
          image:product.thumbnail
        })
      }

      currentUser.cart = cart
      for (let i = 0; i < users.length; i++) {
        if (currentUser.username == users[i].username && users[i].logged_in) {
          users[i] = currentUser
          localStorage.setItem("users", JSON.stringify(users))
          localStorage.setItem("Current User", JSON.stringify(currentUser))
          break
        } else if(currentUser.username == users[i].username && users[i].logged_in == false){
          alert('Please login first.')
        }
      }
      return currentUser
    })
}
