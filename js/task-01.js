// Підрахувати та вивести у консоль кількість елементів li.item за допомогою властивості length.

const categoriesEl = document.querySelector("#categories");
const items = categoriesEl.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

// За допомогою циклу for of знайти текст заголовку елемента h2 і кількість всіх елементів li, і вивести у консоль.

for (let item of items) {
    const head = item.querySelector("h2");
    const liRef = item.querySelectorAll("li");
    
    console.log(`Category: ${head.textContent}`);
    console.log(`Elements: ${liRef.length}`);
}
