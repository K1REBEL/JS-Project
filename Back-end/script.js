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

