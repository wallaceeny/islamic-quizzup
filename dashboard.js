import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
import { getDatabase, ref, onValue, update } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js";

// Configuration Firebase
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
const userList = document.getElementById('user-list');

// Déconnecter l'utilisateur
function logout() {
    const user = auth.currentUser;
    if (user) {
        update(ref(database, 'users/' + user.uid), {
            status: 'offline'
        }).then(() => {
            signOut(auth).then(() => {
                window.location.href = 'index.html';
            });
        });
    }
}

// Vérifier si l'utilisateur est connecté
function checkLogin() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            update(ref(database, 'users/' + user.uid), {
                status: 'online'
            });
        } else {
            window.location.href = 'index.html';
        }
    });
}

// Mettre à jour la liste des utilisateurs
function updateUserList() {
    const usersRef = ref(database, 'users');
    onValue(usersRef, (snapshot) => {
        userList.innerHTML = '';
        snapshot.forEach((childSnapshot) => {
            const user = childSnapshot.val();
            const li = document.createElement('li');
            li.textContent = user.username;
            const status = document.createElement('span');
            status.className = 'status ' + (user.status === 'online' ? 'online' : 'offline');
            li.appendChild(status);
            userList.appendChild(li);
        });
    });
}

// Événement au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    checkLogin();
    updateUserList();
});
