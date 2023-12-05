var imgs = document.querySelectorAll('.slider img');
var currentImg = 0; // index of the first image
const interval = 2000; // duration(speed) of the slide
var timer;

// Change the Images Automatically
function autoNextSlide() {
    currentImg = (currentImg + 1) % imgs.length;
    changeSlide(1);
}

// Add event listeners to buttons for manual navigation
function changeSlide(direction) {
    clearInterval(timer);

    currentImg = (currentImg + direction + imgs.length) % imgs.length;

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity = 0;
    }

    imgs[currentImg].style.opacity = 1;

    // Set a new interval after manual navigation
    timer = setInterval(autoNextSlide, interval);
}

// Add event listener to automatically change images every 3 seconds
var sliderContainer = document.querySelector('.slider');
sliderContainer.addEventListener('mouseenter', function () {
    clearInterval(timer);
});

sliderContainer.addEventListener('mouseleave', function () {
    timer = setInterval(autoNextSlide, interval);
});

// Start the automatic slide change
timer = setInterval(autoNextSlide, interval);
