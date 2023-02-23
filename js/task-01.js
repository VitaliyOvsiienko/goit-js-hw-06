const categoriesEl = document.querySelector("#categories");
const items = categoriesEl.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

for (let item of items) {
    const head = item.querySelector("h2");
    const liRef = item.querySelectorAll("li");
    
    console.log(`Category: ${head.textContent}`);
    console.log(`Elements: ${liRef.length}`);
}
