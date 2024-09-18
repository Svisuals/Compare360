/* Estilos generales */
body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

#container {
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    flex-direction: row; /* Por defecto, dividir horizontalmente */
}

iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: none; /* Inicialmente oculta todos los iframes */
}

#iframe1 {
    display: block; /* Mostrar iframe1 por defecto */
}

#iframe2, #iframe3 {
    display: none;
}

/* Botones */
#toggleButton {
    position: fixed;
    top: 10px;
    left: calc(50%);
    width: 32px;
    height: 32px;
    background: url('DUP.jpg') no-repeat center center;
    background-size: cover;
    border: none;
    cursor: pointer;
    z-index: 1000;
}

#toggleIframe2ButtonMobile {
    display: none;
}

#toggleIframe3Button {
    position: fixed;
    top: 10px;
    left: 50px;
    width: 32px;
    height: 32px;
    background: url('CRO.jpg') no-repeat center center;
    background-size: cover;
    border: none;
    cursor: pointer;
    z-index: 1000;
    display: block;
}

/* Menús desplegables */
.dropdown {
    position: fixed;
    top: 10px;
    z-index: 1001;
}

#iframe1Menu {
    left: 10px;
}

#iframe2Menu {
    right: 10px;
    left: auto;
}

/* Dispositivos móviles */
@media (max-width: 768px) {
    #toggleButton {
        display: block; /* Mostrar botón DUP en móviles */
        position: fixed;
        top: 10px;
        right: 10px; /* Alinear a la derecha */
        left: auto;   /* Anular propiedad 'left' */
    }

    #toggleIframe3Button {
        display: none; /* Ocultar botón cronograma en móviles */
    }

    #container {
        flex-direction: column; /* Disposición vertical */
    }

    iframe {
        width: 100%;
        height: 100%;
    }

    /* Ocultar iframe2 e iframe3 en móviles inicialmente */
    #iframe2,
    #iframe3 {
        display: none;
    }
}

/* Orientación vertical en móviles */
@media (max-width: 768px) and (orientation: portrait) {
    #container {
        flex-direction: column;
    }

    #iframe1,
    #iframe2 {
        width: 100%;
    }

    #iframe1 {
        height: 50%;
    }

    #iframe2 {
        height: 50%;
    }

    #iframe1Menu {
        top: 10px;
        left: 10px;
    }

    #iframe2Menu {
        top: calc(50% + 10px);
        left: 10px;
    }

    #toggleButton {
        top: 10px;
        right: 10px;
        left: auto;
    }
}

/* Orientación horizontal en móviles */
@media (max-width: 768px) and (orientation: landscape) {
    #container {
        flex-direction: row;
    }

    #iframe1,
    #iframe2 {
        width: 50%;
        height: 100%;
    }

    #toggleIframe3Button {
        display: none;
    }

    #iframe3 {
        display: none;
    }

    #iframe1Menu {
        top: 10px;
        left: 10px;
    }

    #iframe2Menu {
        top: 10px;
        left: calc(50% + 10px);
    }

    #toggleButton {
        top: 10px;
        right: 10px;
        left: calc(50%);
    }
}

/* Dispositivos con más de 768px de ancho */
@media (min-width: 769px) {
    #container {
        display: flex;
        flex-direction: row;
        height: 100vh; /* Asegurar que el contenedor ocupe toda la altura del viewport */
    }

    #iframe1, #iframe2, #iframe3 {
        height: 100%;
        width: 50%; /* Los iframes ocupan el 50% del ancho */
    }

    #iframe1 {
        width: 100%; /* Por defecto, iframe1 ocupa todo el ancho */
    }

    #iframe2, #iframe3 {
        display: none; /* iframe2 e iframe3 ocultos por defecto */
    }
}
