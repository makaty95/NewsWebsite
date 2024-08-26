var firstname=document.querySelector("#fname")
var lastname=document.querySelector("#lname")
var email=document.querySelector("#email")
var password=document.querySelector("#password")
var confirm_password=document.querySelector("#cpassword")
var signup=document.querySelector(".button")
var birthdate=document.querySelector("#bday")
var logo=document.querySelector("#next")

signup.addEventListener("click",function(prevent_refresh){
    prevent_refresh.preventDefault()
    if (firstname.value === "") {
        alert("Please fill in all the fields.");
        firstname.focus(); 
    } else if (lastname.value === "") {
        alert("Please fill in all the fields.");
        lastname.focus();
    } 
    else if (birthdate.value === "") {
        alert("Please fill in all the fields.");
        birthdate.focus();
    } 
else if (email.value === "") {
        alert("Please fill in all the fields.");
        email.focus(); 
    } else if (password.value === "") {
        alert("Please fill in all the fields.");
        password.focus(); 
    } else if (confirm_password.value === "") {
        alert("Please fill in all the fields.");
        confirm_password.focus();
    } else if (password.value !== confirm_password.value) {
        alert("Passwords do not match. Please try again.");
        confirm_password.focus()
    } 
    else if(email.value.indexOf("@") === -1 || email.value.indexOf(".com") === -1){
    alert("Please Enter valid email, e.g:info@yahoo.com")
    email.focus()
    }
    else if (password.value.length < 8) {
        alert("Password must be greater than 8 characters.");
        password.focus();
    }
    else if (!/[A-Za-z]/.test(password.value) || !/\d/.test(password.value)) {
        alert("Password must include both letters and numbers.");
        password.focus();
    }
    else if (/\d/.test(firstname.value)) {
        alert("Invalid name");
        firstname.focus();
    }
    else if (/\d/.test(lastname.value)) {
        alert("Invalid name");
        lastname.focus();
    }
else{
    localStorage.setItem("firstname", firstname.value);
    localStorage.setItem("lastname", lastname.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("birthdate", birthdate.value);
    window.location = "login.html";
}
    
})

logo.addEventListener("click",function(){
    localStorage.clear()
})