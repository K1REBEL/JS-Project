let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = JSON.parse(localStorage.getItem("Current User"));
// console.log(currentUser);

function fetchUser(user) {
  for (let i = 0; i < users.length; i++) {
    if (user.username == users[i].username && users[i].logged_in == true) {
      // console.log("I'm here");
      // console.log(users[i]);
      return users[i];
    }
  }
  console.log("not found");
}

// var Usr1 = fetchUser(Usr)

var cart = currentUser.cart;
var cart_total = 0;
console.log(cart);
window.onload = function () {
  // console.log( "from cart" ,cart);
  var cartItemsElement = document.querySelector(".col-md-8");
  var summaryElement = document.getElementById("total");
  console.log(cartItemsElement);
  cartItemsElement.innerHTML = "";

  for (let i = 0; i < cart.length; i++) {
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
            `;
    cart_total += cart[i].price * cart[i].quantity;
    //   console.log("hi", cart_total);
  }
  summaryElement.innerHTML = "";
  summaryElement.innerHTML += `${cart_total}`;
};

var checkoutBtn = document.getElementById("place-order");
// console.log(checkoutBtn);
checkoutBtn.addEventListener("click", checkOut);

function checkOut() {
  console.log("I'm a button");
  //   cart_total = 20
  var card_number = document.getElementById("creditCard").value;
  console.log(card_number);
  console.log("Cart Total:", cart_total);
  if (cart_total > currentUser.money) {
    console.log(
      "Insufficient funds, cart total is more than your current balance."
    );
  } else if (cart_total == 0) {
    console.log("Your cart is empty, go shopping!");
  } else {
    currentUser.money -= cart_total;
    currentUser.cart = [];
    console.log("Mission Successful!");
    for (let i = 0; i < users.length; i++) {
      if (
        currentUser.username == users[i].username &&
        users[i].logged_in == true
      ) {
        users[i] = currentUser;
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("Current User", JSON.stringify(currentUser));
        console.log(users[i]);
        console.log(currentUser);
        break;
      }
    }
  }
}
