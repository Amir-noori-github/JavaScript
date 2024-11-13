// Module 1.3 JS codes

'use strict';
// Prompt for three integers and convert them to numbers
const num1 = parseInt(prompt("Enter the first integer:"), 10);
const num2 = parseInt(prompt("Enter the second integer:"), 10);
const num3 = parseInt(prompt("Enter the third integer:"), 10);

// Calculate sum, product, and average
const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum / 3;

// Display results in the HTML document
document.getElementById("sum").innerText = `Sum: ${sum}`;
document.getElementById("product").innerText = `Product: ${product}`;
document.getElementById("average").innerText = `Average: ${average.toFixed(2)}`;