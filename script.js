// ... código existente ...

function adjustLayout() {
    const isMobile = window.innerWidth <= 768;
    const isPortrait = window.innerHeight > window.innerWidth;

    if (isMobile) {
        iframe3.style.display = 'none'; // Ocultar iframe3 en móviles
        toggleIframe3Button.style.display = 'none'; // Ocultar botón del cronograma

        if (isPortrait) {
            // Orientación vertical
            iframe1.style.width = '100%';
            iframe1.style.height = iframe2.style.display === 'block' ? 'calc(50% - 20px)' : 'calc(100% - 20px)';

            iframe2.style.width = '100%';
            iframe2.style.height = 'calc(50% - 20px)';

            // Posicionar menús
            iframe1Menu.style.top = '10px';
            iframe1Menu.style.left = '10px';

            iframe2Menu.style.top = 'calc(50% + 10px)';
            iframe2Menu.style.left = '10px';
            iframe2Menu.style.right = 'auto';

            // Posicionar botón móvil en la esquina superior derecha
            toggleIframe2ButtonMobile.style.top = '10px';
            toggleIframe2ButtonMobile.style.right = '10px';

            // Mostrar menú de iframe2 si iframe2 está visible
            iframe2Menu.style.display = iframe2.style.display === 'block' ? 'block' : 'none';

        } else {
            // Orientación horizontal
            iframe1.style.width = iframe2.style.display === 'block' ? '50%' : '100%';
            iframe1.style.height = 'calc(100% - 20px)';

            iframe2.style.width = '50%';
            iframe2.style.height = 'calc(100% - 20px)';

            // Posicionar menús
            iframe1Menu.style.top = '10px';
            iframe1Menu.style.left = '10px';

            iframe2Menu.style.top = '10px';
            iframe2Menu.style.right = '10px';
            iframe2Menu.style.left = 'auto';

            // Ocultar botón del cronograma
            toggleIframe3Button.style.display = 'none';

            // Posicionar botón móvil en la esquina superior derecha
            toggleIframe2ButtonMobile.style.top = '10px';
            toggleIframe2ButtonMobile.style.right = '10px';

            // Mostrar menú de iframe2 si iframe2 está visible
            iframe2Menu.style.display = iframe2.style.display === 'block' ? 'block' : 'none';
        }
    } else {
        // Modo escritorio
        // ... código existente ...
    }

    // Asegurar que los menús no afecten la posición de los botones
    iframe1Menu.style.position = 'fixed';
    iframe2Menu.style.position = 'fixed';
}

// ... resto del código ...
