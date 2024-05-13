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

const messageBox = document.getElementById('messageBox');
const countdownElement = document.getElementById('countdown');

let countdownInterval;

function showMessageBox() {
  messageBox.style.opacity = '1';
  const countdownDuration = 180; // 3 minutes in seconds
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
  setTimeout(showMessageBox, 7000); // Show message box after 5 seconds
});
