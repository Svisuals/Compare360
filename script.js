// script.js
// Módulo principal

// Importar módulos
import { AuthModule } from './modules/auth.js';
import { IframeModule } from './modules/iframe.js';
import { UIEnhancements } from './modules/ui.js';

// Inicializar módulos
document.addEventListener('DOMContentLoaded', () => {
    AuthModule.init();
    IframeModule.init();
    UIEnhancements.init();
});
