function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputEl: document.querySelector('[type="number"]'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}

refs.createBtn.addEventListener('click', getAmount);
refs.destroyBtn.addEventListener('click', destroyBoxes);
function getAmount() {
  createBoxes(refs.inputEl.value);
}
function destroyBoxes() {
  refs.boxes.innerHTML = '';
}
function createBoxes(amount) {
  let defaultSize = 30;
  let newSize = 0;
  for (let i = 0; i < amount; i += 1) {
    let box = document.createElement('div');
    newSize = defaultSize + i * 10;
    box.style = `width: ${newSize}px; height: ${newSize}px;
    background-color: ${getRandomHexColor()}`;
    refs.boxes.append(box);
  }
} 
