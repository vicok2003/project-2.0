const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

let startX;
let currentX;

registerBtn.addEventListener('click', () => {
     container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
     container.classList.remove("active");
});


//MOBILE SWIPE SECTION 
// Add touch event listeners
container.addEventListener('touchstart', handleTouchStart);
container.addEventListener('touchmove', handleTouchMove);
container.addEventListener('touchend', handleTouchEnd);

function handleTouchStart(e) {
  startX = e.touches[0].clientX;
}

function handleTouchMove(e) {
  currentX = e.touches[0].clientX;
}

function handleTouchEnd() {
  const swipeDistance = currentX - startX;

  if (swipeDistance > 100) {
    // Swipe right (show sign-up)
    container.classList.add('active');
  } else if (swipeDistance < -100) {
    // Swipe left (show sign-in)
    container.classList.remove('active');
  }

 // Reset touch positions
 startX = null;
 currentX = null;
}


//INSTRUCTION MESSAGE BOX
const messageBox = document.getElementById('messageBox');
const countdownElement = document.getElementById('countdown');

let countdownInterval;

function showMessageBox() {
  messageBox.style.opacity = '1';
  const countdownDuration = 60; // 1 minutes in seconds
  let countdown = countdownDuration;

  countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.textContent = countdown;

    if (countdown === 0) {
      clearInterval(countdownInterval);
      messageBox.style.opacity = '0';
    }
  }, 1000);
}

window.addEventListener('load', () => {
    setTimeout(() => {
      showMessageBox();
    }, 5000); // Show message box after 5 seconds
  });

  
// Hide the message box initially
messageBox.style.opacity = '0';

//form validation
const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');

signUpButton.addEventListener('click', (e) => {
    e.preventDefault();
    validateSignUpForm();
});

signInButton.addEventListener('click', (e) => {
    e.preventDefault();
    validateSignInForm();
});

function validateSignUpForm() {
    const name = document.getElementById('signUpName');
    const email = document.getElementById('signUpEmail');
    const password = document.getElementById('signUpPassword');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    let isValid = true;

    if (name.value.trim() === '') {
        isValid = false;
        nameError.textContent = 'Name is required.';
        nameError.style.display = 'block';
    } else {
        nameError.style.display = 'none';
    }

    if (!validateEmail(email.value)) {
        isValid = false;
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }

    if (!validatePassword(password.value)) {
        isValid = false;
        passwordError.textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.';
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }

    if (isValid) {
        console.log('Sign-Up form is valid');
        // Submit the form or perform other actions
    }
}

function validateSignInForm() {
    const email = document.getElementById('signInEmail');
    const password = document.getElementById('signInPassword');

    const emailError = document.getElementById('signInEmailError');
    const passwordError = document.getElementById('signInPasswordError');

    let isValid = true;

    if (!validateEmail(email.value)) {
        isValid = false;
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }

    if (password.value.trim() === '') {
        isValid = false;
        passwordError.textContent = 'Password is required.';
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }

    if (isValid) {
        console.log('Sign-In form is valid');
        // Submit the form or perform other actions
    }
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return re.test(password);
}

// Show/hide password functionality
function togglePasswordVisibility(passwordFieldId, toggleIconId) {
  const passwordField = document.getElementById(passwordFieldId);
  const toggleIcon = document.getElementById(toggleIconId);

  if (passwordField.type === 'password') {
      passwordField.type = 'text';
      toggleIcon.classList.remove('bi-eye-slash');
      toggleIcon.classList.add('bi-eye');
  } else {
      passwordField.type = 'password';
      toggleIcon.classList.remove('bi-eye');
      toggleIcon.classList.add('bi-eye-slash');
  }
}