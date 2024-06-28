// Inicializando a biblioteca iframe-resizer
iFrameResize({ log: true }, '#iframe1', '#iframe2');

let syncScroll = true;
const iframe1 = document.getElementById('iframe1');
const iframe2 = document.getElementById('iframe2');
const syncToggle = document.getElementById('syncToggle');
const lockIcon = document.getElementById('lockIcon');

function syncScrolling(event) {
    if (!syncScroll) return;

    const otherIframe = event.target === iframe1 ? iframe2 : iframe1;
    const targetIframe = event.target.contentWindow;

    otherIframe.contentWindow.scrollTo(targetIframe.scrollX, targetIframe.scrollY);
}

iframe1.addEventListener('load', () => {
    iframe1.contentWindow.addEventListener('scroll', syncScrolling);
});

iframe2.addEventListener('load', () => {
    iframe2.contentWindow.addEventListener('scroll', syncScrolling);
});

syncToggle.addEventListener('click', () => {
    syncScroll = !syncScroll;
    lockIcon.src = syncScroll ? 'locked.png' : 'unlocked.png';
});
