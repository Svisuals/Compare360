// Função de login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'ADM' && password === '1234') {
        alert('Login bem-sucedido!');
        document.getElementById('loginForm').style.display = 'none'; // Ocultar o formulário de login após login bem-sucedido
        document.getElementById('container').style.display = 'flex'; // Mostrar o container dos iframes
        adjustLayout(); // Ajustar o layout após login
    } else {
        alert('Usuário ou senha incorretos.');
    }
}

// Função para ajustar o layout com base no tamanho da janela
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

// Inicializar os elementos da interface
const toggleButton = document.getElementById('toggleButton');
const iframe1 = document.getElementById('iframe1');
const iframe2 = document.getElementById('iframe2');
const iframe3 = document.getElementById('iframe3');
const toggleIframe3Button = document.getElementById('toggleIframe3Button');
const iframe1Menu = document.getElementById('iframe1Menu');
const iframe2Menu = document.getElementById('iframe2Menu');

// Inicialmente ocultar o container dos iframes e mostrar o formulário de login
document.getElementById('container').style.display = 'none';
document.getElementById('loginForm').style.display = 'block';

// Configurar os listeners para os botões de alternância
toggleIframe3Button.addEventListener('click', () => {
    if (iframe3.style.display === 'none') {
        iframe3.style.display = 'block';
        document.getElementById('container').classList.add('horizontal-split');
        iframe1.style.width = '50%';
        toggleButton.style.left = '49%';
    } else {
        iframe3.style.display = 'none';
        document.getElementById('container').classList.remove('horizontal-split');
        iframe1.style.width = '100%';
        toggleButton.style.left = 'calc(50% + 4cm)';
    }
});

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
        if (iframe3.style.display === 'none' && iframe2.style.display === 'block') {
            iframe2.style.display = 'none';
            iframe1.style.width = '100%';
            toggleIframe3Button.style.display = 'block';
            iframe2Menu.style.display = 'none';
            toggleButton.style.left = 'calc(50% + 4cm)';
            document.getElementById('container').classList.remove('horizontal-split');
        } else {
            iframe2.style.display = 'block';
            iframe1.style.width = '50%';
            iframe2.style.width = '50%';
            iframe3.style.display = 'none';
            toggleIframe3Button.style.display = 'none';
            iframe2Menu.style.display = 'block';
            toggleButton.style.left = '49%';
            document.getElementById('container').classList.remove('horizontal-split');
        }
    }
});

iframe1Menu.addEventListener('change', (event) => {
    iframe1.src = event.target.value;
});

iframe2Menu.addEventListener('change', (event) => {
    iframe2.src = event.target.value;
});

// Ajustar o layout com base no tamanho da janela
window.addEventListener('resize', adjustLayout);
adjustLayout();
