// Module 4, task 2
'use strict';
document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    const query = document.getElementById('query').value.trim();
    if (!query) {
        console.error("Please enter a valid query.");
        return;
    }

    const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        console.log("Search Results:", data); // Print the search results to the console
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});