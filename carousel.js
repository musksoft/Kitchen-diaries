let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

// Function to move to the next item
function moveNext() {
    let items = document.querySelectorAll('.item');
    let slideContainer = document.querySelector('.slide');
    
    // Move the first item to the end of the container
    slideContainer.appendChild(items[0]);
}

// Call moveNext every 8 seconds (8000 milliseconds) to make the transition slower
let slideInterval = setInterval(moveNext, 8000);

let container = document.querySelector('.container');

// Pause the slide show on hover
container.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

// Resume the slide show when mouse leaves the container
container.addEventListener('mouseleave', () => {
    slideInterval = setInterval(moveNext, 8000);
});

// Allow manual next move when the 'next' button is clicked
next.addEventListener('click', () => {
    clearInterval(slideInterval);  // Stop the auto transition
    moveNext();  // Move to the next item manually
    slideInterval = setInterval(moveNext, 8000);  // Restart the auto transition
});

// Allow manual previous move when the 'prev' button is clicked
prev.addEventListener('click', () => {
    let items = document.querySelectorAll('.item');
    let slideContainer = document.querySelector('.slide');
    
    // Move the last item to the front of the container
    slideContainer.insertBefore(items[items.length - 1], items[0]);
});
