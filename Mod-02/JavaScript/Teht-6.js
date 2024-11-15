// Module 2.6 JS codes

// Function that returns a random dice roll between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Main program that rolls the dice until it gets a 6
function rollUntilSix() {
    let result;
    let resultsList = document.createElement("ul");

    do {
        result = rollDice();

        // Create a new list item for each roll result
        let listItem = document.createElement("li");
        listItem.textContent = `Rolled: ${result}`;
        resultsList.appendChild(listItem);

    } while (result !== 6);

    // Clear previous results and add the new list to the div
    let diceResultsDiv = document.getElementById("diceResults");
    diceResultsDiv.innerHTML = "";
    diceResultsDiv.appendChild(resultsList);
}