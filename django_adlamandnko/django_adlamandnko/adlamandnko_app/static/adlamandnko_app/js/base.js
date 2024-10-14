// static/adlamandnko_app/js/base.js
const wrapper = document.querySelector('#background.with-background .wrapper');
const images = document.querySelectorAll('#background.with-background img');
let currentIndex = 0;

function slideImages() {
    images.forEach((img, index) => {
        img.style.display = index === currentIndex ? 'block' : 'none';
    });
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(slideImages, 5000);

