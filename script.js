const toggleButton = document.getElementById('toggleButton');
const toggleIframe2ButtonMobile = document.getElementById('toggleIframe2ButtonMobile');
const iframe1 = document.getElementById('iframe1');
const iframe2 = document.getElementById('iframe2');
const iframe3 = document.getElementById('iframe3');
const toggleIframe3Button = document.getElementById('toggleIframe3Button');
const iframe1Menu = document.getElementById('iframe1Menu');
const iframe2Menu = document.getElementById('iframe2Menu');

// Inicialmente mostrar solo iframe1
iframe1.style.display = 'block';
iframe2.style.display = 'none';
iframe3.style.display = 'none';
toggleIframe3Button.style.display = 'block'; // Mostrar botón cronograma solo en escritorio

// Event listener para el botón móvil
toggleIframe2ButtonMobile.addEventListener('click', () => {
    if (iframe2.style.display === 'none') {
        iframe2.style.display = 'block';
        adjustLayout(); // Ajustar layout después de mostrar iframe2
    } else {
        iframe2.style.display = 'none';
        adjustLayout(); // Ajustar layout después de ocultar iframe2
    }
});

// Event listener para el botón de escritorio
toggleButton.addEventListener('click', () => {
    if (iframe2.style.display === 'none') {
        iframe2.style.display = 'block';
        iframe1.style.width = '50%';
        iframe2.style.width = '50%';
        iframe3.style.display = 'none';
        toggleIframe3Button.style.display = 'none';
        iframe2Menu.style.display = 'block';
        toggleButton.style.left = '49%';
        document.getElementById('container').classList.remove('horizontal-split');
    } else {
        iframe2.style.display = 'none';
        iframe1.style.width = '100%';
        toggleIframe3Button.style.display = 'block';
        iframe2Menu.style.display = 'none';
        toggleButton.style.left = 'calc(50% + 4cm)';
        document.getElementById('container').classList.remove('horizontal-split');
    }
});

// Event listener para el botón del cronograma
toggleIframe3Button.addEventListener('click', () => {
    if (iframe3.style.display === 'none') {
        iframe3.style.display = 'block';
        iframe1.style.width = '50%';
        iframe3.style.width = '50%';
        iframe2.style.display = 'none';
        toggleIframe3Button.style.display = 'block';
        toggleButton.style.left = '49%';
        document.getElementById('container').classList.add('horizontal-split');
    } else {
        iframe3.style.display = 'none';
        iframe1.style.width = '100%';
        toggleIframe3Button.style.display = 'block';
        toggleButton.style.left = 'calc(50% + 4cm)';
        document.getElementById('container').classList.remove('horizontal-split');
    }
});

// Event listeners para cambiar el src de los iframes según los menús desplegables
iframe1Menu.addEventListener('change', (event) => {
    iframe1.src = event.target.value;
});

iframe2Menu.addEventListener('change', (event) => {
    iframe2.src = event.target.value;
});

// Función para ajustar el layout
function adjustLayout() {
    const isMobile = window.innerWidth <= 768;
    const isPortrait = window.innerHeight > window.innerWidth;

    if (isMobile) {
        iframe3.style.display = 'none'; // Asegurarse de que iframe3 esté oculto en móviles
        toggleIframe3Button.style.display = 'none'; // Ocultar botón cronograma en móviles
        iframe2Menu.style.display = iframe2.style.display === 'block' ? 'block' : 'none';
        document.getElementById('container').classList.remove('horizontal-split');

        if (isPortrait) {
            // Orientación vertical
            iframe1.style.display = 'block';
            iframe1.style.width = '100%';
            iframe1.style.height = iframe2.style.display === 'block' ? '50%' : '100%';

            iframe2.style.width = '100%';
            iframe2.style.height = '50%';

            iframe2Menu.style.top = 'calc(50% + 40px)';
        } else {
            // Orientación horizontal
            iframe1.style.width = iframe2.style.display === 'block' ? '50%' : '100%';
            iframe1.style.height = '100%';

            iframe2.style.width = '50%';
            iframe2.style.height = '100%';

            iframe2Menu.style.top = '40px';
        }
    } else {
        // Modo escritorio
        iframe1.style.height = '100%';
        iframe2Menu.style.display = iframe2.style.display === 'block' ? 'block' : 'none';
        toggleIframe3Button.style.display = 'block';

        if (iframe2.style.display === 'block') {
            iframe1.style.width = '50%';
            iframe2.style.width = '50%';
            iframe3.style.display = 'none';
            toggleIframe3Button.style.display = 'none';
            toggleButton.style.left = '49%';
            document.getElementById('container').classList.remove('horizontal-split');
        } else if (iframe3.style.display === 'block') {
            iframe1.style.width = '50%';
            iframe3.style.width = '50%';
            toggleButton.style.left = '49%';
            document.getElementById('container').classList.add('horizontal-split');
        } else {
            iframe1.style.width = '100%';
            toggleButton.style.left = 'calc(50% + 4cm)';
            document.getElementById('container').classList.remove('horizontal-split');
        }
    }

    // Ajustar posición de los menús desplegables
    iframe1Menu.style.top = '40px';
    iframe2Menu.style.top = isMobile && isPortrait && iframe2.style.display === 'block' ? 'calc(50% + 40px)' : '40px';
}

window.addEventListener('resize', adjustLayout);
adjustLayout();
