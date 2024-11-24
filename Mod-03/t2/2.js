// Module 3, task 2 JS codes

'use strict';
// Select the element with id="target"
const targetElement = document.getElementById("target");

// Create an unordered list element
const ul = document.createElement("ul");
// Create and append the first list item
const li1 = document.createElement("li");
li1.textContent = "First item";
ul.appendChild(li1);

// Create and append the second list item
const li2 = document.createElement("li");
li2.textContent = "Second item";
li2.classList.add("my-item"); // Add the class 'my-item' to the second list item
ul.appendChild(li2);

// Create and append the third list item
const li3 = document.createElement("li");
li3.textContent = "Third item";
ul.appendChild(li3);

// Append the unordered list to the target element
targetElement.appendChild(ul);
