function checkLogin() {
    const user = localStorage.getItem('user');
    if (user) {
        window.location.href = 'home.html'; // Rediriger vers la page d'accueil
    }
}

// Fonction pour gérer l'inscription / connexion
function handleFormSubmit(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const message = document.getElementById('message');

    if (!username || !password || (password !== confirmPassword)) {
        message.textContent = 'Veuillez remplir tous les champs correctement.';
        return;
    }

    // Sauvegarder les informations de l'utilisateur dans le localStorage
    localStorage.setItem('user', JSON.stringify({ username, email, password }));
    message.textContent = 'Inscription réussie ! Vous êtes maintenant connecté.';
    setTimeout(() => {
        window.location.href = 'home.html'; // Rediriger vers la page d'accueil
    }, 2000);
}

// Événement au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    checkLogin();
    document.getElementById('login-form').addEventListener('submit', handleFormSubmit);
});