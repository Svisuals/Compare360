// modules/ui.js
export const UIEnhancements = (() => {
    const init = () => {
        setupResponsiveIframes();
        setupAccessibilityFeatures();
    };

    const setupResponsiveIframes = () => {
        // Implementar lazy loading adicional si es necesario
        // Actualmente, los iframes tienen loading="lazy", pero puedes añadir más lógica aquí
    };

    const setupAccessibilityFeatures = () => {
        // Asegurar que los botones sean accesibles via teclado
        const buttons = document.querySelectorAll('#controls button, .dropdown button');
        buttons.forEach(button => {
            button.setAttribute('tabindex', '0');
        });

        // Mejorar la navegación con el teclado
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            const button = dropdown.querySelector('button');
            button.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    button.click();
                }
            });
        });
    };

    return { init };
})();
