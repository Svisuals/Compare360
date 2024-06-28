let syncScroll = true;

const iframe1 = document.getElementById('iframe1');
const iframe2 = document.getElementById('iframe2');
const syncToggle = document.getElementById('syncToggle');
const lockIcon = document.getElementById('lockIcon');

function syncScrolling(event) {
    if (!syncScroll) return;

    const sourceIframe = event.target;
    const otherIframe = sourceIframe === iframe1.contentWindow ? iframe2 : iframe1;

    const { scrollX, scrollY } = sourceIframe;
    otherIframe.contentWindow.scrollTo(scrollX, scrollY);
}

function addScrollSync(iframe) {
    iframe.contentWindow.addEventListener('scroll', syncScrolling);
}

iframe1.addEventListener('load', () => addScrollSync(iframe1));
iframe2.addEventListener('load', () => addScrollSync(iframe2));

syncToggle.addEventListener('click', () => {
    syncScroll = !syncScroll;
    lockIcon.src = syncScroll ? 'locked.png' : 'unlocked.png';
    lockIcon.alt = syncScroll ? 'Cadeado Fechado' : 'Cadeado Aberto';
});

function initSync() {
    if (iframe1.contentDocument.readyState === 'complete') {
        addScrollSync(iframe1);
    } else {
        iframe1.addEventListener('load', () => addScrollSync(iframe1));
    }

    if (iframe2.contentDocument.readyState === 'complete') {
        addScrollSync(iframe2);
    } else {
        iframe2.addEventListener('load', () => addScrollSync(iframe2));
    }
}

initSync();
