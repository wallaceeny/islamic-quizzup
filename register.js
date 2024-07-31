document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            // Simulate a registration request
            try {
                // Assuming we have an API endpoint for registration
                const response = await fetch('/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                });

                if (response.ok) {
                    // Redirect to home page
                    window.location.href = '/home.html';
                } else {
                    alert('Failed to register. Please try again.');
                }
            } catch (error) {
                console.error('Error during registration:', error);
                alert('An error occurred. Please try again.');
            }
        } else {
            alert('Veuillez entrer un pseudo et un mot de passe');
        }
    });
});
