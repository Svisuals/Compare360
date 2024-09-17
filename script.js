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

// Inicialmente mostrar solo iframe1
iframe1.style.display = 'block';
iframe2.style.display = 'none';
iframe3.style.display = 'none';

// Ocultar menú de iframe2 inicialmente
iframe2Menu.style.display = 'none';

// Event listener para el botón del menú de iframe1
iframe1MenuButton.addEventListener('click', () => {
    iframe1Menu.classList.toggle('show');
});

// Event listener para los enlaces del menú de iframe1
iframe1MenuContent.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        iframe1.src = event.target.href;
        iframe1Menu.classList.remove('show');
        event.preventDefault();
    }
});

// Event listener para el botón del menú de iframe2
iframe2MenuButton.addEventListener('click', () => {
    iframe2Menu.classList.toggle('show');
});

// Event listener para los enlaces del menú de iframe2
iframe2MenuContent.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        iframe2.src = event.target.href;
        iframe2Menu.classList.remove('show');
        event.preventDefault();
    }
});

// Event listener para el botón 'DUP'
toggleButton.addEventListener('click', () => {
    if (iframe2.style.display === 'none') {
        iframe2.style.display = 'block';
        iframe2Menu.style.display = 'block'; // Mostrar menú de iframe2
        iframe1.style.width = '100%';
        iframe2.style.width = '100%';
        iframe1.style.height = '50%';
        iframe2.style.height = '50%';
        iframe3.style.display = 'none';
        toggleIframe3Button.style.display = 'none';
        adjustLayout();
    } else {
        iframe2.style.display = 'none';
        iframe2Menu.style.display = 'none'; // Ocultar menú de iframe2
        iframe1.style.width = '100%';
        iframe1.style.height = '100%';
        toggleIframe3Button.style.display = 'block';
        adjustLayout();
    }
});

// Event listener para el botón del cronograma
toggleIframe3Button.addEventListener('click', () => {
    if (iframe3.style.display === 'none') {
        iframe3.style.display = 'block';
        iframe1.style.width = '50%';
        iframe3.style.width = '50%';
        iframe1.style.height = '100%';
        iframe3.style.height = '100%';
        iframe2.style.display = 'none';
        iframe2Menu.style.display = 'none'; // Ocultar menú de iframe2
        toggleIframe3Button.style.display = 'block';
        adjustLayout();
    } else {
        iframe3.style.display = 'none';
        iframe1.style.width = '100%';
        iframe1.style.height = '100%';
        toggleIframe3Button.style.display = 'block';
        adjustLayout();
    }
});

// Función para ajustar el layout
function adjustLayout() {
    const isMobile = window.innerWidth <= 768;
    const isPortrait = window.innerHeight > window.innerWidth;

    if (isMobile) {
        iframe3.style.display = 'none'; // Asegurarse de que iframe3 esté oculto en móviles
        toggleIframe3Button.style.display = 'none'; // Ocultar botón cronograma en móviles

        if (iframe2.style.display === 'block') {
            // Si iframe2 está activo
            iframe1.style.width = '100%';
            iframe1.style.height = '50%';
            iframe2.style.width = '100%';
            iframe2.style.height = '50%';
        } else {
            iframe1.style.width = '100%';
            iframe1.style.height = '100%';
        }

        // Posicionar menús
        iframe1Menu.style.top = '10px';
        iframe1Menu.style.left = '10px';

        iframe2Menu.style.top = iframe2.style.display === 'block' ? 'calc(50% + 10px)' : '10px';
        iframe2Menu.style.left = '10px';

        // Posicionar botón
        toggleButton.style.top = '10px';
        toggleButton.style.right = '10px';
        toggleButton.style.left = 'auto';
    } else {
        // Modo escritorio
        iframe1.style.height = '100%';
        toggleIframe3Button.style.display = 'block';

        iframe1Menu.style.top = '10px';
        iframe1Menu.style.left = '10px';

        iframe2Menu.style.top = '10px';
        iframe2Menu.style.right = '10px';
        iframe2Menu.style.left = 'auto';

        if (iframe2.style.display === 'block') {
            iframe1.style.width = '50%';
            iframe2.style.width = '50%';
            iframe3.style.display = 'none';
            toggleIframe3Button.style.display = 'none';
        } else if (iframe3.style.display === 'block') {
            iframe1.style.width = '50%';
            iframe3.style.width = '50%';
        } else {
            iframe1.style.width = '100%';
        }
    }

    // Asegurar que los menús no afecten la posición de los botones
    iframe1Menu.style.position = 'fixed';
    iframe2Menu.style.position = 'fixed';
}

window.addEventListener('resize', adjustLayout);
window.addEventListener('orientationchange', adjustLayout);
adjustLayout();

// Cerrar el menú si el usuario hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('#iframe1MenuButton')) {
        iframe1Menu.classList.remove('show');
    }
    if (!event.target.matches('#iframe2MenuButton')) {
        iframe2Menu.classList.remove('show');
    }
};
