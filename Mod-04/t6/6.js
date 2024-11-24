// Module 4, Task 6
'use strict';
document.getElementById('searchForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const query = document.getElementById('query').value.trim();
    const resultsSection = document.getElementById('results');

    // Clear previous results
    resultsSection.innerHTML = '';

    if (!query) {
        resultsSection.innerHTML = '<p>Please enter a search term.</p>';
        return;
    }

    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        if (data.result.length === 0) {
            resultsSection.innerHTML = '<p>No jokes found. Try another search term!</p>';
            return;
        }

        // Render jokes
        data.result.forEach(joke => {
            const article = document.createElement('article');
            const p = document.createElement('p');
            p.textContent = joke.value;
            article.appendChild(p);
            resultsSection.appendChild(article);
        });
    } catch (error) {
        resultsSection.innerHTML = `<p>Error: ${error.message}</p>`;
    }
});