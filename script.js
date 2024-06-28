let syncScroll = true;

const iframe1 = document.getElementById('iframe1');
const iframe2 = document.getElementById('iframe2');
const syncToggle = document.getElementById('syncToggle');
const lockIcon = document.getElementById('lockIcon');

function syncScrolling(event) {
    if (!syncScroll) return;

    const otherIframe = event.target === iframe1 ? iframe2 : iframe1;
    otherIframe.contentWindow.scrollTo(event.target.contentWindow.scrollX, event.target.contentWindow.scrollY);
}

iframe1.addEventListener('load', () => {
    const iframe1Doc = iframe1.contentDocument || iframe1.contentWindow.document;
    iframe1Doc.addEventListener('scroll', syncScrolling);
});

iframe2.addEventListener('load', () => {
    const iframe2Doc = iframe2.contentDocument || iframe2.contentWindow.document;
    iframe2Doc.addEventListener('scroll', syncScrolling);
});

syncToggle.addEventListener('click', () => {
    syncScroll = !syncScroll;
    lockIcon.src = syncScroll ? 'locked.png' : 'unlocked.png';
    lockIcon.alt = syncScroll ? 'Cadeado Fechado' : 'Cadeado Aberto';
});
