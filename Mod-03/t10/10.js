// Module 3, task 10 JS codes

'use strict';
// Select the form and target paragraph
const form = document.getElementById("source");
const targetParagraph = document.getElementById("target");

// Add event listener to the form for submit
form.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values of firstname and lastname inputs
    const firstName = document.querySelector("input[name='firstname']").value.trim();
    const lastName = document.querySelector("input[name='lastname']").value.trim();

    // Display the full name in the target paragraph
    if (firstName && lastName) {
        targetParagraph.textContent = `Your name is ${firstName} ${lastName}.`;
    } else {
        targetParagraph.textContent = "Please fill out both first and last name.";
    }
});
