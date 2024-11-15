// Module 1.10 JS codes

'use strict';
function rollDice() {
    return Math.floor(Math.random() * 6) + 1; // Simulate a dice roll (1 to 6)
}

function calculateProbability() {
    // Prompt user for the number of dice and the target sum
    const numberOfDice = parseInt(prompt("Enter the number of dice:"), 10);
    const targetSum = parseInt(prompt("Enter the target sum:"), 10);

    // Validate inputs
    if (isNaN(numberOfDice) || isNaN(targetSum) || numberOfDice <= 0 || targetSum <= 0) {
        document.getElementById("result").textContent = "Invalid input. Please enter positive integers.";
        return;
    }

    // Number of simulations
    const simulations = 10000;
    let successfulRolls = 0;

    // Simulate rolling dice
    for (let i = 0; i < simulations; i++) {
        let sum = 0;

        // Roll the dice and calculate the sum
        for (let j = 0; j < numberOfDice; j++) {
            sum += rollDice();
        }

        // Check if the sum matches the target
        if (sum === targetSum) {
            successfulRolls++;
        }
    }

    // Calculate probability
    const probability = (successfulRolls / simulations) * 100;

    // Display the result on the HTML document
    document.getElementById("result").textContent =
        `Probability to get sum ${targetSum} with ${numberOfDice} dice is ${probability.toFixed(2)}%`;
}

// Run the program
calculateProbability();
