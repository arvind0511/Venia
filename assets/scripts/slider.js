let slideIndex = 0;
const slides = document.querySelectorAll('.slider .product-banner');
const totalSlides = slides.length;

function showSlide(index) {
    if (index < 0) {
        slideIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        slideIndex = 0;
    } else {
        slideIndex = index;
    }

    slides.forEach((slide, idx) => {
        if (idx === slideIndex) {
            slide.style.display = 'flex';
        } else {
            slide.style.display = 'none';
        }
    });
}

function changeSlide(n) {
    showSlide(slideIndex + n);
}

changeSlide(0)
// // Automatic slideshow
// setInterval(() => {
//     changeSlide(1);
// }, 3000); // Change slide every 3 seconds (adjust as needed)