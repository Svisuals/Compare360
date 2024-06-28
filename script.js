let syncScroll = true;

const iframe1 = document.getElementById('iframe1');
const iframe2 = document.getElementById('iframe2');
const syncToggle = document.getElementById('syncToggle');
const lockIcon = document.getElementById('lockIcon');

function syncScrolling(event) {
    if (!syncScroll) return;

    const otherIframe = event.target === iframe1.contentWindow ? iframe2.contentWindow : iframe1.contentWindow;
    otherIframe.scrollTo(event.target.scrollX, event.target.scrollY);
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
    lockIcon.alt = syncScroll ? 'Cadeado Fechado' : 'Cadeado Aberto';
});
