
const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    valueEl: document.querySelector('#value'),
}

let counterValue = 0;

refs.decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    refs.valueEl.textContent = counterValue;
});

refs.incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    refs.valueEl.textContent = counterValue;
});