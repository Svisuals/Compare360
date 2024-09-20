// modules/ui.js

import { updateIframeSrc } from './iframe.js';

export function initializeUI(adjustLayoutCallback) {
    const iframe1Menu = document.getElementById('iframe1Menu');
    const iframe2Menu = document.getElementById('iframe2Menu');
    const iframe1MenuButton = document.getElementById('iframe1MenuButton');
    const iframe2MenuButton = document.getElementById('iframe2MenuButton');
    const iframe1MenuContent = document.getElementById('iframe1MenuContent');
    const iframe2MenuContent = document.getElementById('iframe2MenuContent');
    const iframe1 = document.getElementById('iframe1');
    const iframe2 = document.getElementById('iframe2');
    const iframe3 = document.getElementById('iframe3');
    const toggleIframe3Button = document.getElementById('toggleIframe3Button');

    // Event listener para el botón del menú de iframe1
    iframe1MenuButton.addEventListener('click', () => {
        iframe1Menu.classList.toggle('show');
    });

    // Event listener para los enlaces del menú de iframe1
    iframe1MenuContent.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            updateIframeSrc(iframe1, event.target.href);
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
            updateIframeSrc(iframe2, event.target.href);
            iframe2Menu.classList.remove('show');
            event.preventDefault();
        }
    });

    // Cerrar los menús si el usuario hace clic fuera de ellos
    window.addEventListener('click', (event) => {
        if (!event.target.matches('#iframe1MenuButton')) {
            iframe1Menu.classList.remove('show');
        }
        if (!event.target.matches('#iframe2MenuButton')) {
            iframe2Menu.classList.remove('show');
        }
    });

    // Función para ajustar el layout, se pasa como callback
    function adjustLayout() {
        adjustLayoutCallback();
    }

    // Escuchar eventos de cambio de tamaño y orientación
    window.addEventListener('resize', adjustLayout);
    window.addEventListener('orientationchange', adjustLayout);
}
