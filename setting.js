// Function to toggle dark mode
function toggleDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

// Event listener for dark mode toggle
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('change', toggleDarkMode);
});
