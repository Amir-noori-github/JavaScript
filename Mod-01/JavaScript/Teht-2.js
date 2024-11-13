// Module 1.2 JS codes

'use strict';
// Prompt the user for their name
const name = prompt("What is your name?");

// Create the greeting message
const greetingMessage = `Hello, ${name}!`;

// Display the message in the HTML document
document.getElementById("greeting").innerText = greetingMessage;