document.addEventListener("DOMContentLoaded",function(){
    let products = document.querySelector(".product");
    async function getProduct(url){
        let data = await fetch(url);
        let response = await data.json();
        console.log(response);
        for(let i = 0 ; i < response.length ; i++){
         products.innerHTML += `
            <div class="product filter-item all mobiles">
               <div class="box">
                 <div class="image">
                   <img src="${response[i].image}" alt="">
                 </div>
                  <div class="text">
                  <p class="category"> ${response[i].category}</p>
                <p class="product-name">${response[i].title}</p>
                <p class="price">${response[i].price}</p>
                <p class="description">${response[i].description}</p>
         <button class="purchase"><a target="_blank" href="./cart.html">Add to Cart</a></button>
            </div>
        </div>
        </div>`
        }
    }
    getProduct("https://fakestoreapi.com/products")
})