// Simulate user data for demonstration
const user = {
    username: localStorage.getItem('loggedIn') || 'Utilisateur',
    points: 1250,
    level: 32,
    lastLogin: '2024-07-26 10:23',
    lastQuiz: '2024-07-25 15:45'
  };
  
  // Update the user information on the page
  document.getElementById('player-username').textContent = user.username;
  document.getElementById('player-points').textContent = `Points: ${user.points}`;
  document.getElementById('last-login').textContent = user.lastLogin;
  document.getElementById('last-quiz').textContent = user.lastQuiz;
  
  // Determine the user's level star
  const levelStar = document.getElementById('player-level').querySelector('.level-star');
  levelStar.textContent = user.level;
  if (user.level <= 10) {
    levelStar.classList.add('bronze');
  } else if (user.level <= 30) {
    levelStar.classList.add('silver');
  } else if (user.level <= 60) {
    levelStar.classList.add('gold');
  } else if (user.level <= 88) {
    levelStar.classList.add('cobalt');
  } else if (user.level <= 117) {
    levelStar.classList.add('diamond');
  } else {
    levelStar.classList.add('pearl');
  }
  
  // Log out functionality
  document.getElementById('logout-button').addEventListener('click', () => {
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html';
  });
  