// Module 3, task 3 JS codes

'use strict';

// Array of names
const names = ["John", "Paul", "Jones"];

// Select the element with id="target"
const targetElement = document.getElementById("target");

// Create an unordered list dynamically
let listHTML = "<ul>";

for (let i = 0; i < names.length; i++) {
    // Add each name as a list item
    listHTML += `<li>${names[i]}</li>`;
}

listHTML += "</ul>";

// Add the list to the target element using innerHTML
targetElement.innerHTML = listHTML;

