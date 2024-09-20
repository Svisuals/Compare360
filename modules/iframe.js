// modules/iframe.js

export function initializeIframes() {
    const iframe1 = document.getElementById('iframe1');
    const iframe2 = document.getElementById('iframe2');
    const iframe3 = document.getElementById('iframe3');
    const toggleButton = document.getElementById('toggleButton');
    const toggleIframe3Button = document.getElementById('toggleIframe3Button');
    const iframe1Menu = document.getElementById('iframe1Menu');
    const iframe2Menu = document.getElementById('iframe2Menu');

    // Inicialmente mostrar solo iframe1
    iframe1.style.display = 'block';
    iframe2.style.display = 'none';
    iframe3.style.display = 'none';

    // Ocultar menú de iframe2 inicialmente
    iframe2Menu.style.display = 'none';

    // Event listener para el botón 'DUP' (toggleButton)
    toggleButton.addEventListener('click', () => {
        if (iframe2.style.display === 'none') {
            iframe2.style.display = 'block';
            iframe2Menu.style.display = 'block'; // Mostrar menú de iframe2
            iframe1.style.width = '50%';
            iframe2.style.width = '50%';
            iframe3.style.display = 'none';
            toggleIframe3Button.style.display = 'none';
            document.getElementById('container').classList.remove('horizontal-split');
        } else {
            iframe2.style.display = 'none';
            iframe2Menu.style.display = 'none'; // Ocultar menú de iframe2
            iframe1.style.width = '100%';
            toggleIframe3Button.style.display = 'block';
            document.getElementById('container').classList.remove('horizontal-split');
        }
        // Eventualmente, se llamará a adjustLayout desde otro módulo
    });

    // Event listener para el botón del cronograma (toggleIframe3Button)
    toggleIframe3Button.addEventListener('click', () => {
        if (iframe3.style.display === 'none') {
            iframe3.style.display = 'block';
            iframe1.style.width = '50%';
            iframe3.style.width = '50%';
            iframe2.style.display = 'none';
            iframe2Menu.style.display = 'none'; // Ocultar menú de iframe2
            toggleIframe3Button.style.display = 'block';
            document.getElementById('container').classList.add('horizontal-split');
        } else {
            iframe3.style.display = 'none';
            iframe1.style.width = '100%';
            toggleIframe3Button.style.display = 'block';
            document.getElementById('container').classList.remove('horizontal-split');
        }
        // Eventualmente, se llamará a adjustLayout desde otro módulo
    });
}

export function updateIframeSrc(iframe, url) {
    iframe.src = url;
}
