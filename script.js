// Obtención de elementos del DOM
const toggleButton = document.getElementById('toggleButton');
const iframe1 = document.getElementById('iframe1');
const iframe2 = document.getElementById('iframe2');
const iframe3 = document.getElementById('iframe3');
const toggleIframe3Button = document.getElementById('toggleIframe3Button');
const iframe1Menu = document.getElementById('iframe1Menu');
const iframe2Menu = document.getElementById('iframe2Menu');
const iframe1MenuButton = document.getElementById('iframe1MenuButton');
const iframe2MenuButton = document.getElementById('iframe2MenuButton');

// Estado inicial
iframe1.style.display = 'block';
iframe2.style.display = 'none';
iframe3.style.display = 'none';

// Función para alternar la visibilidad de un iframe
function toggleIframe(iframe, visible, otherIframe = null, button = null) {
    if (visible) {
        iframe.style.display = 'block';
        iframe1.style.width = '50%';
        if (otherIframe) otherIframe.style.display = 'none';
        if (button) button.style.display = 'none';
    } else {
        iframe.style.display = 'none';
        iframe1.style.width = '100%';
        if (button) button.style.display = 'block';
    }
}

// Event listeners para los botones de alternancia
toggleButton.addEventListener('click', () => {
    toggleIframe(iframe2, iframe2.style.display === 'none', iframe3, toggleIframe3Button);
});

toggleIframe3Button.addEventListener('click', () => {
    toggleIframe(iframe3, iframe3.style.display === 'none', iframe2, toggleIframe3Button);
});

// Menú desplegable del iframe1
iframe1MenuButton.addEventListener('click', () => {
    iframe1Menu.classList.toggle('show');
});

iframe1Menu.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        iframe1.src = event.target.href;
        iframe1Menu.classList.remove('show');
        event.preventDefault();
    }
});

// Menú desplegable del iframe2
iframe2MenuButton.addEventListener('click', () => {
    iframe2Menu.classList.toggle('show');
});

iframe2Menu.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        iframe2.src = event.target.href;
        iframe2Menu.classList.remove('show');
        event.preventDefault();
    }
});

// Cerrar el menú si el usuario hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('#iframe1MenuButton')) {
        iframe1Menu.classList.remove('show');
    }
    if (!event.target.matches('#iframe2MenuButton')) {
        iframe2Menu.classList.remove('show');
    }
};
