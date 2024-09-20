<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Acompanhamento de Obra 360</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Pantalla de inicio de sesión -->
    <div id="loginOverlay">
        <div id="loginForm">
            <h2>Iniciar Sesión</h2>
            <form id="authForm">
                <label for="username">Usuario:</label>
                <input type="text" id="username" name="username" required>
                
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" required>
                
                <button type="submit">Entrar</button>
                <p id="errorMessage" class="error"></p>
            </form>
        </div>
    </div>

    <!-- Botón para dispositivos de escritorio -->
    <div id="toggleButton"></div>
    <!-- Botón para móviles -->
    <div id="toggleIframe2ButtonMobile"></div>
    <div id="container">
        <iframe id="iframe1" src="https://momento360.com/e/uc/e39b5e2ef7864507b34ca0ee97cebca3?utm_campaign=embed&utm_source=other&size=large&display-plan=true"></iframe>
        <iframe id="iframe2" src="https://momento360.com/e/uc/e39b5e2ef7864507b34ca0ee97cebca3?utm_campaign=embed&utm_source=other&size=large&display-plan=true"></iframe>
        <iframe id="iframe3" src="https://svisuals.github.io/Cronograma/"></iframe>
        <!-- Botón para el cronograma -->
        <div id="toggleIframe3Button"></div>
    </div>

    <!-- Menú desplegable para iframe1 -->
    <div id="iframe1Menu" class="dropdown">
        <button id="iframe1MenuButton">▼</button>
        <div id="iframe1MenuContent" class="dropdown-content">
            <a href="https://momento360.com/e/uc/e39b5e2ef7864507b34ca0ee97cebca3?utm_campaign=embed&utm_source=other&size=large&display-plan=true">Modelo 3D Silicato</a>
            <a href="https://momento360.com/e/uc/e0e6b60410484a949026c3aec52ef112?utm_campaign=embed&utm_source=other&size=large&display-plan=true">Real Capture Silicato</a>
            <a href="https://momento360.com/e/uc/51c95022f269476289cc23adc2a69b03?utm_campaign=embed&utm_source=other&size=large&display-plan=true">Modelo 3D Virador de Vagões</a>
        </div>
    </div>

    <!-- Menú desplegable para iframe2 -->
    <div id="iframe2Menu" class="dropdown">
        <button id="iframe2MenuButton">▼</button>
        <div id="iframe2MenuContent" class="dropdown-content">
            <a href="https://momento360.com/e/uc/e39b5e2ef7864507b34ca0ee97cebca3?utm_campaign=embed&utm_source=other&size=large&display-plan=true">Modelo 3D Silicato</a>
            <a href="https://momento360.com/e/uc/e0e6b60410484a949026c3aec52ef112?utm_campaign=embed&utm_source=other&size=large&display-plan=true">Real Capture Silicato</a>
            <a href="https://momento360.com/e/uc/51c95022f269476289cc23adc2a69b03?utm_campaign=embed&utm_source=other&size=large&display-plan=true">Modelo 3D Virador de Vagões</a>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
