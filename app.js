document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    localStorage.setItem('loggedIn', username);
    localStorage.setItem('points', '0');
    localStorage.setItem('level', '0');
    window.location.href = 'home.html';
  });
  
  document.getElementById('register-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    localStorage.setItem('loggedIn', username);
    localStorage.setItem('points', '0');
    localStorage.setItem('level', '0');
    window.location.href = 'login.html';
  });
  