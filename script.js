// script.js

/* Variables globales */
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

/* Estado inicial */
iframe1.style.display = 'block';
iframe2.style.display = 'none';
iframe3.style.display = 'none';
iframe2Menu.style.display = 'none';

/* Función para alternar la visibilidad de iframe2 */
function toggleIframe2() {
    if (iframe2.style.display === 'none') {
        iframe2.style.display = 'block';
        iframe2Menu.style.display = 'block';
        iframe1.style.width = '50%';
        iframe2.style.width = '50%';
        iframe3.style.display = 'none';
        toggleIframe3Button.style.display = 'none';
    } else {
        iframe2.style.display = 'none';
        iframe2Menu.style.display = 'none';
        iframe1.style.width = '100%';
        toggleIframe3Button.style.display = 'block';
    }
    adjustLayout();
}

/* Función para alternar la visibilidad de iframe3 */
function toggleIframe3() {
    if (iframe3.style.display === 'none') {
        iframe3.style.display = 'block';
        iframe1.style.width = '50%';
        iframe3.style.width = '50%';
        iframe2.style.display = 'none';
        iframe2Menu.style.display = 'none';
    } else {
        iframe3.style.display = 'none';
        iframe1.style.width = '100%';
    }
    adjustLayout();
}

/* Event listeners para los botones */
toggleButton.addEventListener('click', toggleIframe2);
toggleIframe3Button.addEventListener('click', toggleIframe3);

/* Función para configurar los menús desplegables */
function setupMenu(menuButton, menuContent, iframe) {
    menuButton.addEventListener('click', () => {
        menuContent.parentElement.classList.toggle('show');
    });

    menuContent.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            iframe.src = event.target.href;
            menuContent.parentElement.classList.remove('show');
        }
    });
}

/* Configurar los menús desplegables */
setupMenu(iframe1MenuButton, iframe1MenuContent, iframe1);
setupMenu(iframe2MenuButton, iframe2MenuContent, iframe2);

/* Función para ajustar el diseño según el tamaño de la ventana */
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
            iframe2.style.height = '50%';

            iframe1Menu.style.top = '10px';
            iframe1Menu.style.left = '10px';

            iframe2Menu.style.top = iframe2.style.display === 'block' ? 'calc(50% + 10px)' : '10px';
            iframe2Menu.style.left = '10px';

            toggleButton.style.top = '10px';
            toggleButton.style.right = '10px';
            toggleButton.style.left = 'auto';
        } else {
            iframe1.style.width = iframe2.style.display === 'block' ? '50%' : '100%';
            iframe1.style.height = '100%';
            iframe2.style.width = '50%';
            iframe2.style.height = '100%';

            iframe1Menu.style.top = '10px';
            iframe1Menu.style.left = '10px';

            iframe2Menu.style.top = '10px';
            iframe2Menu.style.left = iframe2.style.display === 'block' ? 'calc(50% + 10px)' : '10px';

            toggleButton.style.top = '10px';
            toggleButton.style.right = '10px';
            toggleButton.style.left = 'auto';
        }
    } else {
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
}

/* Ajustar el diseño al cargar y al cambiar el tamaño de la ventana */
window.addEventListener('resize', adjustLayout);
window.addEventListener('orientationchange', adjustLayout);
adjustLayout();

/* Cerrar los menús al hacer clic fuera de ellos */
window.addEventListener('click', (event) => {
    if (!event.target.matches('#iframe1MenuButton')) {
        iframe1Menu.classList.remove('show');
    }
    if (!event.target.matches('#iframe2MenuButton')) {
        iframe2Menu.classList.remove('show');
    }
});

/* Manejo de errores al cargar los iframes */
function handleIframeError(iframe) {
    iframe.addEventListener('error', () => {
        alert('Error al cargar el contenido. Por favor, inténtelo de nuevo más tarde.');
    });
}

/* Aplicar manejo de errores a los iframes */
handleIframeError(iframe1);
handleIframeError(iframe2);
handleIframeError(iframe3);
