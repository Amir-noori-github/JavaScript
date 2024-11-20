// Module 3, task 1 JS codes
'use strict';
// Select the element with id="target"
const targetElement = document.getElementById("target");

// Add the HTML content using innerHTML
targetElement.innerHTML = `
  <ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ul>
`;

// Add the class 'my-list' to the element
targetElement.classList.add("my-list");
