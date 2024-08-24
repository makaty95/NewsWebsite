var email=document.querySelector("#email")
var password=document.querySelector("#password")
var login=document.querySelector(".button")
login.addEventListener("click",function(prevent_refresh){
    prevent_refresh.preventDefault()
    if (email.value === "") {
    alert("Please fill in all the fields.");
    email.focus(); 
    }else if (password.value === "") {
    alert("Please fill in all the fields.");
    password.focus(); 
    }else{
        if(localStorage.getItem("email")===email.value &&localStorage.getItem("password")===password.value){

                window.location="homepage.html"
        }
        else{
            alert("the email or the password is wrong")
        }
 


    }


})