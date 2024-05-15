// Initialize slideIndex variable to 1
let slideIndex = 1;

// Call the showSlides function with slideIndex as argument to display the first slide
showSlides(slideIndex);

// Function to move to the next or previous slide
function plusSlides(n) {
    showSlides(slideIndex += n); // Increase slideIndex by n and call showSlides function
}

// Function to display the slide with the given slideIndex
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides"); // Get all elements with class "mySlides"
    
    // If n is greater than the number of slides, set slideIndex to 1
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    // If n is less than 1, set slideIndex to the last slide
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Display the slide with index slideIndex
    slides[slideIndex - 1].style.display = "block";
}

// Function to automatically switch slides every 3 seconds
function showSlidesAuto() {
    let i;
    let slides = document.getElementsByClassName("mySlides"); // Get all elements with class "mySlides"
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++; // Increment slideIndex

    // If slideIndex exceeds the number of slides, set it back to 1
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Display the slide with index slideIndex
    slides[slideIndex - 1].style.display = "block";
    
    // Call the function recursively after 3 seconds
    setTimeout(showSlidesAuto, 3000); // Change image every 3 seconds
}

// Call the showSlidesAuto function to start the slideshow automatically
showSlidesAuto();
