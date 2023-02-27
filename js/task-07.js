const fontSizeEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

fontSizeEl.oninput = () => {
    spanEl.style.fontSize = `${fontSizeEl.value}px`;
}
