// modules/iframe.js
export const IframeModule = (() => {
    const iframes = {
        iframe1: document.getElementById('iframe1'),
        iframe2: document.getElementById('iframe2'),
        iframe3: document.getElementById('iframe3'),
    };

    const iframeMenus = {
        iframe1Menu: document.getElementById('iframe1Menu'),
        iframe2Menu: document.getElementById('iframe2Menu'),
    };

    const iframeMenuButtons = {
        iframe1MenuButton: document.getElementById('iframe1MenuButton'),
        iframe2MenuButton: document.getElementById('iframe2MenuButton'),
    };

    const iframeMenuContents = {
        iframe1MenuContent: document.getElementById('iframe1MenuContent'),
        iframe2MenuContent: document.getElementById('iframe2MenuContent'),
    };

    const toggleButtons = {
        toggleButton: document.getElementById('toggleButton'),
        toggleIframe2ButtonMobile: document.getElementById('toggleIframe2ButtonMobile'),
        toggleIframe3Button: document.getElementById('toggleIframe3Button'),
    };

    const container = document.getElementById('container');

    const init = () => {
        setupMenuToggle();
        setupMenuLinks();
        setupToggleButtons();
        loadIframe('iframe1'); // Cargar iframe1 por defecto
    };

    const setupMenuToggle = () => {
        Object.keys(iframeMenuButtons).forEach(key => {
            const button = iframeMenuButtons[key];
            const menu = iframeMenus[key.replace('MenuButton', 'Menu')];
            button.addEventListener('click', () => {
                const isExpanded = button.getAttribute('aria-expanded') === 'true';
                closeAllMenus();
                if (!isExpanded) {
                    menu.classList.add('show');
                    button.setAttribute('aria-expanded', 'true');
                }
            });
        });

        // Cerrar menús al hacer clic fuera
        window.addEventListener('click', (event) => {
            if (!event.target.matches('#iframe1MenuButton') && !event.target.matches('#iframe2MenuButton')) {
                closeAllMenus();
            }
        });
    };

    const closeAllMenus = () => {
        Object.keys(iframeMenus).forEach(key => {
            iframeMenus[key].classList.remove('show');
            const buttonKey = key.replace('Menu', 'MenuButton');
            const button = iframeMenuButtons[buttonKey];
            if (button) button.setAttribute('aria-expanded', 'false');
        });
    };

    const setupMenuLinks = () => {
        Object.keys(iframeMenuContents).forEach(key => {
            const menuContent = iframeMenuContents[key];
            menuContent.addEventListener('click', (event) => {
                if (event.target.tagName === 'A') {
                    const iframeId = key.replace('MenuContent', '');
                    const src = event.target.getAttribute('data-src');
                    loadIframe(iframeId, src);
                    closeAllMenus();
                    event.preventDefault();
                }
            });
        });
    };

    const setupToggleButtons = () => {
        // Botón para alternar iframe2
        toggleButtons.toggleButton.addEventListener('click', () => {
            toggleIframe('iframe2');
        });

        // Botón para alternar iframe2 en móviles
        toggleButtons.toggleIframe2ButtonMobile.addEventListener('click', () => {
            toggleIframe('iframe2');
        });

        // Botón para alternar iframe3 (cronograma)
        toggleButtons.toggleIframe3Button.addEventListener('click', () => {
            toggleIframe('iframe3');
        });
    };

    const toggleIframe = (iframeKey) => {
        const iframe = iframes[iframeKey];
        const isHidden = iframe.style.display === 'none' || iframe.style.display === '';
        if (iframeKey === 'iframe2') {
            if (isHidden) {
                loadIframe('iframe2');
                showIframe('iframe2');
                hideIframe('iframe3');
            } else {
                hideIframe('iframe2');
            }
        } else if (iframeKey === 'iframe3') {
            if (isHidden) {
                loadIframe('iframe3');
                showIframe('iframe3');
                hideIframe('iframe2');
            } else {
                hideIframe('iframe3');
            }
        }
        adjustLayout();
    };

    const loadIframe = (iframeKey, src = null) => {
        const iframe = iframes[iframeKey];
        if (!iframe.getAttribute('src') && src) {
            iframe.setAttribute('src', src);
        } else if (!iframe.getAttribute('src') && iframeKey === 'iframe1') {
            // Cargar src por defecto si no se ha cargado aún
            iframe.setAttribute('src', iframe.getAttribute('data-default-src'));
        }
    };

    const showIframe = (iframeKey) => {
        const iframe = iframes[iframeKey];
        iframe.style.display = 'block';
        // For smooth transition
        setTimeout(() => {
            iframe.classList.add('show');
        }, 10);
    };

    const hideIframe = (iframeKey) => {
        const iframe = iframes[iframeKey];
        iframe.classList.remove('show');
        setTimeout(() => {
            iframe.style.display = 'none';
        }, 500); // Tiempo coincide con la transición CSS
    };

    const adjustLayout = () => {
        // Aquí se puede añadir lógica adicional si es necesario
        // Por ejemplo, ajustar el tamaño de los iframes según la visibilidad
    };

    return { init };
})();
