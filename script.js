//Add event listener to all elements with the class "button"
var buttons = document.getElementsByClassName("button");

for (var i = 0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        alert("Button clicked!");
    });
}

//Get the current year
function getCurrentYear() {
    return new Date().getFullYear();
}

//Set the current year in the footer
function setDynamicYear() {
    var currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = getCurrentYear();
    }
}

//Set the dynamic year when the page loads
window.onload = function () {
    setDynamicYear();
};

//Toggle the description text
function textToggle(){
    var element = document.getElementById("content");
    element.classList.toggle("toggled");
}