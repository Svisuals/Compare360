// modules/auth.js

export function initializeAuth() {
    const loginOverlay = document.getElementById('loginOverlay');
    const authForm = document.getElementById('authForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    authForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Verificar las credenciales
        if (username === 'ADM' && password === '1234') {
            // Ocultar la pantalla de inicio de sesión
            loginOverlay.style.display = 'none';
        } else {
            // Mostrar mensaje de error
            errorMessage.textContent = 'Usuario o contraseña incorrectos.';
            errorMessage.style.display = 'block';
        }
    });
}
