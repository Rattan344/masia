// Function to change the button color when clicked
function changeColor(event) {
    event.target.style.backgroundColor = 'lightblue';
}

// Function to show the message when mouse is over the button
function showMessage(event) {
    const messageId = `message${event.target.id.slice(-1)}`;  // Get the message ID dynamically
    const messageDiv = document.getElementById(messageId);
    messageDiv.style.display = 'block';  // Display the message
}

// Function to hide the message when the mouse is moved away
function hideMessage(event) {
    const messageId = `message${event.target.id.slice(-1)}`;  // Get the message ID dynamically
    const messageDiv = document.getElementById(messageId);
    messageDiv.style.display = 'none';  // Hide the message
}

// Function to hide the button on double click
function hideButton(event) {
    event.target.style.display = 'none';  // Hide the button
}

// Add event listeners to each button
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', changeColor);       // Click event to change color
    button.addEventListener('mouseover', showMessage);   // Mouseover event to show message
    button.addEventListener('mouseout', hideMessage);    // Mouseout event to hide message
    button.addEventListener('dblclick', hideButton);     // Double click event to hide button
});
