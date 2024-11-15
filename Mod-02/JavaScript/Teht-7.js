// Module 2.7 JS codes

// Function that returns a random dice roll between 1 and the specified number of sides
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

// Main program that rolls the dice until it gets the maximum number on the dice
function rollUntilMax() {
    // Prompt the user for the number of sides on the dice
    let sides = parseInt(prompt("Enter the number of sides on the dice:"));

    // Check if input is valid
    if (isNaN(sides) || sides < 2) {
        alert("Please enter a valid number greater than 1.");
        return;
    }

    let result;
    let resultsList = document.createElement("ul");

    do {
        result = rollDice(sides);

        // Create a new list item for each roll result
        let listItem = document.createElement("li");
        listItem.textContent = `Rolled: ${result}`;
        resultsList.appendChild(listItem);

    } while (result !== sides);

    // Clear previous results and add the new list to the div
    let diceResultsDiv = document.getElementById("diceResults");
    diceResultsDiv.innerHTML = "";
    diceResultsDiv.appendChild(resultsList);
}