
function enableBoxes() {

    document.getElementById("changeMailBox").disabled = false;
    document.getElementById("changeLangBox").disabled = false;
    document.getElementById("changeCountryBox").disabled = false;
    document.getElementById("changeDOBBox").disabled = false;
    document.getElementById("changeNameBox").disabled = false;


    document.getElementById("changeMailBox").style.borderColor = "red";
    document.getElementById("changeLangBox").style.borderColor = "red";
    document.getElementById("changeCountryBox").style.borderColor = "red";
    document.getElementById("changeDOBBox").style.borderColor = "red";
    document.getElementById("changeNameBox").style.borderColor = "red";
}


function disableBoxes() {

    document.getElementById("changeMailBox").disabled = true;
    document.getElementById("changeLangBox").disabled = true;
    document.getElementById("changeCountryBox").disabled = true;
    document.getElementById("changeDOBBox").disabled = true;
    document.getElementById("changeNameBox").disabled = true;

    document.getElementById("changeMailBox").style.borderColor = "#ccc";
    document.getElementById("changeLangBox").style.borderColor = "#ccc";
    document.getElementById("changeCountryBox").style.borderColor = "#ccc";
    document.getElementById("changeDOBBox").style.borderColor = "#ccc";
    document.getElementById("changeNameBox").style.borderColor = "#ccc";
}

function updateUserInfo() {

    

}


function onEditClick() {

    if (document.getElementById("editInfoButton").value == "Edit") {

        enableBoxes();
        
        document.getElementById("editInfoButton").value = "Save";        
    
    } else {
        updateUserInfo();
        disableBoxes();

        
        document.getElementById("editInfoButton").value = "Edit";
    }
}

function otherInfoClicked() {
    
    
}



