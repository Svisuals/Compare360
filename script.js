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

// Función para alternar la visibilidad de iframe2 y manejar otros iframes
toggleButton.addEventListener('click', () => {
    if (iframe2.style.display === 'none') {
        // Mostrar iframe2, ajustar ambos iframe1 y iframe2 al 50% del ancho
        iframe2.style.display = 'block';
        iframe1.style.width = '50%';
        iframe2.style.width = '50%';
        // Ocultar iframe3 si está visible
        iframe3.style.display = 'none';
    } else {
        // Ocultar iframe2, expandir iframe1 a pantalla completa
        iframe2.style.display = 'none';
        iframe1.style.width = '100%';
    }
});

// Función para alternar la visibilidad de iframe3 y manejar otros iframes
toggleIframe3Button.addEventListener('click', () => {
    if (iframe3.style.display === 'none') {
        // Mostrar iframe3, ajustar ambos iframe1 y iframe3 al 50% del ancho
        iframe3.style.display = 'block';
        iframe1.style.width = '50%';
        iframe3.style.width = '50%';
        // Ocultar iframe2 si está visible
        iframe2.style.display = 'none';
    } else {
        // Ocultar iframe3, expandir iframe1 a pantalla completa
        iframe3.style.display = 'none';
        iframe1.style.width = '100%';
    }
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
