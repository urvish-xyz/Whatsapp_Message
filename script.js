window.onload = function () {
  alert(
    'Send Message to anyone in any Country without Saving their Mobile number!'
  );
};

function replaceValue() {
  const wpNum = document.getElementById('wp_num').value;

  if (wpNum) {
    wpNum.value = wpNum.value.replace(/[-()]/g, '');
  }
}

function sendMsg() {
  let wpNum = document.getElementById('wp_num').value; // Use let instead of const
  const wpMessage = document.getElementById('wp-message').value;
  const countryCode = document.getElementById('country_code').value;
  const existingError = document.getElementById('error-message');

  if (wpNum) {
    // Replace characters in the value
    wpNum = wpNum.replace(/[-()]/g, '');
  }

  if (existingError) {
    existingError.remove();
  }

  if (/^[0-9]{10}$/.test(wpNum)) {
    window.open(`https://wa.me/${countryCode}${wpNum}?text=${wpMessage}`);
  } else {
    alert('Please enter Valid number.');
    // const errorMessage = document.createElement('h3');
    // errorMessage.id = 'error-message';
    // errorMessage.textContent = 'Invalid phone number. Please enter 10 digits.';
    // document.body.appendChild(errorMessage);
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
