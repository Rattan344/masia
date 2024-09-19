// script.js

// Array to hold product data
let products = [];

// Function to add product to the list
function addProduct() {
    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const rating = parseFloat(document.getElementById('product-rating').value);

    if (!name || !price || !rating) {
        alert("Please fill out all fields!");
        return;
    }

    // Add product to array
    products.push({ name, price, rating });
    
    // Clear input fields
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-rating').value = '';

    // Update the bar graphs
    updateGraphs();
}

// Function to update the price and rating bar graphs
function updateGraphs() {
    const priceGraph = document.getElementById('price-graph');
    const ratingGraph = document.getElementById('rating-graph');

    // Clear previous graphs
    priceGraph.innerHTML = '';
    ratingGraph.innerHTML = '';

    products.forEach(product => {
        // Create price bar
        const priceBar = document.createElement('div');
        priceBar.className = 'bar';
        priceBar.style.width = product.price * 5 + 'px'; // Scale price width for better visualization
        priceBar.textContent = `${product.name}: $${product.price}`;
        priceGraph.appendChild(priceBar);

        // Create rating bar
        const ratingBar = document.createElement('div');
        ratingBar.className = 'bar rating-bar';
        ratingBar.style.width = product.rating * 50 + 'px'; // Scale rating width for better visualization
        ratingBar.textContent = `${product.name}: ${product.rating} stars`;
        ratingGraph.appendChild(ratingBar);
    });
}

// Function to sort products by price
function sortByPrice() {
    products.sort((a, b) => a.price - b.price);
    updateGraphs();
}

// Function to sort products by rating
function sortByRating() {
    products.sort((a, b) => b.rating - a.rating); // Higher rating first
    updateGraphs();
}

// Event listeners
document.getElementById('add-product').addEventListener('click', addProduct);
document.getElementById('sort-price').addEventListener('click', sortByPrice);
document.getElementById('sort-rating').addEventListener('click', sortByRating);
