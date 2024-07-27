import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
import { getDatabase, ref, set, get, child, update } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyAMnAiDxyaZCRSipOc4U8P2Wubo03WbOTo",
    authDomain: "islamicquizzup.firebaseapp.com",
    projectId: "islamicquizzup",
    storageBucket: "islamicquizzup.appspot.com",
    messagingSenderId: "585056667684",
    appId: "1:585056667684:web:4d2faab75cf83e4d3270b1",
    measurementId: "G-BDNJYL687P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const loginForm = document.getElementById('login-form');
const message = document.getElementById('message');

// Vérifier si l'utilisateur est connecté
function checkLogin() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            window.location.href = 'dashboard.html'; // Rediriger vers la page d'accueil
        }
    });
}

// Gérer l'inscription / connexion
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        message.textContent = 'Les mots de passe ne correspondent pas.';
        return;
    }

    try {
        const dbRef = ref(getDatabase());
        const userSnapshot = await get(child(dbRef, `users/${username}`));
        
        if (userSnapshot.exists()) {
            // User exists, log in
            signInWithEmailAndPassword(auth, username, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    update(ref(database, 'users/' + user.uid), {
                        status: 'online'
                    });
                    message.textContent = 'Connexion réussie !';
                    setTimeout(() => {
                        window.location.href = 'dashboard.html';
                    }, 2000);
                })
                .catch((error) => {
                    console.error('Error during sign-in:', error);
                    message.textContent = 'Mot de passe incorrect.';
                });
        } else {
            // User does not exist, create account
            createUserWithEmailAndPassword(auth, username, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    set(ref(database, 'users/' + user.uid), {
                        username: username,
                        status: 'online'
                    });
                    message.textContent = 'Inscription réussie !';
                    setTimeout(() => {
                        window.location.href = 'dashboard.html';
                    }, 2000);
                })
                .catch((error) => {
                    console.error('Error during sign-up:', error);
                    message.textContent = error.message;
                });
        }
    } catch (error) {
        console.error('Database connection error:', error);
        message.textContent = 'Erreur de connexion à la base de données.';
    }
});

// Événement au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    checkLogin();
});
