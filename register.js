document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulate registration for demonstration
        // You should replace this with actual registration logic
        if (username && password) {
            // Simulating saving user to database
            console.log('User registered:', { username, password });

            // Redirect to home page
            window.location.href = '/home.html';
        } else {
            alert('Veuillez entrer un pseudo et un mot de passe');
        }
    });
});
