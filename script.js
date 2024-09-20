// Función para ajustar el layout
function adjustLayout() {
    const isMobile = window.innerWidth <= 1300;
    const isPortrait = window.innerHeight > window.innerWidth;

    if (isMobile) {
        // En modo móvil, ocultamos iframe3
        iframe3.style.display = 'none';
        toggleIframe3Button.style.display = 'none';

        if (isPortrait) {
            // En orientación vertical, iframes dividen la altura
            iframe1.style.width = '100%';
            iframe1.style.height = iframe2.style.display === 'block' ? '50%' : '100%';
            iframe2.style.width = '100%';
            iframe2.style.height = iframe2.style.display === 'block' ? '50%' : '0';
        } else {
            // En orientación horizontal, solo iframe1 es visible por defecto
            if (iframe2.style.display === 'block') {
                // Si iframe2 está activo, dividir el ancho
                iframe1.style.width = '50%';
                iframe2.style.width = '50%';
                iframe2.style.display = 'block';
            } else {
                // Si iframe2 está oculto, iframe1 ocupa el 100%
                iframe1.style.width = '100%';
                iframe2.style.width = '0';
                iframe2.style.display = 'none';
            }
            iframe1.style.height = '100%';
            iframe2.style.height = '100%';
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
    iframe1Menu.style.position = 'fixed';
    iframe2Menu.style.position = 'fixed';
}
