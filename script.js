function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'adm' && password === '1234') {
        document.querySelector('.login-form').style.display = 'none'; // Oculta el formulario de inicio de sesión
        document.getElementById('container').style.display = 'flex'; // Muestra el contenedor principal

        // Aquí puedes agregar más lógica si es necesario, como cargar datos adicionales o inicializar otras funcionalidades
    } else {
        alert('Credenciales incorrectas');
    }
}

// Lógica para mostrar u ocultar iframes
document.getElementById('toggleButton').addEventListener('click', function() {
    const iframe1 = document.getElementById('iframe1');
    const iframe2 = document.getElementById('iframe2');

    if (iframe1.style.display === 'none') {
        iframe1.style.display = 'block';
        iframe2.style.display = 'none';
    } else {
        iframe1.style.display = 'none';
        iframe2.style.display = 'block';
    }
});

document.getElementById('toggleIframe3Button').addEventListener('click', function() {
    const iframe3 = document.getElementById('iframe3');
    if (iframe3.style.display === 'none') {
        iframe3.style.display = 'block';
        document.getElementById('container').classList.add('horizontal-split');
    } else {
        iframe3.style.display = 'none';
        document.getElementById('container').classList.remove('horizontal-split');
    }
});

document.getElementById('iframe1Menu').addEventListener('change', function() {
    document.getElementById('iframe1').src = this.value;
});

document.getElementById('iframe2Menu').addEventListener('change', function() {
    document.getElementById('iframe2').src = this.value;
});
