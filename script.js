function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verificar credenciais (exemplo simples)
    if (username === 'adm' && password === '1234') {
        // Ocultar o formulário de login e mostrar o conteúdo
        document.querySelector('.login-form').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('container').style.display = 'flex'; // Mostrar o container
    } else {
        alert('Credenciais inválidas!');
    }
}

// Função para alternar a visualização do terceiro iframe
document.getElementById('toggleIframe3Button').addEventListener('click', function() {
    var iframe3 = document.getElementById('iframe3');
    var container = document.getElementById('container');

    if (iframe3.style.display === 'none' || iframe3.style.display === '') {
        iframe3.style.display = 'block';
        container.classList.add('horizontal-split');
    } else {
        iframe3.style.display = 'none';
        container.classList.remove('horizontal-split');
    }
});

// Função para alternar o iframe1 e iframe2
document.getElementById('toggleButton').addEventListener('click', function() {
    var iframe1 = document.getElementById('iframe1');
    var iframe2 = document.getElementById('iframe2');

    if (iframe1.style.display === 'none' || iframe1.style.display === '') {
        iframe1.style.display = 'block';
        iframe2.style.display = 'none';
    } else {
        iframe1.style.display = 'none';
        iframe2.style.display = 'block';
    }
});

// Função para atualizar os iframes com base na seleção do menu
document.getElementById('iframe1Menu').addEventListener('change', function() {
    document.getElementById('iframe1').src = this.value;
});

document.getElementById('iframe2Menu').addEventListener('change', function() {
    document.getElementById('iframe2').src = this.value;
});
