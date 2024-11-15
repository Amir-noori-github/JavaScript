// Module 2.5 JS codes
function getUniqueNumbers() {
    let numbers = [];
    let enteredNumbers = new Set();
    let input;

    while (true) {
        input = parseFloat(prompt("Enter a number:"));

        // Check if the number was already entered
        if (enteredNumbers.has(input)) {
            alert("This number has already been entered! Stopping...");
            break;
        }

        // Add the number to the list and the set for tracking
        numbers.push(input);
        enteredNumbers.add(input);
    }

    // Sort the numbers in ascending order
    numbers.sort(function(a, b) { return a - b; });

    // Print the sorted numbers to the console
    console.log("Entered numbers in ascending order:");
    numbers.forEach(function(num) {
        console.log(num);
    });
}