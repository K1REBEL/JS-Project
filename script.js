window.addEventListener('scroll' , function()
{
  const header = this.document.querySelector('header')
  header.classList.toggle('down' , window.scrollY > 0)
})


/////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () 
{
  const navToggle = document.querySelector(".nav-toggle")
  const navigation = document.querySelector(".navigation")

  navToggle.addEventListener("click", function () 
  {
    document.body.classList.toggle("nav-open")
    navigation.classList.toggle("show")
  })

  const navigationLinks = document.querySelectorAll(".navigation a")
  navigationLinks.forEach(function (link) 
  {
    link.addEventListener("click", function () 
    {
      document.body.classList.remove("nav-open")
      navigation.classList.remove("show")
    })
  })

  window.addEventListener("scroll", function () 
  {
    const header = document.querySelector("header")
    header.classList.toggle("down", window.scrollY > 0)
  })
})


////////////////////////////////////

// $(document).ready(function () 
// {
  
//   $(".add-to-cart").click(function () 
//   {
//       var name = $(this).parent().find(".card-title").text()
//       var price = $(this).parent().find(".card-text").eq(1).text()
//       alert("You have added " + name + " for " + price + " to your cart.")
//   })

  // $(".card-title, .card-text").not(":eq(1)").hide()

  // $(".show-details").click(function () 
  // {
  //     var details = $(this).parent().parent().find(".card-title, .card-text").not(":eq(1)")
  //     details.toggle()
  //     if ($(this).text() == "Details") 
  //     {
  //         $(this).text("Hide")
  //     } else 
  //     {
  //         $(this).text("Details")
  //     }
  // })
// })

// import {newUser} from "./LoginSignup.js"
// // console.log(newUser);


// document.addEventListener("DOMContentLoaded",function(){
//   let products = document.querySelector(".row");
//   var json;
//   fetch('https://dummyjson.com/products')
//   .then(res=>res.json())
//   .then(fetchedJson=> {
//     json = fetchedJson;
//     console.log(json.products);
//     json.products.forEach(data => {
//     products.innerHTML += `
//                           <div class="col-md-4">
//                           <div class="card">
//                         <img src="${data.thumbnail}" class="card-img-top">
//                         <div class="card-body">
//                             <h5 class="card-title"> ${data.price}</h5>
//                             <p class="product-brand"><span class="data">${data.title}</span></p>
//                             <p class="card-text"><span class="data">${data.category}</span></p>
//                             <p class="card-text"><span class="data">Description </span>${data.description}</p>
//                             <button class="btn btn-success show-details">Details</button>
//                             <button class="btn btn-success add-to-cart">Add to Cart</button>
//                         </div>
//                     </div>
//                 </div>
// ` ;
// $(".add-to-cart").click(function () 
//   {
//       var name = $(this).parent().find(".card-title").text()
//       var price = $(this).parent().find(".card-text").eq(1).text()
//       alert("You have added " + name + " for " + price + " to your cart.")
//   })
// $(".card-title, .card-text").not(":eq(1)").hide();
// $(".show-details").click(function () 
//   {
//       var details = $(this).parent().parent().find(".card-title, .card-text").not(":eq(1)")
//       details.toggle()
//       if ($(this).text() == "Details") 
//       {
//           $(this).text("Hide")
//       } else 
//       {
//           $(this).text("Details")
//       }
//   })
//   })
// })
// });


// let users = JSON.parse(localStorage.getItem("users")) || []

// function fetchUser(user){
//    for (let i = 0; i < users.length; i++) {
//       if (user.username == users[i].username && users[i].logged_in == true){
//          // console.log("I'm here");
//          // console.log(users[i]);
//          return users[i]
//       }
//    }
//    console.log("not found");
// }

// var Usr = fetchUser(newUser)

// function addToCart(id, Usr) {
//    var cart = Usr.cart;
//    fetch('https://dummyjson.com/products/' + id)
//      .then(res => res.json())
//      .then(product => {
//        var item = cart.find(p => p.id === product.id);
//        if (item) {
//          item.quantity++;
//        } else {
//          cart.push({ id: product.id, name: product.title, price: product.price, quantity: 1 });
//        }
//        Usr.cart = cart
//        for (let i = 0; i < users.length; i++) {
//          if (Usr.username == users[i].username && users[i].logged_in == true){
//             // console.log("I'm here");
//             users[i] = Usr
//             // console.log(users[i]);
//             localStorage.setItem("users", JSON.stringify(users))
//             break
//          }
//       }
//       //  console.log(cart);
//        return Usr;
//      });
//  }

//  var as = addToCart(1, Usr);

// // console.log(Usr);

// export {Usr}


