

// Get the button and form elements
var showFormButton = document.getElementById('showFormButton');
var registrationForm = document.querySelector('.registration-form');

// Add click event listener to the button
showFormButton.addEventListener('click', function() {
  // Toggle the visibility of the registration form
  if (registrationForm.style.display === 'none') {
    registrationForm.style.display = 'block';
  } else {
    registrationForm.style.display = 'none';
  }
});