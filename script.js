let syncScroll = true;

const iframe1 = document.getElementById('iframe1');
const iframe2 = document.getElementById('iframe2');
const syncToggle = document.getElementById('syncToggle');
const lockIcon = document.getElementById('lockIcon');

function syncScrolling(event) {
    if (!syncScroll) return;

    const sourceIframe = event.target;
    const otherIframe = sourceIframe === iframe1.contentWindow ? iframe2.contentWindow : iframe1.contentWindow;

    otherIframe.scrollTo(sourceIframe.scrollX, sourceIframe.scrollY);
}

function addScrollSync(iframe) {
    $(iframe.contentWindow).on('scroll', function() {
        if (syncScroll) {
            const scrollTop = $(this).scrollTop();
            const scrollLeft = $(this).scrollLeft();
            if (iframe === iframe1) {
                $(iframe2.contentWindow).scrollTop(scrollTop);
                $(iframe2.contentWindow).scrollLeft(scrollLeft);
            } else {
                $(iframe1.contentWindow).scrollTop(scrollTop);
                $(iframe1.contentWindow).scrollLeft(scrollLeft);
            }
        }
    });
}

iframe1.addEventListener('load', () => addScrollSync(iframe1));
iframe2.addEventListener('load', () => addScrollSync(iframe2));

syncToggle.addEventListener('click', () => {
    syncScroll = !syncScroll;
    lockIcon.src = syncScroll ? 'locked.png' : 'unlocked.png';
    lockIcon.alt = syncScroll ? 'Cadeado Fechado' : 'Cadeado Aberto';
});
