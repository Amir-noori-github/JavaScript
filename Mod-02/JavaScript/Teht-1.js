// Module 2.1 JS codes
function getNumbers() {
    // Initialize an empty array to store the numbers
    let numbers = [];

    // Prompt the user to enter five numbers
    for (let i = 0; i < 5; i++) {
        let num = parseFloat(prompt(`Enter number ${i + 1}:`));
        // Add each number to the array
        numbers.push(num);
    }

    console.log("Numbers in reverse order:");

    // Use a for-loop to print the numbers in reverse order
    for (let i = numbers.length - 1; i >= 0; i--) {
        console.log(numbers[i]);
    }
}