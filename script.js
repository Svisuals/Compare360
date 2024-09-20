// Obter elementos de início de sessão
const loginOverlay = document.getElementById('loginOverlay');
const authForm = document.getElementById('authForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');

// Lógica de autenticação
authForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Verificar as credenciais
    if (username === 'ADM' && password === '1234') {
        // Ocultar a tela de início de sessão
        loginOverlay.style.display = 'none';
    } else {
        // Mostrar mensagem de erro
        errorMessage.textContent = 'Usuário ou senha incorretos.';
        errorMessage.style.display = 'block';
    }
});

// Resto do código existente
const toggleButton = document.getElementById('toggleButton');
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

// Inicialmente mostrar apenas iframe1
iframe1.style.display = 'block';
iframe2.style.display = 'none';
iframe3.style.display = 'none';

// Ocultar menu do iframe2 inicialmente
iframe2Menu.style.display = 'none';

// Event listener para o botão do menu do iframe1
iframe1MenuButton.addEventListener('click', () => {
    iframe1Menu.classList.toggle('show');
});

// Event listener para os links do menu do iframe1
iframe1MenuContent.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        iframe1.src = event.target.href;
        iframe1Menu.classList.remove('show');
        event.preventDefault();
    }
});

// Event listener para o botão do menu do iframe2
iframe2MenuButton.addEventListener('click', () => {
    iframe2Menu.classList.toggle('show');
});

// Event listener para os links do menu do iframe2
iframe2MenuContent.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        iframe2.src = event.target.href;
        iframe2Menu.classList.remove('show');
        event.preventDefault();
    }
});

// Event listener para o botão 'DUP' (agora único)
toggleButton.addEventListener('click', () => {
    const isMobileLandscape = window.innerWidth <= 1300 && window.innerHeight < window.innerWidth;

    if (isMobileLandscape) {
        // Modo horizontal em dispositivos móveis
        if (iframe2.style.display === 'none') {
            iframe2.style.display = 'block';
            iframe1.style.width = '50%';
            iframe2.style.width = '50%';
        } else {
            iframe2.style.display = 'none';
            iframe1.style.width = '100%';
        }
    } else {
        // Modo normal (desktop ou móvel vertical)
        if (iframe2.style.display === 'none') {
            iframe2.style.display = 'block';
            iframe2Menu.style.display = 'block'; // Mostrar menu do iframe2
            iframe1.style.width = '50%';
            iframe2.style.width = '50%';
            iframe3.style.display = 'none';
            toggleIframe3Button.style.display = 'none';
            document.getElementById('container').classList.remove('horizontal-split');
        } else {
            iframe2.style.display = 'none';
            iframe2Menu.style.display = 'none'; // Ocultar menu do iframe2
            iframe1.style.width = '100%';
            toggleIframe3Button.style.display = 'block';
            document.getElementById('container').classList.remove('horizontal-split');
        }
    }
    adjustLayout(); // Ajustar layout após mostrar ou ocultar iframe2
});

// Event listener para o botão do cronograma
toggleIframe3Button.addEventListener('click', () => {
    if (iframe3.style.display === 'none') {
        iframe3.style.display = 'block';
        iframe1.style.width = '50%';
        iframe3.style.width = '50%';
        iframe2.style.display = 'none';
        iframe2Menu.style.display = 'none'; // Ocultar menu do iframe2
        toggleIframe3Button.style.display = 'block';
        document.getElementById('container').classList.add('horizontal-split');
    } else {
        iframe3.style.display = 'none';
        iframe1.style.width = '100%';
        toggleIframe3Button.style.display = 'block';
        document.getElementById('container').classList.remove('horizontal-split');
    }
    adjustLayout(); // Ajustar layout após mostrar ou ocultar iframe3
});

// Função para ajustar o layout
function adjustLayout() {
    const isMobile = window.innerWidth <= 1300;
    const isPortrait = window.innerHeight > window.innerWidth;
    const isMobileLandscape = isMobile && !isPortrait;

    if (isMobile) {
        // Modo móvel
        // Ocultar iframe3
        iframe3.style.display = 'none';
        toggleIframe3Button.style.display = 'none';

        if (isPortrait) {
            // Orientação vertical
            iframe1.style.width = '100%';
            iframe1.style.height = iframe2.style.display === 'block' ? '50%' : '100%';
            iframe2.style.width = '100%';
            iframe2.style.height = iframe2.style.display === 'block' ? '50%' : '0';
        } else {
            // Orientação horizontal
            if (iframe2.style.display === 'block') {
                iframe1.style.width = '50%';
                iframe2.style.width = '50%';
            } else {
                iframe1.style.width = '100%';
            }
            iframe1.style.height = '100%';
            iframe2.style.height = '100%';
        }
    } else {
        // Modo desktop
        iframe1.style.height = '100%';
        toggleIframe3Button.style.display = 'block';

        if (iframe2.style.display === 'block') {
            iframe1.style.width = '50%';
            iframe2.style.width = '50%';
            iframe2.style.height = '100%';  // Assegurar que iframe2 ocupe toda a altura
            iframe3.style.display = 'none';
        } else if (iframe3.style.display === 'block') {
            iframe1.style.width = '50%';
            iframe3.style.width = '50%';
            iframe2.style.height = '0';  // Assegurar que iframe2 esteja oculto corretamente
        } else {
            iframe1.style.width = '100%';
            iframe2.style.height = '0';  // Assegurar que iframe2 esteja oculto corretamente
        }
    }

    // Assegurar que os menus não afetem a posição dos botões
    iframe1Menu.style.position = 'fixed';
    iframe2Menu.style.position = 'fixed';
}

// Eventos de redimensionamento e mudança de orientação
window.addEventListener('resize', adjustLayout);
window.addEventListener('orientationchange', adjustLayout);
adjustLayout();

// Fechar o menu se o usuário clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('#iframe1MenuButton')) {
        iframe1Menu.classList.remove('show');
    }
    if (!event.target.matches('#iframe2MenuButton')) {
        iframe2Menu.classList.remove('show');
    }
};
