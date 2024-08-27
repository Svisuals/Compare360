const toggleButton = document.getElementById('toggleButton');
const iframe1 = document.getElementById('iframe1');
const iframe2 = document.getElementById('iframe2');
const iframe3 = document.getElementById('iframe3');
const toggleIframe3Button = document.getElementById('toggleIframe3Button');
const iframe1Menu = document.getElementById('iframe1Menu');
const iframe2Menu = document.getElementById('iframe2Menu');
const loginContainer = document.getElementById('login-container');
const mainContent = document.getElementById('main-content');
const loginForm = document.getElementById('login-form');

// Inicialmente mostrar apenas o iframe1
iframe1.style.display = 'block';
iframe1.style.width = '100%';  // Ocupar 100% da largura
iframe1.style.height = '100%'; // Ocupar 100% da altura
iframe2.style.display = 'none';
iframe3.style.display = 'none';
toggleIframe3Button.style.display = 'block'; // Mostrar o botão CRO.jpg ao iniciar

// Event listener para alternar visibilidade do terceiro iframe ao clicar no botão vermelho
toggleIframe3Button.addEventListener('click', () => {
    if (iframe3.style.display === 'none') {
        iframe3.style.display = 'block';
        document.getElementById('container').classList.add('horizontal-split');
        iframe1.style.width = '50%'; // Reduzir o iframe1 para metade da largura
        toggleButton.style.left = '49%'; // Centralizar o botão quando o iframe3 está visível
    } else {
        iframe3.style.display = 'none';
        document.getElementById('container').classList.remove('horizontal-split');
        iframe1.style.width = '100%'; // Restaurar o iframe1 para ocupar toda a largura
        toggleButton.style.left = 'calc(50% + 4cm)'; // Voltar o botão para 4 cm à direita
    }
});

// Event listener para alternar visibilidade dos iframes ao clicar no botão azul
toggleButton.addEventListener('click', () => {
    if (iframe2.style.display === 'none') {
        // Mostrar iframe2
        iframe2.style.display = 'block';
        iframe1.style.width = '50%';
        iframe2.style.width = '50%';
        iframe3.style.display = 'none'; // Garantir que o terceiro iframe esteja oculto ao mostrar iframe2
        toggleIframe3Button.style.display = 'none';
        iframe2Menu.style.display = 'block'; // Mostrar o menu suspenso do iframe2 quando o iframe2 está visível
        toggleButton.style.left = '49%'; // Centralizar o botão quando o iframe2 está visível
        document.getElementById('container').classList.remove('horizontal-split');
    } else {
        // Verificar se o terceiro iframe está visível e o iframe2 está visível
        if (iframe3.style.display === 'none' && iframe2.style.display === 'block') {
            // Mostrar terceiro iframe apenas se iframe2 estiver oculto
            iframe2.style.display = 'none';
            iframe1.style.width = '100%';
            toggleIframe3Button.style.display = 'block';
            iframe2Menu.style.display = 'none'; // Ocultar o menu suspenso do iframe2 quando o iframe2 está invisível
            toggleButton.style.left = 'calc(50% + 4cm)'; // Voltar o botão para 4 cm à direita
            document.getElementById('container').classList.add('horizontal-split');
        } else if (iframe3.style.display === 'block' && iframe2.style.display === 'none') {
            // Mostrar iframe2 se iframe3 estiver visível
            iframe2.style.display = 'block';
            iframe1.style.width = '50%';
            iframe2.style.width = '50%';
            iframe3.style.display = 'none';
            toggleIframe3Button.style.display = 'none';
            iframe2Menu.style.display = 'block'; // Mostrar o menu suspenso do iframe2 quando o iframe2 está visível
            toggleButton.style.left = '49%'; // Centralizar o botão quando o iframe2 está visível
            document.getElementById('container').classList.remove('horizontal-split');
        }
    }
});

// Event listener para alterar o src do iframe1 com base na seleção do menu suspenso
iframe1Menu.addEventListener('change', (event) => {
    iframe1.src = event.target.value;
});

// Event listener para alterar o src do iframe2 com base na seleção do menu suspenso
iframe2Menu.addEventListener('change', (event) => {
    iframe2.src = event.target.value;
});

// Função para ajustar o layout baseado no tamanho da janela
function adjustLayout() {
    if (window.innerWidth <= 768) {
        // Modo celular/tablet
        iframe1.style.width = '100%';
        iframe1.style.height = '50%';
        iframe2.style.width = '100%';
        iframe2.style.height = '50%';
        iframe3.style.display = 'none';
        toggleIframe3Button.style.display = 'none';
        document.getElementById('container').classList.remove('horizontal-split');
    } else {
        // Modo desktop
        iframe1.style.height = '100%';
        if (iframe2.style.display === 'block') {
            iframe1.style.width = '50%';
            iframe2.style.width = '50%';
            iframe3.style.display = 'none';
            toggleIframe3Button.style.display = 'none';
            document.getElementById('container').classList.remove('horizontal-split');
        } else if (iframe3.style.display === 'block') {
            iframe1.style.width = '50%';
            iframe3.style.width = '50%';
            toggleIframe3Button.style.display = 'block';
            document.getElementById('container').classList.add('horizontal-split');
        } else {
            iframe1.style.width = '100%';
            toggleIframe3Button.style.display = 'block';
            document.getElementById('container').classList.remove('horizontal-split');
        }
    }
}

// Event listener para ajustar o layout quando a janela é redimensionada
window.addEventListener('resize', adjustLayout);
adjustLayout();

// Event listener para verificar o login
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio do formulário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'adm' && password === '1234') {
        loginContainer.style.display = 'none'; // Esconde o container de login
        mainContent.style.display = 'block'; // Mostra o conteúdo principal
        document.body.style.backgroundColor = 'white'; // Remove o fundo negro após o login
    } else {
        alert('Usuário ou senha inválidos.');
    }
});
