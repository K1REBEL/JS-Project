var loginBtn = document.getElementById('login_button')

loginBtn.addEventListener("click", function(){
   var mail = document.getElementById('inputEmail').value
   var pass = document.getElementById('inputPassword').value
   var newUser = login(mail, pass)
})

