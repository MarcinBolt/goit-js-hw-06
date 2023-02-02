const listCategories = document.querySelector('#categories');
console.log(`Number of categories: ${listCategories.children.length}`);

const childrenOfListCategories = listCategories.children;

for (const listCategoriesChild of childrenOfListCategories) {
  console.log(`Category: ${listCategoriesChild.firstElementChild.textContent}`);
  console.log(`Elements: ${listCategoriesChild.lastElementChild.children.length}`);
}

