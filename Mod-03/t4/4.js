// Module 3, task 4 JS codes

'use strict';
// Array of students with id and name
const students = [
  { id: "2345768", name: "John" },
  { id: "2134657", name: "Paul" },
  { id: "5423679", name: "Jones" },
];

// Select the element with id="target"
const targetElement = document.getElementById("target");

// Loop through the students array
for (let i = 0; i < students.length; i++) {
  // Create an option element
  const option = document.createElement("option");

  // Set the value attribute to the student's id
  option.value = students[i].id;

  // Set the text content to the student's name
  option.textContent = students[i].name;

  // Append the option element to the select element
  targetElement.appendChild(option);
}
