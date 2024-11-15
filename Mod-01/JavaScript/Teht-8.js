// Module 1.8 JS codes

'use strict';
function isLeapYear(year) {
    // A year is a leap year if it's divisible by 4, but not divisible by 100 unless also divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function generateLeapYears() {
    // Prompt user for start and end years
    const startYear = parseInt(prompt("Enter the start year:"), 10);
    const endYear = parseInt(prompt("Enter the end year:"), 10);

    if (isNaN(startYear) || isNaN(endYear) || startYear > endYear) {
        alert("Invalid input. Please enter valid start and end years.");
        return;
    }

    // Generate list of leap years
    const leapYears = [];
    for (let year = startYear; year <= endYear; year++) {
        if (isLeapYear(year)) {
            leapYears.push(year);
        }
    }

    // Display the leap years as an unordered list in the HTML document
    const leapYearsList = document.getElementById("leap-years-list");
    leapYearsList.innerHTML = ""; // Clear any existing list

    if (leapYears.length === 0) {
        leapYearsList.innerHTML = "<li>No leap years found in the given interval.</li>";
    } else {
        leapYears.forEach(year => {
            const listItem = document.createElement("li");
            listItem.textContent = year;
            leapYearsList.appendChild(listItem);
        });
    }
}

// Run the program
generateLeapYears();
