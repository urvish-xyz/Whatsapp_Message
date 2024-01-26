window.onload = function () {
  alert(
    'Send Message to anyone in any Country without Saving their Mobile number!'
  );
};

function sendMsg() {
  const wpNum = document.getElementById('wp_num').value;
  const wpMessage = document.getElementById('wp-message').value;
  const countryCode = document.getElementById('country_code').value;
  const existingError = document.getElementById('error-message');

  if (existingError) {
    existingError.remove();
  }

  // console.log(wpNum);
  if (/^[0-9]{10}$/.test(wpNum)) {
    window.open(`https://wa.me/${countryCode}${wpNum}?text=${wpMessage}`);
  } else {
    // console.log("Invalid phone number. Please enter 10 digits.");
    const errorMessage = document.createElement('h3');
    errorMessage.id = 'error-message';
    errorMessage.textContent = 'Invalid phone number. Please enter 10 digits.';
    document.body.appendChild(errorMessage);
  }
}

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
    e.preventDefault();
  }
});
