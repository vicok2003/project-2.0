document.addEventListener('DOMContentLoaded', function() {
    // User Chart
    const ctx1 = document.getElementById('userChart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'New Users',
                data: [50, 100, 150, 200, 250, 300, 350],
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Revenue Chart
    const ctx2 = document.getElementById('revenueChart').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Revenue',
                data: [1000, 1500, 2000, 2500, 3000, 3500, 4000],
                backgroundColor: 'rgba(46, 204, 113, 0.2)',
                borderColor: 'rgba(46, 204, 113, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

// Function to handle logout
function logout() {
    window.location.href = 'index.html';
}

//Dark Theme and light Theme Toggle
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleSwitch = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light-theme';

    document.body.classList.add(currentTheme);

    if (currentTheme === 'dark-theme') {
        themeToggleSwitch.checked = true;
    }

    themeToggleSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');

        const theme = document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
        localStorage.setItem('theme', theme);
    });


  // Mobile sidebar toggle
  const sidebar = document.querySelector('.sidebar');
  const sidebarToggleBtn = document.querySelector('.sidebar-toggle');

  sidebarToggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
  });

  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', (event) => {
      if (!sidebar.contains(event.target) && !sidebarToggleBtn.contains(event.target)) {
          sidebar.classList.remove('open');
      }
  });

});
