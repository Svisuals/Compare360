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

// Función para alternar la visibilidad de un iframe y asegurar proporciones
function toggleIframe(iframeToToggle, isVisible, otherIframe = null, button = null) {
    if (isVisible) {
        iframeToToggle.style.display = 'block';
        otherIframe.style.display = 'block';
        iframe1.style.width = '50%';
        iframeToToggle.style.width = '50%';
        if (button) button.style.display = 'none';
    } else {
        iframeToToggle.style.display = 'none';
        otherIframe.style.width = '100%';
        iframe1.style.width = '100%';
        if (button) button.style.display = 'block';
    }
}

// Event listeners para los botones de alternancia
toggleButton.addEventListener('click', () => {
    const isIframe2Visible = iframe2.style.display === 'none';
    toggleIframe(iframe2, isIframe2Visible, iframe1, toggleIframe3Button);
    if (!isIframe2Visible) iframe3.style.display = 'none'; // Asegurar que iframe3 se oculta
});

toggleIframe3Button.addEventListener('click', () => {
    const isIframe3Visible = iframe3.style.display === 'none';
    toggleIframe(iframe3, isIframe3Visible, iframe1, toggleIframe3Button);
    if (!isIframe3Visible) iframe2.style.display = 'none'; // Asegurar que iframe2 se oculta
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
