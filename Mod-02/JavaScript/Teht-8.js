// Module 2.8 JS codes
// Function to concatenate an array of strings
function concat(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

// Hardcoded array of strings
const names = ["Johnny", "DeeDee", "Joey", "Marky"];

// Call the function and display the result
const concatenatedString = concat(names);
document.getElementById("result").textContent = concatenatedString;