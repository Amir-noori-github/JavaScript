// Module 3, Task 9 JS codes

'use strict';
// Select the elements
const calculationInput = document.getElementById("calculation");
const calculateButton = document.getElementById("start");
const resultDisplay = document.getElementById("result");

// Function to parse and calculate the input
function calculate() {
    const input = calculationInput.value.trim();

    // Validate input format
    if (!/^\d+[\+\-\*\/]\d+$/.test(input)) {
        resultDisplay.textContent = "Invalid input. Use format: 3+5, 2-78, 3/6, etc.";
        return;
    }

    // Determine the operator and split the input
    let operator, operands;
    if (input.includes("+")) {
        operator = "+";
        operands = input.split("+");
    } else if (input.includes("-")) {
        operator = "-";
        operands = input.split("-");
    } else if (input.includes("*")) {
        operator = "*";
        operands = input.split("*");
    } else if (input.includes("/")) {
        operator = "/";
        operands = input.split("/");
    }

    // Parse operands into integers
    const num1 = parseInt(operands[0], 10);
    const num2 = parseInt(operands[1], 10);

    // Perform the calculation
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                resultDisplay.textContent = "Division by zero is not allowed.";
                return;
            }
            result = Math.floor(num1 / num2); // Integer division
            break;
        default:
            resultDisplay.textContent = "Unknown operation.";
            return;
    }

    // Display the result
    resultDisplay.textContent = `Result: ${result}`;
}

// Add event listener to the button
calculateButton.addEventListener("click", calculate);
