document.getElementById('show-register').addEventListener('click', function() {
    document.getElementById('login-form-container').style.display = 'none';
    document.getElementById('register-form-container').style.display = 'block';
  });
  
  document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('login-form-container').style.display = 'block';
    document.getElementById('register-form-container').style.display = 'none';
  });
  
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    // Simulating successful login by storing the username
    localStorage.setItem('loggedIn', username);
    window.location.href = 'home.html';
  });
  
  document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    // Simulating successful registration by storing the username
    localStorage.setItem('loggedIn', username);
    window.location.href = 'home.html';
  });
  