// Function to be executed on button click
function buttonClickHandler() {
    console.log("Button clicked!");
}

// Add event listener to button on Page 1
var buttonPage1 = document.getElementById("buttonPage1");
if (buttonPage1) {
    buttonPage1.addEventListener("click", buttonClickHandler);
}

// Add event listener to button on Page 2
var buttonPage2 = document.getElementById("buttonPage2");
if (buttonPage2) {
    buttonPage2.addEventListener("click", buttonClickHandler);
}
