// Module 3, Task 8 JS codes

'use strict';
// Select the elements
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operationSelect = document.getElementById("operation");
const resultDisplay = document.getElementById("result");
const calculateButton = document.getElementById("start");

// Function to calculate based on the selected operation
function calculate() {
    // Get input values and parse them as numbers
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operation = operationSelect.value;

    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = "Please enter valid numbers!";
        return;
    }

    // Perform the selected operation
    let result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "sub":
            result = num1 - num2;
            break;
        case "multi":
            result = num1 * num2;
            break;
        case "div":
            if (num2 === 0) {
                resultDisplay.textContent = "Division by zero is not allowed.";
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultDisplay.textContent = "Invalid operation selected.";
            return;
    }

    // Display the result
    resultDisplay.textContent = `Result: ${result}`;
}

// Add an event listener to the button
calculateButton.addEventListener("click", calculate);
