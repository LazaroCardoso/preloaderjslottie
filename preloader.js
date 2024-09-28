const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

document.body.appendChild(overlay);
document.body.appendChild(lottieContainer);

function showLottieAnimation() {
    // Mostrar o container e iniciar a animação
    lottieContainer.style.display = 'block';
    lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/3dcda63c-2459-46be-9fdc-c3ebcadaf142/K5F1sRs7wR.json',
    });
}

function hideOverlay() {
    overlay.style.display = 'none';
    lottieContainer.style.display = 'none'; // Corrigido para esconder a animação
}

// Iniciar a animação Lottie quando o conteúdo estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    showLottieAnimation();
});

// Esconder o overlay e animação assim que a página estiver totalmente carregada
window.addEventListener('load', () => {
    hideOverlay();
});
