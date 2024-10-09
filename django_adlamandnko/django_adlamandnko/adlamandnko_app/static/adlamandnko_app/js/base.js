// static/adlamandnko_app/js/base.js
/*$(document).ready(function() {
    if ($('#background').hasClass('with-background')) {
        let images = [
            "/static/adlamandnko_app/images/adlam.jpg",
            "/static/adlamandnko_app/images/nko.jpg_large"
        ];
        let currentIndex = 0;

        function changeBackground() {
            currentIndex = (currentIndex + 1) % images.length;
            $('#background').css('background-image', 'url(' + images[currentIndex] + ')');
        }

        setInterval(changeBackground, 2000); // Change image every 5 seconds
    }

    $('.nav-link').on('click', function() {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });
});*/
const wrapper = document.querySelector('#background.with-background .wrapper');
const images = document.querySelectorAll('#background.with-background img');
let currentIndex = 0;
const totalImages = images.length;
const imageWidth = images[0].clientWidth;

// Fonction pour faire défiler les images
function slideImages() {
  // Calcule le décalage pour faire défiler l'image suivante
  currentIndex = (currentIndex + 1) % totalImages;
  
  // Applique la translation pour afficher la prochaine image
  wrapper.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Lancer le défilement toutes les 2 secondes
setInterval(slideImages, 5000);

