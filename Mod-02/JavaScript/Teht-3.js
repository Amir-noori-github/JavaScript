// Module 2.3 JS codes

function getDogNames() {
    let dogs = [];

    // Prompt the user to enter six dog names
    for (let i = 0; i < 6; i++) {
    let name = prompt(`Enter the name of dog ${i + 1}:`);
    dogs.push(name);
}

    // Sort the dog names in reverse alphabetical order
    dogs.sort().reverse();

    // Display the sorted names in an unordered list
    let dogListDiv = document.getElementById("dogList");
    let ul = document.createElement("ul");

    dogs.forEach(function(name) {
    let li = document.createElement("li");
    li.textContent = name;
    ul.appendChild(li);
});

    // Clear any previous content and add the new unordered list to the div
    dogListDiv.innerHTML = "";
    dogListDiv.appendChild(ul);
}
