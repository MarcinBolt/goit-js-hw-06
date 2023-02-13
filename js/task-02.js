const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listIngredients = document.querySelector('#ingredients');
const tableOfLi = [];

for (const ingredient of ingredients) {
  const currentLiElement = document.createElement('li');
  currentLiElement.classList.add('item');
  currentLiElement.textContent = ingredient;
  tableOfLi.push(currentLiElement);
}

listIngredients.append(...tableOfLi);
