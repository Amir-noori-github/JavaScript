// Module 4, Task 5 JS codes
// Fetch a random Chuck Norris joke
fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())  // Parse the JSON response
    .then(data => {
        // Print the joke (the 'value' property) to the console
        console.log(data.value);
    })
    .catch(error => {
        // Handle any errors
        console.error('Error fetching joke:', error);
    });
