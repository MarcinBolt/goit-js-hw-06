// const listCategories = document.querySelector('#categories');
// console.log(`Number of categories: ${listCategories.children.length}`);

// const childrenOfListCategories = listCategories.children;

// for (const listCategoriesChild of childrenOfListCategories) {
//   console.log(`Category: ${listCategoriesChild.firstElementChild.textContent}`);
//   console.log(`Elements: ${listCategoriesChild.lastElementChild.children.length}`);
// }

const listCategories = document.querySelector('#categories');
const listCategoriesLength = listCategories.children.length;
console.log(`Number of categories: ${listCategoriesLength}`);

const liItemsOfListCategories = listCategories.querySelectorAll('li.item');

for (const item of liItemsOfListCategories) {
  const itemCategory = item.querySelector('h2');
  console.log(`Category: ${itemCategory.textContent}`);
  const itemList = item.querySelectorAll('li');
  console.log(`Elements: ${itemList.length}`);
}
