// script.js

import { initializeAuth } from './modules/auth.js';
import { initializeIframes } from './modules/iframe.js';
import { initializeUI } from './modules/ui.js';

// Función para ajustar el layout
function adjustLayout() {
    const iframe1 = document.getElementById('iframe1');
    const iframe2 = document.getElementById('iframe2');
    const iframe3 = document.getElementById('iframe3');
    const toggleIframe3Button = document.getElementById('toggleIframe3Button');

    const isMobile = window.innerWidth <= 1300;
    const isPortrait = window.innerHeight > window.innerWidth;

    if (isMobile) {
        // En dispositivos móviles, ocultamos iframe3 por defecto
        iframe3.style.display = 'none';
        toggleIframe3Button.style.display = 'none';

        if (isPortrait) {
            // En orientación vertical, iframes dividen la altura
            iframe1.style.width = '100%';
            iframe1.style.height = iframe2.style.display === 'block' ? '50%' : '100%';
            iframe2.style.width = '100%';
            iframe2.style.height = iframe2.style.display === 'block' ? '50%' : '0';
        } else {
            // En orientación horizontal, mostrar solo iframe1
            iframe1.style.width = '100%';
            iframe1.style.height = '100%';
            iframe2.style.display = 'none'; // Ocultar iframe2
            iframe2.style.width = '0';
            iframe2.style.height = '0';
            iframe3.style.display = 'none'; // Asegurarse de ocultar iframe3
            iframe3.style.width = '0';
            iframe3.style.height = '0';
        }
    } else {
        // En modo escritorio, los iframes ocupan toda la altura y se distribuyen por ancho
        iframe1.style.height = '100%';
        toggleIframe3Button.style.display = 'block';

        if (iframe2.style.display === 'block') {
            iframe1.style.width = '50%';
            iframe2.style.width = '50%';
            iframe2.style.height = '100%';  // Asegurarse de que iframe2 ocupe toda la altura
            iframe3.style.display = 'none';
        } else if (iframe3.style.display === 'block') {
            iframe1.style.width = '50%';
            iframe3.style.width = '50%';
            iframe2.style.height = '0';  // Asegurarse de que iframe2 esté oculto correctamente
        } else {
            iframe1.style.width = '100%';
            iframe2.style.height = '0';  // Asegurar que iframe2 esté oculto correctamente
        }
    }

    // Asegurar que los menús no afecten la posición de los botones
    const iframe1Menu = document.getElementById('iframe1Menu');
    const iframe2Menu = document.getElementById('iframe2Menu');
    iframe1Menu.style.position = 'fixed';
    iframe2Menu.style.position = 'fixed';
}


// Inicializar módulos
document.addEventListener('DOMContentLoaded', () => {
    initializeAuth();
    initializeIframes();
    initializeUI(adjustLayout);
    adjustLayout();
});
