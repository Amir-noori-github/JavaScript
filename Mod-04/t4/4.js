// Handle form submission
const form = document.getElementById('search-form');
const resultsContainer = document.getElementById('results');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('query').value;

    // Fetch data from TVMaze API
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then(response => response.json())
        .then(data => {
            // Clear previous results
            resultsContainer.innerHTML = '';

            // Loop through each TV show in the search results
            data.forEach(tvShow => {
                const article = document.createElement('article');

                // Create and append the show name in an h2 tag
                const name = document.createElement('h2');
                name.textContent = tvShow.show.name;
                article.appendChild(name);

                // Create and append the show URL as a link
                const link = document.createElement('a');
                link.href = tvShow.show.url;
                link.target = "_blank";
                link.textContent = "More details";
                article.appendChild(link);

                // Handle the image with ternary operator for default image
                const img = document.createElement('img');
                const imageUrl = tvShow.show.image ? tvShow.show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
                img.src = imageUrl;
                img.alt = tvShow.show.name;
                article.appendChild(img);

                // Create and append the summary in a div
                const summary = document.createElement('div');
                summary.innerHTML = tvShow.show.summary || 'No summary available.';
                article.appendChild(summary);

                // Append the article to the results container
                resultsContainer.appendChild(article);
            });
        })
        .catch(error => {
            resultsContainer.innerHTML = 'Error fetching data: ' + error;
        });
});
