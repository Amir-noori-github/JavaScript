// Module 2.4 JS codes

function getNumbers() {
    let numbers = [];
    let input;

    // Keep asking for numbers until the user enters 0
    do {
        input = parseFloat(prompt("Enter a number (0 to stop):"));
        if (input !== 0) {
            numbers.push(input);
        }
    } while (input !== 0);

    // Sort the numbers in descending order
    numbers.sort(function(a, b) { return b - a; });

    // Print the sorted numbers to the console
    console.log("Numbers from largest to smallest:");
    numbers.forEach(function(num) {
        console.log(num);
    });
}