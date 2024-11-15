//
'use strict';
function isPrime(number) {
    // Numbers less than 2 are not prime
    if (number < 2) return false;

    // Check divisors up to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // If divisible by i, it is not prime
        }
    }
    return true; // Otherwise, it is prime
}

function checkPrimeNumber() {
    // Prompt the user for an integer
    const input = prompt("Enter an integer:");
    const number = parseInt(input, 10);

    // Validate input
    if (isNaN(number)) {
        document.getElementById("result").textContent = "Invalid input. Please enter a valid integer.";
        return;
    }

    // Check if the number is prime
    const resultMessage = isPrime(number)
        ? `${number} is a prime number.`
        : `${number} is not a prime number.`;

    // Display the result on the HTML document
    document.getElementById("result").textContent = resultMessage;
}

// Run the program
checkPrimeNumber();
