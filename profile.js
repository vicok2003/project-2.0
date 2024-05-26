// dashboard.js

document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    body.classList.add(savedTheme);

    if (savedTheme === 'dark-theme') {
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', function () {
        if (this.checked) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
        }
    });

    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    sidebarToggle.addEventListener('click', function () {
        sidebar.classList.toggle('open');
    });
});

//profile pic update
document.addEventListener('DOMContentLoaded', () => {
    const uploadInput = document.getElementById('upload-profile-picture');
    const profilePicture = document.querySelector('.profile-picture');

    uploadInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file && file.type.match('image.*')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profilePicture.src = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            alert("Please select a valid image file.");
        }
    });
});

