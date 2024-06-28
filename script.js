bolet syncScroll = true;

const iframe1 = document.getElementById('iframe1');
const iframe2 = document.getElementById('iframe2');
const syncToggle = document.getElementById('syncToggle');

function syncScrolling(event) {
    if (!syncScroll) return;

    const otherIframe = event.target === iframe1 ? iframe2 : iframe1;
    otherIframe.contentWindow.scrollTo(event.target.contentWindow.scrollX, event.target.contentWindow.scrollY);
}

iframe1.addEventListener('scroll', syncScrolling);
iframe2.addEventListener('scroll', syncScrolling);

syncToggle.addEventListener('click', () => {
    syncScroll = !syncScroll;
    syncToggle.textContent = syncScroll ? 'Desbloquear Sincronização' : 'Sincronizar';
});
