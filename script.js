const toggleButton = document.getElementById('toggleButton');
const iframe1 = document.getElementById('iframe1');
const iframe2 = document.getElementById('iframe2');
const iframe3 = document.getElementById('iframe3');
const toggleIframe3Button = document.getElementById('toggleIframe3Button');
const iframe1Menu = document.getElementById('iframe1Menu');
const iframe2Menu = document.getElementById('iframe2Menu');
const iframe1MenuButton = document.getElementById('iframe1MenuButton');
const iframe2MenuButton = document.getElementById('iframe2MenuButton');
const iframe1MenuContent = document.getElementById('iframe1MenuContent');
const iframe2MenuContent = document.getElementById('iframe2MenuContent');
const loginScreen = document.getElementById('loginScreen');
const loginForm = document.getElementById('loginForm');
const mainContent = document.getElementById('mainContent');

// Validación de login
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'ADM' && password === '1234') {
        loginScreen.style.display = 'none'; // Ocultar pantalla de login
        mainContent.style.display = 'block'; // Mostrar contenido principal
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

// Event listeners para botones y menús
iframe1MenuButton.addEventListener('click', () => {
    iframe1Menu.classList.toggle('show');
});

iframe1MenuContent.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        iframe1.src = event.target.href;
        iframe1Menu.classList.remove('show');
        event.preventDefault();
    }
});

iframe2MenuButton.addEventListener('click', () => {
    iframe2Menu.classList.toggle('show');
});

iframe2MenuContent.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        iframe2.src = event.target.href;
        iframe2Menu.classList.remove('show');
        event.preventDefault();
    }
});

// Lógica para ajustar el layout
function adjustLayout() {
    const isMobile = window.innerWidth <= 768;
    const isPortrait = window.innerHeight > window.innerWidth;

    if (isMobile) {
        iframe3.style.display = 'none';
        toggleIframe3Button.style.display = 'none';

        if (isPortrait) {
            iframe1.style.width = '100%';
            iframe1.style.height = iframe2.style.display === 'block' ? '50%' : '100%';
            iframe2.style.width = '100%';
            iframe2.style.height = iframe2.style.display === 'block' ? '50%' : '0';
        } else {
            iframe1.style.width = '50%';
            iframe1.style.height = '100%';
            iframe2.style.width = '50%';
            iframe2.style.height = '100%';
            iframe2.style.display = 'block';
        }
    } else {
        iframe1.style.height = '100%';
        toggleIframe3Button.style.display = 'block';

        if (iframe2.style.display === 'block') {
            iframe1.style.width = '50%';
            iframe2.style.width = '50%';
        } else if (iframe3.style.display === 'block') {
            iframe1.style.width = '50%';
            iframe3.style.width = '50%';
        } else {
            iframe1.style.width = '100%';
        }
    }
}

window.addEventListener('resize', adjustLayout);
window.addEventListener('orientationchange', adjustLayout);
adjustLayout();

window.onclick = function(event) {
    if (!event.target.matches('#iframe1MenuButton')) {
        iframe1Menu.classList.remove('show');
    }
    if (!event.target.matches('#iframe2MenuButton')) {
        iframe2Menu.classList.remove('show');
    }
};
