// Module 2.9 JS codes

function even(numbers) {
    // Initialize an empty array for even numbers
    let evenNumbers = [];

    // Loop through the input array to find even numbers
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]); // Add even numbers to the new array
        }
    }

    return evenNumbers;
}

// Hardcoded array
const originalArray = [2, 7, 4, 9, 6,10];

// Call the even() function
const evenArray = even(originalArray);

// Display the arrays in the HTML
document.getElementById("original-array").textContent = JSON.stringify(originalArray);
document.getElementById("even-array").textContent = JSON.stringify(evenArray);

// Print the arrays to the console for verification
console.log("Original Array:", originalArray);
console.log("Even Numbers Array:", evenArray);
