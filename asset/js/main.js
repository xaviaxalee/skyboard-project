// popup starts
document.addEventListener('DOMContentLoaded', function() {
  var openPopupBtn = document.getElementById('openPopupBtn');
  var closePopupBtn = document.getElementById('closePopupBtn');
  var popupForm = document.getElementById('popupForm');

  openPopupBtn.addEventListener('click', function() {
    popupForm.style.display = 'block';
  });

  closePopupBtn.addEventListener('click', function() {
    popupForm.style.display = 'none';
  });
});

// popup ends


// faq starts
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
// faq end

// account starts
document.addEventListener('DOMContentLoaded', function() {
  const userDashboardRoute = document.querySelector('.user-dashboard-route');
  const celebDashboardRoute = document.querySelector('.celeb-dashboard-route');


  userDashboardRoute.addEventListener('click', () => {
    window.location.href = "https://benny506.github.io/skyboard/#/register"
  })

  celebDashboardRoute.addEventListener('click', () => {
    window.location.href = "https://benny506.github.io/skyboard_celeb/#/register"
  })


});

// account ends


// tesmonials starts
let currentSlide = 0;
const imageSliderContent = document.getElementById('imageSlider-content');
const totalSlides = imageSliderContent.children.length - 1; // Adjust for the duplicate slide
let isTransitioning = false;

function moveimageSlider(direction) {
    if (isTransitioning) return;
    isTransitioning = true;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    const offset = -currentSlide * 100;
    imageSliderContent.style.transition = 'transform 0.5s ease-in-out';
    imageSliderContent.style.transform = `translateX(${offset}%)`;

    setTimeout(() => {
        if (currentSlide === totalSlides - 1 && direction === 1) {
            imageSliderContent.style.transition = 'none';
            currentSlide = 0;
            imageSliderContent.style.transform = `translateX(0%)`;
        }
        isTransitioning = false;
    }, 500);
}

function autoSlide() {
    moveimageSlider(1);
    setTimeout(autoSlide, 6000); // Call autoSlide again after 4 seconds
}

setTimeout(autoSlide, 4000); // Initial delay of 4 seconds
