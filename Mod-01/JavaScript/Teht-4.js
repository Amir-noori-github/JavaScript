// Module 1.4 JS codes

'use strict';
// Prompt for the student's name
const name = prompt("Enter your name:");

// Generate a random number between 1 and 4
const houseNumber = Math.floor(Math.random() * 4) + 1;

let house;

// Determine the house based on the random number
if (houseNumber === 1) {
    house = "Gryffindor";
} else if (houseNumber === 2) {
    house = "Slytherin";
} else if (houseNumber === 3) {
    house = "Hufflepuff";
} else {
    house = "Ravenclaw";
}

// Display the result in the HTML document
document.getElementById("result").innerText = `${name}, you are in ${house}.`;
