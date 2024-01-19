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

$(document).ready(function () 
{
  
  $(".add-to-cart").click(function () 
  {
      var name = $(this).parent().find(".card-title").text()
      var price = $(this).parent().find(".card-text").eq(1).text()
      alert("You have added " + name + " for " + price + " to your cart.")
  })

  $(".card-title, .card-text").not(":eq(1)").hide()

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
})
