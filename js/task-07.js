const refs = {
    fontSizeEl: document.querySelector('#font-size-control'),
    spanEl: document.querySelector('#text'),
}

refs.fontSizeEl.oninput = () => {
    refs.spanEl.style.fontSize = `${refs.fontSizeEl.value}px`;
}
