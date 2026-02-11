const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
const adminMenu = document.getElementById('adminMenu');
const loginItem = document.getElementById('login-item');
const profilePicContainer = document.getElementById('profile-pic-container');
const profilePic = document.getElementById('profile-pic');

if (loggedInUser && loginItem && profilePicContainer && profilePic) {
    loginItem.style.display = 'none';
    profilePic.src = loggedInUser.profilePic || '';
    profilePicContainer.style.display = 'block';

    if (adminMenu) {
        if (loggedInUser.username === 'admin2') {
            adminMenu.innerHTML = `
                <li><a href="#" onclick="aprovarUsuarios()">Aprovar Usuários</a></li>
                <li><a href="#">Configurações</a></li>
            `;
        } else {
            adminMenu.innerHTML = '<li><a href="#">Conta</a></li>';
        }
    }
}

function toggleMenu() {
    const menu = document.getElementById('adminMenu');
    if (!menu) return;

    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function aprovarUsuarios() {
    alert('Área de aprovação de usuários em desenvolvimento.');
}

const logoutButton = document.getElementById('logout-btn');
if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        localStorage.clear();
        window.location.href = 'index fachini.html';
    });
}

function updateProgressBar(progressBarId, progressPercentId, percent) {
    const progressBar = document.getElementById(progressBarId);
    const progressPercent = document.getElementById(progressPercentId);

    if (!progressBar || !progressPercent) return;

    progressBar.style.width = `${percent}%`;
    progressPercent.textContent = `${percent}%`;
}

updateProgressBar('progressBar1', 'progressPercent1', 25);
updateProgressBar('progressBar2', 'progressPercent2', 100);
updateProgressBar('progressBar3', 'progressPercent3', 100);
