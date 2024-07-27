document.getElementById('show-register').addEventListener('click', () => {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
  });
  
  document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
  
    if (username && password) {
      localStorage.setItem(username, password);
      alert('Inscription réussie! Veuillez vous connecter.');
      document.getElementById('register-form').reset();
      document.getElementById('register-form').style.display = 'none';
      document.getElementById('login-form').style.display = 'block';
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  });
  
  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
      localStorage.setItem('loggedIn', username);
      window.location.href = 'index.html';
    } else {
      alert('Nom d\'utilisateur ou mot de passe incorrect.');
    }
  });
  