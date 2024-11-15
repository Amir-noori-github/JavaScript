// Module 1.7

'use strict';
// Ask the user for the number of dice rolls
const numRolls = parseInt(prompt("How many dice rolls would you like to make?"), 10);

// Initialize the sum of the rolls
let sum = 0;

// Roll the dice the user-defined number of times
for (let i = 0; i < numRolls; i++) {
    // Roll a die (random number between 1 and 6)
    const roll = Math.floor(Math.random() * 6) + 1;
    // Add the roll result to the sum
    sum += roll;
}

// Display the sum of the results in the HTML document
document.getElementById("result").innerText = `The sum of the dice rolls is: ${sum}`;
