// Module 1.6 JS codes
'use strict';
// Ask the user if they want to calculate the square root
const confirmCalculation = confirm("Should I calculate the square root?");

if (confirmCalculation) {
    // Prompt for a number and convert it to a float
    const number = parseFloat(prompt("Enter a number:"));

    if (isNaN(number) || number < 0) {
        document.getElementById("result").innerText = "Invalid input. Please enter a non-negative number.";
    } else {
        // Calculate the square root
        const squareRoot = Math.sqrt(number);
        // Display the square root
        document.getElementById("result").innerText = `The square root of ${number} is ${squareRoot}.`;
    }
} else {
    // Display message if calculation is canceled
    document.getElementById("result").innerText = "The square root is not calculated.";
}
