document.querySelector('button').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const profileContainer = document.getElementById('profile-container');
  
    if (username) {
      fetchGitHubProfile(username)
        .then(data => {
          updateProfileUI(data);
          profileContainer.classList.remove('hidden');
        })
        .catch(error => {
          alert(error.message);
          profileContainer.classList.add('hidden');
        });
    } else {
      alert('Por favor, insira um nome de usuário.');
    }
});
  
async function fetchGitHubProfile(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
  
    if (!response.ok) {
      throw new Error('Usuário não encontrado');
    }
  
    const data = await response.json();
    return data;
}
  
function updateProfileUI(data) {
    document.getElementById('avatar').src = data.avatar_url || 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png';
    document.getElementById('name').textContent = data.name || 'Usuário sem nome';
    document.getElementById('bio').textContent = data.bio || 'Sem biografia';
    document.getElementById('repos').textContent = data.public_repos || '0';
    document.getElementById('followers').textContent = data.followers || '0';
    document.getElementById('following').textContent = data.following || '0';
    document.getElementById('profile-link').href = data.html_url || '#';
}
  