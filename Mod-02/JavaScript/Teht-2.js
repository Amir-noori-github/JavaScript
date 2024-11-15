// Module 2.2 JS codes
function getParticipants() {
    // Ask the user for the number of participants
    let numberOfParticipants = parseInt(prompt("Enter the number of participants:"));
    let participants = [];

    // Ask for each participant's name
    for (let i = 0; i < numberOfParticipants; i++) {
        let name = prompt(`Enter the name of participant ${i + 1}:`);
        participants.push(name);
    }

    // Sort the participants' names in alphabetical order
    participants.sort();

    // Display the sorted names in an ordered list
    let participantListDiv = document.getElementById("participantList");
    let ol = document.createElement("ol");

    participants.forEach(function(name) {
        let li = document.createElement("li");
        li.textContent = name;
        ol.appendChild(li);
    });

    // Clear any previous content and add the new ordered list to the div
    participantListDiv.innerHTML = "";
    participantListDiv.appendChild(ol);
}