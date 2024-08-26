var submit = document.querySelector(".button2")
var logo=document.querySelector("#next")

submit.addEventListener("click", function (preventSubmit) {
    var checkboxes = document.querySelectorAll('#option:checked')
    let selectedCategories = []
    checkboxes.forEach((checkbox) => {
        selectedCategories.push(checkbox.value);
    });
    if (selectedCategories.length > 3) {
        alert("You can only select up to 3 categories.");
        preventSubmit.preventDefault(); 
    }else{
    localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
    window.location = "homepage.html"
    }

  
})

logo.addEventListener("click",function(){
    localStorage.clear()
})