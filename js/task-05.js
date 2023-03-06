const refs = {
    inputEl: document.querySelector('#name-input'),
    outputEl: document.querySelector('#name-output'),
}

refs.inputEl.addEventListener('input', (event) => {
    refs.outputEl.textContent = event.target.value

    if (event.target.value === '') {
        refs.outputEl.textContent = 'Anonymous'
    }
});
