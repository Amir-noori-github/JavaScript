// Module 1.5 JS codes

'use strict';
// Prompt the user to enter a year
const year = parseInt(prompt("Enter a year:"), 10);

// Check if the year is a leap year
let isLeapYear;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            isLeapYear = true;
        } else {
            isLeapYear = false;
        }
    } else {
        isLeapYear = true;
    }
} else {
    isLeapYear = false;
}

// Display the result in the HTML document
document.getElementById("result").innerText =
    isLeapYear ? `${year} is a leap year.` : `${year} is not a leap year.`;
