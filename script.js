const toggleButton = document.getElementById('toggleButton');
const toggleIframe2ButtonMobile = document.getElementById('toggleIframe2ButtonMobile');
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
const container = document.getElementById('container');

// Inicialmente mostrar solo iframe1
iframe1.classList.add('visible', 'full-width');
iframe2.classList.add('hidden');
iframe3.classList.add('hidden');

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

// Event listener para el botón móvil
toggleIframe2ButtonMobile.addEventListener('click', () => {
    if (iframe2.classList.contains('hidden')) {
        iframe2.classList.remove('hidden');
        iframe2.classList.add('visible');
        iframe2Menu.style.display = 'block'; // Mostrar menú de iframe2
    } else {
        iframe2.classList.add('hidden');
        iframe2.classList.remove('visible');
        iframe2Menu.style.display = 'none'; // Ocultar menú de iframe2
    }
    adjustLayout();
});

// Event listener para el botón de escritorio
toggleButton.addEventListener('click', () => {
    if (iframe2.classList.contains('hidden')) {
        iframe2.classList.remove('hidden');
        iframe2.classList.add('visible', 'half-width');
        iframe1.classList.remove('full-width');
        iframe1.classList.add('half-width');
        iframe3.classList.add('hidden');
        toggleIframe3Button.style.display = 'none';
        toggleButton.style.left = '49%';
        container.classList.remove('horizontal-split');
        iframe2Menu.style.display = 'block'; // Mostrar menú de iframe2
    } else {
        iframe2.classList.add('hidden');
        iframe2.classList.remove('visible', 'half-width');
        iframe1.classList.remove('half-width');
        iframe1.classList.add('full-width');
        toggleIframe3Button.style.display = 'block';
        toggleButton.style.left = 'calc(50% + 4cm)';
        container.classList.remove('horizontal-split');
        iframe2Menu.style.display = 'none'; // Ocultar menú de iframe2
    }
});

// Event listener para el botón del cronograma
toggleIframe3Button.addEventListener('click', () => {
    if (iframe3.classList.contains('hidden')) {
        iframe3.classList.remove('hidden');
        iframe3.classList.add('visible', 'half-width');
        iframe1.classList.remove('full-width');
        iframe1.classList.add('half-width');
        iframe2.classList.add('hidden');
        toggleButton.style.left = '49%';
        container.classList.add('horizontal-split');
        iframe2Menu.style.display = 'none'; // Ocultar menú de iframe2
    } else {
        iframe3.classList.add('hidden');
        iframe3.classList.remove('visible', 'half-width');
        iframe1.classList.remove('half-width');
        iframe1.classList.add('full-width');
        toggleButton.style.left = 'calc(50% + 4cm)';
        container.classList.remove('horizontal-split');
    }
});

// Función para ajustar el layout
function adjustLayout() {
    const isMobile = window.innerWidth <= 768;
    const isPortrait = window.innerHeight > window.innerWidth;

    if (isMobile) {
        iframe3.classList.add('hidden'); // Asegurarse de que iframe3 esté oculto en móviles
        toggleIframe3Button.style.display = 'none'; // Ocultar botón cronograma en móviles

        if (isPortrait) {
            // Orientación vertical
            iframe1.classList.add('full-width');
            iframe1.classList.remove('half-width');
            iframe1.style.height = iframe2.classList.contains('visible') ? '50%' : '100%';
            iframe2.style.width = '100%';
            iframe2.style.height = '50%';
        } else {
            // Orientación horizontal
            iframe1.style.width = iframe2.classList.contains('visible') ? '50%' : '100%';
            iframe1.style.height = '100%';
            iframe2.style.width = '50%';
            iframe2.style.height = '100%';
        }
    } else {
        // Modo escritorio
        iframe1.style.height = '100%';
        toggleIframe3Button.style.display = 'block';

        if (iframe2.classList.contains('visible')) {
            iframe1.classList.remove('full-width');
            iframe1.classList.add('half-width');
            iframe2.classList.add('half-width');
            iframe3.classList.add('hidden');
            toggleIframe3Button.style.display = 'none';
            toggleButton.style.left = '49%';
            container.classList.remove('horizontal-split');
        } else if (iframe3.classList.contains('visible')) {
            iframe1.classList.remove('full-width');
            iframe1.classList.add('half-width');
            iframe3.classList.add('half-width');
            toggleButton.style.left = '49%';
            container.classList.add('horizontal-split');
        } else {
            iframe1.classList.remove('half-width');
            iframe1.classList.add('full-width');
            toggleButton.style.left = 'calc(50% + 4cm)';
            container.classList.remove('horizontal-split');
        }
    }
}

window.addEventListener('resize', adjustLayout);
adjustLayout();

// Cerrar el menú si el usuario hace clic fuera de él
window.addEventListener('click', function(event) {
    if (!iframe1Menu.contains(event.target) && !iframe1MenuButton.contains(event.target)) {
        iframe1Menu.classList.remove('show');
    }
    if (!iframe2Menu.contains(event.target) && !iframe2MenuButton.contains(event.target)) {
        iframe2Menu.classList.remove('show');
    }
});
