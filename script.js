document.getElementById("button").addEventListener("click", function() {
    alert("Button clicked!");
});

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