const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ulEl = document.querySelector("#ingredients");

const liEl = ingredients.map((ingredient) => {
  
  const liRef = document.createElement("li"); // 
  liRef.textContent = ingredient; 
  liRef.classList.add("item");
  return liRef;
});

ulEl.append(...liEl);

