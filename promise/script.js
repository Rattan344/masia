document.getElementById('fetchData').addEventListener('click', () => {
    // Define the API URL (Here, we use Dog API as an example)
    const apiUrl = 'https://dog.ceo/api/breeds/image/random';
    
    // Fetch data from the API
    fetch(apiUrl)
        .then(response => {
            // Check if the response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            // Parse the JSON data
            return response.json();
        })
        .then(data => {
            // Display the fetched data
            const imageUrl = data.message;
            document.getElementById('data').innerHTML = `
                <h2>Random Dog Image:</h2>
                <img src="${imageUrl}" alt="Random Dog" style="max-width: 100%; height: auto;">
            `;
        })
        .catch(error => {
            // Display an error message
            document.getElementById('data').innerHTML = `
                <p style="color: red;">Error fetching data: ${error.message}</p>
            `;
        });
});
