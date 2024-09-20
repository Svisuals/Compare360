// modules/auth.js
export const AuthModule = (() => {
    const loginOverlay = document.getElementById('loginOverlay');
    const authForm = document.getElementById('authForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    const init = () => {
        authForm.addEventListener('submit', handleAuth);
    };

    const handleAuth = (event) => {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === 'ADM' && password === '1234') {
            // Ocultar la pantalla de inicio de sesión con transición
            loginOverlay.classList.add('hide');
            setTimeout(() => {
                loginOverlay.style.display = 'none';
            }, 500); // Tiempo coincide con la transición CSS
        } else {
            showError('Usuario o contraseña incorrectos.');
        }
    };

    const showError = (message) => {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    };

    return { init };
})();
