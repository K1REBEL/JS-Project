let users = JSON.parse(localStorage.getItem("users")) || []
let currentUser = JSON.parse(localStorage.getItem("Current User"))

var cart = currentUser.cart
var cart_total = 0

var cartItemsElement = document.querySelector(".col-md-8")
var summaryElement = document.getElementById("total")
cartItemsElement.innerHTML = ""
summaryElement.innerHTML = ""

window.onload = function () {
  // console.log( "from cart" ,cart)

  console.log(cartItemsElement)


  for (let i = 0; i < cart.length; i++) {
    cartItemsElement.innerHTML += `
                <div class="cart-item item_no${i}">
                    <img src="${cart[i].image}">
                    <div class="item-details">
                        <h4>${cart[i].name}</h4>
                        <p>${cart[i].price}</p>
                        <div class="quantity-box">
                            <div class="quantity-controls">
                                <button class="btn btn-sm btn-increase" aria-label="Increase Quantity" onclick="increaseItem(${i})">+</button>
                                <span id="spanof${i}">${cart[i].quantity}</span>
                                <button class="btn btn-sm btn-decrease" aria-label="Decrease Quantity" onclick="decreaseItem(${i})">-</button>
                            </div>
                        </div>
                        <button class="btn btn-sm btn-remove" aria-label="Remove" onclick="removeItem(${i})"><i class="fas fa-trash"></i></button>
                    </div>
                </div>`
    // cart_total += cart[i].price * cart[i].quantity
    //   console.log("hi", cart_total)
  }
//   summaryElement.innerHTML = ""
//   summaryElement.innerHTML += `${cart_total}`
    calcTotal()
}

function calcTotal() {
    cart_total = 0
    for (let i = 0; i < cart.length; i++) {
        cart_total += cart[i].price * cart[i].quantity
    }
    summaryElement.innerHTML = ""
    summaryElement.innerHTML += `${cart_total}`
}

function removeItem(index) {
    cart.splice(index, index)
    var toBeDel = document.querySelector(`.item_no${index}`)
    toBeDel.remove()
    calcTotal()
}
function decreaseItem(index) {
    cart[index].quantity -= 1
    let quantityBox = document.getElementById(`spanof${index}`)
    quantityBox.innerHTML = cart[index].quantity
    calcTotal()
}
function increaseItem(index) {
    cart[index].quantity += 1
    let quantityBox = document.getElementById(`spanof${index}`)
    quantityBox.innerHTML = cart[index].quantity
    // console.log(cart_total);
    calcTotal()
}

var checkoutBtn = document.getElementById("place-order")
checkoutBtn.addEventListener("click", checkOut)

function checkOut() {
//   console.log("I'm a button")
//   console.log("Cart Total:", cart_total)
  if (cart_total > currentUser.money) { alert("Insufficient funds, cart total is more than your current balance.") } 
  else if (cart_total == 0) { alert("Your cart is empty, go shopping!") } 
  else {
    currentUser.money -= cart_total
    currentUser.cart = []
    console.log("Mission Successful!")
    for (let i = 0; i < users.length; i++) {
      if (currentUser.username == users[i].username && users[i].logged_in == true) {
        users[i] = currentUser
        localStorage.setItem("users", JSON.stringify(users))
        localStorage.setItem("Current User", JSON.stringify(currentUser))
        // console.log(users[i])
        // console.log(currentUser)
        break
      }
    }
  }
}
