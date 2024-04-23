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
  const sections = document.querySelectorAll('.users');
  const buttonContainer = document.querySelector('.btn-container a');

  sections.forEach(section => {
      section.addEventListener('click', function() {
          const button = section.querySelector('button');
          const pinkButton = document.querySelector('.pink');
          const greenButton = document.querySelector('.green');

          if (button.classList.contains('pink')) {
              pinkButton.classList.add('pinkBtn');
              greenButton.classList.remove('greenBtn');
              buttonContainer.classList.remove('greenBtn'); // Remove green class
              buttonContainer.classList.add('pinkBtn'); // Add pink class
              buttonContainer.style.display = 'block'; // Show the button
          } else {
              greenButton.classList.add('greenBtn');
              pinkButton.classList.remove('pinkBtn');
              buttonContainer.classList.remove('pinkBtn'); // Remove pink class
              buttonContainer.classList.add('greenBtn'); // Add green class
              buttonContainer.style.display = 'block'; // Show the button
          }
      });
  });
});

// account ends
