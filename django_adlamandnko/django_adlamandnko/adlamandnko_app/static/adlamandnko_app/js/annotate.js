document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector('#background.with-background .wrapper');
    const images = document.querySelectorAll('#background.with-background img');
    let currentIndex = 0;
    const totalImages = images.length;
    const imageWidth = images[0].clientWidth;
  
    function slideImages() {
      currentIndex = (currentIndex + 1) % totalImages;
      wrapper.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }
  
    setInterval(slideImages, 5000);
  
    // You don't need any custom form handling logic if Django is managing form submissions
  });
  