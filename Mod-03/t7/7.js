// Module 3, task 7 JS codes
'use strict';
// Select the elements
const trigger = document.getElementById("trigger");
const targetImage = document.getElementById("target");

// Function to change the image to picB.jpg
function changeToPicB() {
    targetImage.src = "picB.jpg";
}

// Function to change the image back to picA.jpg
function changeToPicA() {
    targetImage.src = "picA.jpg";
}

// Add event listeners for mouseover and mouseout
trigger.addEventListener("mouseover", changeToPicB);
trigger.addEventListener("mouseout", changeToPicA);
